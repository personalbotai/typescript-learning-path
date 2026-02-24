// TypeScript Learning Path - Main Application
// Archon - Sovereign Systems Architect

class TypeScriptLearningApp {
    constructor() {
        this.currentModule = 1;
        this.totalModules = 12;
        this.progress = this.loadProgress();
        this.editor = null;
        this.modules = this.defineModules();
        this.quizData = this.defineQuizData();
        this.currentQuizQuestion = 0;
        this.quizScore = 0;
        
        this.init();
    }

    // ========== MODULE DATA ==========
    defineModules() {
        return {
            1: {
                title: "Pengenalan TypeScript",
                intro: `
                    <h3>Apa itu TypeScript?</h3>
                    <p>TypeScript adalah <strong>superset</strong> dari JavaScript yang menambahkan <em>static type checking</em>. Kode TypeScript dikompilasi (transpile) menjadi JavaScript yang bisa dijalankan di browser atau Node.js.</p>
                    <h3>Keuntungan TypeScript:</h3>
                    <ul>
                        <li><strong>Type Safety</strong>: Mendeteksi kesalahan tipe saat development</li>
                        <li><strong>Better IDE Support</strong>: Autocomplete, refactoring, navigation</li>
                        <li><strong>Self-documenting</strong>: Code lebih mudah dibaca dengan type annotations</li>
                        <li><strong>Scalability</strong>: Lebih mudah maintain kode besar</li>
                    </ul>
                    <h3>Contoh Sederhana:</h3>
                    <p>TypeScript menambahkan type annotations ke parameter dan return values:</p>
                `,
                codeExample: `// JavaScript (dinamis)
function greet(name) {
    return "Hello, " + name;
}

// TypeScript (statis)
function greetTS(name: string): string {
    return "Hello, " + name;
}

// Type checking发生时 catches error
// greetTS(42); // Error: Argument of type 'number' is not assignable to parameter of type 'string'
`,
                quiz: [1, 2, 3]
            },
            2: {
                title: "Tipe Data Dasar",
                intro: `
                    <h3>Type Primitif</h3>
                    <p>TypeScript menyediakan type primitif yang mirip JavaScript:</p>
                    <ul>
                        <li><code>number</code> - angka (integer, float)</li>
                        <li><code>string</code> - teks</li>
                        <li><code>boolean</code> - true/false</li>
                        <li><code>null</code> dan <code>undefined</code></li>
                        <li><code>symbol</code> - identifier unik</li>
                        <li><code>bigint</code> - angka besar</li>
                    </ul>
                    <h3>Array dan Tuple</h3>
                    <p>Array bisa dinyatakan dengan dua cara:</p>
                `,
                codeExample: `// Array of numbers
let numbers: number[] = [1, 2, 3];
let alsoNumbers: Array<number> = [1, 2, 3];

// Tuple - fixed-length array dengan tipe berbeda
let person: [string, number] = ["Alice", 25];
let [name, age] = person;

// Type assertion (casting)
let someValue: any = "hello";
let strLength: number = (someValue as string).length;
// or: <string>someValue
`,
                quiz: [4, 5, 6]
            },
            3: {
                title: "Functions & Type Annotations",
                intro: `
                    <h3>Function Types</h3>
                    <p>TypeScript memungkinkan Anda menentukan tipe untuk parameters, return value, dan even the function type itself:</p>
                `,
                codeExample: `// Function dengan type annotations
function add(a: number, b: number): number {
    return a + b;
}

// Arrow function
const multiply = (x: number, y: number): number => x * y;

// Optional dan default parameters
function greet(name: string, greeting?: string): string {
    return (greeting || "Hello") + ", " + name;
}

// Function type alias
type Calculator = (x: number, y: number) => number;
const subtract: Calculator = (a, b) => a - b;

// Overloads
function format(value: string): string;
function format(value: number): string;
function format(value: any): string {
    return String(value);
}
`,
                quiz: [7, 8, 9]
            },
            4: {
                title: "Interfaces & Objects",
                intro: `
                    <h3>Interfaces</h3>
                    <p>Interface mendefinisikan "contract" untuk objek. TypeScript akan memeriksa bahwa objek memenuhi semua property yang didefinisikan:</p>
                `,
                codeExample: `// Interface definition
interface User {
    id: number;
    name: string;
    email: string;
    age?: number; // optional property
}

// Object yang conform ke interface
const user: User = {
    id: 1,
    name: "Alice",
    email: "alice@example.com"
    // age optional, bisa diabaikan
};

// Readonly properties
interface Config {
    readonly apiKey: string;
    timeout: number;
}

// Interface bisa extends
interface AdminUser extends User {
    role: "admin" | "editor";
    permissions: string[];
}

// Structural typing (duck typing)
function printUser(u: User) {
    console.log(u.name, u.email);
}
printUser({ id: 2, name: "Bob", email: "bob@test.com" }); // OK
`,
                quiz: [10, 11, 12]
            },
            5: {
                title: "Classes & Inheritance",
                intro: `
                    <h3>Class Types</h3>
                    <p>TypeScript menambahkan type annotations ke class members, constructors, dan inheritance:</p>
                `,
                codeExample: `// Class dengan access modifiers
class Animal {
    private name: string;
    protected age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    public speak(): void {
        console.log(\`\${this.name} makes a sound\`);
    }

    // Getter & setter
    get displayName(): string {
        return this.name;
    }
}

// Inheritance
class Dog extends Animal {
    breed: string;

    constructor(name: string, age: number, breed: string) {
        super(name, age);
        this.breed = breed;
    }

    // Override method
    speak(): void {
        console.log(\`\${this.name} barks\`);
    }
}

// Abstract class
abstract class Shape {
    abstract area(): number;
    print(): void {
        console.log("Area:", this.area());
    }
}

class Circle extends Shape {
    constructor(public radius: number) {
        super();
    }
    area(): number {
        return Math.PI * this.radius ** 2;
    }
}
`,
                quiz: [13, 14, 15]
            },
            6: {
                title: "Generics",
                intro: `
                    <h3>Generic Types</h3>
                    <p>Generics memungkinkan membuat komponen yang bisa bekerja dengan berbagai tipe tanpa mengorbankan type safety:</p>
                `,
                codeExample: `// Generic function
function identity<T>(arg: T): T {
    return arg;
}

let output = identity<string>("hello"); // T = string
let numOutput = identity(42); // T = number (inferred)

// Generic interface
interface Pair<T, U> {
    first: T;
    second: U;
}
let pair: Pair<number, string> = { first: 1, second: "one" };

// Generic class
class Stack<T> {
    private items: T[] = [];
    push(item: T): void {
        this.items.push(item);
    }
    pop(): T | undefined {
        return this.items.pop();
    }
}

// Constraints (batasan tipe)
interface Lengthwise {
    length: number;
}
function logLength<T extends Lengthwise>(arg: T): T {
    console.log(arg.length);
    return arg;
}
logLength("hello"); // OK
logLength([1,2,3]); // OK
// logLength(123); // Error - number tidak punya length
`,
                quiz: [16, 17, 18]
            },
            7: {
                title: "Utility Types",
                intro: `
                    <h3>Built-in Utility Types</h3>
                    <p>TypeScript menyediakan utility types untuk transform tipe yang umum:</p>
                `,
                codeExample: `// Partial<T> - semua properties menjadi optional
interface Todo {
    title: string;
    description: string;
}
function updateTodo(todo: Todo, fields: Partial<Todo>) {
    return { ...todo, ...fields };
}

// Readonly<T> - semua properties readonly
const readonlyTodo: Readonly<Todo> = {
    title: "Learn TS",
    description: "Study utility types"
};
// readonlyTodo.title = "New"; // Error

// Pick<T, K> - pilih subset properties
type TodoPreview = Pick<Todo, "title">;
let preview: TodoPreview = { title: "Quick look" };

// Omit<T, K> - semua kecuali K
type TodoWithoutTitle = Omit<Todo, "title">;

// Record<K, T> - map keys ke values
type UserRoles = "admin" | "user" | "guest";
const defaultRoles: Record<UserRoles, boolean> = {
    admin: false,
    user: true,
    guest: true
};

// Exclude<T, U> - exclude tipe dari union
type All = "a" | "b" | "c";
type Excluded = Exclude<All, "a">; // "b" | "c"

// Extract<T, U> - extract tipe dari union
type StringValues = Extract<All | number, string>; // "a" | "b" | "c"
`,
                quiz: [19, 20, 21]
            },
            8: {
                title: "Modules & Namespaces",
                intro: `
                    <h3>ES Modules vs Namespaces</h3>
                    <p>TypeScript mendukung module system modern (ES Modules) dan legacy namespaces:</p>
                `,
                codeExample: `// ----- math.ts -----
export function add(x: number, y: number): number {
    return x + y;
}
export function subtract(x: number, y: number): number {
    return x - y;
}

// ----- main.ts -----
import { add, subtract } from './math';
console.log(add(2, 3)); // 5

// Default export
export default function multiply(x: number, y: number): number {
    return x * y;
}

// Namespace (legacy, untuk grouping)
namespace Validation {
    export interface StringValidator {
        isAcceptable(s: string): boolean;
    }
    export const lettersRegexp = /^[A-Za-z]+$/;
    export class LettersOnlyValidator implements StringValidator {
        isAcceptable(s: string): boolean {
            return lettersRegexp.test(s);
        }
    }
}
const validator = new Validation.LettersOnlyValidator();
`,
                quiz: [22, 23, 24]
            },
            9: {
                title: "Advanced Types",
                intro: `
                    <h3>Conditional, Mapped, dan Template Literal Types</h3>
                    <p>TypeScript memiliki type-level programming yang powerful:</p>
                `,
                codeExample: `// Conditional Types
type IsString<T> = T extends string ? true : false;
type A = IsString<"hello">; // true
type B = IsString<number>; // false

// Distributive conditional types
type TypeName<T> = T extends any[] ? "array" : "non-array";
type T1 = TypeName<string[]>; // "array"
type T2 = TypeName<number>; // "non-array"

// Mapped Types
type Optional<T> = {
    [P in keyof T]?: T[P];
};
type User = { id: number; name: string };
type PartialUser = Optional<User>;

// Template Literal Types
type EventName<Entity extends string> = \`\${Entity}Created\`;
type UserEvent = EventName<"User">; // "UserCreated"

// Union to Intersection (dengan conditional + infer)
type UnionToIntersection<U> = 
    (U extends any ? (k: U) => void : never) extends ((k: infer I) => void) ? I : never;
type U = { a: string } | { b: number };
type I = UnionToIntersection<U>; // { a: string } & { b: number }

// Type Inference dengan infer
type ReturnType<T> = T extends (...args: any[]) => infer R ? R : any;
`,
                quiz: [25, 26, 27]
            },
            10: {
                title: "TypeScript dengan React",
                intro: `
                    <h3>Integrasi TypeScript & React</h3>
                    <p>TypeScript bekerja sangat baik dengan React, memberikan type safety untuk props, state, dan events:</p>
                `,
                codeExample: `// Component Props dengan interface
interface ButtonProps {
    label: string;
    onClick: () => void;
    disabled?: boolean;
    variant?: "primary" | "secondary";
}

const Button: React.FC<ButtonProps> = ({
    label,
    onClick,
    disabled = false,
    variant = "primary"
}) => {
    return (
        <button 
            className={\`btn btn-\${variant}\`}
            onClick={onClick}
            disabled={disabled}
        >
            {label}
        </button>
    );
};

// Generic React Component
interface ListProps<T> {
    items: T[];
    renderItem: (item: T, index: number) => React.ReactNode;
}

function List<T>({ items, renderItem }: ListProps<T>) {
    return (
        <ul>
            {items.map((item, i) => (
                <li key={i}>{renderItem(item, i)}</li>
            ))}
        </ul>
    );
}

// Hooks dengan types
const [count, setCount] = useState<number>(0);
const [user, setUser] = useState<User | null>(null);

// Event handlers
const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
};
`,
                quiz: [28, 29, 30]
            },
            11: {
                title: "Testing dengan Jest",
                intro: `
                    <h3>Unit & Integration Testing</h3>
                    <p>Testing adalah kunci untuk software yang reliable. TypeScript + Jest memberikan powerful testing experience dengan type safety:</p>
                `,
                codeExample: `// math.ts
export function add(a: number, b: number): number {
    return a + b;
}
export function divide(a: number, b: number): number {
    if (b === 0) throw new Error("Division by zero");
    return a / b;
}

// math.test.ts
import { add, divide } from './math';

describe('Math functions', () => {
    test('add should sum two numbers', () => {
        expect(add(2, 3)).toBe(5);
        expect(add(-1, 1)).toBe(0);
    });

    test('divide should throw on zero', () => {
        expect(() => divide(10, 0)).toThrow("Division by zero");
    });
});

// Testing React components
import { render, screen } from '@testing-library/react';
import Button from './Button';

test('Button renders with correct label', () => {
    render(<Button label="Click me" onClick={() => {}} />);
    expect(screen.getByText('Click me')).toBeInTheDocument();
});

// Mocking functions
jest.mock('./api');
import { fetchUser } from './userService';

test('fetchUser returns user data', async () => {
    const user = await fetchUser(1);
    expect(user.name).toBe('Alice');
});
`,
                quiz: [31, 32, 33]
            },
            12: {
                title: "Build Tools & Bundlers",
                intro: `
                    <h3>Tooling Modern untuk TypeScript</h3>
                    <p>Production-ready TypeScript project membutuhkan build tools untuk bundling, minification, dan optimization:</p>
                `,
                codeExample: `// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    build: {
        outDir: 'dist',
        sourcemap: true,
        rollupOptions: {
            output: {
                manualChunks: {
                    vendor: ['react', 'react-dom'],
                    utils: ['lodash']
                }
            }
        }
    }
});

// webpack.config.ts
import path from 'path';
import { DefinePlugin } from 'webpack';

export default {
    entry: './src/index.tsx',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    module: {
        rules: [
            {
                test: /\\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        })
    ],
    mode: 'production'
};

// tsconfig for build
{
    "compilerOptions": {
        "target": "ES2020",
        "module": "ESNext",
        "moduleResolution": "node",
        "outDir": "./dist",
        "rootDir": "./src",
        "strict": true,
        "esModuleInterop": true,
        "skipLibCheck": true,
        "forceConsistentCasingInFileNames": true,
        "declaration": true,
        "declarationMap": true,
        "sourceMap": true
    },
    "include": ["src/**/*"],
    "exclude": ["node_modules", "dist"]
}

// package.json scripts
{
    "scripts": {
        "dev": "vite",
        "build": "tsc && vite build",
        "build:webpack": "webpack --mode production",
        "preview": "vite preview",
        "test": "jest",
        "test:watch": "jest --watch",
        "lint": "eslint src --ext .ts,.tsx",
        "type-check": "tsc --noEmit"
    }
}
`,
                quiz: [34, 35, 36]
            }
        };
    }

    // ========== QUIZ DATA ==========
    defineQuizData() {
        return {
            1: [
                { q: "TypeScript adalah superset dari:", options: ["Python", "JavaScript", "Java", "C++"], a: 1 },
                { q: "Manakah yang BUKAN keuntungan TypeScript?", options: ["Type Safety", "Better IDE Support", "Faster Execution di Browser", "Scalability"], a: 2 },
                { q: "TypeScript dikompilasi menjadi:", options: ["C++", "Python", "JavaScript", "Assembly"], a: 2 }
            ],
            2: [
                { q: "Tipe mana yang TIDAK termasuk primitif TypeScript?", options: ["number", "string", "array", "boolean"], a: 2 },
                { q: "Cara benar mendeklarasi array of numbers:", options: ["let nums: number[]", "let nums: array<number>", "let nums: Number[]", "let nums: <number>array"], a: 0 },
                { q: "Tuple cocok untuk:", options: ["Array dengan panjang tetap tapi tipe berbeda", "Hanya array of numbers", "Object dengan key-value", "Function parameters"], a: 0 }
            ],
            3: [
                { q: "Parameter optional ditandai dengan:", options: ["?", "*", "!", "~"], a: 0 },
                { q: "Return type annotation letakkan:", options: ["Sebelum function name", "Setelah parameter list dengan :", "Setelah function body", "Tidak perlu"], a: 1 },
                { q: "Function overloading memungkinkan:", options: ["Multiple function signatures dengan implementasi sama", "Multiple implementations", "Overriding di subclass", "Generic functions"], a: 0 }
            ],
            4: [
                { q: "Interface digunakan untuk:", options: ["Definisi tipe function", "Contract pada objek", "Class inheritance", "Module"], a: 1 },
                { q: "Properti readonly didefinisikan dengan:", options: ["readonly", "const", "final", "immutable"], a: 0 },
                { q: "Interface bisa:", options: ["Extends interface lain", "Hanya untuk functions", "Tidak bisa optional", "Tidak bisa extends"], a: 0 }
            ],
            5: [
                { q: "Modifier akses private berarti:", options: ["Hanya bisa diakses dalam class", "Bisa diakses subclass", "Bisa diakses manapun", "Hanya static"], a: 0 },
                { q: "Kata kunci untuk inheritan class:", options: ["implements", "extends", "inherits", "superclass"], a: 1 },
                { q: "Abstract class:", options: ["Tidak bisa diinstansiasi", "Harus semua method abstract", "Tidak bisa memiliki properties", "Hanya untuk interfaces"], a: 0 }
            ],
            6: [
                { q: "Generic memungkinkan:", options: ["Multiple inheritance", "Kode reusable dengan berbagai tipe", "Runtime type checking", "Operator overloading"], a: 1 },
                { q: "Constraints pada generic denga:", options: ["<T extends>", "<T:>", "<T constraint>", "<T where>"], a: 0 },
                { q: "Type parameter default:", options: ["T = any", "T = unknown", "T = object", "Tidak ada default"], a: 0 }
            ],
            7: [
                { q: "Partial<T> membuat semua properties:", options: ["required", "optional", "readonly", "private"], a: 1 },
                { q: "Pick<T, K> digunakan untuk:", options: ["Select subset properties", "Remove properties", "Make readonly", "Merge types"], a: 0 },
                { q: "Record<K, T> membuat:", options: ["Object dengan keys K dan values T", "Array of T", "Tuple", "Function type"], a: 0 }
            ],
            8: [
                { q: "Untuk import function dari module lain, gunakan:", options: ["import", "require", "include", "load"], a: 0 },
                { q: "Syntax namespace:", options: ["namespace X { }", "ns X { }", "package X { }", "module X { }"], a: 0 },
                { q: "Default export:", options: ["export default", "export = default", "default export", "export as default"], a: 0 }
            ],
            9: [
                { q: "Conditional types menggunakan:", options: ["if di type level", "T extends U ? X : Y", "switch type", "ternary di type"], a: 1 },
                { q: "Mapped types memanfaatkan:", options: ["keyof dan in", "for...in", "Object.keys", "map()"], a: 0 },
                { q: "Template literal types:", options: ["String concatenation di type level", "HTML templates", "React JSX", "Runtime strings"], a: 0 }
            ],
            10: [
                { q: "React component props didefinisikan dengan:", options: ["Interface", "Type alias", "Both", "Tidak perlu"], a: 2 },
                { q: "Generic React component:", options: ["function List<T>()", "function <T>List()", "function List<T>(props: ListProps<T>)", "generic List<T>"], a: 2 },
                { q: "Event handler input di React:", options: ["onChange", "onInput", "onUpdate", "onEvent"], a: 0 }
            ],
            11: [
                { q: "Jest digunakan untuk:", options: ["UI Components", "Testing (unit/integration)", "Build tool", "Linting"], a: 1 },
                { q: "Testing Library commonly used untuk:", options: ["Unit test only", "DOM testing dengan user behavior simulation", "Performance testing", "API testing"], a: 1 },
                { q: "Mock function di Jest dibuat dengan:", options: ["jest.fn()", "jest.mock()", "jest.spyOn()", "All of the above"], a: 3 }
            ],
            12: [
                { q: "Vite adalah:", options: ["Test runner", "Build tool & dev server", "Type checker", "Linter"], a: 1 },
                { q: "tsconfig.json outDir digunakan untuk:", options: ["Input directory", "Output directory untuk compiled JS", "Source maps location", "Declaration files"], a: 1 },
                { q: "Rollup / Webpack digunakan untuk:", options: ["Type checking", "Bundling modules into single file", "Testing", "Code formatting"], a: 1 }
            ]
        };
    }

    // ========== INITIALIZATION ==========
    async init() {
        this.setupEventListeners();
        this.loadModule(1);
        this.updateProgress();
        await this.initMonaco();
    }

    setupEventListeners() {
        // Navigation
        document.querySelectorAll('.nav-item').forEach(item => {
            item.addEventListener('click', (e) => {
                const moduleNum = parseInt(e.target.dataset.module);
                this.loadModule(moduleNum);
            });
        });

        // Buttons
        document.getElementById('run-code-btn').addEventListener('click', () => this.runCode());
        document.getElementById('clear-btn').addEventListener('click', () => this.clearEditor());
        document.getElementById('format-btn').addEventListener('click', () => this.formatCode());
        document.getElementById('reset-btn').addEventListener('click', () => this.resetProgress());
        document.getElementById('clear-console-btn').addEventListener('click', () => this.clearConsole());

        // Copy button
        document.getElementById('copy-btn').addEventListener('click', () => this.copyCodeExample());

        // Quiz actions (delegated)
        document.getElementById('quiz-content').addEventListener('click', (e) => {
            if (e.target.classList.contains('quiz-option')) {
                this.selectQuizOption(e.target);
            }
            if (e.target.id === 'submit-quiz') {
                this.submitQuiz();
            }
            if (e.target.id === 'next-quiz') {
                this.nextQuizQuestion();
            }
        });
    }

    // ========== MONACO EDITOR ==========
    async initMonaco() {
        require.config({ paths: { 'vs': 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.45.0/min/vs' }});
        require(['vs/editor/editor.main'], () => {
            this.editor = monaco.editor.create(document.getElementById('editor-container'), {
                value: `// TypeScript code here\n// Klik "Run Code" untuk compile & execute\n\nfunction hello(name: string): string {\n    return \`Hello, \${name}!\`;\n}\n\nconsole.log(hello("World"));`,
                language: 'typescript',
                theme: 'vs-dark',
                automaticLayout: true,
                minimap: { enabled: false },
                fontSize: 14,
                lineNumbers: 'on',
                scrollBeyondLastLine: false,
                wordWrap: 'on'
            });
        });
    }

    // ========== MODULE LOADING ==========
    loadModule(num) {
        this.currentModule = num;
        const module = this.modules[num];
        
        // Update title
        document.getElementById('module-title').textContent = module.title;
        
        // Update intro
        document.getElementById('lesson-intro').innerHTML = module.intro;
        
        // Update code example
        document.getElementById('code-example').textContent = module.codeExample;
        
        // Reset quiz
        this.currentQuizQuestion = 0;
        this.quizScore = 0;
        this.renderQuiz();
        
        // Mark nav active
        document.querySelectorAll('.nav-item').forEach(item => {
            item.classList.remove('active');
            if (parseInt(item.dataset.module) === num) {
                item.classList.add('active');
            }
        });
        
        // Mark completed if in progress
        if (this.progress[num]) {
            const activeNav = document.querySelector(`.nav-item[data-module="${num}"]`);
            if (activeNav && !activeNav.classList.contains('completed')) {
                activeNav.classList.add('completed');
            }
        }
    }

    // ========== PROGRESS MANAGEMENT ==========
    loadProgress() {
        const saved = localStorage.getItem('ts-learning-progress');
        return saved ? JSON.parse(saved) : {};
    }

    saveProgress() {
        localStorage.setItem('ts-learning-progress', JSON.stringify(this.progress));
        this.updateProgress();
    }

    updateProgress() {
        const completed = Object.keys(this.progress).length;
        const percent = Math.round((completed / this.totalModules) * 100);
        document.getElementById('progress-fill').style.width = percent + '%';
        document.getElementById('progress-text').textContent = percent + '%';
        
        // Update nav completion badges
        for (let i = 1; i <= this.totalModules; i++) {
            const navItem = document.querySelector(`.nav-item[data-module="${i}"]`);
            if (this.progress[i] && navItem) {
                navItem.classList.add('completed');
            }
        }
    }

    markModuleComplete() {
        this.progress[this.currentModule] = true;
        this.saveProgress();
        
        // Mark nav item
        const activeNav = document.querySelector(`.nav-item[data-module="${this.currentModule}"]`);
        if (activeNav) {
            activeNav.classList.add('completed');
        }
        
        this.showMessage(`Module ${this.currentModule} completed!`, 'success');
    }

    resetProgress() {
        if (confirm('Reset semua progress? Ini tidak bisa dibatalkan.')) {
            this.progress = {};
            localStorage.removeItem('ts-learning-progress');
            this.updateProgress();
            document.querySelectorAll('.nav-item').forEach(item => {
                item.classList.remove('completed');
            });
            this.showMessage('Progress direset', 'info');
        }
    }

    // ========== CODE EXECUTION (WebContainer API) ==========
    async runCode() {
        const code = this.editor.getValue();
        if (!code.trim()) {
            this.showMessage('Tidak ada code untuk dijalankan', 'error');
            return;
        }

        this.showLoading(true);
        this.clearConsole();

        try {
            // Check if WebContainer API available
            if (typeof WebContainer === 'undefined') {
                throw new Error('WebContainer API tidak tersedia. Gunakan browser yang mendukung atau konten di-deploy dengan WebContainer.');
            }

            const container = await WebContainer.boot();
            await container.mount([
                { file: 'index.ts', content: code },
                { file: 'tsconfig.json', content: this.getTsConfig() }
            ]);

            // Install TypeScript (if not present)
            await container.spawn('npm', ['init', '-y']);
            await container.spawn('npm', ['install', 'typescript']);

            // Compile TypeScript
            const compile = await container.spawn('npx', ['tsc', 'index.ts', '--outFile', 'index.js']);
            compile.exit.then((exitCode) => {
                if (exitCode !== 0) {
                    this.showMessage('Compilation error. Check console for details.', 'error');
                    this.showLoading(false);
                    return;
                }

                // Run JavaScript
                return container.spawn('node', ['index.js']);
            }).then(proc => {
                if (!proc) return;
                proc.output.pipeTo(new WritableStream({
                    write: (data) => {
                        this.appendConsole(data);
                    }
                }));
                proc.exit.then(() => {
                    this.showLoading(false);
                    this.markModuleComplete();
                });
            });

        } catch (error) {
            this.showLoading(false);
            this.appendConsole(`Error: ${error.message}`, 'error');
        }
    }

    getTsConfig() {
        return JSON.stringify({
            compilerOptions: {
                target: "ES2020",
                module: "commonjs",
                strict: true,
                esModuleInterop: true,
                skipLibCheck: true,
                forceConsistentCasingInFileNames: true,
                outDir: "./dist"
            },
            include: ["index.ts"]
        }, null, 2);
    }

    // ========== EDITOR ACTIONS ==========
    clearEditor() {
        this.editor.setValue('');
    }

    formatCode() {
        this.editor.getAction('editor.action.formatDocument').run();
    }

    copyCodeExample() {
        const code = document.getElementById('code-example').textContent;
        navigator.clipboard.writeText(code).then(() => {
            this.showMessage('Code copied to clipboard!', 'success');
        });
    }

    // ========== CONSOLE ==========
    clearConsole() {
        const consoleEl = document.getElementById('console-output');
        consoleEl.innerHTML = '<div class="console-placeholder">Output akan muncul di sini setelah menjalankan code...</div>';
    }

    appendConsole(text, type = '') {
        const consoleEl = document.getElementById('console-output');
        // Remove placeholder if exists
        const placeholder = consoleEl.querySelector('.console-placeholder');
        if (placeholder) placeholder.remove();

        const line = document.createElement('div');
        line.textContent = text;
        if (type) line.classList.add(`console-${type}`);
        consoleEl.appendChild(line);
        consoleEl.scrollTop = consoleEl.scrollHeight;
    }

    // ========== QUIZ SYSTEM ==========
    renderQuiz() {
        const quizContent = document.getElementById('quiz-content');
        const moduleQuizIds = this.modules[this.currentModule].quiz;
        
        if (!moduleQuizIds || this.currentQuizQuestion >= moduleQuizIds.length) {
            if (this.currentQuizQuestion > 0) {
                quizContent.innerHTML = `
                    <div class="quiz-result correct">
                        🎉 Quiz selesai! Score: ${this.quizScore}/${moduleQuizIds.length}
                    </div>
                    <button class="btn btn-primary" id="next-module-btn" style="margin-top:1rem;">Lanjjut ke Module Berikutnya →</button>
                `;
                document.getElementById('next-module-btn').addEventListener('click', () => {
                    if (this.currentModule < this.totalModules) {
                        this.loadModule(this.currentModule + 1);
                    } else {
                        this.showMessage('Semua module selesai!', 'success');
                    }
                });
            } else {
                quizContent.innerHTML = '<p class="quiz-placeholder">Quiz untuk module ini belum tersedia.</p>';
            }
            return;
        }

        const questionId = moduleQuizIds[this.currentQuizQuestion];
        const question = this.quizData[this.currentModule][questionId - 1];
        const questionNum = this.currentQuizQuestion + 1;
        const totalQuestions = moduleQuizIds.length;

        quizContent.innerHTML = `
            <div class="quiz-question">
                <p>${questionNum}. ${question.q}</p>
                <div class="quiz-options">
                    ${question.options.map((opt, idx) => `
                        <label class="quiz-option" data-index="${idx}">
                            <input type="radio" name="quiz-${this.currentModule}" value="${idx}">
                            <span>${opt}</span>
                        </label>
                    `).join('')}
                </div>
            </div>
            <div class="quiz-actions">
                <button class="btn btn-primary" id="submit-quiz" ${this.currentQuizQuestion === 0 ? '' : ''}>Submit Jawaban</button>
                ${this.currentQuizQuestion > 0 ? `<button class="btn btn-secondary" id="prev-quiz">Previous</button>` : ''}
            </div>
            <div class="quiz-result" id="quiz-result" style="display:none;"></div>
        `;

        document.getElementById('quiz-score').textContent = `Score: ${this.quizScore}/${questionNum-1}`;
    }

    selectQuizOption(optionEl) {
        // Uncheck others
        const options = optionEl.parentElement.querySelectorAll('.quiz-option');
        options.forEach(opt => opt.classList.remove('selected'));
        optionEl.classList.add('selected');
        optionEl.querySelector('input').checked = true;
    }

    submitQuiz() {
        const selected = document.querySelector('input[name="quiz-' + this.currentModule + '"]:checked');
        if (!selected) {
            this.showMessage('Pilih jawaban terlebih dahulu', 'error');
            return;
        }

        const questionId = this.modules[this.currentModule].quiz[this.currentQuizQuestion];
        const question = this.quizData[this.currentModule][questionId - 1];
        const userAnswer = parseInt(selected.value);
        const isCorrect = userAnswer === question.a;

        const resultEl = document.getElementById('quiz-result');
        resultEl.style.display = 'block';
        
        if (isCorrect) {
            resultEl.className = 'quiz-result correct';
            resultEl.textContent = '✅ Benar!';
            this.quizScore++;
        } else {
            resultEl.className = 'quiz-result incorrect';
            resultEl.textContent = `❌ Salah. Jawaban benar: ${question.options[question.a]}`;
        }

        // Disable options after submit
        document.querySelectorAll('.quiz-option').forEach(opt => {
            opt.style.pointerEvents = 'none';
            const idx = parseInt(opt.dataset.index);
            if (idx === question.a) {
                opt.classList.add('correct');
            } else if (idx === userAnswer && !isCorrect) {
                opt.classList.add('incorrect');
            }
        });

        // Show next button after delay
        setTimeout(() => {
            const actions = document.querySelector('.quiz-actions');
            if (actions) {
                actions.innerHTML = `
                    <button class="btn btn-primary" id="next-quiz">Next Question →</button>
                `;
                document.getElementById('next-quiz').addEventListener('click', () => {
                    this.currentQuizQuestion++;
                    this.renderQuiz();
                });
            }
        }, 1500);
    }

    // ========== UTILITIES ==========
    showLoading(show) {
        const overlay = document.getElementById('loading-overlay');
        if (show) overlay.classList.add('active');
        else overlay.classList.remove('active');
    }

    showMessage(msg, type = 'info') {
        this.appendConsole(msg, type);
    }
}

// Initialize app when DOM ready
document.addEventListener('DOMContentLoaded', () => {
    window.app = new TypeScriptLearningApp();
});
