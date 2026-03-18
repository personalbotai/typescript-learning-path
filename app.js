// TypeScript Learning Path
const MODULES = [
    {
        "id": 1,
        "title": "Pengenalan TypeScript",
        "icon": "fas fa-play-circle",
        "lessons": [
            "apa-itu-typescript",
            "setup",
            "tipe-data"
        ]
    },
    {
        "id": 2,
        "title": "Type System",
        "icon": "fas fa-shield-alt",
        "lessons": [
            "interface",
            "type-alias",
            "union",
            "generics",
            "enum",
            "utility"
        ]
    },
    {
        "id": 3,
        "title": "OOP",
        "icon": "fas fa-object-group",
        "lessons": [
            "class",
            "access",
            "abstract",
            "inheritance"
        ]
    },
    {
        "id": 4,
        "title": "Advanced",
        "icon": "fas fa-cogs",
        "lessons": [
            "type-guard",
            "decorator",
            "conditional",
            "mapped"
        ]
    },
    {
        "id": 5,
        "title": "Modules & Tooling",
        "icon": "fas fa-tools",
        "lessons": [
            "modules",
            "tsconfig",
            "declaration"
        ]
    },
    {
        "id": 6,
        "title": "Async",
        "icon": "fas fa-sync-alt",
        "lessons": [
            "async",
            "promise",
            "fetch"
        ]
    }
];

const lessons = [
    {
        "id": 1,
        "title": "1. Abstract Classes",
        "description": "<p><strong>Abstract Classes</strong> adalah konsep penting dalam TypeScript.</p>\n<h4>🎯 Yang Dipelajari:</h4>\n<ul><li>Sintaks TypeScript yang type-safe</li><li>Perbedaan dengan JavaScript biasa</li><li>Best practices dan penggunaan praktis</li></ul>\n<h4>💻 Praktik:</h4>\n<ul><li>Tulis kode di editor interaktif</li><li>Lihat output dan validasi</li><li>Quiz untuk uji pemahaman</li></ul>",
        "defaultCode": "abstract class Shape {\\n    abstract area(): number;\\n    describe(): string { return `Luas: ${this.area()}`; }\\n}\\n\\nclass Circle extends Shape {\\n    constructor(private r: number) { super(); }\\n    area(): number { return Math.PI * this.r ** 2; }\\n}\\nconsole.log(new Circle(5).describe().substring(0,10));",
        "expectedOutput": "Luas: 78.",
        "hint": "Abstract class = blueprint, tidak bisa di-instantiate.",
        "quiz": {
            "question": "Apa yang dipelajari di Abstract Classes?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        }
    },
    {
        "id": 2,
        "title": "2. Access Modifiers",
        "description": "<p><strong>Access Modifiers</strong> adalah konsep penting dalam TypeScript.</p>\n<h4>🎯 Yang Dipelajari:</h4>\n<ul><li>Sintaks TypeScript yang type-safe</li><li>Perbedaan dengan JavaScript biasa</li><li>Best practices dan penggunaan praktis</li></ul>\n<h4>💻 Praktik:</h4>\n<ul><li>Tulis kode di editor interaktif</li><li>Lihat output dan validasi</li><li>Quiz untuk uji pemahaman</li></ul>",
        "defaultCode": "class Bank {\\n    public nama: string;\\n    private saldo: number = 0;\\n    protected id: string = \"B001\";\\n    \\n    constructor(nama: string) { this.nama = nama; }\\n    public cekSaldo(): number { return this.saldo; }\\n}\\nconst b = new Bank(\"BCA\");\\nconsole.log(b.nama, b.cekSaldo());",
        "expectedOutput": "BCA 0",
        "hint": "public/private/protected = visibility control.",
        "quiz": {
            "question": "Apa yang dipelajari di Access Modifiers?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        }
    },
    {
        "id": 3,
        "title": "3. Ambient Modules",
        "description": "<p><strong>Ambient Modules</strong> adalah konsep penting dalam TypeScript.</p>\n<h4>🎯 Yang Dipelajari:</h4>\n<ul><li>Sintaks TypeScript yang type-safe</li><li>Perbedaan dengan JavaScript biasa</li><li>Best practices dan penggunaan praktis</li></ul>\n<h4>💻 Praktik:</h4>\n<ul><li>Tulis kode di editor interaktif</li><li>Lihat output dan validasi</li><li>Quiz untuk uji pemahaman</li></ul>",
        "defaultCode": "// Ambient Modules\\nconsole.log(\"Belajar Ambient Modules di TypeScript!\");",
        "expectedOutput": "Belajar Ambient Modules di TypeScript!",
        "hint": "Pelajari konsep ambient modules dengan praktik langsung.",
        "quiz": {
            "question": "Apa fungsi dari ambient modules?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        }
    },
    {
        "id": 4,
        "title": "4. Any dan Unknown",
        "description": "<p><strong>Any dan Unknown</strong> adalah konsep penting dalam TypeScript.</p>\n<h4>🎯 Yang Dipelajari:</h4>\n<ul><li>Sintaks TypeScript yang type-safe</li><li>Perbedaan dengan JavaScript biasa</li><li>Best practices dan penggunaan praktis</li></ul>\n<h4>💻 Praktik:</h4>\n<ul><li>Tulis kode di editor interaktif</li><li>Lihat output dan validasi</li><li>Quiz untuk uji pemahaman</li></ul>",
        "defaultCode": "let data: any = \"hello\";\\ndata = 42; // OK with any\\n\\nlet val: unknown = \"hello\";\\n// let s: string = val; // Error!\\nlet s: string = val as string; // OK with assertion\\nconsole.log(s);",
        "expectedOutput": "hello",
        "hint": "unknown lebih aman dari any.",
        "quiz": {
            "question": "Apa yang dipelajari di Any dan Unknown?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        }
    },
    {
        "id": 5,
        "title": "5. Apa itu TypeScript?",
        "description": "<p><strong>Apa itu TypeScript?</strong> adalah konsep penting dalam TypeScript.</p>\n<h4>🎯 Yang Dipelajari:</h4>\n<ul><li>Sintaks TypeScript yang type-safe</li><li>Perbedaan dengan JavaScript biasa</li><li>Best practices dan penggunaan praktis</li></ul>\n<h4>💻 Praktik:</h4>\n<ul><li>Tulis kode di editor interaktif</li><li>Lihat output dan validasi</li><li>Quiz untuk uji pemahaman</li></ul>",
        "defaultCode": "console.log(\"TypeScript adalah superset dari JavaScript!\");\\nlet nama: string = \"Archon\";\\nconsole.log(`Selamat datang, ${nama}!`);",
        "expectedOutput": "Selamat datang, Archon!",
        "hint": "TypeScript = JavaScript + static typing.",
        "quiz": {
            "question": "Apa yang dipelajari di Apa itu TypeScript??",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        }
    },
    {
        "id": 6,
        "title": "6. Array dan Tuple",
        "description": "<p><strong>Array dan Tuple</strong> adalah konsep penting dalam TypeScript.</p>\n<h4>🎯 Yang Dipelajari:</h4>\n<ul><li>Sintaks TypeScript yang type-safe</li><li>Perbedaan dengan JavaScript biasa</li><li>Best practices dan penggunaan praktis</li></ul>\n<h4>💻 Praktik:</h4>\n<ul><li>Tulis kode di editor interaktif</li><li>Lihat output dan validasi</li><li>Quiz untuk uji pemahaman</li></ul>",
        "defaultCode": "let angka: number[] = [1, 2, 3];\\nlet nama: Array<string> = [\"Alice\", \"Bob\"];\\n\\n// Tuple\\nlet pasangan: [string, number] = [\"Alice\", 25];\\nconsole.log(angka);\\nconsole.log(pasangan);",
        "expectedOutput": "[1, 2, 3]\n[\"Alice\", 25]",
        "hint": "Array: tipe[], Tuple: [tipe1, tipe2].",
        "quiz": {
            "question": "Apa yang dipelajari di Array dan Tuple?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        }
    },
    {
        "id": 7,
        "title": "7. Arrow Functions Types",
        "description": "<p><strong>Arrow Functions Types</strong> adalah konsep penting dalam TypeScript.</p>\n<h4>🎯 Yang Dipelajari:</h4>\n<ul><li>Sintaks TypeScript yang type-safe</li><li>Perbedaan dengan JavaScript biasa</li><li>Best practices dan penggunaan praktis</li></ul>\n<h4>💻 Praktik:</h4>\n<ul><li>Tulis kode di editor interaktif</li><li>Lihat output dan validasi</li><li>Quiz untuk uji pemahaman</li></ul>",
        "defaultCode": "// Arrow Functions Types\\nconsole.log(\"Belajar Arrow Functions Types di TypeScript!\");",
        "expectedOutput": "Belajar Arrow Functions Types di TypeScript!",
        "hint": "Pelajari konsep arrow functions types dengan praktik langsung.",
        "quiz": {
            "question": "Apa fungsi dari arrow functions types?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        }
    },
    {
        "id": 8,
        "title": "8. Barrel Files",
        "description": "<p><strong>Barrel Files</strong> adalah konsep penting dalam TypeScript.</p>\n<h4>🎯 Yang Dipelajari:</h4>\n<ul><li>Sintaks TypeScript yang type-safe</li><li>Perbedaan dengan JavaScript biasa</li><li>Best practices dan penggunaan praktis</li></ul>\n<h4>💻 Praktik:</h4>\n<ul><li>Tulis kode di editor interaktif</li><li>Lihat output dan validasi</li><li>Quiz untuk uji pemahaman</li></ul>",
        "defaultCode": "// Barrel Files\\nconsole.log(\"Belajar Barrel Files di TypeScript!\");",
        "expectedOutput": "Belajar Barrel Files di TypeScript!",
        "hint": "Pelajari konsep barrel files dengan praktik langsung.",
        "quiz": {
            "question": "Apa fungsi dari barrel files?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        }
    },
    {
        "id": 9,
        "title": "9. Build Tools Webpack Babel",
        "description": "<p><strong>Build Tools Webpack Babel</strong> adalah konsep penting dalam TypeScript.</p>\n<h4>🎯 Yang Dipelajari:</h4>\n<ul><li>Sintaks TypeScript yang type-safe</li><li>Perbedaan dengan JavaScript biasa</li><li>Best practices dan penggunaan praktis</li></ul>\n<h4>💻 Praktik:</h4>\n<ul><li>Tulis kode di editor interaktif</li><li>Lihat output dan validasi</li><li>Quiz untuk uji pemahaman</li></ul>",
        "defaultCode": "// Build Tools Webpack Babel\\nconsole.log(\"Belajar Build Tools Webpack Babel di TypeScript!\");",
        "expectedOutput": "Belajar Build Tools Webpack Babel di TypeScript!",
        "hint": "Pelajari konsep build tools webpack babel dengan praktik langsung.",
        "quiz": {
            "question": "Apa fungsi dari build tools webpack babel?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        }
    },
    {
        "id": 10,
        "title": "10. Class Dasar",
        "description": "<p><strong>Class Dasar</strong> adalah konsep penting dalam TypeScript.</p>\n<h4>🎯 Yang Dipelajari:</h4>\n<ul><li>Sintaks TypeScript yang type-safe</li><li>Perbedaan dengan JavaScript biasa</li><li>Best practices dan penggunaan praktis</li></ul>\n<h4>💻 Praktik:</h4>\n<ul><li>Tulis kode di editor interaktif</li><li>Lihat output dan validasi</li><li>Quiz untuk uji pemahaman</li></ul>",
        "defaultCode": "class User {\\n    nama: string;\\n    constructor(nama: string) {\\n        this.nama = nama;\\n    }\\n    sapa(): string {\\n        return `Halo, ${this.nama}!`;\\n    }\\n}\\nconst u = new User(\"Archon\");\\nconsole.log(u.sapa());",
        "expectedOutput": "Halo, Archon!",
        "hint": "Class dengan typed properties dan methods.",
        "quiz": {
            "question": "Apa yang dipelajari di Class Dasar?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        }
    },
    {
        "id": 11,
        "title": "11. Compiler Options Target Module Lib",
        "description": "<p><strong>Compiler Options Target Module Lib</strong> adalah konsep penting dalam TypeScript.</p>\n<h4>🎯 Yang Dipelajari:</h4>\n<ul><li>Sintaks TypeScript yang type-safe</li><li>Perbedaan dengan JavaScript biasa</li><li>Best practices dan penggunaan praktis</li></ul>\n<h4>💻 Praktik:</h4>\n<ul><li>Tulis kode di editor interaktif</li><li>Lihat output dan validasi</li><li>Quiz untuk uji pemahaman</li></ul>",
        "defaultCode": "// Compiler Options Target Module Lib\\nconsole.log(\"Belajar Compiler Options Target Module Lib di TypeScript!\");",
        "expectedOutput": "Belajar Compiler Options Target Module Lib di TypeScript!",
        "hint": "Pelajari konsep compiler options target module lib dengan praktik langsung.",
        "quiz": {
            "question": "Apa fungsi dari compiler options target module lib?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        }
    },
    {
        "id": 12,
        "title": "12. Conditional Types",
        "description": "<p><strong>Conditional Types</strong> adalah konsep penting dalam TypeScript.</p>\n<h4>🎯 Yang Dipelajari:</h4>\n<ul><li>Sintaks TypeScript yang type-safe</li><li>Perbedaan dengan JavaScript biasa</li><li>Best practices dan penggunaan praktis</li></ul>\n<h4>💻 Praktik:</h4>\n<ul><li>Tulis kode di editor interaktif</li><li>Lihat output dan validasi</li><li>Quiz untuk uji pemahaman</li></ul>",
        "defaultCode": "// Conditional Types\\nconsole.log(\"Belajar Conditional Types di TypeScript!\");",
        "expectedOutput": "Belajar Conditional Types di TypeScript!",
        "hint": "Pelajari konsep conditional types dengan praktik langsung.",
        "quiz": {
            "question": "Apa fungsi dari conditional types?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        }
    },
    {
        "id": 13,
        "title": "13. Constructor Parameter Properties",
        "description": "<p><strong>Constructor Parameter Properties</strong> adalah konsep penting dalam TypeScript.</p>\n<h4>🎯 Yang Dipelajari:</h4>\n<ul><li>Sintaks TypeScript yang type-safe</li><li>Perbedaan dengan JavaScript biasa</li><li>Best practices dan penggunaan praktis</li></ul>\n<h4>💻 Praktik:</h4>\n<ul><li>Tulis kode di editor interaktif</li><li>Lihat output dan validasi</li><li>Quiz untuk uji pemahaman</li></ul>",
        "defaultCode": "// Constructor Parameter Properties\\nconsole.log(\"Belajar Constructor Parameter Properties di TypeScript!\");",
        "expectedOutput": "Belajar Constructor Parameter Properties di TypeScript!",
        "hint": "Pelajari konsep constructor parameter properties dengan praktik langsung.",
        "quiz": {
            "question": "Apa fungsi dari constructor parameter properties?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        }
    },
    {
        "id": 14,
        "title": "14. Declaration Files D Ts",
        "description": "<p><strong>Declaration Files D Ts</strong> adalah konsep penting dalam TypeScript.</p>\n<h4>🎯 Yang Dipelajari:</h4>\n<ul><li>Sintaks TypeScript yang type-safe</li><li>Perbedaan dengan JavaScript biasa</li><li>Best practices dan penggunaan praktis</li></ul>\n<h4>💻 Praktik:</h4>\n<ul><li>Tulis kode di editor interaktif</li><li>Lihat output dan validasi</li><li>Quiz untuk uji pemahaman</li></ul>",
        "defaultCode": "// Declaration Files D Ts\\nconsole.log(\"Belajar Declaration Files D Ts di TypeScript!\");",
        "expectedOutput": "Belajar Declaration Files D Ts di TypeScript!",
        "hint": "Pelajari konsep declaration files d ts dengan praktik langsung.",
        "quiz": {
            "question": "Apa fungsi dari declaration files d ts?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        }
    },
    {
        "id": 15,
        "title": "15. Declaration Merging",
        "description": "<p><strong>Declaration Merging</strong> adalah konsep penting dalam TypeScript.</p>\n<h4>🎯 Yang Dipelajari:</h4>\n<ul><li>Sintaks TypeScript yang type-safe</li><li>Perbedaan dengan JavaScript biasa</li><li>Best practices dan penggunaan praktis</li></ul>\n<h4>💻 Praktik:</h4>\n<ul><li>Tulis kode di editor interaktif</li><li>Lihat output dan validasi</li><li>Quiz untuk uji pemahaman</li></ul>",
        "defaultCode": "// Declaration Merging\\nconsole.log(\"Belajar Declaration Merging di TypeScript!\");",
        "expectedOutput": "Belajar Declaration Merging di TypeScript!",
        "hint": "Pelajari konsep declaration merging dengan praktik langsung.",
        "quiz": {
            "question": "Apa fungsi dari declaration merging?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        }
    },
    {
        "id": 16,
        "title": "16. Default Type Params",
        "description": "<p><strong>Default Type Params</strong> adalah konsep penting dalam TypeScript.</p>\n<h4>🎯 Yang Dipelajari:</h4>\n<ul><li>Sintaks TypeScript yang type-safe</li><li>Perbedaan dengan JavaScript biasa</li><li>Best practices dan penggunaan praktis</li></ul>\n<h4>💻 Praktik:</h4>\n<ul><li>Tulis kode di editor interaktif</li><li>Lihat output dan validasi</li><li>Quiz untuk uji pemahaman</li></ul>",
        "defaultCode": "// Default Type Params\\nconsole.log(\"Belajar Default Type Params di TypeScript!\");",
        "expectedOutput": "Belajar Default Type Params di TypeScript!",
        "hint": "Pelajari konsep default type params dengan praktik langsung.",
        "quiz": {
            "question": "Apa fungsi dari default type params?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        }
    },
    {
        "id": 17,
        "title": "17. Default Vs Named Export",
        "description": "<p><strong>Default Vs Named Export</strong> adalah konsep penting dalam TypeScript.</p>\n<h4>🎯 Yang Dipelajari:</h4>\n<ul><li>Sintaks TypeScript yang type-safe</li><li>Perbedaan dengan JavaScript biasa</li><li>Best practices dan penggunaan praktis</li></ul>\n<h4>💻 Praktik:</h4>\n<ul><li>Tulis kode di editor interaktif</li><li>Lihat output dan validasi</li><li>Quiz untuk uji pemahaman</li></ul>",
        "defaultCode": "// Default Vs Named Export\\nconsole.log(\"Belajar Default Vs Named Export di TypeScript!\");",
        "expectedOutput": "Belajar Default Vs Named Export di TypeScript!",
        "hint": "Pelajari konsep default vs named export dengan praktik langsung.",
        "quiz": {
            "question": "Apa fungsi dari default vs named export?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        }
    },
    {
        "id": 18,
        "title": "18. Definitelytyped",
        "description": "<p><strong>Definitelytyped</strong> adalah konsep penting dalam TypeScript.</p>\n<h4>🎯 Yang Dipelajari:</h4>\n<ul><li>Sintaks TypeScript yang type-safe</li><li>Perbedaan dengan JavaScript biasa</li><li>Best practices dan penggunaan praktis</li></ul>\n<h4>💻 Praktik:</h4>\n<ul><li>Tulis kode di editor interaktif</li><li>Lihat output dan validasi</li><li>Quiz untuk uji pemahaman</li></ul>",
        "defaultCode": "// Definitelytyped\\nconsole.log(\"Belajar Definitelytyped di TypeScript!\");",
        "expectedOutput": "Belajar Definitelytyped di TypeScript!",
        "hint": "Pelajari konsep definitelytyped dengan praktik langsung.",
        "quiz": {
            "question": "Apa fungsi dari definitelytyped?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        }
    },
    {
        "id": 19,
        "title": "19. Dynamic Import Code Splitting",
        "description": "<p><strong>Dynamic Import Code Splitting</strong> adalah konsep penting dalam TypeScript.</p>\n<h4>🎯 Yang Dipelajari:</h4>\n<ul><li>Sintaks TypeScript yang type-safe</li><li>Perbedaan dengan JavaScript biasa</li><li>Best practices dan penggunaan praktis</li></ul>\n<h4>💻 Praktik:</h4>\n<ul><li>Tulis kode di editor interaktif</li><li>Lihat output dan validasi</li><li>Quiz untuk uji pemahaman</li></ul>",
        "defaultCode": "// Dynamic Import Code Splitting\\nconsole.log(\"Belajar Dynamic Import Code Splitting di TypeScript!\");",
        "expectedOutput": "Belajar Dynamic Import Code Splitting di TypeScript!",
        "hint": "Pelajari konsep dynamic import code splitting dengan praktik langsung.",
        "quiz": {
            "question": "Apa fungsi dari dynamic import code splitting?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        }
    },
    {
        "id": 20,
        "title": "20. Enum",
        "description": "<p><strong>Enum</strong> adalah konsep penting dalam TypeScript.</p>\n<h4>🎯 Yang Dipelajari:</h4>\n<ul><li>Sintaks TypeScript yang type-safe</li><li>Perbedaan dengan JavaScript biasa</li><li>Best practices dan penggunaan praktis</li></ul>\n<h4>💻 Praktik:</h4>\n<ul><li>Tulis kode di editor interaktif</li><li>Lihat output dan validasi</li><li>Quiz untuk uji pemahaman</li></ul>",
        "defaultCode": "enum Waktu {\\n    Pagi = \"PAGI\",\\n    Siang = \"SIANG\",\\n    Malam = \"MALAM\"\\n}\\nconsole.log(Waktu.Pagi);\\nconsole.log(Waktu.Siang);",
        "expectedOutput": "PAGI\nSIANG",
        "hint": "Enum untuk named constants.",
        "quiz": {
            "question": "Apa yang dipelajari di Enum?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        }
    },
    {
        "id": 21,
        "title": "21. Es6 Modules Import Export",
        "description": "<p><strong>Es6 Modules Import Export</strong> adalah konsep penting dalam TypeScript.</p>\n<h4>🎯 Yang Dipelajari:</h4>\n<ul><li>Sintaks TypeScript yang type-safe</li><li>Perbedaan dengan JavaScript biasa</li><li>Best practices dan penggunaan praktis</li></ul>\n<h4>💻 Praktik:</h4>\n<ul><li>Tulis kode di editor interaktif</li><li>Lihat output dan validasi</li><li>Quiz untuk uji pemahaman</li></ul>",
        "defaultCode": "// Es6 Modules Import Export\\nconsole.log(\"Belajar Es6 Modules Import Export di TypeScript!\");",
        "expectedOutput": "Belajar Es6 Modules Import Export di TypeScript!",
        "hint": "Pelajari konsep es6 modules import export dengan praktik langsung.",
        "quiz": {
            "question": "Apa fungsi dari es6 modules import export?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        }
    },
    {
        "id": 22,
        "title": "22. Eslint Typescript",
        "description": "<p><strong>Eslint Typescript</strong> adalah konsep penting dalam TypeScript.</p>\n<h4>🎯 Yang Dipelajari:</h4>\n<ul><li>Sintaks TypeScript yang type-safe</li><li>Perbedaan dengan JavaScript biasa</li><li>Best practices dan penggunaan praktis</li></ul>\n<h4>💻 Praktik:</h4>\n<ul><li>Tulis kode di editor interaktif</li><li>Lihat output dan validasi</li><li>Quiz untuk uji pemahaman</li></ul>",
        "defaultCode": "// Eslint Typescript\\nconsole.log(\"Belajar Eslint Typescript di TypeScript!\");",
        "expectedOutput": "Belajar Eslint Typescript di TypeScript!",
        "hint": "Pelajari konsep eslint typescript dengan praktik langsung.",
        "quiz": {
            "question": "Apa fungsi dari eslint typescript?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        }
    },
    {
        "id": 23,
        "title": "23. Exclude Extract Nonnullable",
        "description": "<p><strong>Exclude Extract Nonnullable</strong> adalah konsep penting dalam TypeScript.</p>\n<h4>🎯 Yang Dipelajari:</h4>\n<ul><li>Sintaks TypeScript yang type-safe</li><li>Perbedaan dengan JavaScript biasa</li><li>Best practices dan penggunaan praktis</li></ul>\n<h4>💻 Praktik:</h4>\n<ul><li>Tulis kode di editor interaktif</li><li>Lihat output dan validasi</li><li>Quiz untuk uji pemahaman</li></ul>",
        "defaultCode": "// Exclude Extract Nonnullable\\nconsole.log(\"Belajar Exclude Extract Nonnullable di TypeScript!\");",
        "expectedOutput": "Belajar Exclude Extract Nonnullable di TypeScript!",
        "hint": "Pelajari konsep exclude extract nonnullable dengan praktik langsung.",
        "quiz": {
            "question": "Apa fungsi dari exclude extract nonnullable?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        }
    },
    {
        "id": 24,
        "title": "24. Extending Interfaces Types",
        "description": "<p><strong>Extending Interfaces Types</strong> adalah konsep penting dalam TypeScript.</p>\n<h4>🎯 Yang Dipelajari:</h4>\n<ul><li>Sintaks TypeScript yang type-safe</li><li>Perbedaan dengan JavaScript biasa</li><li>Best practices dan penggunaan praktis</li></ul>\n<h4>💻 Praktik:</h4>\n<ul><li>Tulis kode di editor interaktif</li><li>Lihat output dan validasi</li><li>Quiz untuk uji pemahaman</li></ul>",
        "defaultCode": "// Extending Interfaces Types\\nconsole.log(\"Belajar Extending Interfaces Types di TypeScript!\");",
        "expectedOutput": "Belajar Extending Interfaces Types di TypeScript!",
        "hint": "Pelajari konsep extending interfaces types dengan praktik langsung.",
        "quiz": {
            "question": "Apa fungsi dari extending interfaces types?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        }
    },
    {
        "id": 25,
        "title": "25. Final Project Fullstack",
        "description": "<p><strong>Final Project Fullstack</strong> adalah konsep penting dalam TypeScript.</p>\n<h4>🎯 Yang Dipelajari:</h4>\n<ul><li>Sintaks TypeScript yang type-safe</li><li>Perbedaan dengan JavaScript biasa</li><li>Best practices dan penggunaan praktis</li></ul>\n<h4>💻 Praktik:</h4>\n<ul><li>Tulis kode di editor interaktif</li><li>Lihat output dan validasi</li><li>Quiz untuk uji pemahaman</li></ul>",
        "defaultCode": "// Final Project Fullstack\\nconsole.log(\"Belajar Final Project Fullstack di TypeScript!\");",
        "expectedOutput": "Belajar Final Project Fullstack di TypeScript!",
        "hint": "Pelajari konsep final project fullstack dengan praktik langsung.",
        "quiz": {
            "question": "Apa fungsi dari final project fullstack?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        }
    },
    {
        "id": 26,
        "title": "26. Function Overloads",
        "description": "<p><strong>Function Overloads</strong> adalah konsep penting dalam TypeScript.</p>\n<h4>🎯 Yang Dipelajari:</h4>\n<ul><li>Sintaks TypeScript yang type-safe</li><li>Perbedaan dengan JavaScript biasa</li><li>Best practices dan penggunaan praktis</li></ul>\n<h4>💻 Praktik:</h4>\n<ul><li>Tulis kode di editor interaktif</li><li>Lihat output dan validasi</li><li>Quiz untuk uji pemahaman</li></ul>",
        "defaultCode": "// Function Overloads\\nconsole.log(\"Belajar Function Overloads di TypeScript!\");",
        "expectedOutput": "Belajar Function Overloads di TypeScript!",
        "hint": "Pelajari konsep function overloads dengan praktik langsung.",
        "quiz": {
            "question": "Apa fungsi dari function overloads?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        }
    },
    {
        "id": 27,
        "title": "27. Function Types",
        "description": "<p><strong>Function Types</strong> adalah konsep penting dalam TypeScript.</p>\n<h4>🎯 Yang Dipelajari:</h4>\n<ul><li>Sintaks TypeScript yang type-safe</li><li>Perbedaan dengan JavaScript biasa</li><li>Best practices dan penggunaan praktis</li></ul>\n<h4>💻 Praktik:</h4>\n<ul><li>Tulis kode di editor interaktif</li><li>Lihat output dan validasi</li><li>Quiz untuk uji pemahaman</li></ul>",
        "defaultCode": "// Function Types\\nconsole.log(\"Belajar Function Types di TypeScript!\");",
        "expectedOutput": "Belajar Function Types di TypeScript!",
        "hint": "Pelajari konsep function types dengan praktik langsung.",
        "quiz": {
            "question": "Apa fungsi dari function types?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        }
    },
    {
        "id": 28,
        "title": "28. Generic Constraints",
        "description": "<p><strong>Generic Constraints</strong> adalah konsep penting dalam TypeScript.</p>\n<h4>🎯 Yang Dipelajari:</h4>\n<ul><li>Sintaks TypeScript yang type-safe</li><li>Perbedaan dengan JavaScript biasa</li><li>Best practices dan penggunaan praktis</li></ul>\n<h4>💻 Praktik:</h4>\n<ul><li>Tulis kode di editor interaktif</li><li>Lihat output dan validasi</li><li>Quiz untuk uji pemahaman</li></ul>",
        "defaultCode": "// Generic Constraints\\nconsole.log(\"Belajar Generic Constraints di TypeScript!\");",
        "expectedOutput": "Belajar Generic Constraints di TypeScript!",
        "hint": "Pelajari konsep generic constraints dengan praktik langsung.",
        "quiz": {
            "question": "Apa fungsi dari generic constraints?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        }
    },
    {
        "id": 29,
        "title": "29. Generic Functions Dasar",
        "description": "<p><strong>Generic Functions Dasar</strong> adalah konsep penting dalam TypeScript.</p>\n<h4>🎯 Yang Dipelajari:</h4>\n<ul><li>Sintaks TypeScript yang type-safe</li><li>Perbedaan dengan JavaScript biasa</li><li>Best practices dan penggunaan praktis</li></ul>\n<h4>💻 Praktik:</h4>\n<ul><li>Tulis kode di editor interaktif</li><li>Lihat output dan validasi</li><li>Quiz untuk uji pemahaman</li></ul>",
        "defaultCode": "// Generic Functions Dasar\\nconsole.log(\"Belajar Generic Functions Dasar di TypeScript!\");",
        "expectedOutput": "Belajar Generic Functions Dasar di TypeScript!",
        "hint": "Pelajari konsep generic functions dasar dengan praktik langsung.",
        "quiz": {
            "question": "Apa fungsi dari generic functions dasar?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        }
    },
    {
        "id": 30,
        "title": "30. Generic Interfaces Classes",
        "description": "<p><strong>Generic Interfaces Classes</strong> adalah konsep penting dalam TypeScript.</p>\n<h4>🎯 Yang Dipelajari:</h4>\n<ul><li>Sintaks TypeScript yang type-safe</li><li>Perbedaan dengan JavaScript biasa</li><li>Best practices dan penggunaan praktis</li></ul>\n<h4>💻 Praktik:</h4>\n<ul><li>Tulis kode di editor interaktif</li><li>Lihat output dan validasi</li><li>Quiz untuk uji pemahaman</li></ul>",
        "defaultCode": "// Generic Interfaces Classes\\nconsole.log(\"Belajar Generic Interfaces Classes di TypeScript!\");",
        "expectedOutput": "Belajar Generic Interfaces Classes di TypeScript!",
        "hint": "Pelajari konsep generic interfaces classes dengan praktik langsung.",
        "quiz": {
            "question": "Apa fungsi dari generic interfaces classes?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        }
    },
    {
        "id": 31,
        "title": "31. Generic Utility Types",
        "description": "<p><strong>Generic Utility Types</strong> adalah konsep penting dalam TypeScript.</p>\n<h4>🎯 Yang Dipelajari:</h4>\n<ul><li>Sintaks TypeScript yang type-safe</li><li>Perbedaan dengan JavaScript biasa</li><li>Best practices dan penggunaan praktis</li></ul>\n<h4>💻 Praktik:</h4>\n<ul><li>Tulis kode di editor interaktif</li><li>Lihat output dan validasi</li><li>Quiz untuk uji pemahaman</li></ul>",
        "defaultCode": "// Generic Utility Types\\nconsole.log(\"Belajar Generic Utility Types di TypeScript!\");",
        "expectedOutput": "Belajar Generic Utility Types di TypeScript!",
        "hint": "Pelajari konsep generic utility types dengan praktik langsung.",
        "quiz": {
            "question": "Apa fungsi dari generic utility types?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        }
    },
    {
        "id": 32,
        "title": "32. Hello World",
        "description": "<p><strong>Hello World</strong> adalah konsep penting dalam TypeScript.</p>\n<h4>🎯 Yang Dipelajari:</h4>\n<ul><li>Sintaks TypeScript yang type-safe</li><li>Perbedaan dengan JavaScript biasa</li><li>Best practices dan penggunaan praktis</li></ul>\n<h4>💻 Praktik:</h4>\n<ul><li>Tulis kode di editor interaktif</li><li>Lihat output dan validasi</li><li>Quiz untuk uji pemahaman</li></ul>",
        "defaultCode": "// Hello World\\nconsole.log(\"Belajar Hello World di TypeScript!\");",
        "expectedOutput": "Belajar Hello World di TypeScript!",
        "hint": "Pelajari konsep hello world dengan praktik langsung.",
        "quiz": {
            "question": "Apa fungsi dari hello world?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        }
    },
    {
        "id": 33,
        "title": "33. Include Exclude Files",
        "description": "<p><strong>Include Exclude Files</strong> adalah konsep penting dalam TypeScript.</p>\n<h4>🎯 Yang Dipelajari:</h4>\n<ul><li>Sintaks TypeScript yang type-safe</li><li>Perbedaan dengan JavaScript biasa</li><li>Best practices dan penggunaan praktis</li></ul>\n<h4>💻 Praktik:</h4>\n<ul><li>Tulis kode di editor interaktif</li><li>Lihat output dan validasi</li><li>Quiz untuk uji pemahaman</li></ul>",
        "defaultCode": "// Include Exclude Files\\nconsole.log(\"Belajar Include Exclude Files di TypeScript!\");",
        "expectedOutput": "Belajar Include Exclude Files di TypeScript!",
        "hint": "Pelajari konsep include exclude files dengan praktik langsung.",
        "quiz": {
            "question": "Apa fungsi dari include exclude files?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        }
    },
    {
        "id": 34,
        "title": "34. Index Signatures",
        "description": "<p><strong>Index Signatures</strong> adalah konsep penting dalam TypeScript.</p>\n<h4>🎯 Yang Dipelajari:</h4>\n<ul><li>Sintaks TypeScript yang type-safe</li><li>Perbedaan dengan JavaScript biasa</li><li>Best practices dan penggunaan praktis</li></ul>\n<h4>💻 Praktik:</h4>\n<ul><li>Tulis kode di editor interaktif</li><li>Lihat output dan validasi</li><li>Quiz untuk uji pemahaman</li></ul>",
        "defaultCode": "// Index Signatures\\nconsole.log(\"Belajar Index Signatures di TypeScript!\");",
        "expectedOutput": "Belajar Index Signatures di TypeScript!",
        "hint": "Pelajari konsep index signatures dengan praktik langsung.",
        "quiz": {
            "question": "Apa fungsi dari index signatures?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        }
    },
    {
        "id": 35,
        "title": "35. Indexed Access Types",
        "description": "<p><strong>Indexed Access Types</strong> adalah konsep penting dalam TypeScript.</p>\n<h4>🎯 Yang Dipelajari:</h4>\n<ul><li>Sintaks TypeScript yang type-safe</li><li>Perbedaan dengan JavaScript biasa</li><li>Best practices dan penggunaan praktis</li></ul>\n<h4>💻 Praktik:</h4>\n<ul><li>Tulis kode di editor interaktif</li><li>Lihat output dan validasi</li><li>Quiz untuk uji pemahaman</li></ul>",
        "defaultCode": "// Indexed Access Types\\nconsole.log(\"Belajar Indexed Access Types di TypeScript!\");",
        "expectedOutput": "Belajar Indexed Access Types di TypeScript!",
        "hint": "Pelajari konsep indexed access types dengan praktik langsung.",
        "quiz": {
            "question": "Apa fungsi dari indexed access types?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        }
    },
    {
        "id": 36,
        "title": "36. Inheritance Extends Super",
        "description": "<p><strong>Inheritance Extends Super</strong> adalah konsep penting dalam TypeScript.</p>\n<h4>🎯 Yang Dipelajari:</h4>\n<ul><li>Sintaks TypeScript yang type-safe</li><li>Perbedaan dengan JavaScript biasa</li><li>Best practices dan penggunaan praktis</li></ul>\n<h4>💻 Praktik:</h4>\n<ul><li>Tulis kode di editor interaktif</li><li>Lihat output dan validasi</li><li>Quiz untuk uji pemahaman</li></ul>",
        "defaultCode": "// Inheritance Extends Super\\nconsole.log(\"Belajar Inheritance Extends Super di TypeScript!\");",
        "expectedOutput": "Belajar Inheritance Extends Super di TypeScript!",
        "hint": "Pelajari konsep inheritance extends super dengan praktik langsung.",
        "quiz": {
            "question": "Apa fungsi dari inheritance extends super?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        }
    },
    {
        "id": 37,
        "title": "37. Instalasi Typescript",
        "description": "<p><strong>Instalasi Typescript</strong> adalah konsep penting dalam TypeScript.</p>\n<h4>🎯 Yang Dipelajari:</h4>\n<ul><li>Sintaks TypeScript yang type-safe</li><li>Perbedaan dengan JavaScript biasa</li><li>Best practices dan penggunaan praktis</li></ul>\n<h4>💻 Praktik:</h4>\n<ul><li>Tulis kode di editor interaktif</li><li>Lihat output dan validasi</li><li>Quiz untuk uji pemahaman</li></ul>",
        "defaultCode": "// Instalasi Typescript\\nconsole.log(\"Belajar Instalasi Typescript di TypeScript!\");",
        "expectedOutput": "Belajar Instalasi Typescript di TypeScript!",
        "hint": "Pelajari konsep instalasi typescript dengan praktik langsung.",
        "quiz": {
            "question": "Apa fungsi dari instalasi typescript?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        }
    },
    {
        "id": 38,
        "title": "38. Interface Dasar",
        "description": "<p><strong>Interface Dasar</strong> adalah konsep penting dalam TypeScript.</p>\n<h4>🎯 Yang Dipelajari:</h4>\n<ul><li>Sintaks TypeScript yang type-safe</li><li>Perbedaan dengan JavaScript biasa</li><li>Best practices dan penggunaan praktis</li></ul>\n<h4>💻 Praktik:</h4>\n<ul><li>Tulis kode di editor interaktif</li><li>Lihat output dan validasi</li><li>Quiz untuk uji pemahaman</li></ul>",
        "defaultCode": "interface User {\\n    nama: string;\\n    umur: number;\\n    email?: string; // optional\\n}\\n\\nconst user: User = { nama: \"Archon\", umur: 25 };\\nconsole.log(user.nama);",
        "expectedOutput": "Archon",
        "hint": "Interface mendefinisikan bentuk object.",
        "quiz": {
            "question": "Apa yang dipelajari di Interface Dasar?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        }
    },
    {
        "id": 39,
        "title": "39. Interface Vs Type Alias",
        "description": "<p><strong>Interface Vs Type Alias</strong> adalah konsep penting dalam TypeScript.</p>\n<h4>🎯 Yang Dipelajari:</h4>\n<ul><li>Sintaks TypeScript yang type-safe</li><li>Perbedaan dengan JavaScript biasa</li><li>Best practices dan penggunaan praktis</li></ul>\n<h4>💻 Praktik:</h4>\n<ul><li>Tulis kode di editor interaktif</li><li>Lihat output dan validasi</li><li>Quiz untuk uji pemahaman</li></ul>",
        "defaultCode": "// Interface Vs Type Alias\\nconsole.log(\"Belajar Interface Vs Type Alias di TypeScript!\");",
        "expectedOutput": "Belajar Interface Vs Type Alias di TypeScript!",
        "hint": "Pelajari konsep interface vs type alias dengan praktik langsung.",
        "quiz": {
            "question": "Apa fungsi dari interface vs type alias?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        }
    },
    {
        "id": 40,
        "title": "40. Intersection Types",
        "description": "<p><strong>Intersection Types</strong> adalah konsep penting dalam TypeScript.</p>\n<h4>🎯 Yang Dipelajari:</h4>\n<ul><li>Sintaks TypeScript yang type-safe</li><li>Perbedaan dengan JavaScript biasa</li><li>Best practices dan penggunaan praktis</li></ul>\n<h4>💻 Praktik:</h4>\n<ul><li>Tulis kode di editor interaktif</li><li>Lihat output dan validasi</li><li>Quiz untuk uji pemahaman</li></ul>",
        "defaultCode": "// Intersection Types\\nconsole.log(\"Belajar Intersection Types di TypeScript!\");",
        "expectedOutput": "Belajar Intersection Types di TypeScript!",
        "hint": "Pelajari konsep intersection types dengan praktik langsung.",
        "quiz": {
            "question": "Apa fungsi dari intersection types?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        }
    },
    {
        "id": 41,
        "title": "41. Mapped Types",
        "description": "<p><strong>Mapped Types</strong> adalah konsep penting dalam TypeScript.</p>\n<h4>🎯 Yang Dipelajari:</h4>\n<ul><li>Sintaks TypeScript yang type-safe</li><li>Perbedaan dengan JavaScript biasa</li><li>Best practices dan penggunaan praktis</li></ul>\n<h4>💻 Praktik:</h4>\n<ul><li>Tulis kode di editor interaktif</li><li>Lihat output dan validasi</li><li>Quiz untuk uji pemahaman</li></ul>",
        "defaultCode": "// Mapped Types\\nconsole.log(\"Belajar Mapped Types di TypeScript!\");",
        "expectedOutput": "Belajar Mapped Types di TypeScript!",
        "hint": "Pelajari konsep mapped types dengan praktik langsung.",
        "quiz": {
            "question": "Apa fungsi dari mapped types?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        }
    },
    {
        "id": 42,
        "title": "42. Migrasi Js Ke Ts",
        "description": "<p><strong>Migrasi Js Ke Ts</strong> adalah konsep penting dalam TypeScript.</p>\n<h4>🎯 Yang Dipelajari:</h4>\n<ul><li>Sintaks TypeScript yang type-safe</li><li>Perbedaan dengan JavaScript biasa</li><li>Best practices dan penggunaan praktis</li></ul>\n<h4>💻 Praktik:</h4>\n<ul><li>Tulis kode di editor interaktif</li><li>Lihat output dan validasi</li><li>Quiz untuk uji pemahaman</li></ul>",
        "defaultCode": "// Migrasi Js Ke Ts\\nconsole.log(\"Belajar Migrasi Js Ke Ts di TypeScript!\");",
        "expectedOutput": "Belajar Migrasi Js Ke Ts di TypeScript!",
        "hint": "Pelajari konsep migrasi js ke ts dengan praktik langsung.",
        "quiz": {
            "question": "Apa fungsi dari migrasi js ke ts?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        }
    },
    {
        "id": 43,
        "title": "43. Namespaces Organisasi Kode",
        "description": "<p><strong>Namespaces Organisasi Kode</strong> adalah konsep penting dalam TypeScript.</p>\n<h4>🎯 Yang Dipelajari:</h4>\n<ul><li>Sintaks TypeScript yang type-safe</li><li>Perbedaan dengan JavaScript biasa</li><li>Best practices dan penggunaan praktis</li></ul>\n<h4>💻 Praktik:</h4>\n<ul><li>Tulis kode di editor interaktif</li><li>Lihat output dan validasi</li><li>Quiz untuk uji pemahaman</li></ul>",
        "defaultCode": "// Namespaces Organisasi Kode\\nconsole.log(\"Belajar Namespaces Organisasi Kode di TypeScript!\");",
        "expectedOutput": "Belajar Namespaces Organisasi Kode di TypeScript!",
        "hint": "Pelajari konsep namespaces organisasi kode dengan praktik langsung.",
        "quiz": {
            "question": "Apa fungsi dari namespaces organisasi kode?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        }
    },
    {
        "id": 44,
        "title": "44. Nullable Types",
        "description": "<p><strong>Nullable Types</strong> adalah konsep penting dalam TypeScript.</p>\n<h4>🎯 Yang Dipelajari:</h4>\n<ul><li>Sintaks TypeScript yang type-safe</li><li>Perbedaan dengan JavaScript biasa</li><li>Best practices dan penggunaan praktis</li></ul>\n<h4>💻 Praktik:</h4>\n<ul><li>Tulis kode di editor interaktif</li><li>Lihat output dan validasi</li><li>Quiz untuk uji pemahaman</li></ul>",
        "defaultCode": "// Nullable Types\\nconsole.log(\"Belajar Nullable Types di TypeScript!\");",
        "expectedOutput": "Belajar Nullable Types di TypeScript!",
        "hint": "Pelajari konsep nullable types dengan praktik langsung.",
        "quiz": {
            "question": "Apa fungsi dari nullable types?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        }
    },
    {
        "id": 45,
        "title": "45. Omit Thisparameter",
        "description": "<p><strong>Omit Thisparameter</strong> adalah konsep penting dalam TypeScript.</p>\n<h4>🎯 Yang Dipelajari:</h4>\n<ul><li>Sintaks TypeScript yang type-safe</li><li>Perbedaan dengan JavaScript biasa</li><li>Best practices dan penggunaan praktis</li></ul>\n<h4>💻 Praktik:</h4>\n<ul><li>Tulis kode di editor interaktif</li><li>Lihat output dan validasi</li><li>Quiz untuk uji pemahaman</li></ul>",
        "defaultCode": "// Omit Thisparameter\\nconsole.log(\"Belajar Omit Thisparameter di TypeScript!\");",
        "expectedOutput": "Belajar Omit Thisparameter di TypeScript!",
        "hint": "Pelajari konsep omit thisparameter dengan praktik langsung.",
        "quiz": {
            "question": "Apa fungsi dari omit thisparameter?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        }
    },
    {
        "id": 46,
        "title": "46. Optional Default Params",
        "description": "<p><strong>Optional Default Params</strong> adalah konsep penting dalam TypeScript.</p>\n<h4>🎯 Yang Dipelajari:</h4>\n<ul><li>Sintaks TypeScript yang type-safe</li><li>Perbedaan dengan JavaScript biasa</li><li>Best practices dan penggunaan praktis</li></ul>\n<h4>💻 Praktik:</h4>\n<ul><li>Tulis kode di editor interaktif</li><li>Lihat output dan validasi</li><li>Quiz untuk uji pemahaman</li></ul>",
        "defaultCode": "// Optional Default Params\\nconsole.log(\"Belajar Optional Default Params di TypeScript!\");",
        "expectedOutput": "Belajar Optional Default Params di TypeScript!",
        "hint": "Pelajari konsep optional default params dengan praktik langsung.",
        "quiz": {
            "question": "Apa fungsi dari optional default params?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        }
    },
    {
        "id": 47,
        "title": "47. Optional Readonly Properties",
        "description": "<p><strong>Optional Readonly Properties</strong> adalah konsep penting dalam TypeScript.</p>\n<h4>🎯 Yang Dipelajari:</h4>\n<ul><li>Sintaks TypeScript yang type-safe</li><li>Perbedaan dengan JavaScript biasa</li><li>Best practices dan penggunaan praktis</li></ul>\n<h4>💻 Praktik:</h4>\n<ul><li>Tulis kode di editor interaktif</li><li>Lihat output dan validasi</li><li>Quiz untuk uji pemahaman</li></ul>",
        "defaultCode": "// Optional Readonly Properties\\nconsole.log(\"Belajar Optional Readonly Properties di TypeScript!\");",
        "expectedOutput": "Belajar Optional Readonly Properties di TypeScript!",
        "hint": "Pelajari konsep optional readonly properties dengan praktik langsung.",
        "quiz": {
            "question": "Apa fungsi dari optional readonly properties?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        }
    },
    {
        "id": 48,
        "title": "48. Parameter Utilities",
        "description": "<p><strong>Parameter Utilities</strong> adalah konsep penting dalam TypeScript.</p>\n<h4>🎯 Yang Dipelajari:</h4>\n<ul><li>Sintaks TypeScript yang type-safe</li><li>Perbedaan dengan JavaScript biasa</li><li>Best practices dan penggunaan praktis</li></ul>\n<h4>💻 Praktik:</h4>\n<ul><li>Tulis kode di editor interaktif</li><li>Lihat output dan validasi</li><li>Quiz untuk uji pemahaman</li></ul>",
        "defaultCode": "// Parameter Utilities\\nconsole.log(\"Belajar Parameter Utilities di TypeScript!\");",
        "expectedOutput": "Belajar Parameter Utilities di TypeScript!",
        "hint": "Pelajari konsep parameter utilities dengan praktik langsung.",
        "quiz": {
            "question": "Apa fungsi dari parameter utilities?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        }
    },
    {
        "id": 49,
        "title": "49. Parameters Constructorparameters",
        "description": "<p><strong>Parameters Constructorparameters</strong> adalah konsep penting dalam TypeScript.</p>\n<h4>🎯 Yang Dipelajari:</h4>\n<ul><li>Sintaks TypeScript yang type-safe</li><li>Perbedaan dengan JavaScript biasa</li><li>Best practices dan penggunaan praktis</li></ul>\n<h4>💻 Praktik:</h4>\n<ul><li>Tulis kode di editor interaktif</li><li>Lihat output dan validasi</li><li>Quiz untuk uji pemahaman</li></ul>",
        "defaultCode": "// Parameters Constructorparameters\\nconsole.log(\"Belajar Parameters Constructorparameters di TypeScript!\");",
        "expectedOutput": "Belajar Parameters Constructorparameters di TypeScript!",
        "hint": "Pelajari konsep parameters constructorparameters dengan praktik langsung.",
        "quiz": {
            "question": "Apa fungsi dari parameters constructorparameters?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        }
    },
    {
        "id": 50,
        "title": "50. Partial Required",
        "description": "<p><strong>Partial Required</strong> adalah konsep penting dalam TypeScript.</p>\n<h4>🎯 Yang Dipelajari:</h4>\n<ul><li>Sintaks TypeScript yang type-safe</li><li>Perbedaan dengan JavaScript biasa</li><li>Best practices dan penggunaan praktis</li></ul>\n<h4>💻 Praktik:</h4>\n<ul><li>Tulis kode di editor interaktif</li><li>Lihat output dan validasi</li><li>Quiz untuk uji pemahaman</li></ul>",
        "defaultCode": "// Partial Required\\nconsole.log(\"Belajar Partial Required di TypeScript!\");",
        "expectedOutput": "Belajar Partial Required di TypeScript!",
        "hint": "Pelajari konsep partial required dengan praktik langsung.",
        "quiz": {
            "question": "Apa fungsi dari partial required?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        }
    },
    {
        "id": 51,
        "title": "51. Path Mapping Module Resolution",
        "description": "<p><strong>Path Mapping Module Resolution</strong> adalah konsep penting dalam TypeScript.</p>\n<h4>🎯 Yang Dipelajari:</h4>\n<ul><li>Sintaks TypeScript yang type-safe</li><li>Perbedaan dengan JavaScript biasa</li><li>Best practices dan penggunaan praktis</li></ul>\n<h4>💻 Praktik:</h4>\n<ul><li>Tulis kode di editor interaktif</li><li>Lihat output dan validasi</li><li>Quiz untuk uji pemahaman</li></ul>",
        "defaultCode": "// Path Mapping Module Resolution\\nconsole.log(\"Belajar Path Mapping Module Resolution di TypeScript!\");",
        "expectedOutput": "Belajar Path Mapping Module Resolution di TypeScript!",
        "hint": "Pelajari konsep path mapping module resolution dengan praktik langsung.",
        "quiz": {
            "question": "Apa fungsi dari path mapping module resolution?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        }
    },
    {
        "id": 52,
        "title": "52. Pick Omit",
        "description": "<p><strong>Pick Omit</strong> adalah konsep penting dalam TypeScript.</p>\n<h4>🎯 Yang Dipelajari:</h4>\n<ul><li>Sintaks TypeScript yang type-safe</li><li>Perbedaan dengan JavaScript biasa</li><li>Best practices dan penggunaan praktis</li></ul>\n<h4>💻 Praktik:</h4>\n<ul><li>Tulis kode di editor interaktif</li><li>Lihat output dan validasi</li><li>Quiz untuk uji pemahaman</li></ul>",
        "defaultCode": "// Pick Omit\\nconsole.log(\"Belajar Pick Omit di TypeScript!\");",
        "expectedOutput": "Belajar Pick Omit di TypeScript!",
        "hint": "Pelajari konsep pick omit dengan praktik langsung.",
        "quiz": {
            "question": "Apa fungsi dari pick omit?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        }
    },
    {
        "id": 53,
        "title": "53. Prettier Integration",
        "description": "<p><strong>Prettier Integration</strong> adalah konsep penting dalam TypeScript.</p>\n<h4>🎯 Yang Dipelajari:</h4>\n<ul><li>Sintaks TypeScript yang type-safe</li><li>Perbedaan dengan JavaScript biasa</li><li>Best practices dan penggunaan praktis</li></ul>\n<h4>💻 Praktik:</h4>\n<ul><li>Tulis kode di editor interaktif</li><li>Lihat output dan validasi</li><li>Quiz untuk uji pemahaman</li></ul>",
        "defaultCode": "// Prettier Integration\\nconsole.log(\"Belajar Prettier Integration di TypeScript!\");",
        "expectedOutput": "Belajar Prettier Integration di TypeScript!",
        "hint": "Pelajari konsep prettier integration dengan praktik langsung.",
        "quiz": {
            "question": "Apa fungsi dari prettier integration?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        }
    },
    {
        "id": 54,
        "title": "54. Project Cli Tool",
        "description": "<p><strong>Project Cli Tool</strong> adalah konsep penting dalam TypeScript.</p>\n<h4>🎯 Yang Dipelajari:</h4>\n<ul><li>Sintaks TypeScript yang type-safe</li><li>Perbedaan dengan JavaScript biasa</li><li>Best practices dan penggunaan praktis</li></ul>\n<h4>💻 Praktik:</h4>\n<ul><li>Tulis kode di editor interaktif</li><li>Lihat output dan validasi</li><li>Quiz untuk uji pemahaman</li></ul>",
        "defaultCode": "// Project Cli Tool\\nconsole.log(\"Belajar Project Cli Tool di TypeScript!\");",
        "expectedOutput": "Belajar Project Cli Tool di TypeScript!",
        "hint": "Pelajari konsep project cli tool dengan praktik langsung.",
        "quiz": {
            "question": "Apa fungsi dari project cli tool?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        }
    },
    {
        "id": 55,
        "title": "55. Project React Ts",
        "description": "<p><strong>Project React Ts</strong> adalah konsep penting dalam TypeScript.</p>\n<h4>🎯 Yang Dipelajari:</h4>\n<ul><li>Sintaks TypeScript yang type-safe</li><li>Perbedaan dengan JavaScript biasa</li><li>Best practices dan penggunaan praktis</li></ul>\n<h4>💻 Praktik:</h4>\n<ul><li>Tulis kode di editor interaktif</li><li>Lihat output dan validasi</li><li>Quiz untuk uji pemahaman</li></ul>",
        "defaultCode": "// Project React Ts\\nconsole.log(\"Belajar Project React Ts di TypeScript!\");",
        "expectedOutput": "Belajar Project React Ts di TypeScript!",
        "hint": "Pelajari konsep project react ts dengan praktik langsung.",
        "quiz": {
            "question": "Apa fungsi dari project react ts?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        }
    },
    {
        "id": 56,
        "title": "56. Project Rest Api",
        "description": "<p><strong>Project Rest Api</strong> adalah konsep penting dalam TypeScript.</p>\n<h4>🎯 Yang Dipelajari:</h4>\n<ul><li>Sintaks TypeScript yang type-safe</li><li>Perbedaan dengan JavaScript biasa</li><li>Best practices dan penggunaan praktis</li></ul>\n<h4>💻 Praktik:</h4>\n<ul><li>Tulis kode di editor interaktif</li><li>Lihat output dan validasi</li><li>Quiz untuk uji pemahaman</li></ul>",
        "defaultCode": "// Project Rest Api\\nconsole.log(\"Belajar Project Rest Api di TypeScript!\");",
        "expectedOutput": "Belajar Project Rest Api di TypeScript!",
        "hint": "Pelajari konsep project rest api dengan praktik langsung.",
        "quiz": {
            "question": "Apa fungsi dari project rest api?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        }
    },
    {
        "id": 57,
        "title": "57. Project Setup Typescript",
        "description": "<p><strong>Project Setup Typescript</strong> adalah konsep penting dalam TypeScript.</p>\n<h4>🎯 Yang Dipelajari:</h4>\n<ul><li>Sintaks TypeScript yang type-safe</li><li>Perbedaan dengan JavaScript biasa</li><li>Best practices dan penggunaan praktis</li></ul>\n<h4>💻 Praktik:</h4>\n<ul><li>Tulis kode di editor interaktif</li><li>Lihat output dan validasi</li><li>Quiz untuk uji pemahaman</li></ul>",
        "defaultCode": "// Project Setup Typescript\\nconsole.log(\"Belajar Project Setup Typescript di TypeScript!\");",
        "expectedOutput": "Belajar Project Setup Typescript di TypeScript!",
        "hint": "Pelajari konsep project setup typescript dengan praktik langsung.",
        "quiz": {
            "question": "Apa fungsi dari project setup typescript?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        }
    },
    {
        "id": 58,
        "title": "58. Project Type Definitions",
        "description": "<p><strong>Project Type Definitions</strong> adalah konsep penting dalam TypeScript.</p>\n<h4>🎯 Yang Dipelajari:</h4>\n<ul><li>Sintaks TypeScript yang type-safe</li><li>Perbedaan dengan JavaScript biasa</li><li>Best practices dan penggunaan praktis</li></ul>\n<h4>💻 Praktik:</h4>\n<ul><li>Tulis kode di editor interaktif</li><li>Lihat output dan validasi</li><li>Quiz untuk uji pemahaman</li></ul>",
        "defaultCode": "// Project Type Definitions\\nconsole.log(\"Belajar Project Type Definitions di TypeScript!\");",
        "expectedOutput": "Belajar Project Type Definitions di TypeScript!",
        "hint": "Pelajari konsep project type definitions dengan praktik langsung.",
        "quiz": {
            "question": "Apa fungsi dari project type definitions?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        }
    },
    {
        "id": 59,
        "title": "59. Readonly Params",
        "description": "<p><strong>Readonly Params</strong> adalah konsep penting dalam TypeScript.</p>\n<h4>🎯 Yang Dipelajari:</h4>\n<ul><li>Sintaks TypeScript yang type-safe</li><li>Perbedaan dengan JavaScript biasa</li><li>Best practices dan penggunaan praktis</li></ul>\n<h4>💻 Praktik:</h4>\n<ul><li>Tulis kode di editor interaktif</li><li>Lihat output dan validasi</li><li>Quiz untuk uji pemahaman</li></ul>",
        "defaultCode": "// Readonly Params\\nconsole.log(\"Belajar Readonly Params di TypeScript!\");",
        "expectedOutput": "Belajar Readonly Params di TypeScript!",
        "hint": "Pelajari konsep readonly params dengan praktik langsung.",
        "quiz": {
            "question": "Apa fungsi dari readonly params?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        }
    },
    {
        "id": 60,
        "title": "60. Readonly Record",
        "description": "<p><strong>Readonly Record</strong> adalah konsep penting dalam TypeScript.</p>\n<h4>🎯 Yang Dipelajari:</h4>\n<ul><li>Sintaks TypeScript yang type-safe</li><li>Perbedaan dengan JavaScript biasa</li><li>Best practices dan penggunaan praktis</li></ul>\n<h4>💻 Praktik:</h4>\n<ul><li>Tulis kode di editor interaktif</li><li>Lihat output dan validasi</li><li>Quiz untuk uji pemahaman</li></ul>",
        "defaultCode": "// Readonly Record\\nconsole.log(\"Belajar Readonly Record di TypeScript!\");",
        "expectedOutput": "Belajar Readonly Record di TypeScript!",
        "hint": "Pelajari konsep readonly record dengan praktik langsung.",
        "quiz": {
            "question": "Apa fungsi dari readonly record?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        }
    },
    {
        "id": 61,
        "title": "61. Record Tuple",
        "description": "<p><strong>Record Tuple</strong> adalah konsep penting dalam TypeScript.</p>\n<h4>🎯 Yang Dipelajari:</h4>\n<ul><li>Sintaks TypeScript yang type-safe</li><li>Perbedaan dengan JavaScript biasa</li><li>Best practices dan penggunaan praktis</li></ul>\n<h4>💻 Praktik:</h4>\n<ul><li>Tulis kode di editor interaktif</li><li>Lihat output dan validasi</li><li>Quiz untuk uji pemahaman</li></ul>",
        "defaultCode": "// Record Tuple\\nconsole.log(\"Belajar Record Tuple di TypeScript!\");",
        "expectedOutput": "Belajar Record Tuple di TypeScript!",
        "hint": "Pelajari konsep record tuple dengan praktik langsung.",
        "quiz": {
            "question": "Apa fungsi dari record tuple?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        }
    },
    {
        "id": 62,
        "title": "62. Rest Spread",
        "description": "<p><strong>Rest Spread</strong> adalah konsep penting dalam TypeScript.</p>\n<h4>🎯 Yang Dipelajari:</h4>\n<ul><li>Sintaks TypeScript yang type-safe</li><li>Perbedaan dengan JavaScript biasa</li><li>Best practices dan penggunaan praktis</li></ul>\n<h4>💻 Praktik:</h4>\n<ul><li>Tulis kode di editor interaktif</li><li>Lihat output dan validasi</li><li>Quiz untuk uji pemahaman</li></ul>",
        "defaultCode": "// Rest Spread\\nconsole.log(\"Belajar Rest Spread di TypeScript!\");",
        "expectedOutput": "Belajar Rest Spread di TypeScript!",
        "hint": "Pelajari konsep rest spread dengan praktik langsung.",
        "quiz": {
            "question": "Apa fungsi dari rest spread?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        }
    },
    {
        "id": 63,
        "title": "63. Returntype Parameters Thistype",
        "description": "<p><strong>Returntype Parameters Thistype</strong> adalah konsep penting dalam TypeScript.</p>\n<h4>🎯 Yang Dipelajari:</h4>\n<ul><li>Sintaks TypeScript yang type-safe</li><li>Perbedaan dengan JavaScript biasa</li><li>Best practices dan penggunaan praktis</li></ul>\n<h4>💻 Praktik:</h4>\n<ul><li>Tulis kode di editor interaktif</li><li>Lihat output dan validasi</li><li>Quiz untuk uji pemahaman</li></ul>",
        "defaultCode": "// Returntype Parameters Thistype\\nconsole.log(\"Belajar Returntype Parameters Thistype di TypeScript!\");",
        "expectedOutput": "Belajar Returntype Parameters Thistype di TypeScript!",
        "hint": "Pelajari konsep returntype parameters thistype dengan praktik langsung.",
        "quiz": {
            "question": "Apa fungsi dari returntype parameters thistype?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        }
    },
    {
        "id": 64,
        "title": "64. Strict Mode Options",
        "description": "<p><strong>Strict Mode Options</strong> adalah konsep penting dalam TypeScript.</p>\n<h4>🎯 Yang Dipelajari:</h4>\n<ul><li>Sintaks TypeScript yang type-safe</li><li>Perbedaan dengan JavaScript biasa</li><li>Best practices dan penggunaan praktis</li></ul>\n<h4>💻 Praktik:</h4>\n<ul><li>Tulis kode di editor interaktif</li><li>Lihat output dan validasi</li><li>Quiz untuk uji pemahaman</li></ul>",
        "defaultCode": "// Strict Mode Options\\nconsole.log(\"Belajar Strict Mode Options di TypeScript!\");",
        "expectedOutput": "Belajar Strict Mode Options di TypeScript!",
        "hint": "Pelajari konsep strict mode options dengan praktik langsung.",
        "quiz": {
            "question": "Apa fungsi dari strict mode options?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        }
    },
    {
        "id": 65,
        "title": "65. Template Literal Types",
        "description": "<p><strong>Template Literal Types</strong> adalah konsep penting dalam TypeScript.</p>\n<h4>🎯 Yang Dipelajari:</h4>\n<ul><li>Sintaks TypeScript yang type-safe</li><li>Perbedaan dengan JavaScript biasa</li><li>Best practices dan penggunaan praktis</li></ul>\n<h4>💻 Praktik:</h4>\n<ul><li>Tulis kode di editor interaktif</li><li>Lihat output dan validasi</li><li>Quiz untuk uji pemahaman</li></ul>",
        "defaultCode": "// Template Literal Types\\nconsole.log(\"Belajar Template Literal Types di TypeScript!\");",
        "expectedOutput": "Belajar Template Literal Types di TypeScript!",
        "hint": "Pelajari konsep template literal types dengan praktik langsung.",
        "quiz": {
            "question": "Apa fungsi dari template literal types?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        }
    },
    {
        "id": 66,
        "title": "66. Tipe Primitif",
        "description": "<p><strong>Tipe Primitif</strong> adalah konsep penting dalam TypeScript.</p>\n<h4>🎯 Yang Dipelajari:</h4>\n<ul><li>Sintaks TypeScript yang type-safe</li><li>Perbedaan dengan JavaScript biasa</li><li>Best practices dan penggunaan praktis</li></ul>\n<h4>💻 Praktik:</h4>\n<ul><li>Tulis kode di editor interaktif</li><li>Lihat output dan validasi</li><li>Quiz untuk uji pemahaman</li></ul>",
        "defaultCode": "// Tipe Primitif\\nconsole.log(\"Belajar Tipe Primitif di TypeScript!\");",
        "expectedOutput": "Belajar Tipe Primitif di TypeScript!",
        "hint": "Pelajari konsep tipe primitif dengan praktik langsung.",
        "quiz": {
            "question": "Apa fungsi dari tipe primitif?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        }
    },
    {
        "id": 67,
        "title": "67. Tsconfig Json Struktur",
        "description": "<p><strong>Tsconfig Json Struktur</strong> adalah konsep penting dalam TypeScript.</p>\n<h4>🎯 Yang Dipelajari:</h4>\n<ul><li>Sintaks TypeScript yang type-safe</li><li>Perbedaan dengan JavaScript biasa</li><li>Best practices dan penggunaan praktis</li></ul>\n<h4>💻 Praktik:</h4>\n<ul><li>Tulis kode di editor interaktif</li><li>Lihat output dan validasi</li><li>Quiz untuk uji pemahaman</li></ul>",
        "defaultCode": "// Tsconfig Json Struktur\\nconsole.log(\"Belajar Tsconfig Json Struktur di TypeScript!\");",
        "expectedOutput": "Belajar Tsconfig Json Struktur di TypeScript!",
        "hint": "Pelajari konsep tsconfig json struktur dengan praktik langsung.",
        "quiz": {
            "question": "Apa fungsi dari tsconfig json struktur?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        }
    },
    {
        "id": 68,
        "title": "68. Type Aliases",
        "description": "<p><strong>Type Aliases</strong> adalah konsep penting dalam TypeScript.</p>\n<h4>🎯 Yang Dipelajari:</h4>\n<ul><li>Sintaks TypeScript yang type-safe</li><li>Perbedaan dengan JavaScript biasa</li><li>Best practices dan penggunaan praktis</li></ul>\n<h4>💻 Praktik:</h4>\n<ul><li>Tulis kode di editor interaktif</li><li>Lihat output dan validasi</li><li>Quiz untuk uji pemahaman</li></ul>",
        "defaultCode": "type ID = string | number;\\ntype Point = { x: number; y: number; };\\n\\nlet id: ID = \"abc123\";\\nlet pos: Point = { x: 10, y: 20 };\\nconsole.log(id, pos);",
        "expectedOutput": "abc123 { x: 10, y: 20 }",
        "hint": "type = alias untuk tipe yang kompleks.",
        "quiz": {
            "question": "Apa yang dipelajari di Type Aliases?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        }
    },
    {
        "id": 69,
        "title": "69. Type Assertions",
        "description": "<p><strong>Type Assertions</strong> adalah konsep penting dalam TypeScript.</p>\n<h4>🎯 Yang Dipelajari:</h4>\n<ul><li>Sintaks TypeScript yang type-safe</li><li>Perbedaan dengan JavaScript biasa</li><li>Best practices dan penggunaan praktis</li></ul>\n<h4>💻 Praktik:</h4>\n<ul><li>Tulis kode di editor interaktif</li><li>Lihat output dan validasi</li><li>Quiz untuk uji pemahaman</li></ul>",
        "defaultCode": "// Type Assertions\\nconsole.log(\"Belajar Type Assertions di TypeScript!\");",
        "expectedOutput": "Belajar Type Assertions di TypeScript!",
        "hint": "Pelajari konsep type assertions dengan praktik langsung.",
        "quiz": {
            "question": "Apa fungsi dari type assertions?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        }
    },
    {
        "id": 70,
        "title": "70. Type Guards",
        "description": "<p><strong>Type Guards</strong> adalah konsep penting dalam TypeScript.</p>\n<h4>🎯 Yang Dipelajari:</h4>\n<ul><li>Sintaks TypeScript yang type-safe</li><li>Perbedaan dengan JavaScript biasa</li><li>Best practices dan penggunaan praktis</li></ul>\n<h4>💻 Praktik:</h4>\n<ul><li>Tulis kode di editor interaktif</li><li>Lihat output dan validasi</li><li>Quiz untuk uji pemahaman</li></ul>",
        "defaultCode": "function print(val: string | number) {\\n    if (typeof val === \"string\") {\\n        console.log(\"String:\", val.toUpperCase());\\n    } else {\\n        console.log(\"Number:\", val.toFixed(2));\\n    }\\n}\\nprint(\"hello\");\\nprint(3.14159);",
        "expectedOutput": "String: HELLO\nNumber: 3.14",
        "hint": "typeof, instanceof, in = type guards.",
        "quiz": {
            "question": "Apa yang dipelajari di Type Guards?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        }
    },
    {
        "id": 71,
        "title": "71. Type Inference",
        "description": "<p><strong>Type Inference</strong> adalah konsep penting dalam TypeScript.</p>\n<h4>🎯 Yang Dipelajari:</h4>\n<ul><li>Sintaks TypeScript yang type-safe</li><li>Perbedaan dengan JavaScript biasa</li><li>Best practices dan penggunaan praktis</li></ul>\n<h4>💻 Praktik:</h4>\n<ul><li>Tulis kode di editor interaktif</li><li>Lihat output dan validasi</li><li>Quiz untuk uji pemahaman</li></ul>",
        "defaultCode": "// Type Inference\\nconsole.log(\"Belajar Type Inference di TypeScript!\");",
        "expectedOutput": "Belajar Type Inference di TypeScript!",
        "hint": "Pelajari konsep type inference dengan praktik langsung.",
        "quiz": {
            "question": "Apa fungsi dari type inference?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        }
    },
    {
        "id": 72,
        "title": "72. Type Narrowing",
        "description": "<p><strong>Type Narrowing</strong> adalah konsep penting dalam TypeScript.</p>\n<h4>🎯 Yang Dipelajari:</h4>\n<ul><li>Sintaks TypeScript yang type-safe</li><li>Perbedaan dengan JavaScript biasa</li><li>Best practices dan penggunaan praktis</li></ul>\n<h4>💻 Praktik:</h4>\n<ul><li>Tulis kode di editor interaktif</li><li>Lihat output dan validasi</li><li>Quiz untuk uji pemahaman</li></ul>",
        "defaultCode": "// Type Narrowing\\nconsole.log(\"Belajar Type Narrowing di TypeScript!\");",
        "expectedOutput": "Belajar Type Narrowing di TypeScript!",
        "hint": "Pelajari konsep type narrowing dengan praktik langsung.",
        "quiz": {
            "question": "Apa fungsi dari type narrowing?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        }
    },
    {
        "id": 73,
        "title": "73. Typescript Compiler Tsc",
        "description": "<p><strong>Typescript Compiler Tsc</strong> adalah konsep penting dalam TypeScript.</p>\n<h4>🎯 Yang Dipelajari:</h4>\n<ul><li>Sintaks TypeScript yang type-safe</li><li>Perbedaan dengan JavaScript biasa</li><li>Best practices dan penggunaan praktis</li></ul>\n<h4>💻 Praktik:</h4>\n<ul><li>Tulis kode di editor interaktif</li><li>Lihat output dan validasi</li><li>Quiz untuk uji pemahaman</li></ul>",
        "defaultCode": "// Typescript Compiler Tsc\\nconsole.log(\"Belajar Typescript Compiler Tsc di TypeScript!\");",
        "expectedOutput": "Belajar Typescript Compiler Tsc di TypeScript!",
        "hint": "Pelajari konsep typescript compiler tsc dengan praktik langsung.",
        "quiz": {
            "question": "Apa fungsi dari typescript compiler tsc?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        }
    },
    {
        "id": 74,
        "title": "74. Typescript Vs Javascript",
        "description": "<p><strong>Typescript Vs Javascript</strong> adalah konsep penting dalam TypeScript.</p>\n<h4>🎯 Yang Dipelajari:</h4>\n<ul><li>Sintaks TypeScript yang type-safe</li><li>Perbedaan dengan JavaScript biasa</li><li>Best practices dan penggunaan praktis</li></ul>\n<h4>💻 Praktik:</h4>\n<ul><li>Tulis kode di editor interaktif</li><li>Lihat output dan validasi</li><li>Quiz untuk uji pemahaman</li></ul>",
        "defaultCode": "// Typescript Vs Javascript\\nconsole.log(\"Belajar Typescript Vs Javascript di TypeScript!\");",
        "expectedOutput": "Belajar Typescript Vs Javascript di TypeScript!",
        "hint": "Pelajari konsep typescript vs javascript dengan praktik langsung.",
        "quiz": {
            "question": "Apa fungsi dari typescript vs javascript?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        }
    },
    {
        "id": 75,
        "title": "75. Union Types",
        "description": "<p><strong>Union Types</strong> adalah konsep penting dalam TypeScript.</p>\n<h4>🎯 Yang Dipelajari:</h4>\n<ul><li>Sintaks TypeScript yang type-safe</li><li>Perbedaan dengan JavaScript biasa</li><li>Best practices dan penggunaan praktis</li></ul>\n<h4>💻 Praktik:</h4>\n<ul><li>Tulis kode di editor interaktif</li><li>Lihat output dan validasi</li><li>Quiz untuk uji pemahaman</li></ul>",
        "defaultCode": "// Union Types\\nconsole.log(\"Belajar Union Types di TypeScript!\");",
        "expectedOutput": "Belajar Union Types di TypeScript!",
        "hint": "Pelajari konsep union types dengan praktik langsung.",
        "quiz": {
            "question": "Apa fungsi dari union types?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        }
    },
    {
        "id": 76,
        "title": "76. Using Js Libraries",
        "description": "<p><strong>Using Js Libraries</strong> adalah konsep penting dalam TypeScript.</p>\n<h4>🎯 Yang Dipelajari:</h4>\n<ul><li>Sintaks TypeScript yang type-safe</li><li>Perbedaan dengan JavaScript biasa</li><li>Best practices dan penggunaan praktis</li></ul>\n<h4>💻 Praktik:</h4>\n<ul><li>Tulis kode di editor interaktif</li><li>Lihat output dan validasi</li><li>Quiz untuk uji pemahaman</li></ul>",
        "defaultCode": "// Using Js Libraries\\nconsole.log(\"Belajar Using Js Libraries di TypeScript!\");",
        "expectedOutput": "Belajar Using Js Libraries di TypeScript!",
        "hint": "Pelajari konsep using js libraries dengan praktik langsung.",
        "quiz": {
            "question": "Apa fungsi dari using js libraries?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        }
    },
    {
        "id": 77,
        "title": "77. Void Never Dan Tipe Khusus",
        "description": "<p><strong>Void Never Dan Tipe Khusus</strong> adalah konsep penting dalam TypeScript.</p>\n<h4>🎯 Yang Dipelajari:</h4>\n<ul><li>Sintaks TypeScript yang type-safe</li><li>Perbedaan dengan JavaScript biasa</li><li>Best practices dan penggunaan praktis</li></ul>\n<h4>💻 Praktik:</h4>\n<ul><li>Tulis kode di editor interaktif</li><li>Lihat output dan validasi</li><li>Quiz untuk uji pemahaman</li></ul>",
        "defaultCode": "// Void Never Dan Tipe Khusus\\nconsole.log(\"Belajar Void Never Dan Tipe Khusus di TypeScript!\");",
        "expectedOutput": "Belajar Void Never Dan Tipe Khusus di TypeScript!",
        "hint": "Pelajari konsep void never dan tipe khusus dengan praktik langsung.",
        "quiz": {
            "question": "Apa fungsi dari void never dan tipe khusus?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        }
    }
];

// State
let currentLesson = 0;
let progress = JSON.parse(localStorage.getItem('typescript_progress') || '{}');

// Init
document.addEventListener('DOMContentLoaded', () => {
    renderNav();
    loadLesson(0);
    updateProgress();
});

function renderNav() {
    const nav = document.getElementById('lessons-nav');
    nav.innerHTML = lessons.map((l, i) => `
        <button onclick="loadLesson(${i})" 
            class="w-full text-left px-3 py-2 rounded text-sm hover:bg-gray-700 transition 
            ${i === currentLesson ? 'lesson-active' : ''} 
            ${progress[i] ? 'text-green-400' : 'text-gray-300'}"
            id="nav-${i}">
            ${l.title}
            ${progress[i] ? '<i class="fas fa-check ml-1"></i>' : ''}
        </button>
    `).join('');
}

function loadLesson(index) {
    currentLesson = index;
    const lesson = lessons[index];
    
    document.getElementById('current-lesson').innerHTML = `
        <h2 class="text-xl font-bold mb-4">${lesson.title}</h2>
        <div class="prose prose-invert max-w-none">${lesson.description}</div>
    `;
    
    document.getElementById('code-editor').value = lesson.defaultCode.replace(/\\n/g, '\n');
    document.getElementById('terminal-output').innerHTML = '<span class="text-gray-500">// Output akan muncul di sini</span>';
    document.getElementById('validation-msg').className = 'mt-4 p-3 rounded hidden';
    
    // Quiz
    if (lesson.quiz) {
        document.getElementById('quiz-section').classList.remove('hidden');
        document.getElementById('quiz-content').innerHTML = `
            <p class="font-medium">${lesson.quiz.question}</p>
            <div class="space-y-2">
                ${lesson.quiz.options.map((opt, i) => `
                    <label class="flex items-center space-x-2 cursor-pointer">
                        <input type="radio" name="quiz" value="${i}" class="text-blue-500">
                        <span>${opt}</span>
                    </label>
                `).join('')}
            </div>
        `;
    } else {
        document.getElementById('quiz-section').classList.add('hidden');
    }
    
    // Nav buttons
    document.getElementById('prev-btn').disabled = index === 0;
    document.getElementById('next-btn').disabled = index === lessons.length - 1;
    
    renderNav();
}

function runCode() {
    const code = document.getElementById('code-editor').value;
    const output = document.getElementById('terminal-output');
    const validation = document.getElementById('validation-msg');
    
    // Capture console.log
    let logs = [];
    const originalLog = console.log;
    console.log = (...args) => {
        logs.push(args.map(a => typeof a === 'object' ? JSON.stringify(a) : String(a)).join(' '));
    };
    
    try {
        eval(code);
        const result = logs.join('\n');
        output.innerHTML = `<span class="text-green-400">${escapeHtml(result)}</span>`;
        
        // Validate
        const expected = lessons[currentLesson].expectedOutput.replace(/\\n/g, '\n');
        if (result.trim() === expected.trim()) {
            validation.className = 'mt-4 p-3 rounded bg-green-900/50 border border-green-500 text-green-300';
            validation.innerHTML = '<i class="fas fa-check-circle mr-2"></i>Benar! Output sesuai.';
            progress[currentLesson] = true;
            localStorage.setItem('typescript_progress', JSON.stringify(progress));
            updateProgress();
            renderNav();
        } else {
            validation.className = 'mt-4 p-3 rounded bg-yellow-900/50 border border-yellow-500 text-yellow-300';
            validation.innerHTML = `<i class="fas fa-lightbulb mr-2"></i>Hint: ${lessons[currentLesson].hint}`;
        }
    } catch (e) {
        output.innerHTML = `<span class="text-red-400">Error: ${escapeHtml(e.message)}</span>`;
        validation.className = 'mt-4 p-3 rounded bg-red-900/50 border border-red-500 text-red-300';
        validation.innerHTML = `<i class="fas fa-times-circle mr-2"></i>${e.message}`;
    }
    
    console.log = originalLog;
}

function resetCode() {
    document.getElementById('code-editor').value = lessons[currentLesson].defaultCode.replace(/\\n/g, '\n');
    document.getElementById('terminal-output').innerHTML = '<span class="text-gray-500">// Output akan muncul di sini</span>';
}

function checkQuiz() {
    const selected = document.querySelector('input[name="quiz"]:checked');
    if (!selected) return alert('Pilih jawaban dulu!');
    
    const answer = parseInt(selected.value);
    const correct = lessons[currentLesson].quiz.answer;
    const msg = document.createElement('div');
    
    if (answer === correct) {
        msg.className = 'mt-3 p-3 rounded bg-green-900/50 border border-green-500 text-green-300';
        msg.innerHTML = '<i class="fas fa-check-circle mr-2"></i>Benar!';
    } else {
        msg.className = 'mt-3 p-3 rounded bg-red-900/50 border border-red-500 text-red-300';
        msg.innerHTML = '<i class="fas fa-times-circle mr-2"></i>Salah, coba lagi!';
    }
    
    document.getElementById('quiz-content').appendChild(msg);
    setTimeout(() => msg.remove(), 3000);
}

function nextLesson() { if (currentLesson < lessons.length - 1) loadLesson(currentLesson + 1); }
function prevLesson() { if (currentLesson > 0) loadLesson(currentLesson - 1); }

function updateProgress() {
    const done = Object.keys(progress).length;
    const pct = Math.round((done / lessons.length) * 100);
    document.getElementById('progress-text').textContent = pct + '%';
    document.getElementById('progress-bar').style.width = pct + '%';
}

function resetProgress() {
    if (!confirm('Reset semua progress?')) return;
    progress = {};
    localStorage.removeItem('typescript_progress');
    renderNav();
    updateProgress();
}

function escapeHtml(str) {
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
