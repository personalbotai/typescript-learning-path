// Quiz system for TypeScript Learning Path
const Quiz = {
    // Load quiz data for a module
    getQuizData(moduleId) {
        try {
            const response = await fetch(`quizzes/module-${moduleId}.json`);
            if (!response.ok) return null;
            return await response.json();
        } catch (e) {
            console.error('Failed to load quiz:', e);
            return null;
        }
    },

    // Render quiz modal
    render(moduleId) {
        const quizData = this.getQuizData(moduleId);
        if (!quizData) {
            document.getElementById('quiz-content').innerHTML = `
                <div class="text-center py-8">
                    <i class="fas fa-exclamation-triangle text-yellow-500 text-4xl mb-4"></i>
                    <p class="text-gray-300">Quiz belum tersedia untuk modul ini.</p>
                </div>
            `;
            return;
        }

        const container = document.getElementById('quiz-content');
        container.innerHTML = `
            <div class="mb-6">
                <div class="flex justify-between items-center mb-4">
                    <h4 class="text-xl font-bold text-cyan-400">Quiz - Modul ${moduleId}</h4>
                    <div class="text-sm text-gray-400">
                        Skor: <span id="quiz-current-score">0</span>/${quizData.questions.length * 10}
                    </div>
                </div>
                <div class="w-full bg-gray-700 rounded-full h-2 mb-6">
                    <div id="quiz-progress" class="bg-cyan-500 h-2 rounded-full transition-all duration-300" style="width: 0%"></div>
                </div>
            </div>
            <div id="quiz-questions-container"></div>
        `;

        this.state = {
            moduleId,
            questions: quizData.questions,
            currentQuestion: 0,
            score: 0,
            answers: []
        };

        this.renderQuestion();
    },

    renderQuestion() {
        const q = this.state.questions[this.state.currentQuestion];
        const container = document.getElementById('quiz-questions-container');

        const optionsHtml = q.options.map((opt, idx) => `
            <label class="block p-4 mb-3 bg-gray-700 rounded-lg cursor-pointer hover:bg-gray-600 transition border-2 ${this.state.answers[this.state.currentQuestion] === idx ? 'border-cyan-500' : 'border-transparent'}">
                <input type="radio" name="quiz-answer" value="${idx}" class="mr-3" ${this.state.answers[this.state.currentQuestion] === idx ? 'checked' : ''}>
                <span class="text-gray-200">${opt}</span>
            </label>
        `).join('');

        container.innerHTML = `
            <div class="mb-6">
                <div class="text-gray-400 mb-2">Pertanyaan ${this.state.currentQuestion + 1} dari ${this.state.questions.length}</div>
                <h5 class="text-lg font-semibold mb-4">${q.question}</h5>
                <div class="space-y-2">
                    ${optionsHtml}
                </div>
            </div>
            <div class="flex justify-between">
                <button id="quiz-prev" class="px-4 py-2 bg-gray-600 hover:bg-gray-700 rounded disabled:opacity-50 disabled:cursor-not-allowed" ${this.state.currentQuestion === 0 ? 'disabled' : ''}>
                    <i class="fas fa-arrow-left mr-2"></i>Sebelumnya
                </button>
                <button id="quiz-next" class="px-4 py-2 bg-cyan-600 hover:bg-cyan-700 rounded">
                    ${this.state.currentQuestion < this.state.questions.length - 1 ? 'Selanjutnya <i class="fas fa-arrow-right ml-2"></i>' : 'Selesai <i class="fas fa-check ml-2"></i>'}
                </button>
            </div>
        `;

        // Bind events
        document.querySelectorAll('input[name="quiz-answer"]').forEach(radio => {
            radio.addEventListener('change', (e) => {
                this.state.answers[this.state.currentQuestion] = parseInt(e.target.value);
                this.updateProgress();
            });
        });

        document.getElementById('quiz-prev').addEventListener('click', () => this.prevQuestion());
        document.getElementById('quiz-next').addEventListener('click', () => this.nextQuestion());
    },

    updateProgress() {
        const answered = this.state.answers.filter(a => a !== undefined).length;
        const percent = (answered / this.state.questions.length) * 100;
        document.getElementById('quiz-progress').style.width = percent + '%';
        document.getElementById('quiz-current-score').textContent = this.state.score;
    },

    prevQuestion() {
        if (this.state.currentQuestion > 0) {
            this.state.currentQuestion--;
            this.renderQuestion();
        }
    },

    nextQuestion() {
        // If not answered, show warning
        if (this.state.answers[this.state.currentQuestion] === undefined) {
            alert('Silakan pilih jawaban sebelum melanjutkan.');
            return;
        }

        // Check answer if moving forward (not reviewing)
        const q = this.state.questions[this.state.currentQuestion];
        const selected = this.state.answers[this.state.currentQuestion];
        if (selected === q.correct) {
            this.state.score += 10;
        }

        if (this.state.currentQuestion < this.state.questions.length - 1) {
            this.state.currentQuestion++;
            this.renderQuestion();
        } else {
            this.finishQuiz();
        }
    },

    finishQuiz() {
        const passingScore = MODULES[this.state.moduleId - 1].quiz.passingScore;
        const passed = this.state.score >= passingScore;

        Progress.recordQuizScore(this.state.moduleId, this.state.score);

        const container = document.getElementById('quiz-content');
        container.innerHTML = `
            <div class="text-center py-8">
                <i class="fas ${passed ? 'fa-trophy text-yellow-500' : 'fa-times-circle text-red-500'} text-5xl mb-4"></i>
                <h4 class="text-2xl font-bold mb-2 ${passed ? 'text-green-400' : 'text-red-400'}">
                    ${passed ? 'Lulus!' : 'Tidak Lulus'}
                </h4>
                <p class="text-gray-300 mb-4">Skor Anda: <strong class="text-cyan-400">${this.state.score}</strong> dari ${this.state.questions.length * 10} (minimum ${passingScore})</p>
                <button id="close-quiz-result" class="px-6 py-2 bg-cyan-600 hover:bg-cyan-700 rounded">
                    Tutup
                </button>
            </div>
        `;

        document.getElementById('close-quiz-result').addEventListener('click', () => {
            document.getElementById('quiz-modal').classList.add('hidden');
            if (passed) {
                // Mark all lessons in module as completed if quiz passed
                MODULES[this.state.moduleId - 1].lessons.forEach(l => {
                    Progress.completeLesson(this.state.moduleId, l.id);
                });
                Progress.save();
            }
        });
    }
};

// Initialize quiz system
document.addEventListener('DOMContentLoaded', () => {
    // Quiz modal open/close handlers
    document.getElementById('close-quiz-modal').addEventListener('click', () => {
        document.getElementById('quiz-modal').classList.add('hidden');
    });
});
