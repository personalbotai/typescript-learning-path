// TypeScript Learning Path - Main Application
// 12 Modules, 77 Lessons
'use strict';

const MODULES = [
    {
        "id": 1,
        "title": "Dasar-Dasar TypeScript",
        "icon": "fas fa-play-circle",
        "description": "Pengenalan TypeScript, setup environment, dan kompilasi.",
        "lessonCount": 6
    },
    {
        "id": 2,
        "title": "Tipe Dasar TypeScript",
        "icon": "fas fa-shield-alt",
        "description": "Tipe primitif, type assertions, any, unknown, array, tuple, enum.",
        "lessonCount": 6
    },
    {
        "id": 3,
        "title": "Advanced Types",
        "icon": "fas fa-layer-group",
        "description": "Union, intersection, type guards, narrowing, conditional, mapped types.",
        "lessonCount": 10
    },
    {
        "id": 4,
        "title": "Interfaces & Type Aliases",
        "icon": "fas fa-shapes",
        "description": "Interface, optional/readonly, type aliases, extending.",
        "lessonCount": 6
    },
    {
        "id": 5,
        "title": "Functions TypeScript",
        "icon": "fas fa-code",
        "description": "Function types, overloads, rest params, arrow functions.",
        "lessonCount": 5
    },
    {
        "id": 6,
        "title": "Classes & OOP",
        "icon": "fas fa-sitemap",
        "description": "Class, inheritance, access modifiers, abstract classes.",
        "lessonCount": 6
    },
    {
        "id": 7,
        "title": "Generics",
        "icon": "fas fa-cubes",
        "description": "Generic functions, interfaces, classes, constraints, utility types.",
        "lessonCount": 6
    },
    {
        "id": 8,
        "title": "Modules & Namespaces",
        "icon": "fas fa-puzzle-piece",
        "description": "ES6 modules, barrel files, dynamic import, namespaces.",
        "lessonCount": 7
    },
    {
        "id": 9,
        "title": "Configuration & Tooling",
        "icon": "fas fa-cogs",
        "description": "tsconfig.json, compiler options, build tools, linting.",
        "lessonCount": 8
    },
    {
        "id": 10,
        "title": "JS Integration",
        "icon": "fab fa-js",
        "description": "Using JS libraries, .d.ts files, DefinitelyTyped, migration.",
        "lessonCount": 4
    },
    {
        "id": 11,
        "title": "Advanced Utility Types",
        "icon": "fas fa-toolbox",
        "description": "Partial, Required, Pick, Omit, Record, ReturnType, ThisType.",
        "lessonCount": 8
    },
    {
        "id": 12,
        "title": "Real-World Projects",
        "icon": "fas fa-rocket",
        "description": "CLI tool, React, REST API, type definitions, fullstack.",
        "lessonCount": 5
    }
];

const lessons = [
    {
        "id": 1,
        "title": "1. Apa itu TypeScript?",
        "module": "Dasar-Dasar TypeScript",
        "moduleId": 1,
        "mdFile": "lessons/apa-itu-typescript.md",
        "duration": "15 min",
        "description": "<p><strong>Apa itu TypeScript?</strong></p>",
        "defaultCode": "// TypeScript = JavaScript + Types\nconst message: string = \"Hello, TypeScript!\";\nconsole.log(message);",
        "expectedOutput": null,
        "hint": "Baca materi, lalu eksperimen di editor.",
        "quiz": {
            "question": "Apa konsep utama dari 'Apa itu TypeScript?'?",
            "options": [
                "Memahami Apa itu TypeScript?",
                "Tidak terkait Apa itu TypeScript?",
                "Kebalikan Apa itu TypeScript?",
                "Tidak ada jawaban"
            ],
            "answer": 0
        }
    },
    {
        "id": 2,
        "title": "2. TypeScript vs JavaScript",
        "module": "Dasar-Dasar TypeScript",
        "moduleId": 1,
        "mdFile": "lessons/typescript-vs-javascript.md",
        "duration": "10 min",
        "description": "<p><strong>TypeScript vs JavaScript</strong></p>",
        "defaultCode": "// Typed vs Untyped\nlet name: string = \"TypeScript\";\nlet year: number = 2024;\nconsole.log(name + \" \" + year);",
        "expectedOutput": null,
        "hint": "Baca materi, lalu eksperimen di editor.",
        "quiz": {
            "question": "Apa konsep utama dari 'TypeScript vs JavaScript'?",
            "options": [
                "Memahami TypeScript vs JavaScript",
                "Tidak terkait TypeScript vs JavaScript",
                "Kebalikan TypeScript vs JavaScript",
                "Tidak ada jawaban"
            ],
            "answer": 0
        }
    },
    {
        "id": 3,
        "title": "3. Instalasi TypeScript",
        "module": "Dasar-Dasar TypeScript",
        "moduleId": 1,
        "mdFile": "lessons/instalasi-typescript.md",
        "duration": "10 min",
        "description": "<p><strong>Instalasi TypeScript</strong></p>",
        "defaultCode": "// Cek versi TypeScript\nconst version: string = \"5.0+\";\nconsole.log(\"TypeScript \" + version);",
        "expectedOutput": null,
        "hint": "Baca materi, lalu eksperimen di editor.",
        "quiz": {
            "question": "Apa konsep utama dari 'Instalasi TypeScript'?",
            "options": [
                "Memahami Instalasi TypeScript",
                "Tidak terkait Instalasi TypeScript",
                "Kebalikan Instalasi TypeScript",
                "Tidak ada jawaban"
            ],
            "answer": 0
        }
    },
    {
        "id": 4,
        "title": "4. TypeScript Compiler (tsc)",
        "module": "Dasar-Dasar TypeScript",
        "moduleId": 1,
        "mdFile": "lessons/typescript-compiler-tsc.md",
        "duration": "15 min",
        "description": "<p><strong>TypeScript Compiler (tsc)</strong></p>",
        "defaultCode": "// tsc hello.ts -> hello.js\nconst greeting: string = \"Compiled!\";\nconsole.log(greeting);",
        "expectedOutput": null,
        "hint": "Baca materi, lalu eksperimen di editor.",
        "quiz": {
            "question": "Apa konsep utama dari 'TypeScript Compiler (tsc)'?",
            "options": [
                "Memahami TypeScript Compiler (tsc)",
                "Tidak terkait TypeScript Compiler (tsc)",
                "Kebalikan TypeScript Compiler (tsc)",
                "Tidak ada jawaban"
            ],
            "answer": 0
        }
    },
    {
        "id": 5,
        "title": "5. Project Setup TypeScript",
        "module": "Dasar-Dasar TypeScript",
        "moduleId": 1,
        "mdFile": "lessons/project-setup-typescript.md",
        "duration": "15 min",
        "description": "<p><strong>Project Setup TypeScript</strong></p>",
        "defaultCode": "// tsconfig.json project\ninterface Config {\n  strict: boolean;\n  target: string;\n}\nconst cfg: Config = { strict: true, target: \"ES2020\" };\nconsole.log(JSON.stringify(cfg));",
        "expectedOutput": null,
        "hint": "Baca materi, lalu eksperimen di editor.",
        "quiz": {
            "question": "Apa konsep utama dari 'Project Setup TypeScript'?",
            "options": [
                "Memahami Project Setup TypeScript",
                "Tidak terkait Project Setup TypeScript",
                "Kebalikan Project Setup TypeScript",
                "Tidak ada jawaban"
            ],
            "answer": 0
        }
    },
    {
        "id": 6,
        "title": "6. Hello World",
        "module": "Dasar-Dasar TypeScript",
        "moduleId": 1,
        "mdFile": "lessons/hello-world.md",
        "duration": "10 min",
        "description": "<p><strong>Hello World</strong></p>",
        "defaultCode": "// Program pertama\nfunction greet(name: string): string {\n  return `Hello, ${name}!`;\n}\nconsole.log(greet(\"TypeScript\"));",
        "expectedOutput": null,
        "hint": "Baca materi, lalu eksperimen di editor.",
        "quiz": {
            "question": "Apa konsep utama dari 'Hello World'?",
            "options": [
                "Memahami Hello World",
                "Tidak terkait Hello World",
                "Kebalikan Hello World",
                "Tidak ada jawaban"
            ],
            "answer": 0
        }
    },
    {
        "id": 7,
        "title": "7. Tipe Primitif",
        "module": "Tipe Dasar TypeScript",
        "moduleId": 2,
        "mdFile": "lessons/tipe-primitif.md",
        "duration": "20 min",
        "description": "<p><strong>Tipe Primitif</strong></p>",
        "defaultCode": "// Primitive types\nconst nama: string = \"Budi\";\nconst umur: number = 25;\nconst aktif: boolean = true;\nconsole.log(`${nama} - ${umur} - ${aktif}`);",
        "expectedOutput": null,
        "hint": "Baca materi, lalu eksperimen di editor.",
        "quiz": {
            "question": "Apa konsep utama dari 'Tipe Primitif'?",
            "options": [
                "Memahami Tipe Primitif",
                "Tidak terkait Tipe Primitif",
                "Kebalikan Tipe Primitif",
                "Tidak ada jawaban"
            ],
            "answer": 0
        }
    },
    {
        "id": 8,
        "title": "8. Type any dan unknown",
        "module": "Tipe Dasar TypeScript",
        "moduleId": 2,
        "mdFile": "lessons/any-dan-unknown.md",
        "duration": "15 min",
        "description": "<p><strong>Type any dan unknown</strong></p>",
        "defaultCode": "// any vs unknown\nlet flex: any = 42;\nflex = \"bisa apa saja\";\nconsole.log(flex);",
        "expectedOutput": null,
        "hint": "Baca materi, lalu eksperimen di editor.",
        "quiz": {
            "question": "Apa konsep utama dari 'Type any dan unknown'?",
            "options": [
                "Memahami Type any dan unknown",
                "Tidak terkait Type any dan unknown",
                "Kebalikan Type any dan unknown",
                "Tidak ada jawaban"
            ],
            "answer": 0
        }
    },
    {
        "id": 9,
        "title": "9. Array dan Tuple",
        "module": "Tipe Dasar TypeScript",
        "moduleId": 2,
        "mdFile": "lessons/array-dan-tuple.md",
        "duration": "20 min",
        "description": "<p><strong>Array dan Tuple</strong></p>",
        "defaultCode": "// Array & Tuple\nconst nums: number[] = [1, 2, 3];\nconst pair: [string, number] = [\"age\", 25];\nconsole.log(nums.length + \" \" + pair[1]);",
        "expectedOutput": null,
        "hint": "Baca materi, lalu eksperimen di editor.",
        "quiz": {
            "question": "Apa konsep utama dari 'Array dan Tuple'?",
            "options": [
                "Memahami Array dan Tuple",
                "Tidak terkait Array dan Tuple",
                "Kebalikan Array dan Tuple",
                "Tidak ada jawaban"
            ],
            "answer": 0
        }
    },
    {
        "id": 10,
        "title": "10. Enum dan Named Constants",
        "module": "Tipe Dasar TypeScript",
        "moduleId": 2,
        "mdFile": "lessons/enum-named-constants.md",
        "duration": "15 min",
        "description": "<p><strong>Enum dan Named Constants</strong></p>",
        "defaultCode": "// Enum\nenum Role { Admin, User, Guest }\nconst r: Role = Role.Admin;\nconsole.log(r);",
        "expectedOutput": null,
        "hint": "Baca materi, lalu eksperimen di editor.",
        "quiz": {
            "question": "Apa konsep utama dari 'Enum dan Named Constants'?",
            "options": [
                "Memahami Enum dan Named Constants",
                "Tidak terkait Enum dan Named Constants",
                "Kebalikan Enum dan Named Constants",
                "Tidak ada jawaban"
            ],
            "answer": 0
        }
    },
    {
        "id": 11,
        "title": "11. void, never, null, undefined",
        "module": "Tipe Dasar TypeScript",
        "moduleId": 2,
        "mdFile": "lessons/void-never-dan-tipe-khusus.md",
        "duration": "15 min",
        "description": "<p><strong>void, never, null, undefined</strong></p>",
        "defaultCode": "// void & never\nfunction log(msg: string): void {\n  console.log(msg);\n}\nlog(\"done\");",
        "expectedOutput": null,
        "hint": "Baca materi, lalu eksperimen di editor.",
        "quiz": {
            "question": "Apa konsep utama dari 'void, never, null, undefined'?",
            "options": [
                "Memahami void, never, null, undefined",
                "Tidak terkait void, never, null, undefined",
                "Kebalikan void, never, null, undefined",
                "Tidak ada jawaban"
            ],
            "answer": 0
        }
    },
    {
        "id": 12,
        "title": "12. Type Assertions",
        "module": "Tipe Dasar TypeScript",
        "moduleId": 2,
        "mdFile": "lessons/type-assertions.md",
        "duration": "15 min",
        "description": "<p><strong>Type Assertions</strong></p>",
        "defaultCode": "// Type assertion & satisfies (TS 5.x)\nconst val: unknown = \"hello\";\nconst len: number = (val as string).length;\nconsole.log(len);\n\n// satisfies: validasi shape tanpa widening (TS 4.9+/5.x)\ntype Color = \"red\" | \"blue\";\ntype Hex = `#${string}`;\nconst theme = { primary: \"#3b82f6\", accent: \"#60a5fa\" } satisfies Record<string, Hex>;\nconsole.log(theme.primary);",
        "expectedOutput": null,
        "hint": "Baca materi, lalu eksperimen di editor.",
        "quiz": {
            "question": "Apa konsep utama dari 'Type Assertions'?",
            "options": [
                "Memahami Type Assertions",
                "Tidak terkait Type Assertions",
                "Kebalikan Type Assertions",
                "Tidak ada jawaban"
            ],
            "answer": 0
        }
    },
    {
        "id": 13,
        "title": "13. Union Types",
        "module": "Advanced Types",
        "moduleId": 3,
        "mdFile": "lessons/union-types.md",
        "duration": "20 min",
        "description": "<p><strong>Union Types</strong></p>",
        "defaultCode": "// Union\nfunction fmt(id: string | number): string {\n  return `ID: ${id}`;\n}\nconsole.log(fmt(42));",
        "expectedOutput": null,
        "hint": "Baca materi, lalu eksperimen di editor.",
        "quiz": {
            "question": "Apa konsep utama dari 'Union Types'?",
            "options": [
                "Memahami Union Types",
                "Tidak terkait Union Types",
                "Kebalikan Union Types",
                "Tidak ada jawaban"
            ],
            "answer": 0
        }
    },
    {
        "id": 14,
        "title": "14. Intersection Types",
        "module": "Advanced Types",
        "moduleId": 3,
        "mdFile": "lessons/intersection-types.md",
        "duration": "20 min",
        "description": "<p><strong>Intersection Types</strong></p>",
        "defaultCode": "// Intersection\ntype A = { name: string };\ntype B = { age: number };\nconst p: A & B = { name: \"Budi\", age: 25 };\nconsole.log(p.name);",
        "expectedOutput": null,
        "hint": "Baca materi, lalu eksperimen di editor.",
        "quiz": {
            "question": "Apa konsep utama dari 'Intersection Types'?",
            "options": [
                "Memahami Intersection Types",
                "Tidak terkait Intersection Types",
                "Kebalikan Intersection Types",
                "Tidak ada jawaban"
            ],
            "answer": 0
        }
    },
    {
        "id": 15,
        "title": "15. Type Guards",
        "module": "Advanced Types",
        "moduleId": 3,
        "mdFile": "lessons/type-guards.md",
        "duration": "25 min",
        "description": "<p><strong>Type Guards</strong></p>",
        "defaultCode": "// Type guard\nfunction isStr(x: unknown): x is string {\n  return typeof x === \"string\";\n}\nconsole.log(isStr(\"hi\"));",
        "expectedOutput": null,
        "hint": "Baca materi, lalu eksperimen di editor.",
        "quiz": {
            "question": "Apa konsep utama dari 'Type Guards'?",
            "options": [
                "Memahami Type Guards",
                "Tidak terkait Type Guards",
                "Kebalikan Type Guards",
                "Tidak ada jawaban"
            ],
            "answer": 0
        }
    },
    {
        "id": 16,
        "title": "16. Type Narrowing",
        "module": "Advanced Types",
        "moduleId": 3,
        "mdFile": "lessons/type-narrowing.md",
        "duration": "20 min",
        "description": "<p><strong>Type Narrowing</strong></p>",
        "defaultCode": "// Narrowing\nfunction pad(n: number | string): string {\n  if (typeof n === \"number\") return n.toFixed(2);\n  return n;\n}\nconsole.log(pad(3.14159));",
        "expectedOutput": null,
        "hint": "Baca materi, lalu eksperimen di editor.",
        "quiz": {
            "question": "Apa konsep utama dari 'Type Narrowing'?",
            "options": [
                "Memahami Type Narrowing",
                "Tidak terkait Type Narrowing",
                "Kebalikan Type Narrowing",
                "Tidak ada jawaban"
            ],
            "answer": 0
        }
    },
    {
        "id": 17,
        "title": "17. Nullable Types",
        "module": "Advanced Types",
        "moduleId": 3,
        "mdFile": "lessons/nullable-types.md",
        "duration": "15 min",
        "description": "<p><strong>Nullable Types</strong></p>",
        "defaultCode": "// Nullable\nfunction greet(name?: string): string {\n  return `Hi, ${name ?? \"Guest\"}!`;\n}\nconsole.log(greet());",
        "expectedOutput": null,
        "hint": "Baca materi, lalu eksperimen di editor.",
        "quiz": {
            "question": "Apa konsep utama dari 'Nullable Types'?",
            "options": [
                "Memahami Nullable Types",
                "Tidak terkait Nullable Types",
                "Kebalikan Nullable Types",
                "Tidak ada jawaban"
            ],
            "answer": 0
        }
    },
    {
        "id": 18,
        "title": "18. Type Inference",
        "module": "Advanced Types",
        "moduleId": 3,
        "mdFile": "lessons/type-inference.md",
        "duration": "15 min",
        "description": "<p><strong>Type Inference</strong></p>",
        "defaultCode": "// Inference\nlet msg = \"auto string\";\nlet count = 10;\nconsole.log(typeof msg + \" \" + typeof count);",
        "expectedOutput": null,
        "hint": "Baca materi, lalu eksperimen di editor.",
        "quiz": {
            "question": "Apa konsep utama dari 'Type Inference'?",
            "options": [
                "Memahami Type Inference",
                "Tidak terkait Type Inference",
                "Kebalikan Type Inference",
                "Tidak ada jawaban"
            ],
            "answer": 0
        }
    },
    {
        "id": 19,
        "title": "19. Indexed Access Types",
        "module": "Advanced Types",
        "moduleId": 3,
        "mdFile": "lessons/indexed-access-types.md",
        "duration": "20 min",
        "description": "<p><strong>Indexed Access Types</strong></p>",
        "defaultCode": "// Indexed access\ninterface User { name: string; age: number; }\ntype Age = User[\"age\"];\nconst a: Age = 25;\nconsole.log(a);",
        "expectedOutput": null,
        "hint": "Baca materi, lalu eksperimen di editor.",
        "quiz": {
            "question": "Apa konsep utama dari 'Indexed Access Types'?",
            "options": [
                "Memahami Indexed Access Types",
                "Tidak terkait Indexed Access Types",
                "Kebalikan Indexed Access Types",
                "Tidak ada jawaban"
            ],
            "answer": 0
        }
    },
    {
        "id": 20,
        "title": "20. Conditional Types",
        "module": "Advanced Types",
        "moduleId": 3,
        "mdFile": "lessons/conditional-types.md",
        "duration": "25 min",
        "description": "<p><strong>Conditional Types</strong></p>",
        "defaultCode": "// Conditional\ntype IsStr<T> = T extends string ? true : false;\nconst t: IsStr<string> = true;\nconsole.log(t);",
        "expectedOutput": null,
        "hint": "Baca materi, lalu eksperimen di editor.",
        "quiz": {
            "question": "Apa konsep utama dari 'Conditional Types'?",
            "options": [
                "Memahami Conditional Types",
                "Tidak terkait Conditional Types",
                "Kebalikan Conditional Types",
                "Tidak ada jawaban"
            ],
            "answer": 0
        }
    },
    {
        "id": 21,
        "title": "21. Mapped Types",
        "module": "Advanced Types",
        "moduleId": 3,
        "mdFile": "lessons/mapped-types.md",
        "duration": "25 min",
        "description": "<p><strong>Mapped Types</strong></p>",
        "defaultCode": "// Mapped\ntype Opt<T> = { [K in keyof T]?: T[K] };\ninterface U { name: string }\nconst u: Opt<U> = {};\nconsole.log(JSON.stringify(u));",
        "expectedOutput": null,
        "hint": "Baca materi, lalu eksperimen di editor.",
        "quiz": {
            "question": "Apa konsep utama dari 'Mapped Types'?",
            "options": [
                "Memahami Mapped Types",
                "Tidak terkait Mapped Types",
                "Kebalikan Mapped Types",
                "Tidak ada jawaban"
            ],
            "answer": 0
        }
    },
    {
        "id": 22,
        "title": "22. Template Literal Types",
        "module": "Advanced Types",
        "moduleId": 3,
        "mdFile": "lessons/template-literal-types.md",
        "duration": "20 min",
        "description": "<p><strong>Template Literal Types</strong></p>",
        "defaultCode": "// Template literal\ntype Greet = `Hello, ${string}!`;\nconst g: Greet = \"Hello, TS!\";\nconsole.log(g);",
        "expectedOutput": null,
        "hint": "Baca materi, lalu eksperimen di editor.",
        "quiz": {
            "question": "Apa konsep utama dari 'Template Literal Types'?",
            "options": [
                "Memahami Template Literal Types",
                "Tidak terkait Template Literal Types",
                "Kebalikan Template Literal Types",
                "Tidak ada jawaban"
            ],
            "answer": 0
        }
    },
    {
        "id": 23,
        "title": "23. Interface Dasar",
        "module": "Interfaces & Type Aliases",
        "moduleId": 4,
        "mdFile": "lessons/interface-dasar.md",
        "duration": "20 min",
        "description": "<p><strong>Interface Dasar</strong></p>",
        "defaultCode": "// Interface\ninterface User {\n  name: string;\n  age: number;\n}\nconst u: User = { name: \"Budi\", age: 25 };\nconsole.log(u.name);",
        "expectedOutput": null,
        "hint": "Baca materi, lalu eksperimen di editor.",
        "quiz": {
            "question": "Apa konsep utama dari 'Interface Dasar'?",
            "options": [
                "Memahami Interface Dasar",
                "Tidak terkait Interface Dasar",
                "Kebalikan Interface Dasar",
                "Tidak ada jawaban"
            ],
            "answer": 0
        }
    },
    {
        "id": 24,
        "title": "24. Optional & Readonly Properties",
        "module": "Interfaces & Type Aliases",
        "moduleId": 4,
        "mdFile": "lessons/optional-readonly-properties.md",
        "duration": "15 min",
        "description": "<p><strong>Optional & Readonly Properties</strong></p>",
        "defaultCode": "// Optional & readonly\ninterface Cfg {\n  readonly id: number;\n  name?: string;\n}\nconst c: Cfg = { id: 1 };\nconsole.log(c.id);",
        "expectedOutput": null,
        "hint": "Baca materi, lalu eksperimen di editor.",
        "quiz": {
            "question": "Apa konsep utama dari 'Optional dan Readonly Properties'?",
            "options": [
                "Memahami Optional dan Readonly Properties",
                "Tidak terkait Optional dan Readonly Properties",
                "Kebalikan Optional dan Readonly Properties",
                "Tidak ada jawaban"
            ],
            "answer": 0
        }
    },
    {
        "id": 25,
        "title": "25. Type Aliases",
        "module": "Interfaces & Type Aliases",
        "moduleId": 4,
        "mdFile": "lessons/type-aliases.md",
        "duration": "15 min",
        "description": "<p><strong>Type Aliases</strong></p>",
        "defaultCode": "// Type alias\ntype ID = string | number;\nconst id: ID = \"abc-123\";\nconsole.log(id);",
        "expectedOutput": null,
        "hint": "Baca materi, lalu eksperimen di editor.",
        "quiz": {
            "question": "Apa konsep utama dari 'Type Aliases'?",
            "options": [
                "Memahami Type Aliases",
                "Tidak terkait Type Aliases",
                "Kebalikan Type Aliases",
                "Tidak ada jawaban"
            ],
            "answer": 0
        }
    },
    {
        "id": 26,
        "title": "26. Interface vs Type Alias",
        "module": "Interfaces & Type Aliases",
        "moduleId": 4,
        "mdFile": "lessons/interface-vs-type-alias.md",
        "duration": "20 min",
        "description": "<p><strong>Interface vs Type Alias</strong></p>",
        "defaultCode": "// Interface extends\ninterface A { x: number }\ninterface B extends A { y: string }\nconst b: B = { x: 1, y: \"hi\" };\nconsole.log(b.x + b.y);",
        "expectedOutput": null,
        "hint": "Baca materi, lalu eksperimen di editor.",
        "quiz": {
            "question": "Apa konsep utama dari 'Interface vs Type Alias'?",
            "options": [
                "Memahami Interface vs Type Alias",
                "Tidak terkait Interface vs Type Alias",
                "Kebalikan Interface vs Type Alias",
                "Tidak ada jawaban"
            ],
            "answer": 0
        }
    },
    {
        "id": 27,
        "title": "27. Extending Interfaces",
        "module": "Interfaces & Type Aliases",
        "moduleId": 4,
        "mdFile": "lessons/extending-interfaces-types.md",
        "duration": "20 min",
        "description": "<p><strong>Extending Interfaces</strong></p>",
        "defaultCode": "// Extending\ninterface Animal { name: string }\ninterface Dog extends Animal { breed: string }\nconst d: Dog = { name: \"Rex\", breed: \"Lab\" };\nconsole.log(d.breed);",
        "expectedOutput": null,
        "hint": "Baca materi, lalu eksperimen di editor.",
        "quiz": {
            "question": "Apa konsep utama dari 'Extending Interfaces'?",
            "options": [
                "Memahami Extending Interfaces",
                "Tidak terkait Extending Interfaces",
                "Kebalikan Extending Interfaces",
                "Tidak ada jawaban"
            ],
            "answer": 0
        }
    },
    {
        "id": 28,
        "title": "28. Index Signatures",
        "module": "Interfaces & Type Aliases",
        "moduleId": 4,
        "mdFile": "lessons/index-signatures.md",
        "duration": "15 min",
        "description": "<p><strong>Index Signatures</strong></p>",
        "defaultCode": "// Index signature\ninterface Dict {\n  [key: string]: number;\n}\nconst scores: Dict = { math: 90 };\nconsole.log(scores.math);",
        "expectedOutput": null,
        "hint": "Baca materi, lalu eksperimen di editor.",
        "quiz": {
            "question": "Apa konsep utama dari 'Index Signatures'?",
            "options": [
                "Memahami Index Signatures",
                "Tidak terkait Index Signatures",
                "Kebalikan Index Signatures",
                "Tidak ada jawaban"
            ],
            "answer": 0
        }
    },
    {
        "id": 29,
        "title": "29. Function Types",
        "module": "Functions TypeScript",
        "moduleId": 5,
        "mdFile": "lessons/function-types.md",
        "duration": "20 min",
        "description": "<p><strong>Function Types</strong></p>",
        "defaultCode": "// Function type\ntype Add = (a: number, b: number) => number;\nconst add: Add = (a, b) => a + b;\nconsole.log(add(2, 3));",
        "expectedOutput": null,
        "hint": "Baca materi, lalu eksperimen di editor.",
        "quiz": {
            "question": "Apa konsep utama dari 'Function Types'?",
            "options": [
                "Memahami Function Types",
                "Tidak terkait Function Types",
                "Kebalikan Function Types",
                "Tidak ada jawaban"
            ],
            "answer": 0
        }
    },
    {
        "id": 30,
        "title": "30. Rest & Spread",
        "module": "Functions TypeScript",
        "moduleId": 5,
        "mdFile": "lessons/rest-spread.md",
        "duration": "15 min",
        "description": "<p><strong>Rest & Spread</strong></p>",
        "defaultCode": "// Rest & spread\nfunction sum(...nums: number[]): number {\n  return nums.reduce((a, b) => a + b, 0);\n}\nconsole.log(sum(1, 2, 3));",
        "expectedOutput": null,
        "hint": "Baca materi, lalu eksperimen di editor.",
        "quiz": {
            "question": "Apa konsep utama dari 'Rest dan Spread'?",
            "options": [
                "Memahami Rest dan Spread",
                "Tidak terkait Rest dan Spread",
                "Kebalikan Rest dan Spread",
                "Tidak ada jawaban"
            ],
            "answer": 0
        }
    },
    {
        "id": 31,
        "title": "31. Optional & Default Params",
        "module": "Functions TypeScript",
        "moduleId": 5,
        "mdFile": "lessons/optional-default-params.md",
        "duration": "15 min",
        "description": "<p><strong>Optional & Default Params</strong></p>",
        "defaultCode": "// Default param\nfunction greet(n: string = \"Guest\"): string {\n  return `Hi, ${n}!`;\n}\nconsole.log(greet());",
        "expectedOutput": null,
        "hint": "Baca materi, lalu eksperimen di editor.",
        "quiz": {
            "question": "Apa konsep utama dari 'Optional dan Default Params'?",
            "options": [
                "Memahami Optional dan Default Params",
                "Tidak terkait Optional dan Default Params",
                "Kebalikan Optional dan Default Params",
                "Tidak ada jawaban"
            ],
            "answer": 0
        }
    },
    {
        "id": 32,
        "title": "32. Function Overloads",
        "module": "Functions TypeScript",
        "moduleId": 5,
        "mdFile": "lessons/function-overloads.md",
        "duration": "20 min",
        "description": "<p><strong>Function Overloads</strong></p>",
        "defaultCode": "// Overload\nfunction pick(x: string): string;\nfunction pick(x: number): number;\nfunction pick(x: any): any { return x; }\nconsole.log(pick(\"a\"));",
        "expectedOutput": null,
        "hint": "Baca materi, lalu eksperimen di editor.",
        "quiz": {
            "question": "Apa konsep utama dari 'Function Overloads'?",
            "options": [
                "Memahami Function Overloads",
                "Tidak terkait Function Overloads",
                "Kebalikan Function Overloads",
                "Tidak ada jawaban"
            ],
            "answer": 0
        }
    },
    {
        "id": 33,
        "title": "33. Arrow Functions & Types",
        "module": "Functions TypeScript",
        "moduleId": 5,
        "mdFile": "lessons/arrow-functions-types.md",
        "duration": "15 min",
        "description": "<p><strong>Arrow Functions & Types</strong></p>",
        "defaultCode": "// Arrow\nconst double = (n: number): number => n * 2;\nconsole.log(double(21));",
        "expectedOutput": null,
        "hint": "Baca materi, lalu eksperimen di editor.",
        "quiz": {
            "question": "Apa konsep utama dari 'Arrow Functions dan Types'?",
            "options": [
                "Memahami Arrow Functions dan Types",
                "Tidak terkait Arrow Functions dan Types",
                "Kebalikan Arrow Functions dan Types",
                "Tidak ada jawaban"
            ],
            "answer": 0
        }
    },
    {
        "id": 34,
        "title": "34. Class Dasar",
        "module": "Classes & OOP",
        "moduleId": 6,
        "mdFile": "lessons/class-dasar.md",
        "duration": "20 min",
        "description": "<p><strong>Class Dasar</strong></p>",
        "defaultCode": "// Class & Decorators TS 5.x (TC39 stage-3)\nfunction sealed<T extends { new(...args:any[]): {} }>(ctor: T) { Object.seal(ctor); return ctor; }\n@sealed\nclass Person {\n  constructor(public name: string) {}\n  greet(): string { return `Hi, ${this.name}`; }\n}\nconsole.log(new Person(\"Budi\").greet());",
        "expectedOutput": null,
        "hint": "Baca materi, lalu eksperimen di editor.",
        "quiz": {
            "question": "Apa konsep utama dari 'Class Dasar'?",
            "options": [
                "Memahami Class Dasar",
                "Tidak terkait Class Dasar",
                "Kebalikan Class Dasar",
                "Tidak ada jawaban"
            ],
            "answer": 0
        }
    },
    {
        "id": 35,
        "title": "35. Inheritance (extends/super)",
        "module": "Classes & OOP",
        "moduleId": 6,
        "mdFile": "lessons/inheritance-extends-super.md",
        "duration": "20 min",
        "description": "<p><strong>Inheritance (extends/super)</strong></p>",
        "defaultCode": "// Inheritance\nclass Animal {\n  constructor(public name: string) {}\n}\nclass Dog extends Animal {\n  bark(): string { return `${this.name} barks!`; }\n}\nconsole.log(new Dog(\"Rex\").bark());",
        "expectedOutput": null,
        "hint": "Baca materi, lalu eksperimen di editor.",
        "quiz": {
            "question": "Apa konsep utama dari 'Inheritance (extends/super)'?",
            "options": [
                "Memahami Inheritance (extends/super)",
                "Tidak terkait Inheritance (extends/super)",
                "Kebalikan Inheritance (extends/super)",
                "Tidak ada jawaban"
            ],
            "answer": 0
        }
    },
    {
        "id": 36,
        "title": "36. Access Modifiers",
        "module": "Classes & OOP",
        "moduleId": 6,
        "mdFile": "lessons/access-modifiers.md",
        "duration": "20 min",
        "description": "<p><strong>Access Modifiers</strong></p>",
        "defaultCode": "// Modifiers\nclass Acc {\n  private secret = 42;\n  getSecret(): number { return this.secret; }\n}\nconsole.log(new Acc().getSecret());",
        "expectedOutput": null,
        "hint": "Baca materi, lalu eksperimen di editor.",
        "quiz": {
            "question": "Apa konsep utama dari 'Access Modifiers'?",
            "options": [
                "Memahami Access Modifiers",
                "Tidak terkait Access Modifiers",
                "Kebalikan Access Modifiers",
                "Tidak ada jawaban"
            ],
            "answer": 0
        }
    },
    {
        "id": 37,
        "title": "37. Constructor Parameter Properties",
        "module": "Classes & OOP",
        "moduleId": 6,
        "mdFile": "lessons/constructor-parameter-properties.md",
        "duration": "15 min",
        "description": "<p><strong>Constructor Parameter Properties</strong></p>",
        "defaultCode": "// Param props\nclass Point {\n  constructor(public x: number, public y: number) {}\n}\nconsole.log(new Point(1, 2).x);",
        "expectedOutput": null,
        "hint": "Baca materi, lalu eksperimen di editor.",
        "quiz": {
            "question": "Apa konsep utama dari 'Constructor Parameter Properties'?",
            "options": [
                "Memahami Constructor Parameter Properties",
                "Tidak terkait Constructor Parameter Properties",
                "Kebalikan Constructor Parameter Properties",
                "Tidak ada jawaban"
            ],
            "answer": 0
        }
    },
    {
        "id": 38,
        "title": "38. Abstract Classes",
        "module": "Classes & OOP",
        "moduleId": 6,
        "mdFile": "lessons/abstract-classes.md",
        "duration": "20 min",
        "description": "<p><strong>Abstract Classes</strong></p>",
        "defaultCode": "// Abstract\nabstract class Shape {\n  abstract area(): number;\n}\nclass Circle extends Shape {\n  constructor(private r: number) { super(); }\n  area(): number { return Math.PI * this.r ** 2; }\n}\nconsole.log(new Circle(2).area().toFixed(2));",
        "expectedOutput": null,
        "hint": "Baca materi, lalu eksperimen di editor.",
        "quiz": {
            "question": "Apa konsep utama dari 'Abstract Classes'?",
            "options": [
                "Memahami Abstract Classes",
                "Tidak terkait Abstract Classes",
                "Kebalikan Abstract Classes",
                "Tidak ada jawaban"
            ],
            "answer": 0
        }
    },
    {
        "id": 39,
        "title": "39. Readonly & Static",
        "module": "Classes & OOP",
        "moduleId": 6,
        "mdFile": "lessons/readonly-params.md",
        "duration": "15 min",
        "description": "<p><strong>Readonly & Static</strong></p>",
        "defaultCode": "// Readonly\nclass Cfg {\n  constructor(public readonly id: number) {}\n}\nconsole.log(new Cfg(7).id);",
        "expectedOutput": null,
        "hint": "Baca materi, lalu eksperimen di editor.",
        "quiz": {
            "question": "Apa konsep utama dari 'Readonly dan Static'?",
            "options": [
                "Memahami Readonly dan Static",
                "Tidak terkait Readonly dan Static",
                "Kebalikan Readonly dan Static",
                "Tidak ada jawaban"
            ],
            "answer": 0
        }
    },
    {
        "id": 40,
        "title": "40. Generic Functions Dasar",
        "module": "Generics",
        "moduleId": 7,
        "mdFile": "lessons/generic-functions-dasar.md",
        "duration": "25 min",
        "description": "<p><strong>Generic Functions Dasar</strong></p>",
        "defaultCode": "// Generic fn & const type params (TS 5.0)\nfunction identity<T>(x: T): T { return x; }\nconsole.log(identity<string>(\"hi\"));\n\n// const type param: preserve literals\nfunction withConst<const T>(arr: T): T { return arr; }\nconst arr = withConst([\"ts\", \"5.x\"] as const);\nconsole.log(arr[0]);",
        "expectedOutput": null,
        "hint": "Baca materi, lalu eksperimen di editor.",
        "quiz": {
            "question": "Apa konsep utama dari 'Generic Functions Dasar'?",
            "options": [
                "Memahami Generic Functions Dasar",
                "Tidak terkait Generic Functions Dasar",
                "Kebalikan Generic Functions Dasar",
                "Tidak ada jawaban"
            ],
            "answer": 0
        }
    },
    {
        "id": 41,
        "title": "41. Generic Interfaces & Classes",
        "module": "Generics",
        "moduleId": 7,
        "mdFile": "lessons/generic-interfaces-classes.md",
        "duration": "25 min",
        "description": "<p><strong>Generic Interfaces & Classes</strong></p>",
        "defaultCode": "// Generic interface\ninterface Box<T> { value: T }\nconst b: Box<number> = { value: 42 };\nconsole.log(b.value);",
        "expectedOutput": null,
        "hint": "Baca materi, lalu eksperimen di editor.",
        "quiz": {
            "question": "Apa konsep utama dari 'Generic Interfaces dan Classes'?",
            "options": [
                "Memahami Generic Interfaces dan Classes",
                "Tidak terkait Generic Interfaces dan Classes",
                "Kebalikan Generic Interfaces dan Classes",
                "Tidak ada jawaban"
            ],
            "answer": 0
        }
    },
    {
        "id": 42,
        "title": "42. Generic Constraints",
        "module": "Generics",
        "moduleId": 7,
        "mdFile": "lessons/generic-constraints.md",
        "duration": "20 min",
        "description": "<p><strong>Generic Constraints</strong></p>",
        "defaultCode": "// Constraint\nfunction longest<T extends { length: number }>(x: T): number {\n  return x.length;\n}\nconsole.log(longest(\"hello\"));",
        "expectedOutput": null,
        "hint": "Baca materi, lalu eksperimen di editor.",
        "quiz": {
            "question": "Apa konsep utama dari 'Generic Constraints'?",
            "options": [
                "Memahami Generic Constraints",
                "Tidak terkait Generic Constraints",
                "Kebalikan Generic Constraints",
                "Tidak ada jawaban"
            ],
            "answer": 0
        }
    },
    {
        "id": 43,
        "title": "43. Default Type Parameters",
        "module": "Generics",
        "moduleId": 7,
        "mdFile": "lessons/default-type-params.md",
        "duration": "15 min",
        "description": "<p><strong>Default Type Parameters</strong></p>",
        "defaultCode": "// Default param\ninterface Store<T = string> { item: T }\nconst s: Store = { item: \"default string\" };\nconsole.log(s.item);",
        "expectedOutput": null,
        "hint": "Baca materi, lalu eksperimen di editor.",
        "quiz": {
            "question": "Apa konsep utama dari 'Default Type Parameters'?",
            "options": [
                "Memahami Default Type Parameters",
                "Tidak terkait Default Type Parameters",
                "Kebalikan Default Type Parameters",
                "Tidak ada jawaban"
            ],
            "answer": 0
        }
    },
    {
        "id": 44,
        "title": "44. Generic Utility Types",
        "module": "Generics",
        "moduleId": 7,
        "mdFile": "lessons/generic-utility-types.md",
        "duration": "20 min",
        "description": "<p><strong>Generic Utility Types</strong></p>",
        "defaultCode": "// Utility\ninterface Todo { title: string; done: boolean }\nconst t: Partial<Todo> = { title: \"Belajar\" };\nconsole.log(t.title);",
        "expectedOutput": null,
        "hint": "Baca materi, lalu eksperimen di editor.",
        "quiz": {
            "question": "Apa konsep utama dari 'Generic Utility Types'?",
            "options": [
                "Memahami Generic Utility Types",
                "Tidak terkait Generic Utility Types",
                "Kebalikan Generic Utility Types",
                "Tidak ada jawaban"
            ],
            "answer": 0
        }
    },
    {
        "id": 45,
        "title": "45. Parameter Utilities",
        "module": "Generics",
        "moduleId": 7,
        "mdFile": "lessons/parameter-utilities.md",
        "duration": "25 min",
        "description": "<p><strong>Parameter Utilities</strong></p>",
        "defaultCode": "// Partial & Pick\ninterface U { name: string; age: number }\nconst p: Partial<U> = { name: \"Budi\" };\nconsole.log(p.name);",
        "expectedOutput": null,
        "hint": "Baca materi, lalu eksperimen di editor.",
        "quiz": {
            "question": "Apa konsep utama dari 'Parameter Utilities'?",
            "options": [
                "Memahami Parameter Utilities",
                "Tidak terkait Parameter Utilities",
                "Kebalikan Parameter Utilities",
                "Tidak ada jawaban"
            ],
            "answer": 0
        }
    },
    {
        "id": 46,
        "title": "46. ES6 Modules (import/export)",
        "module": "Modules & Namespaces",
        "moduleId": 8,
        "mdFile": "lessons/es6-modules-import-export.md",
        "duration": "20 min",
        "description": "<p><strong>ES6 Modules (import/export)</strong></p>",
        "defaultCode": "// Modules\nconst PI: number = 3.14;\nfunction circle(r: number): number { return PI * r * r; }\nconsole.log(circle(2).toFixed(2));",
        "expectedOutput": null,
        "hint": "Baca materi, lalu eksperimen di editor.",
        "quiz": {
            "question": "Apa konsep utama dari 'ES6 Modules (import/export)'?",
            "options": [
                "Memahami ES6 Modules (import/export)",
                "Tidak terkait ES6 Modules (import/export)",
                "Kebalikan ES6 Modules (import/export)",
                "Tidak ada jawaban"
            ],
            "answer": 0
        }
    },
    {
        "id": 47,
        "title": "47. Default vs Named Export",
        "module": "Modules & Namespaces",
        "moduleId": 8,
        "mdFile": "lessons/default-vs-named-export.md",
        "duration": "15 min",
        "description": "<p><strong>Default vs Named Export</strong></p>",
        "defaultCode": "// Named export pattern\nconst ver: string = \"1.0.0\";\nconsole.log(\"v\" + ver);",
        "expectedOutput": null,
        "hint": "Baca materi, lalu eksperimen di editor.",
        "quiz": {
            "question": "Apa konsep utama dari 'Default vs Named Export'?",
            "options": [
                "Memahami Default vs Named Export",
                "Tidak terkait Default vs Named Export",
                "Kebalikan Default vs Named Export",
                "Tidak ada jawaban"
            ],
            "answer": 0
        }
    },
    {
        "id": 48,
        "title": "48. Barrel Files",
        "module": "Modules & Namespaces",
        "moduleId": 8,
        "mdFile": "lessons/barrel-files.md",
        "duration": "15 min",
        "description": "<p><strong>Barrel Files</strong></p>",
        "defaultCode": "// Barrel: re-export\nconst utils = { add: (a: number, b: number) => a + b };\nconsole.log(utils.add(1, 2));",
        "expectedOutput": null,
        "hint": "Baca materi, lalu eksperimen di editor.",
        "quiz": {
            "question": "Apa konsep utama dari 'Barrel Files'?",
            "options": [
                "Memahami Barrel Files",
                "Tidak terkait Barrel Files",
                "Kebalikan Barrel Files",
                "Tidak ada jawaban"
            ],
            "answer": 0
        }
    },
    {
        "id": 49,
        "title": "49. Dynamic Import & Code Splitting",
        "module": "Modules & Namespaces",
        "moduleId": 8,
        "mdFile": "lessons/dynamic-import-code-splitting.md",
        "duration": "20 min",
        "description": "<p><strong>Dynamic Import & Code Splitting</strong></p>",
        "defaultCode": "// Dynamic import (simulasi)\nasync function load(): Promise<string> {\n  return \"module loaded\";\n}\nload().then(console.log);",
        "expectedOutput": null,
        "hint": "Baca materi, lalu eksperimen di editor.",
        "quiz": {
            "question": "Apa konsep utama dari 'Dynamic Import dan Code Splitting'?",
            "options": [
                "Memahami Dynamic Import dan Code Splitting",
                "Tidak terkait Dynamic Import dan Code Splitting",
                "Kebalikan Dynamic Import dan Code Splitting",
                "Tidak ada jawaban"
            ],
            "answer": 0
        }
    },
    {
        "id": 50,
        "title": "50. Ambient Modules",
        "module": "Modules & Namespaces",
        "moduleId": 8,
        "mdFile": "lessons/ambient-modules.md",
        "duration": "20 min",
        "description": "<p><strong>Ambient Modules</strong></p>",
        "defaultCode": "// Ambient: declare\ndeclare const VERSION: string;\nconsole.log(\"ambient ok\");",
        "expectedOutput": null,
        "hint": "Baca materi, lalu eksperimen di editor.",
        "quiz": {
            "question": "Apa konsep utama dari 'Ambient Modules'?",
            "options": [
                "Memahami Ambient Modules",
                "Tidak terkait Ambient Modules",
                "Kebalikan Ambient Modules",
                "Tidak ada jawaban"
            ],
            "answer": 0
        }
    },
    {
        "id": 51,
        "title": "51. Namespaces",
        "module": "Modules & Namespaces",
        "moduleId": 8,
        "mdFile": "lessons/namespaces-organisasi-kode.md",
        "duration": "20 min",
        "description": "<p><strong>Namespaces</strong></p>",
        "defaultCode": "// Namespace\nnamespace Math2 {\n  export const add = (a: number, b: number) => a + b;\n}\nconsole.log(Math2.add(3, 4));",
        "expectedOutput": null,
        "hint": "Baca materi, lalu eksperimen di editor.",
        "quiz": {
            "question": "Apa konsep utama dari 'Namespaces'?",
            "options": [
                "Memahami Namespaces",
                "Tidak terkait Namespaces",
                "Kebalikan Namespaces",
                "Tidak ada jawaban"
            ],
            "answer": 0
        }
    },
    {
        "id": 52,
        "title": "52. Declaration Merging",
        "module": "Modules & Namespaces",
        "moduleId": 8,
        "mdFile": "lessons/declaration-merging.md",
        "duration": "20 min",
        "description": "<p><strong>Declaration Merging</strong></p>",
        "defaultCode": "// Merging\ninterface Box { h: number }\ninterface Box { w: number }\nconst b: Box = { h: 1, w: 2 };\nconsole.log(b.h + b.w);",
        "expectedOutput": null,
        "hint": "Baca materi, lalu eksperimen di editor.",
        "quiz": {
            "question": "Apa konsep utama dari 'Declaration Merging'?",
            "options": [
                "Memahami Declaration Merging",
                "Tidak terkait Declaration Merging",
                "Kebalikan Declaration Merging",
                "Tidak ada jawaban"
            ],
            "answer": 0
        }
    },
    {
        "id": 53,
        "title": "53. tsconfig.json Struktur",
        "module": "Configuration & Tooling",
        "moduleId": 9,
        "mdFile": "lessons/tsconfig-json-struktur.md",
        "duration": "25 min",
        "description": "<p><strong>tsconfig.json Struktur</strong></p>",
        "defaultCode": "// tsconfig strict\nconst strict: boolean = true;\nconsole.log(\"strict: \" + strict);",
        "expectedOutput": null,
        "hint": "Baca materi, lalu eksperimen di editor.",
        "quiz": {
            "question": "Apa konsep utama dari 'tsconfig.json Struktur'?",
            "options": [
                "Memahami tsconfig.json Struktur",
                "Tidak terkait tsconfig.json Struktur",
                "Kebalikan tsconfig.json Struktur",
                "Tidak ada jawaban"
            ],
            "answer": 0
        }
    },
    {
        "id": 54,
        "title": "54. Compiler Options",
        "module": "Configuration & Tooling",
        "moduleId": 9,
        "mdFile": "lessons/compiler-options-target-module-lib.md",
        "duration": "20 min",
        "description": "<p><strong>Compiler Options</strong></p>",
        "defaultCode": "// Target ES2020\nconst big: bigint = BigInt(9007199254740991);\nconsole.log(typeof big);",
        "expectedOutput": null,
        "hint": "Baca materi, lalu eksperimen di editor.",
        "quiz": {
            "question": "Apa konsep utama dari 'Compiler Options'?",
            "options": [
                "Memahami Compiler Options",
                "Tidak terkait Compiler Options",
                "Kebalikan Compiler Options",
                "Tidak ada jawaban"
            ],
            "answer": 0
        }
    },
    {
        "id": 55,
        "title": "55. Strict Mode Options",
        "module": "Configuration & Tooling",
        "moduleId": 9,
        "mdFile": "lessons/strict-mode-options.md",
        "duration": "20 min",
        "description": "<p><strong>Strict Mode Options</strong></p>",
        "defaultCode": "// Strict null check\nfunction len(s: string | null): number {\n  return s?.length ?? 0;\n}\nconsole.log(len(null));",
        "expectedOutput": null,
        "hint": "Baca materi, lalu eksperimen di editor.",
        "quiz": {
            "question": "Apa konsep utama dari 'Strict Mode Options'?",
            "options": [
                "Memahami Strict Mode Options",
                "Tidak terkait Strict Mode Options",
                "Kebalikan Strict Mode Options",
                "Tidak ada jawaban"
            ],
            "answer": 0
        }
    },
    {
        "id": 56,
        "title": "56. Include, Exclude, Files",
        "module": "Configuration & Tooling",
        "moduleId": 9,
        "mdFile": "lessons/include-exclude-files.md",
        "duration": "15 min",
        "description": "<p><strong>Include, Exclude, Files</strong></p>",
        "defaultCode": "// include/exclude\nconst files: string[] = [\"src/index.ts\"];\nconsole.log(files.length + \" file\");",
        "expectedOutput": null,
        "hint": "Baca materi, lalu eksperimen di editor.",
        "quiz": {
            "question": "Apa konsep utama dari 'Include, Exclude, Files'?",
            "options": [
                "Memahami Include, Exclude, Files",
                "Tidak terkait Include, Exclude, Files",
                "Kebalikan Include, Exclude, Files",
                "Tidak ada jawaban"
            ],
            "answer": 0
        }
    },
    {
        "id": 57,
        "title": "57. Path Mapping & Module Resolution",
        "module": "Configuration & Tooling",
        "moduleId": 9,
        "mdFile": "lessons/path-mapping-module-resolution.md",
        "duration": "20 min",
        "description": "<p><strong>Path Mapping & Module Resolution</strong></p>",
        "defaultCode": "// Path alias @/*\nconst alias: Record<string, string> = { \"@utils\": \"src/utils\" };\nconsole.log(alias[\"@utils\"]);",
        "expectedOutput": null,
        "hint": "Baca materi, lalu eksperimen di editor.",
        "quiz": {
            "question": "Apa konsep utama dari 'Path Mapping dan Module Resolution'?",
            "options": [
                "Memahami Path Mapping dan Module Resolution",
                "Tidak terkait Path Mapping dan Module Resolution",
                "Kebalikan Path Mapping dan Module Resolution",
                "Tidak ada jawaban"
            ],
            "answer": 0
        }
    },
    {
        "id": 58,
        "title": "58. Build Tools (Webpack/Babel)",
        "module": "Configuration & Tooling",
        "moduleId": 9,
        "mdFile": "lessons/build-tools-webpack-babel.md",
        "duration": "25 min",
        "description": "<p><strong>Build Tools (Webpack/Babel)</strong></p>",
        "defaultCode": "// Build: bundle\nconst env: string = \"production\";\nconsole.log(\"build:\" + env);",
        "expectedOutput": null,
        "hint": "Baca materi, lalu eksperimen di editor.",
        "quiz": {
            "question": "Apa konsep utama dari 'Build Tools (Webpack/Babel)'?",
            "options": [
                "Memahami Build Tools (Webpack/Babel)",
                "Tidak terkait Build Tools (Webpack/Babel)",
                "Kebalikan Build Tools (Webpack/Babel)",
                "Tidak ada jawaban"
            ],
            "answer": 0
        }
    },
    {
        "id": 59,
        "title": "59. ESLint TypeScript",
        "module": "Configuration & Tooling",
        "moduleId": 9,
        "mdFile": "lessons/eslint-typescript.md",
        "duration": "20 min",
        "description": "<p><strong>ESLint TypeScript</strong></p>",
        "defaultCode": "// ESLint: no-explicit-any\nconst clean: string = \"lint passed\";\nconsole.log(clean);",
        "expectedOutput": null,
        "hint": "Baca materi, lalu eksperimen di editor.",
        "quiz": {
            "question": "Apa konsep utama dari 'ESLint TypeScript'?",
            "options": [
                "Memahami ESLint TypeScript",
                "Tidak terkait ESLint TypeScript",
                "Kebalikan ESLint TypeScript",
                "Tidak ada jawaban"
            ],
            "answer": 0
        }
    },
    {
        "id": 60,
        "title": "60. Prettier Integration",
        "module": "Configuration & Tooling",
        "moduleId": 9,
        "mdFile": "lessons/prettier-integration.md",
        "duration": "15 min",
        "description": "<p><strong>Prettier Integration</strong></p>",
        "defaultCode": "// Prettier: formatted\nconst formatted = { a: 1, b: 2 };\nconsole.log(JSON.stringify(formatted));",
        "expectedOutput": null,
        "hint": "Baca materi, lalu eksperimen di editor.",
        "quiz": {
            "question": "Apa konsep utama dari 'Prettier Integration'?",
            "options": [
                "Memahami Prettier Integration",
                "Tidak terkait Prettier Integration",
                "Kebalikan Prettier Integration",
                "Tidak ada jawaban"
            ],
            "answer": 0
        }
    },
    {
        "id": 61,
        "title": "61. Using JS Libraries",
        "module": "JS Integration",
        "moduleId": 10,
        "mdFile": "lessons/using-js-libraries.md",
        "duration": "20 min",
        "description": "<p><strong>Using JS Libraries</strong></p>",
        "defaultCode": "// JS lib interop\nconst now: number = Date.now();\nconsole.log(typeof now);",
        "expectedOutput": null,
        "hint": "Baca materi, lalu eksperimen di editor.",
        "quiz": {
            "question": "Apa konsep utama dari 'Using JS Libraries'?",
            "options": [
                "Memahami Using JS Libraries",
                "Tidak terkait Using JS Libraries",
                "Kebalikan Using JS Libraries",
                "Tidak ada jawaban"
            ],
            "answer": 0
        }
    },
    {
        "id": 62,
        "title": "62. Declaration Files (.d.ts)",
        "module": "JS Integration",
        "moduleId": 10,
        "mdFile": "lessons/declaration-files-d-ts.md",
        "duration": "25 min",
        "description": "<p><strong>Declaration Files (.d.ts)</strong></p>",
        "defaultCode": "// .d.ts\ninterface Lib { version: string }\nconst lib: Lib = { version: \"2.0\" };\nconsole.log(lib.version);",
        "expectedOutput": null,
        "hint": "Baca materi, lalu eksperimen di editor.",
        "quiz": {
            "question": "Apa konsep utama dari 'Declaration Files (.d.ts)'?",
            "options": [
                "Memahami Declaration Files (.d.ts)",
                "Tidak terkait Declaration Files (.d.ts)",
                "Kebalikan Declaration Files (.d.ts)",
                "Tidak ada jawaban"
            ],
            "answer": 0
        }
    },
    {
        "id": 63,
        "title": "63. DefinitelyTyped & @types",
        "module": "JS Integration",
        "moduleId": 10,
        "mdFile": "lessons/definitelytyped.md",
        "duration": "15 min",
        "description": "<p><strong>DefinitelyTyped & @types</strong></p>",
        "defaultCode": "// @types/node\nconst platform: string = \"node-types\";\nconsole.log(platform);",
        "expectedOutput": null,
        "hint": "Baca materi, lalu eksperimen di editor.",
        "quiz": {
            "question": "Apa konsep utama dari 'DefinitelyTyped dan @types'?",
            "options": [
                "Memahami DefinitelyTyped dan @types",
                "Tidak terkait DefinitelyTyped dan @types",
                "Kebalikan DefinitelyTyped dan @types",
                "Tidak ada jawaban"
            ],
            "answer": 0
        }
    },
    {
        "id": 64,
        "title": "64. Migrasi JS ke TS",
        "module": "JS Integration",
        "moduleId": 10,
        "mdFile": "lessons/migrasi-js-ke-ts.md",
        "duration": "25 min",
        "description": "<p><strong>Migrasi JS ke TS</strong></p>",
        "defaultCode": "// Migrasi bertahap\nlet legacy: any = \"old js\";\nconst modern: string = legacy as string;\nconsole.log(modern);",
        "expectedOutput": null,
        "hint": "Baca materi, lalu eksperimen di editor.",
        "quiz": {
            "question": "Apa konsep utama dari 'Migrasi JS ke TS'?",
            "options": [
                "Memahami Migrasi JS ke TS",
                "Tidak terkait Migrasi JS ke TS",
                "Kebalikan Migrasi JS ke TS",
                "Tidak ada jawaban"
            ],
            "answer": 0
        }
    },
    {
        "id": 65,
        "title": "65. Partial & Required",
        "module": "Advanced Utility Types",
        "moduleId": 11,
        "mdFile": "lessons/partial-required.md",
        "duration": "20 min",
        "description": "<p><strong>Partial & Required</strong></p>",
        "defaultCode": "// Partial\ninterface U { name: string; age: number }\nconst p: Partial<U> = { name: \"A\" };\nconsole.log(p.name);",
        "expectedOutput": null,
        "hint": "Baca materi, lalu eksperimen di editor.",
        "quiz": {
            "question": "Apa konsep utama dari 'Partial dan Required'?",
            "options": [
                "Memahami Partial dan Required",
                "Tidak terkait Partial dan Required",
                "Kebalikan Partial dan Required",
                "Tidak ada jawaban"
            ],
            "answer": 0
        }
    },
    {
        "id": 66,
        "title": "66. Pick & Omit",
        "module": "Advanced Utility Types",
        "moduleId": 11,
        "mdFile": "lessons/pick-omit.md",
        "duration": "20 min",
        "description": "<p><strong>Pick & Omit</strong></p>",
        "defaultCode": "// Pick\ninterface U { name: string; age: number; city: string }\nconst p: Pick<U, \"name\"> = { name: \"Budi\" };\nconsole.log(p.name);",
        "expectedOutput": null,
        "hint": "Baca materi, lalu eksperimen di editor.",
        "quiz": {
            "question": "Apa konsep utama dari 'Pick dan Omit'?",
            "options": [
                "Memahami Pick dan Omit",
                "Tidak terkait Pick dan Omit",
                "Kebalikan Pick dan Omit",
                "Tidak ada jawaban"
            ],
            "answer": 0
        }
    },
    {
        "id": 67,
        "title": "67. Record & Tuple",
        "module": "Advanced Utility Types",
        "moduleId": 11,
        "mdFile": "lessons/record-tuple.md",
        "duration": "15 min",
        "description": "<p><strong>Record & Tuple</strong></p>",
        "defaultCode": "// Record\nconst scores: Record<string, number> = { a: 90, b: 85 };\nconsole.log(scores.a);",
        "expectedOutput": null,
        "hint": "Baca materi, lalu eksperimen di editor.",
        "quiz": {
            "question": "Apa konsep utama dari 'Record dan Tuple'?",
            "options": [
                "Memahami Record dan Tuple",
                "Tidak terkait Record dan Tuple",
                "Kebalikan Record dan Tuple",
                "Tidak ada jawaban"
            ],
            "answer": 0
        }
    },
    {
        "id": 68,
        "title": "68. Readonly & Record",
        "module": "Advanced Utility Types",
        "moduleId": 11,
        "mdFile": "lessons/readonly-record.md",
        "duration": "15 min",
        "description": "<p><strong>Readonly & Record</strong></p>",
        "defaultCode": "// Readonly\nconst cfg: Readonly<{ port: number }> = { port: 3000 };\nconsole.log(cfg.port);",
        "expectedOutput": null,
        "hint": "Baca materi, lalu eksperimen di editor.",
        "quiz": {
            "question": "Apa konsep utama dari 'Readonly dan Record'?",
            "options": [
                "Memahami Readonly dan Record",
                "Tidak terkait Readonly dan Record",
                "Kebalikan Readonly dan Record",
                "Tidak ada jawaban"
            ],
            "answer": 0
        }
    },
    {
        "id": 69,
        "title": "69. ReturnType & ThisType",
        "module": "Advanced Utility Types",
        "moduleId": 11,
        "mdFile": "lessons/returntype-parameters-thistype.md",
        "duration": "25 min",
        "description": "<p><strong>ReturnType & ThisType</strong></p>",
        "defaultCode": "// ReturnType\nfunction make(): { ok: boolean } { return { ok: true }; }\ntype R = ReturnType<typeof make>;\nconst r: R = { ok: true };\nconsole.log(r.ok);",
        "expectedOutput": null,
        "hint": "Baca materi, lalu eksperimen di editor.",
        "quiz": {
            "question": "Apa konsep utama dari 'ReturnType dan ThisType'?",
            "options": [
                "Memahami ReturnType dan ThisType",
                "Tidak terkait ReturnType dan ThisType",
                "Kebalikan ReturnType dan ThisType",
                "Tidak ada jawaban"
            ],
            "answer": 0
        }
    },
    {
        "id": 70,
        "title": "70. Exclude, Extract, NonNullable",
        "module": "Advanced Utility Types",
        "moduleId": 11,
        "mdFile": "lessons/exclude-extract-nonnullable.md",
        "duration": "20 min",
        "description": "<p><strong>Exclude, Extract, NonNullable</strong></p>",
        "defaultCode": "// Exclude\ntype T = Exclude<\"a\" | \"b\" | \"c\", \"a\">;\nconst t: T = \"b\";\nconsole.log(t);",
        "expectedOutput": null,
        "hint": "Baca materi, lalu eksperimen di editor.",
        "quiz": {
            "question": "Apa konsep utama dari 'Exclude, Extract, NonNullable'?",
            "options": [
                "Memahami Exclude, Extract, NonNullable",
                "Tidak terkait Exclude, Extract, NonNullable",
                "Kebalikan Exclude, Extract, NonNullable",
                "Tidak ada jawaban"
            ],
            "answer": 0
        }
    },
    {
        "id": 71,
        "title": "71. Parameters & ConstructorParameters",
        "module": "Advanced Utility Types",
        "moduleId": 11,
        "mdFile": "lessons/parameters-constructorparameters.md",
        "duration": "20 min",
        "description": "<p><strong>Parameters & ConstructorParameters</strong></p>",
        "defaultCode": "// Parameters\nfunction f(a: string, b: number): void {}\ntype P = Parameters<typeof f>;\nconst p: P = [\"x\", 1];\nconsole.log(p[0]);",
        "expectedOutput": null,
        "hint": "Baca materi, lalu eksperimen di editor.",
        "quiz": {
            "question": "Apa konsep utama dari 'Parameters dan ConstructorParameters'?",
            "options": [
                "Memahami Parameters dan ConstructorParameters",
                "Tidak terkait Parameters dan ConstructorParameters",
                "Kebalikan Parameters dan ConstructorParameters",
                "Tidak ada jawaban"
            ],
            "answer": 0
        }
    },
    {
        "id": 72,
        "title": "72. OmitThisParameter",
        "module": "Advanced Utility Types",
        "moduleId": 11,
        "mdFile": "lessons/omit-thisparameter.md",
        "duration": "15 min",
        "description": "<p><strong>OmitThisParameter</strong></p>",
        "defaultCode": "// OmitThisParameter\nfunction greet(this: { n: string }): string { return this.n; }\nconsole.log(typeof greet);",
        "expectedOutput": null,
        "hint": "Baca materi, lalu eksperimen di editor.",
        "quiz": {
            "question": "Apa konsep utama dari 'OmitThisParameter'?",
            "options": [
                "Memahami OmitThisParameter",
                "Tidak terkait OmitThisParameter",
                "Kebalikan OmitThisParameter",
                "Tidak ada jawaban"
            ],
            "answer": 0
        }
    },
    {
        "id": 73,
        "title": "73. Project: CLI Tool",
        "module": "Real-World Projects",
        "moduleId": 12,
        "mdFile": "lessons/project-cli-tool.md",
        "duration": "30 min",
        "description": "<p><strong>Project: CLI Tool</strong></p>",
        "defaultCode": "// CLI tool\nconst args: string[] = [\"--help\"];\nfunction cli(a: string[]): string { return a[0] ?? \"no args\"; }\nconsole.log(cli(args));",
        "expectedOutput": null,
        "hint": "Baca materi, lalu eksperimen di editor.",
        "quiz": {
            "question": "Apa konsep utama dari 'Project: CLI Tool'?",
            "options": [
                "Memahami Project: CLI Tool",
                "Tidak terkait Project: CLI Tool",
                "Kebalikan Project: CLI Tool",
                "Tidak ada jawaban"
            ],
            "answer": 0
        }
    },
    {
        "id": 74,
        "title": "74. Project: React + TypeScript",
        "module": "Real-World Projects",
        "moduleId": 12,
        "mdFile": "lessons/project-react-ts.md",
        "duration": "40 min",
        "description": "<p><strong>Project: React + TypeScript</strong></p>",
        "defaultCode": "// React props\ninterface Props { title: string; count?: number }\nconst props: Props = { title: \"App\" };\nconsole.log(props.title);",
        "expectedOutput": null,
        "hint": "Baca materi, lalu eksperimen di editor.",
        "quiz": {
            "question": "Apa konsep utama dari 'Project: React + TypeScript'?",
            "options": [
                "Memahami Project: React + TypeScript",
                "Tidak terkait Project: React + TypeScript",
                "Kebalikan Project: React + TypeScript",
                "Tidak ada jawaban"
            ],
            "answer": 0
        }
    },
    {
        "id": 75,
        "title": "75. Project: REST API",
        "module": "Real-World Projects",
        "moduleId": 12,
        "mdFile": "lessons/project-rest-api.md",
        "duration": "40 min",
        "description": "<p><strong>Project: REST API</strong></p>",
        "defaultCode": "// REST API\ninterface Req { method: string; path: string }\nconst req: Req = { method: \"GET\", path: \"/api/users\" };\nconsole.log(req.method + \" \" + req.path);",
        "expectedOutput": null,
        "hint": "Baca materi, lalu eksperimen di editor.",
        "quiz": {
            "question": "Apa konsep utama dari 'Project: REST API'?",
            "options": [
                "Memahami Project: REST API",
                "Tidak terkait Project: REST API",
                "Kebalikan Project: REST API",
                "Tidak ada jawaban"
            ],
            "answer": 0
        }
    },
    {
        "id": 76,
        "title": "76. Project: Type Definitions",
        "module": "Real-World Projects",
        "moduleId": 12,
        "mdFile": "lessons/project-type-definitions.md",
        "duration": "30 min",
        "description": "<p><strong>Project: Type Definitions</strong></p>",
        "defaultCode": "// Custom .d.ts\ninterface ApiResponse<T> { data: T; status: number }\nconst res: ApiResponse<string> = { data: \"ok\", status: 200 };\nconsole.log(res.status);",
        "expectedOutput": null,
        "hint": "Baca materi, lalu eksperimen di editor.",
        "quiz": {
            "question": "Apa konsep utama dari 'Project: Type Definitions'?",
            "options": [
                "Memahami Project: Type Definitions",
                "Tidak terkait Project: Type Definitions",
                "Kebalikan Project: Type Definitions",
                "Tidak ada jawaban"
            ],
            "answer": 0
        }
    },
    {
        "id": 77,
        "title": "77. Final: Fullstack App",
        "module": "Real-World Projects",
        "moduleId": 12,
        "mdFile": "lessons/final-project-fullstack.md",
        "duration": "60 min",
        "description": "<p><strong>Final: Fullstack App</strong></p>",
        "defaultCode": "// Fullstack\ninterface Task { id: number; title: string; done: boolean }\nconst tasks: Task[] = [{ id: 1, title: \"Deploy\", done: true }];\nconsole.log(tasks.filter(t => t.done).length + \" done\");",
        "expectedOutput": null,
        "hint": "Baca materi, lalu eksperimen di editor.",
        "quiz": {
            "question": "Apa konsep utama dari 'Final: Fullstack App'?",
            "options": [
                "Memahami Final: Fullstack App",
                "Tidak terkait Final: Fullstack App",
                "Kebalikan Final: Fullstack App",
                "Tidak ada jawaban"
            ],
            "answer": 0
        }
    }
];

// State
let currentLesson = -1;
let progress = JSON.parse(localStorage.getItem('typescript_progress') || '{}');

// ─── Sidebar Navigation ────────────────────────────────────────
function renderNav(filter) {
    const nav = document.getElementById('lessons-nav');
    if (!nav) return;
    const q = (filter || '').toLowerCase().trim();

    nav.innerHTML = MODULES.map(mod => {
        const modLessons = lessons.filter(l => l.moduleId === mod.id);
        const filtered = q ? modLessons.filter(l => l.title.toLowerCase().includes(q) || mod.title.toLowerCase().includes(q)) : modLessons;
        if (q && filtered.length === 0) return '';
        const completed = modLessons.filter(l => progress[l.id]).length;
        const isOpen = q || modLessons.some((_, i) => {
            const idx = lessons.indexOf(modLessons[0]) + i;
            return idx === currentLesson;
        });

        return `
            <div class="module-group">
                <div class="module-header ${isOpen ? 'open active' : ''}" onclick="toggleModule(${mod.id})">
                    <span><i class="${mod.icon} mr-2 text-blue-400 text-xs"></i>${mod.title}</span>
                    <span class="flex items-center gap-2">
                        <span class="text-[10px] text-slate-600">${completed}/${modLessons.length}</span>
                        <i class="fas fa-chevron-right chevron text-slate-600"></i>
                    </span>
                </div>
                <div id="module-${mod.id}" class="lesson-list ${isOpen ? '' : 'hidden'}">
                    ${filtered.map(l => {
                        const idx = lessons.indexOf(l);
                        const isActive = idx === currentLesson;
                        const isDone = progress[l.id];
                        return `<button onclick="loadLesson(${idx})" class="lesson-btn ${isActive ? 'active' : ''} ${isDone ? 'completed' : ''}">
                            <span class="status-dot"></span>
                            <span class="truncate">${l.title}</span>
                        </button>`;
                    }).join('')}
                </div>
            </div>
        `;
    }).join('');
}

function toggleModule(modId) {
    const el = document.getElementById('module-' + modId);
    const header = el?.previousElementSibling;
    if (el) el.classList.toggle('hidden');
    if (header) header.classList.toggle('open');
}

// ─── Mobile Sidebar ────────────────────────────────────────────
function openSidebar() {
    document.getElementById('sidebar')?.classList.add('open');
    document.getElementById('sidebar-overlay')?.classList.remove('hidden');
}

function closeSidebar() {
    document.getElementById('sidebar')?.classList.remove('open');
    document.getElementById('sidebar-overlay')?.classList.add('hidden');
}

// ─── Lesson Loading ────────────────────────────────────────────
async function loadLesson(index) {
    if (index < 0 || index >= lessons.length) return;
    currentLesson = index;
    const lesson = lessons[index];
    const mod = MODULES.find(m => m.id === lesson.moduleId);
    const contentEl = document.getElementById('lesson-content') || document.getElementById('lessonBody');
    const scrollEl = document.getElementById('content-scroll');

    // Update header
    { const _el=document.getElementById('breadcrumb-module'); if(_el) _el.textContent = mod ? mod.title : ''; }
    { const _el=document.getElementById('breadcrumb-lesson'); if(_el) _el.textContent = 'Lesson ' + lesson.id; }
    { const _el=document.getElementById('lesson-title'); if(_el) _el.textContent = lesson.title; }
    { const _el=document.getElementById('lesson-duration'); if(_el) _el.textContent = lesson.duration || ''; }

    // Show loading
    contentEl.innerHTML = '<div class="text-center py-12"><i class="fas fa-spinner fa-spin text-blue-400 text-2xl"></i><p class="text-slate-500 mt-3 text-sm">Memuat materi...</p></div>';

    // Fetch markdown
    let html = lesson.description || '';
    if (lesson.mdFile && typeof marked !== 'undefined') {
        try {
            const resp = await fetch(lesson.mdFile);
            if (resp.ok) {
                const md = await resp.text();
                html = marked.parse(md);
            }
        } catch (e) {
            console.error('Fetch error:', lesson.mdFile, e);
            html = '<p class="text-red-400">⚠️ Gagal memuat materi. Coba refresh halaman.</p>';
        }
    }

    contentEl.innerHTML = html;

    // Apply syntax highlighting
    contentEl.querySelectorAll('pre code').forEach(block => {
        hljs.highlightElement(block);
    });

    // Set code editor
    { const _ed=document.getElementById('code-editor'); if(_ed) _ed.value = (lesson.defaultCode || '').replace(/\\n/g, '\n'); }
    { const _out=document.getElementById('output'); if(_out) _out.innerHTML = '<span class="text-slate-600">// Output akan muncul di sini</span>'; }

    const vm = document.getElementById('validation-msg');
    vm.className = 'validation-msg hidden';
    vm.innerHTML = '';

    // Quiz
    if (lesson.quiz && lesson.quiz.question) {
        document.getElementById('quiz-section').classList.remove('hidden');
        document.getElementById('quiz-content').innerHTML = `
            <p class="text-sm font-medium text-slate-300 mb-3">${lesson.quiz.question}</p>
            <div class="space-y-2">
                ${lesson.quiz.options.map((opt, i) => `
                    <label class="quiz-option" onclick="this.querySelector('input').checked=true;document.querySelectorAll('.quiz-option').forEach(e=>e.classList.remove('selected'));this.classList.add('selected')">
                        <input type="radio" name="quiz" value="${i}" class="hidden">
                        <span class="mr-2 text-slate-500 font-mono text-xs">${String.fromCharCode(65 + i)}</span>
                        <span>${opt}</span>
                    </label>
                `).join('')}
            </div>`;
        document.getElementById('quiz-result').innerHTML = '';
    } else {
        document.getElementById('quiz-section').classList.add('hidden');
    }

    // Nav buttons
    document.getElementById('prev-btn').disabled = index === 0;
    document.getElementById('next-btn').disabled = index === lessons.length - 1;

    // Complete button state
    const completeBtn = document.getElementById('complete-btn');
    const completedBtn = document.getElementById('completed-btn');
    if (progress[lesson.id]) {
        if(completeBtn) completeBtn.style.display = 'none';
        if(completedBtn) completedBtn.style.display = 'inline-flex';
    } else {
        completeBtn.style.display = 'inline-flex';
        completedBtn.style.display = 'none';
    }

    closeSidebar();
    renderNav();
  
    scrollEl?.scrollTo(0, 0);
}

// ─── Code Execution ────────────────────────────────────────────
function runCode() {
    const _ed=document.getElementById('code-editor');
    const code = _ed ? _ed.value : '';
    const output = document.getElementById('output');
    if(!_ed || !output) return;
    const validation = document.getElementById('validation-msg');
    const status = document.getElementById('compile-status');
    let logs = [];
    const origLog = console.log;
    const origWarn = console.warn;
    const origError = console.error;

    console.log = (...a) => logs.push(a.map(x => typeof x === 'object' ? JSON.stringify(x, null, 2) : String(x)).join(' '));
    console.warn = (...a) => logs.push('⚠️ ' + a.map(x => String(x)).join(' '));
    console.error = (...a) => logs.push('❌ ' + a.map(x => String(x)).join(' '));

    try {
        if (typeof ts === 'undefined') {
            output.innerHTML = '<span class="text-red-400">TypeScript compiler not loaded</span>';
            return;
        }
        const js = ts.transpileModule(code, {
            compilerOptions: {
                module: ts.ModuleKind.None,
                target: ts.ScriptTarget.ESNext,
                strict: false,
            }
        }).outputText;

        eval(js);
        const result = logs.join('\n');
        output.innerHTML = result ? '<span class="text-emerald-400">' + escapeHtml(result) + '</span>' : '<span class="text-slate-600">// No output</span>';
        status.textContent = '✓ Compiled';
        status.className = 'text-xs text-emerald-500 ml-auto';

        const exp = lessons[currentLesson]?.expectedOutput;
        if (exp && result.trim() === exp.trim()) {
            validation.className = 'validation-msg bg-emerald-900/30 border border-emerald-500/30 text-emerald-400';
            validation.innerHTML = '<i class="fas fa-check-circle mr-2"></i>Output benar!';
            progress[lessons[currentLesson].id] = true;
            localStorage.setItem('typescript_progress', JSON.stringify(progress));
            updateProgress();
            renderNav();
        }
    } catch (e) {
        output.innerHTML = '<span class="text-red-400">❌ ' + escapeHtml(e.message) + '</span>';
        status.textContent = '✗ Error';
        status.className = 'text-xs text-red-400 ml-auto';
    }

    console.log = origLog;
    console.warn = origWarn;
    console.error = origError;
}

function resetCode() {
    if (currentLesson >= 0 && currentLesson < lessons.length) {
        document.getElementById('code-editor').value = (lessons[currentLesson].defaultCode || '').replace(/\\n/g, '\n');
        { const _out=document.getElementById('output'); if(_out) _out.innerHTML = '<span class="text-slate-600">// Output akan muncul di sini</span>'; }
        const vm = document.getElementById('validation-msg');
        vm.className = 'validation-msg hidden';
    }
}

// ─── Quiz ──────────────────────────────────────────────────────
function checkQuiz() {
    const sel = document.querySelector('input[name="quiz"]:checked');
    if (!sel) return alert('Pilih jawaban dulu!');
    const correct = parseInt(sel.value) === lessons[currentLesson]?.quiz?.answer;
    const div = document.getElementById('quiz-result');
    div.innerHTML = `<div class="mt-3 p-3 rounded-lg text-sm ${correct ? 'bg-emerald-900/30 border border-emerald-500/30 text-emerald-400' : 'bg-red-900/30 border border-red-500/30 text-red-400'}">
        <i class="fas fa-${correct ? 'check-circle' : 'times-circle'} mr-2"></i>${correct ? 'Benar! 🎉' : 'Belum tepat. Coba lagi!'}
    </div>`;
    if (correct) setTimeout(() => div.innerHTML = '', 4000);
}

// ─── Navigation ────────────────────────────────────────────────
function nextLesson() {
    if (currentLesson < lessons.length - 1) loadLesson(currentLesson + 1);
}
function prevLesson() {
    if (currentLesson > 0) loadLesson(currentLesson - 1);
}

function markComplete() {
    const lesson = lessons[currentLesson];
    if (!lesson) return;
    progress[lesson.id] = true;
    localStorage.setItem('typescript_progress', JSON.stringify(progress));
    { const _a=document.getElementById('complete-btn'); if(_a) _a.style.display='none'; }
    { const _b=document.getElementById('completed-btn'); if(_b) _b.style.display='inline-flex'; }
    renderNav();
    updateProgress();
    if (currentLesson < lessons.length - 1) {
        setTimeout(() => loadLesson(currentLesson + 1), 400);
    }
}

// ─── Progress ──────────────────────────────────────────────────
function updateProgress() {
    const done = Object.keys(progress).filter(k => progress[k]).length;
    const pct = Math.round((done / lessons.length) * 100);
    const fill = document.getElementById('progress-fill');
    const text = document.getElementById('sidebar-progress-text');
    const count = document.getElementById('sidebar-completed-count');
    const mobile = document.getElementById('mobile-progress');

    if (fill) fill.style.width = pct + '%';
    if (text) text.textContent = pct + '% complete';
    if (count) count.textContent = done + '/' + lessons.length;
    if (mobile) mobile.textContent = pct + '%';
}

function resetProgress() {
    if (!confirm('Reset semua progress?')) return;
    progress = {};
    localStorage.removeItem('typescript_progress');
    renderNav();
    updateProgress();
    if (currentLesson >= 0) loadLesson(currentLesson);
}

// ─── Utility ───────────────────────────────────────────────────
function escapeHtml(str) {
    return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

// ─── Init ──────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
    progress = JSON.parse(localStorage.getItem('typescript_progress') || '{}');

    // Search
    const searchInput = document.getElementById('lesson-search');
    if (searchInput) {
        searchInput.addEventListener('input', () => renderNav(searchInput.value));
    }

    // Mobile menu toggle
    const menuToggle = document.getElementById('menu-toggle');
    if (menuToggle) {
        menuToggle.addEventListener('click', openSidebar);
    }

    // Configure marked
    if (typeof marked !== 'undefined') {
        marked.setOptions({
            gfm: true,
            breaks: false,
            highlight: function(code, lang) {
                if (typeof hljs !== 'undefined' && lang && hljs.getLanguage(lang)) {
                    return hljs.highlight(code, { language: lang }).value;
                }
                if (typeof hljs !== 'undefined') {
                    return hljs.highlightAuto(code).value;
                }
                return code;
            }
        });
    }

    renderNav();
    updateProgress();

    // Auto-load first lesson or welcome screen
    if (lessons.length > 0) {
        let targetIdx = 0;
        const hash = window.location.hash;
        if (hash && hash.startsWith('#lesson-')) {
            const idx = parseInt(hash.replace('#lesson-', ''));
            if (!isNaN(idx) && idx >= 0 && idx < lessons.length) targetIdx = idx;
        }
        loadLesson(targetIdx);
    }
});
