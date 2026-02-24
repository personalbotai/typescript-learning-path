// Main application logic for TypeScript Learning Path
class App {
    constructor() {
        this.currentModule = 1;
        this.currentLesson = 1;
        this.monacoEditor = null;
        this.codeExamples = {};
    }

    async init() {
        // Load progress
        Progress.load();

        // Set current module from progress
        this.currentModule = Progress.currentModule;

        // Build navigation
        this.buildNavigation();

        // Load first lesson
        await this.loadModule(this.currentModule);

        // Setup event listeners
        this.setupEventListeners();

        // Update UI
        this.updateProgressDisplay();
    }

    buildNavigation() {
        const container = document.getElementById('modules-list');
        container.innerHTML = '';

        MODULES.forEach(module => {
            const completedLessons = module.lessons.filter(l => Progress.isLessonCompleted(module.id, l.id)).length;
            const totalLessons = module.lessons.length;
            const percent = Math.round((completedLessons / totalLessons) * 100);

            const div = document.createElement('div');
            div.className = 'p-3 bg-gray-700 rounded-lg cursor-pointer hover:bg-gray-600 transition';
            div.innerHTML = `
                <div class="flex items-center justify-between mb-2">
                    <span class="font-semibold text-cyan-300">Modul ${module.id}</span>
                    <span class="text-xs text-gray-400">${completedLessons}/${totalLessons}</span>
                </div>
                <div class="text-sm font-medium mb-2">${module.title}</div>
                <div class="w-full bg-gray-800 rounded-full h-1.5">
                    <div class="bg-cyan-500 h-1.5 rounded-full transition-all duration-300" style="width: ${percent}%"></div>
                </div>
            `;
            div.addEventListener('click', () => this.loadModule(module.id));
            container.appendChild(div);
        });
    }

    async loadModule(moduleId) {
        this.currentModule = moduleId;
        Progress.currentModule = moduleId;
        Progress.save();

        const module = MODULES[moduleId - 1];
        document.getElementById('current-module-title').textContent = module.title;

        // Load first lesson by default
        this.currentLesson = 1;
        await this.loadLesson(moduleId, 1);

        // Highlight active module in nav
        document.querySelectorAll('#modules-list > div').forEach((el, idx) => {
            if (idx === moduleId - 1) {
                el.classList.add('ring-2', 'ring-cyan-500');
            } else {
                el.classList.remove('ring-2', 'ring-cyan-500');
            }
        });

        this.updateProgressDisplay();
    }

    async loadLesson(moduleId, lessonId) {
        this.currentLesson = lessonId;
        const module = MODULES[moduleId - 1];
        const lesson = module.lessons[lessonId - 1];

        try {
            const response = await fetch(`lessons/${lesson.slug}.html`);
            if (!response.ok) {
                throw new Error('Lesson not found');
            }
            let content = await response.text();

            // Inject code examples if present
            if (this.codeExamples[`${moduleId}-${lessonId}`]) {
                content = content.replace('<!--CODE_EXAMPLE-->', this.codeExamples[`${moduleId}-${lessonId}`]);
            }

            document.getElementById('content').innerHTML = content;

            // Setup code run buttons
            document.querySelectorAll('.run-code-btn').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const code = e.target.closest('.code-example').querySelector('pre code').textContent;
                    this.openCodeEditor(code, lessonId);
                });
            });

            // Mark lesson as viewed (not completed yet)
            // Completion requires quiz pass or manual mark
        } catch (e) {
            document.getElementById('content').innerHTML = `
                <div class="text-center py-12">
                    <i class="fas fa-exclamation-triangle text-yellow-500 text-4xl mb-4"></i>
                    <h2 class="text-2xl font-bold mb-2">Lesson Not Found</h2>
                    <p class="text-gray-400">${e.message}</p>
                </div>
            `;
        }
    }

    openCodeEditor(initialCode, lessonId) {
        // Record code execution
        Progress.incrementCodeExecution();
        Progress.save();
        this.updateProgressDisplay();

        // Show modal
        document.getElementById('code-modal').classList.remove('hidden');

        // Initialize Monaco if not yet
        if (!this.monacoEditor) {
            require.config({ paths: { 'vs': 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.45.0/min/vs' }});
            require(['vs/editor/editor.main'], () => {
                this.monacoEditor = monaco.editor.create(document.getElementById('monaco-container'), {
                    value: initialCode,
                    language: 'typescript',
                    theme: 'vs-dark',
                    automaticLayout: true,
                    minimap: { enabled: false },
                    scrollBeyondLastLine: false,
                    fontSize: 14,
                    lineNumbers: 'on',
                    renderWhitespace: 'selection',
                    tabSize: 4
                });

                document.getElementById('run-code').onclick = () => this.runCode();
                document.getElementById('reset-code').onclick = () => {
                    this.monacoEditor.setValue(initialCode);
                    document.getElementById('output').textContent = '';
                };
            });
        } else {
            this.monacoEditor.setValue(initialCode);
        }
    }

    async runCode() {
        const code = this.monacoEditor.getValue();
        const output = document.getElementById('output');
        output.textContent = 'Compiling...';

        try {
            // Use TypeScript transpilation via API or Babel standalone
            // For simplicity, we'll strip TypeScript types and eval (in a real app use WebContainer or transpiler)
            // This is a simplified demo - in production use @babel/standalone or WebContainer
            const jsCode = this.stripTypes(code);
            // Capture console.log
            const logs = [];
            const mockConsole = { log: (...args) => logs.push(args.map(String).join(' ')) };
            const result = eval(`(function(){ const console = ${JSON.stringify(mockConsole)}; ${jsCode} )()`);
            output.textContent = logs.join('\n') + (result !== undefined ? '\n' + result : '');
        } catch (e) {
            output.textContent = `Error: ${e.message}`;
        }
    }

    stripTypes(code) {
        // Very basic type stripping for demo - not production ready
        return code
            .replace(/let|const|var/g, 'var')
            .replace(/:\s*(string|number|boolean|any|void|unknown|never|object|Function|string\[\]|number\[\]|boolean\[\]|{[^}]*})/g, '')
            .replace(/<[^>]+>/g, '') // Remove generics
            .replace(/interface\s+\w+\s*{[^}]*}/g, '')
            .replace(/type\s+\w+\s*=/g, 'var')
            .replace(/export\s+/g, '')
            .replace(/import\s+.*from\s+['"][^'"]+['"]/g, '');
    }

    updateProgressDisplay() {
        const overall = Progress.getOverallProgress();
        document.getElementById('overall-progress').textContent = overall + '%';
        document.getElementById('total-points').textContent = Progress.getTotalPoints();
    }

    setupEventListeners() {
        // Sidebar toggle
        document.getElementById('sidebar-toggle').addEventListener('click', () => {
            document.getElementById('sidebar').classList.toggle('hidden');
        });

        // Close modals
        document.getElementById('close-code-modal').addEventListener('click', () => {
            document.getElementById('code-modal').classList.add('hidden');
        });

        // Reset progress
        document.getElementById('reset-progress').addEventListener('click', () => {
            if (confirm('Reset semua progress? Ini tidak bisa dibatalkan.')) {
                Progress.reset();
                this.buildNavigation();
                this.updateProgressDisplay();
                alert('Progress direset.');
            }
        });

        // Theme toggle placeholder
        document.getElementById('theme-toggle').addEventListener('click', () => {
            alert('Tema gelap/terang akan segera hadir!');
        });

        // Achievement toast
        window.addEventListener('achievements-unlocked', (e) => {
            e.detail.forEach(msg => this.showAchievementToast(msg));
        });
    }

    showAchievementToast(message) {
        const toast = document.getElementById('achievement-toast');
        document.getElementById('achievement-text').textContent = message;
        toast.classList.remove('translate-y-20', 'opacity-0');
        setTimeout(() => {
            toast.classList.add('translate-y-20', 'opacity-0');
        }, 4000);
    }
}

// Initialize app when DOM ready
document.addEventListener('DOMContentLoaded', () => {
    new App().init();
});
