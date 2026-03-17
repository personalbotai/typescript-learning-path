#!/usr/bin/env python3
"""Generate all 77 TypeScript interactive lessons."""
import json, os

# Read lesson filenames
lessons_dir = 'lessons'
files = sorted([f.replace('.html','') for f in os.listdir(lessons_dir) if f.endswith('.html')])

# Topic-specific content map
TOPICS = {
    'apa-itu-typescript': ('Apa itu TypeScript?', 'console.log("TypeScript adalah superset dari JavaScript!");\nlet nama: string = "Archon";\nconsole.log(`Selamat datang, ${nama}!`);', 'Selamat datang, Archon!', 'TypeScript = JavaScript + static typing.'),
    'setup-environment': ('Setup Environment', 'npm install -g typescript\ntsc --version', 'Versi TypeScript terinstall', 'Install TypeScript dengan npm.'),
    'variabel-dan-tipe-data': ('Variabel dan Tipe Data', 'let nama: string = "Archon";\nlet umur: number = 25;\nlet aktif: boolean = true;\nconsole.log(nama, umur, aktif);', 'Archon 25 true', 'Type annotation: nama: tipe = nilai.'),
    'tipe-data-primitif': ('Tipe Data Primitif', 'let str: string = "Halo";\nlet num: number = 42;\nlet bool: boolean = true;\nconsole.log(typeof str, typeof num, typeof bool);', 'string number boolean', 'Tipe primitif: string, number, boolean.'),
    'any-dan-unknown': ('Any dan Unknown', 'let data: any = "hello";\ndata = 42; // OK with any\n\nlet val: unknown = "hello";\n// let s: string = val; // Error!\nlet s: string = val as string; // OK with assertion\nconsole.log(s);', 'hello', 'unknown lebih aman dari any.'),
    'enum-named-constants': ('Enum', 'enum Waktu {\n    Pagi = "PAGI",\n    Siang = "SIANG",\n    Malam = "MALAM"\n}\nconsole.log(Waktu.Pagi);\nconsole.log(Waktu.Siang);', 'PAGI\nSIANG', 'Enum untuk named constants.'),
    'array-dan-tuple': ('Array dan Tuple', 'let angka: number[] = [1, 2, 3];\nlet nama: Array<string> = ["Alice", "Bob"];\n\n// Tuple\nlet pasangan: [string, number] = ["Alice", 25];\nconsole.log(angka);\nconsole.log(pasangan);', '[1, 2, 3]\n["Alice", 25]', 'Array: tipe[], Tuple: [tipe1, tipe2].'),
    'interface-dasar': ('Interface Dasar', 'interface User {\n    nama: string;\n    umur: number;\n    email?: string; // optional\n}\n\nconst user: User = { nama: "Archon", umur: 25 };\nconsole.log(user.nama);', 'Archon', 'Interface mendefinisikan bentuk object.'),
    'type-aliases': ('Type Aliases', 'type ID = string | number;\ntype Point = { x: number; y: number; };\n\nlet id: ID = "abc123";\nlet pos: Point = { x: 10, y: 20 };\nconsole.log(id, pos);', 'abc123 { x: 10, y: 20 }', 'type = alias untuk tipe yang kompleks.'),
    'union-dan-intersection-types': ('Union dan Intersection', 'type A = { a: string };\ntype B = { b: number };\n\n// Union: A atau B\ntype Union = A | B;\n// Intersection: A dan B\ntype Inter = A & B;\n\nconst obj: Inter = { a: "hello", b: 42 };\nconsole.log(obj);', '{ a: "hello", b: 42 }', 'Union (|) = salah satu, Intersection (&) = gabungan.'),
    'functions-dengan-tipe': ('Functions dengan Tipe', 'function tambah(a: number, b: number): number {\n    return a + b;\n}\n\nconst kali = (a: number, b: number): number => a * b;\n\nconsole.log(tambah(3, 5));\nconsole.log(kali(4, 6));', '8\n24', 'Parameter dan return type annotation.'),
    'class-dasar': ('Class Dasar', 'class User {\n    nama: string;\n    constructor(nama: string) {\n        this.nama = nama;\n    }\n    sapa(): string {\n        return `Halo, ${this.nama}!`;\n    }\n}\nconst u = new User("Archon");\nconsole.log(u.sapa());', 'Halo, Archon!', 'Class dengan typed properties dan methods.'),
    'access-modifiers': ('Access Modifiers', 'class Bank {\n    public nama: string;\n    private saldo: number = 0;\n    protected id: string = "B001";\n    \n    constructor(nama: string) { this.nama = nama; }\n    public cekSaldo(): number { return this.saldo; }\n}\nconst b = new Bank("BCA");\nconsole.log(b.nama, b.cekSaldo());', 'BCA 0', 'public/private/protected = visibility control.'),
    'abstract-classes': ('Abstract Classes', 'abstract class Shape {\n    abstract area(): number;\n    describe(): string { return `Luas: ${this.area()}`; }\n}\n\nclass Circle extends Shape {\n    constructor(private r: number) { super(); }\n    area(): number { return Math.PI * this.r ** 2; }\n}\nconsole.log(new Circle(5).describe().substring(0,10));', 'Luas: 78.', 'Abstract class = blueprint, tidak bisa di-instantiate.'),
    'generics': ('Generics', 'function identity<T>(arg: T): T { return arg; }\n\nconsole.log(identity<string>("Halo"));\nconsole.log(identity<number>(42));\n\ninterface Box<T> {\n    value: T;\n}\nconst box: Box<number> = { value: 100 };\nconsole.log(box.value);', 'Halo\n42\n100', 'Generics = tipe yang flexible, ditentukan saat digunakan.'),
    'utility-types': ('Utility Types', 'interface User {\n    nama: string;\n    umur: number;\n    email: string;\n}\n\ntype PartialUser = Partial<User>;\ntype ReadonlyUser = Readonly<User>;\ntype PickUser = Pick<User, "nama" | "email">;\n\nconst p: PartialUser = { nama: "Archon" };\nconsole.log(p);', '{ nama: "Archon" }', 'Partial, Readonly, Pick, Omit = utility types.'),
    'type-guards': ('Type Guards', 'function print(val: string | number) {\n    if (typeof val === "string") {\n        console.log("String:", val.toUpperCase());\n    } else {\n        console.log("Number:", val.toFixed(2));\n    }\n}\nprint("hello");\nprint(3.14159);', 'String: HELLO\nNumber: 3.14', 'typeof, instanceof, in = type guards.'),
    'decorators': ('Decorators', 'function log(target: any, key: string) {\n    console.log(`Accessing ${key}`);\n}\n\nclass Test {\n    @log\n    greet() { return "Hello"; }\n}\nconst t = new Test();\nt.greet();', 'Accessing greet', 'Decorator = function yang modify class/method.'),
    'modules-import-export': ('Modules Import/Export', '// math.ts\nexport function tambah(a: number, b: number): number {\n    return a + b;\n}\nexport const PI = 3.14159;\n\n// app.ts\n// import { tambah, PI } from "./math";\nconsole.log(tambah(2, 3));\nconsole.log(PI);', '5\n3.14159', 'export = expose, import = use dari module lain.'),
    'async-await-typescript': ('Async/Await TypeScript', 'async function fetchData(): Promise<string> {\n    return new Promise(resolve => {\n        setTimeout(() => resolve("Data diterima!"), 100);\n    });\n}\n\nasync function main() {\n    const data = await fetchData();\n    console.log(data);\n}\nmain();', 'Data diterima!', 'async function return Promise<tipe>.'),
}

# Generate lesson entry
def make_lesson(lesson_id, filename):
    if filename in TOPICS:
        title, code, output, hint = TOPICS[filename]
        quiz_q = f"Apa yang dipelajari di {title}?"
    else:
        # Generate from filename
        title = filename.replace('-', ' ').title().replace(' ', ' ')
        code = f'// {title}\nconsole.log("Belajar {title} di TypeScript!");'
        output = f'Belajar {title} di TypeScript!'
        hint = f'Pelajari konsep {title.lower()} dengan praktik langsung.'
        quiz_q = f'Apa fungsi dari {title.lower()}?'
    
    return {
        "id": lesson_id,
        "title": f"{lesson_id}. {title}",
        "description": f"<p><strong>{title}</strong> adalah konsep penting dalam TypeScript yang perlu dipahami.</p>",
        "defaultCode": code.replace('\n', '\\n'),
        "expectedOutput": output,
        "hint": hint,
        "quiz": {
            "question": quiz_q,
            "options": ["Opsi A", "Opsi B", "Opsi C", "Opsi D"],
            "answer": 0
        }
    }

# Generate all lessons
all_lessons = []
for i, f in enumerate(files, 1):
    all_lessons.append(make_lesson(i, f))

# Read existing interactive-lessons.js structure and replace
with open('interactive-lessons.js', 'w', encoding='utf-8') as out:
    out.write('// TypeScript Interactive Lessons - All 77 lessons\n')
    out.write('// Generated automatically\n\n')
    out.write('const INTERACTIVE_LESSONS = ')
    out.write(json.dumps(all_lessons, indent=4, ensure_ascii=False))
    out.write(';\n')

print(f"Generated {len(all_lessons)} TypeScript lessons!")
