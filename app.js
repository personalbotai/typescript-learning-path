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
      "question": "Apa perbedaan mendasar antara TypeScript dan JavaScript murni?",
      "options": [
        "TypeScript menyediakan static type checking saat compile-time yang di-erase ke JS murni, sedangkan JS dinamis di runtime",
        "TypeScript adalah runtime terpisah seperti JVM",
        "TypeScript berjalan lebih lambat di browser",
        "TypeScript menghapus async/await"
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
      "question": "Mengapa TypeScript mengadopsi Structural Typing (Duck Typing)?",
      "options": [
        "Kompatibilitas tipe ditentukan oleh properti/struktur data yang ada, bukan nama class nominal deklarasinya",
        "Agar class Java dapat diimpor langsung",
        "Untuk mematikan garbage collection",
        "Mewajibkan inheritance eksplisit"
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
      "question": "Perintah npm apa yang tepat untuk menginstal compiler TypeScript pada project?",
      "options": [
        "npm install -D typescript",
        "npm install -g ts-engine",
        "npm install @types/compiler",
        "npm init typescript-all"
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
      "question": "Perintah CLI untuk men-generate file konfigurasi default 'tsconfig.json'?",
      "options": [
        "tsc --init",
        "tsc new-project",
        "typescript init",
        "npm ts-init"
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
      "question": "Opsi tsconfig mana yang mengaktifkan seluruh aturan strict type-checking secara serentak?",
      "options": [
        "\"strict\": true",
        "\"noEmit\": true",
        "\"target\": \"ESNext\"",
        "\"skipLibCheck\": true"
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
      "question": "Apa fungsi flag 'noEmit' pada compiler options tsconfig.json?",
      "options": [
        "Hanya menjalankan validasi tipe (type-checking) tanpa menghasilkan file output .js ke filesystem",
        "Menghapus komentar di hasil build",
        "Mencegah error ditampilkan di terminal",
        "Mengabaikan syntax error"
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
      "question": "Manakah yang merupakan tipe primitif valid di TypeScript?",
      "options": [
        "string, number, boolean, symbol, bigint, null, undefined",
        "Integer, Float, Char, Boolean, String",
        "text, int64, bool, pointer",
        "Decimal, Int, Var, Object"
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
      "question": "Mengapa tipe 'unknown' jauh lebih aman digunakan daripada 'any'?",
      "options": [
        "'unknown' mewajibkan type narrowing sebelum propertinya dapat diakses atau dipanggil",
        "'unknown' langsung dapat dipanggil sebagai fungsi",
        "'any' melakukan runtime validation otomatis",
        "Tidak ada perbedaan, keduanya sinonim"
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
      "question": "Sintaks deklarasi Tuple TypeScript beranggotakan [id: number, name: string] adalah?",
      "options": [
        "let user: [number, string];",
        "let user: (number, string)[];",
        "let user: Array<number, string>;",
        "let user: Tuple<number, string>;"
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
      "question": "Apa keunggulan utama menggunakan 'const enum' dibanding 'enum' biasa?",
      "options": [
        "Nilai enum di-inline langsung saat kompilasi tanpa menghasilkan objek runtime closure tambahan",
        "Mendukung reverse mapping string dinamis",
        "Bisa dimutasi nilainya saat runtime",
        "Wajib dideklarasikan di .d.ts"
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
      "question": "Tipe return apa yang tepat untuk fungsi yang selalu melempar exception atau infinite loop?",
      "options": [
        "never",
        "void",
        "undefined",
        "null"
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
      "question": "Kapan Type Assertion ('value as TargetType') sebaiknya digunakan?",
      "options": [
        "Saat developer mengetahui tipe data lebih spesifik daripada inferensi compiler (misal casting HTMLElement)",
        "Sebagai pengganti Number() untuk parsing string",
        "Untuk mengubah tipe number ke boolean di runtime",
        "Untuk mengabaikan logic bug di runtime"
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
      "question": "Ekspresi 'type Status = \"idle\" | \"loading\" | \"success\"' merepresentasikan fitur apa?",
      "options": [
        "String Literal Union Types",
        "Dynamic Enum Array",
        "Nominal Interface",
        "Tuple Constraint"
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
      "question": "Apa hasil dari Intersection Type 'type AdminUser = User & Permissions'?",
      "options": [
        "Tipe objek yang wajib memiliki seluruh field dari User DAN seluruh field dari Permissions",
        "Tipe yang hanya boleh memiliki salah satu dari User atau Permissions",
        "Array kombinasi kedua tipe",
        "Fungsi yang menggabungkan dua objek"
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
      "question": "Sintaks Type Guard predicate function yang valid di TypeScript adalah?",
      "options": [
        "function isCat(a: Animal): a is Cat { return (a as Cat).meow !== undefined; }",
        "function isCat(a: Animal): boolean as Cat { return true; }",
        "function isCat(a: Animal): Cat is a { return true; }",
        "function isCat(a: Animal) -> Cat { return a; }"
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
      "question": "Pada konsep 'Type Narrowing', manakah praktik penulisan type safety yang tepat di TypeScript?",
      "options": [
        "Menerapkan strict typing, generic constraints, dan type narrowing yang aman",
        "Mengabaikan type-check dengan casting 'as any' di semua return value",
        "Menonaktifkan opsi strictNullChecks di tsconfig.json",
        "Menghindari penggunaan utility types bawaan"
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
      "question": "Pada konsep 'Nullable Types', manakah praktik penulisan type safety yang tepat di TypeScript?",
      "options": [
        "Menerapkan strict typing, generic constraints, dan type narrowing yang aman",
        "Mengabaikan type-check dengan casting 'as any' di semua return value",
        "Menonaktifkan opsi strictNullChecks di tsconfig.json",
        "Menghindari penggunaan utility types bawaan"
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
      "question": "Pada konsep 'Type Inference', manakah praktik penulisan type safety yang tepat di TypeScript?",
      "options": [
        "Menerapkan strict typing, generic constraints, dan type narrowing yang aman",
        "Mengabaikan type-check dengan casting 'as any' di semua return value",
        "Menonaktifkan opsi strictNullChecks di tsconfig.json",
        "Menghindari penggunaan utility types bawaan"
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
      "question": "Pada konsep 'Indexed Access Types', manakah praktik penulisan type safety yang tepat di TypeScript?",
      "options": [
        "Menerapkan strict typing, generic constraints, dan type narrowing yang aman",
        "Mengabaikan type-check dengan casting 'as any' di semua return value",
        "Menonaktifkan opsi strictNullChecks di tsconfig.json",
        "Menghindari penggunaan utility types bawaan"
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
      "question": "Pada konsep 'Conditional Types', manakah praktik penulisan type safety yang tepat di TypeScript?",
      "options": [
        "Menerapkan strict typing, generic constraints, dan type narrowing yang aman",
        "Mengabaikan type-check dengan casting 'as any' di semua return value",
        "Menonaktifkan opsi strictNullChecks di tsconfig.json",
        "Menghindari penggunaan utility types bawaan"
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
      "question": "Pada konsep 'Mapped Types', manakah praktik penulisan type safety yang tepat di TypeScript?",
      "options": [
        "Menerapkan strict typing, generic constraints, dan type narrowing yang aman",
        "Mengabaikan type-check dengan casting 'as any' di semua return value",
        "Menonaktifkan opsi strictNullChecks di tsconfig.json",
        "Menghindari penggunaan utility types bawaan"
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
      "question": "Pada konsep 'Template Literal Types', manakah praktik penulisan type safety yang tepat di TypeScript?",
      "options": [
        "Menerapkan strict typing, generic constraints, dan type narrowing yang aman",
        "Mengabaikan type-check dengan casting 'as any' di semua return value",
        "Menonaktifkan opsi strictNullChecks di tsconfig.json",
        "Menghindari penggunaan utility types bawaan"
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
      "question": "Pada konsep 'Interface Dasar', manakah praktik penulisan type safety yang tepat di TypeScript?",
      "options": [
        "Menerapkan strict typing, generic constraints, dan type narrowing yang aman",
        "Mengabaikan type-check dengan casting 'as any' di semua return value",
        "Menonaktifkan opsi strictNullChecks di tsconfig.json",
        "Menghindari penggunaan utility types bawaan"
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
      "question": "Pada konsep 'Optional & Readonly Properties', manakah praktik penulisan type safety yang tepat di TypeScript?",
      "options": [
        "Menerapkan strict typing, generic constraints, dan type narrowing yang aman",
        "Mengabaikan type-check dengan casting 'as any' di semua return value",
        "Menonaktifkan opsi strictNullChecks di tsconfig.json",
        "Menghindari penggunaan utility types bawaan"
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
      "question": "Pada konsep 'Type Aliases', manakah praktik penulisan type safety yang tepat di TypeScript?",
      "options": [
        "Menerapkan strict typing, generic constraints, dan type narrowing yang aman",
        "Mengabaikan type-check dengan casting 'as any' di semua return value",
        "Menonaktifkan opsi strictNullChecks di tsconfig.json",
        "Menghindari penggunaan utility types bawaan"
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
      "question": "Pada konsep 'Interface vs Type Alias', manakah praktik penulisan type safety yang tepat di TypeScript?",
      "options": [
        "Menerapkan strict typing, generic constraints, dan type narrowing yang aman",
        "Mengabaikan type-check dengan casting 'as any' di semua return value",
        "Menonaktifkan opsi strictNullChecks di tsconfig.json",
        "Menghindari penggunaan utility types bawaan"
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
      "question": "Pada konsep 'Extending Interfaces', manakah praktik penulisan type safety yang tepat di TypeScript?",
      "options": [
        "Menerapkan strict typing, generic constraints, dan type narrowing yang aman",
        "Mengabaikan type-check dengan casting 'as any' di semua return value",
        "Menonaktifkan opsi strictNullChecks di tsconfig.json",
        "Menghindari penggunaan utility types bawaan"
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
      "question": "Pada konsep 'Index Signatures', manakah praktik penulisan type safety yang tepat di TypeScript?",
      "options": [
        "Menerapkan strict typing, generic constraints, dan type narrowing yang aman",
        "Mengabaikan type-check dengan casting 'as any' di semua return value",
        "Menonaktifkan opsi strictNullChecks di tsconfig.json",
        "Menghindari penggunaan utility types bawaan"
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
      "question": "Pada konsep 'Function Types', manakah praktik penulisan type safety yang tepat di TypeScript?",
      "options": [
        "Menerapkan strict typing, generic constraints, dan type narrowing yang aman",
        "Mengabaikan type-check dengan casting 'as any' di semua return value",
        "Menonaktifkan opsi strictNullChecks di tsconfig.json",
        "Menghindari penggunaan utility types bawaan"
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
      "question": "Pada konsep 'Rest & Spread', manakah praktik penulisan type safety yang tepat di TypeScript?",
      "options": [
        "Menerapkan strict typing, generic constraints, dan type narrowing yang aman",
        "Mengabaikan type-check dengan casting 'as any' di semua return value",
        "Menonaktifkan opsi strictNullChecks di tsconfig.json",
        "Menghindari penggunaan utility types bawaan"
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
      "question": "Pada konsep 'Optional & Default Params', manakah praktik penulisan type safety yang tepat di TypeScript?",
      "options": [
        "Menerapkan strict typing, generic constraints, dan type narrowing yang aman",
        "Mengabaikan type-check dengan casting 'as any' di semua return value",
        "Menonaktifkan opsi strictNullChecks di tsconfig.json",
        "Menghindari penggunaan utility types bawaan"
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
      "question": "Pada konsep 'Function Overloads', manakah praktik penulisan type safety yang tepat di TypeScript?",
      "options": [
        "Menerapkan strict typing, generic constraints, dan type narrowing yang aman",
        "Mengabaikan type-check dengan casting 'as any' di semua return value",
        "Menonaktifkan opsi strictNullChecks di tsconfig.json",
        "Menghindari penggunaan utility types bawaan"
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
      "question": "Pada konsep 'Arrow Functions & Types', manakah praktik penulisan type safety yang tepat di TypeScript?",
      "options": [
        "Menerapkan strict typing, generic constraints, dan type narrowing yang aman",
        "Mengabaikan type-check dengan casting 'as any' di semua return value",
        "Menonaktifkan opsi strictNullChecks di tsconfig.json",
        "Menghindari penggunaan utility types bawaan"
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
      "question": "Pada konsep 'Class Dasar', manakah praktik penulisan type safety yang tepat di TypeScript?",
      "options": [
        "Menerapkan strict typing, generic constraints, dan type narrowing yang aman",
        "Mengabaikan type-check dengan casting 'as any' di semua return value",
        "Menonaktifkan opsi strictNullChecks di tsconfig.json",
        "Menghindari penggunaan utility types bawaan"
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
      "question": "Pada konsep 'Inheritance (extends/super)', manakah praktik penulisan type safety yang tepat di TypeScript?",
      "options": [
        "Menerapkan strict typing, generic constraints, dan type narrowing yang aman",
        "Mengabaikan type-check dengan casting 'as any' di semua return value",
        "Menonaktifkan opsi strictNullChecks di tsconfig.json",
        "Menghindari penggunaan utility types bawaan"
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
      "question": "Pada konsep 'Access Modifiers', manakah praktik penulisan type safety yang tepat di TypeScript?",
      "options": [
        "Menerapkan strict typing, generic constraints, dan type narrowing yang aman",
        "Mengabaikan type-check dengan casting 'as any' di semua return value",
        "Menonaktifkan opsi strictNullChecks di tsconfig.json",
        "Menghindari penggunaan utility types bawaan"
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
      "question": "Pada konsep 'Constructor Parameter Properties', manakah praktik penulisan type safety yang tepat di TypeScript?",
      "options": [
        "Menerapkan strict typing, generic constraints, dan type narrowing yang aman",
        "Mengabaikan type-check dengan casting 'as any' di semua return value",
        "Menonaktifkan opsi strictNullChecks di tsconfig.json",
        "Menghindari penggunaan utility types bawaan"
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
      "question": "Pada konsep 'Abstract Classes', manakah praktik penulisan type safety yang tepat di TypeScript?",
      "options": [
        "Menerapkan strict typing, generic constraints, dan type narrowing yang aman",
        "Mengabaikan type-check dengan casting 'as any' di semua return value",
        "Menonaktifkan opsi strictNullChecks di tsconfig.json",
        "Menghindari penggunaan utility types bawaan"
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
      "question": "Pada konsep 'Readonly & Static', manakah praktik penulisan type safety yang tepat di TypeScript?",
      "options": [
        "Menerapkan strict typing, generic constraints, dan type narrowing yang aman",
        "Mengabaikan type-check dengan casting 'as any' di semua return value",
        "Menonaktifkan opsi strictNullChecks di tsconfig.json",
        "Menghindari penggunaan utility types bawaan"
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
      "question": "Pada konsep 'Generic Functions Dasar', manakah praktik penulisan type safety yang tepat di TypeScript?",
      "options": [
        "Menerapkan strict typing, generic constraints, dan type narrowing yang aman",
        "Mengabaikan type-check dengan casting 'as any' di semua return value",
        "Menonaktifkan opsi strictNullChecks di tsconfig.json",
        "Menghindari penggunaan utility types bawaan"
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
      "question": "Pada konsep 'Generic Interfaces & Classes', manakah praktik penulisan type safety yang tepat di TypeScript?",
      "options": [
        "Menerapkan strict typing, generic constraints, dan type narrowing yang aman",
        "Mengabaikan type-check dengan casting 'as any' di semua return value",
        "Menonaktifkan opsi strictNullChecks di tsconfig.json",
        "Menghindari penggunaan utility types bawaan"
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
      "question": "Pada konsep 'Generic Constraints', manakah praktik penulisan type safety yang tepat di TypeScript?",
      "options": [
        "Menerapkan strict typing, generic constraints, dan type narrowing yang aman",
        "Mengabaikan type-check dengan casting 'as any' di semua return value",
        "Menonaktifkan opsi strictNullChecks di tsconfig.json",
        "Menghindari penggunaan utility types bawaan"
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
      "question": "Pada konsep 'Default Type Parameters', manakah praktik penulisan type safety yang tepat di TypeScript?",
      "options": [
        "Menerapkan strict typing, generic constraints, dan type narrowing yang aman",
        "Mengabaikan type-check dengan casting 'as any' di semua return value",
        "Menonaktifkan opsi strictNullChecks di tsconfig.json",
        "Menghindari penggunaan utility types bawaan"
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
      "question": "Pada konsep 'Generic Utility Types', manakah praktik penulisan type safety yang tepat di TypeScript?",
      "options": [
        "Menerapkan strict typing, generic constraints, dan type narrowing yang aman",
        "Mengabaikan type-check dengan casting 'as any' di semua return value",
        "Menonaktifkan opsi strictNullChecks di tsconfig.json",
        "Menghindari penggunaan utility types bawaan"
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
      "question": "Pada konsep 'Parameter Utilities', manakah praktik penulisan type safety yang tepat di TypeScript?",
      "options": [
        "Menerapkan strict typing, generic constraints, dan type narrowing yang aman",
        "Mengabaikan type-check dengan casting 'as any' di semua return value",
        "Menonaktifkan opsi strictNullChecks di tsconfig.json",
        "Menghindari penggunaan utility types bawaan"
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
      "question": "Pada konsep 'ES6 Modules (import/export)', manakah praktik penulisan type safety yang tepat di TypeScript?",
      "options": [
        "Menerapkan strict typing, generic constraints, dan type narrowing yang aman",
        "Mengabaikan type-check dengan casting 'as any' di semua return value",
        "Menonaktifkan opsi strictNullChecks di tsconfig.json",
        "Menghindari penggunaan utility types bawaan"
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
      "question": "Pada konsep 'Default vs Named Export', manakah praktik penulisan type safety yang tepat di TypeScript?",
      "options": [
        "Menerapkan strict typing, generic constraints, dan type narrowing yang aman",
        "Mengabaikan type-check dengan casting 'as any' di semua return value",
        "Menonaktifkan opsi strictNullChecks di tsconfig.json",
        "Menghindari penggunaan utility types bawaan"
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
      "question": "Pada konsep 'Barrel Files', manakah praktik penulisan type safety yang tepat di TypeScript?",
      "options": [
        "Menerapkan strict typing, generic constraints, dan type narrowing yang aman",
        "Mengabaikan type-check dengan casting 'as any' di semua return value",
        "Menonaktifkan opsi strictNullChecks di tsconfig.json",
        "Menghindari penggunaan utility types bawaan"
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
      "question": "Pada konsep 'Dynamic Import & Code Splitting', manakah praktik penulisan type safety yang tepat di TypeScript?",
      "options": [
        "Menerapkan strict typing, generic constraints, dan type narrowing yang aman",
        "Mengabaikan type-check dengan casting 'as any' di semua return value",
        "Menonaktifkan opsi strictNullChecks di tsconfig.json",
        "Menghindari penggunaan utility types bawaan"
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
      "question": "Pada konsep 'Ambient Modules', manakah praktik penulisan type safety yang tepat di TypeScript?",
      "options": [
        "Menerapkan strict typing, generic constraints, dan type narrowing yang aman",
        "Mengabaikan type-check dengan casting 'as any' di semua return value",
        "Menonaktifkan opsi strictNullChecks di tsconfig.json",
        "Menghindari penggunaan utility types bawaan"
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
      "question": "Pada konsep 'Namespaces', manakah praktik penulisan type safety yang tepat di TypeScript?",
      "options": [
        "Menerapkan strict typing, generic constraints, dan type narrowing yang aman",
        "Mengabaikan type-check dengan casting 'as any' di semua return value",
        "Menonaktifkan opsi strictNullChecks di tsconfig.json",
        "Menghindari penggunaan utility types bawaan"
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
      "question": "Pada konsep 'Declaration Merging', manakah praktik penulisan type safety yang tepat di TypeScript?",
      "options": [
        "Menerapkan strict typing, generic constraints, dan type narrowing yang aman",
        "Mengabaikan type-check dengan casting 'as any' di semua return value",
        "Menonaktifkan opsi strictNullChecks di tsconfig.json",
        "Menghindari penggunaan utility types bawaan"
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
      "question": "Pada konsep 'tsconfig.json Struktur', manakah praktik penulisan type safety yang tepat di TypeScript?",
      "options": [
        "Menerapkan strict typing, generic constraints, dan type narrowing yang aman",
        "Mengabaikan type-check dengan casting 'as any' di semua return value",
        "Menonaktifkan opsi strictNullChecks di tsconfig.json",
        "Menghindari penggunaan utility types bawaan"
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
      "question": "Pada konsep 'Compiler Options', manakah praktik penulisan type safety yang tepat di TypeScript?",
      "options": [
        "Menerapkan strict typing, generic constraints, dan type narrowing yang aman",
        "Mengabaikan type-check dengan casting 'as any' di semua return value",
        "Menonaktifkan opsi strictNullChecks di tsconfig.json",
        "Menghindari penggunaan utility types bawaan"
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
      "question": "Pada konsep 'Strict Mode Options', manakah praktik penulisan type safety yang tepat di TypeScript?",
      "options": [
        "Menerapkan strict typing, generic constraints, dan type narrowing yang aman",
        "Mengabaikan type-check dengan casting 'as any' di semua return value",
        "Menonaktifkan opsi strictNullChecks di tsconfig.json",
        "Menghindari penggunaan utility types bawaan"
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
      "question": "Pada konsep 'Include, Exclude, Files', manakah praktik penulisan type safety yang tepat di TypeScript?",
      "options": [
        "Menerapkan strict typing, generic constraints, dan type narrowing yang aman",
        "Mengabaikan type-check dengan casting 'as any' di semua return value",
        "Menonaktifkan opsi strictNullChecks di tsconfig.json",
        "Menghindari penggunaan utility types bawaan"
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
      "question": "Pada konsep 'Path Mapping & Module Resolution', manakah praktik penulisan type safety yang tepat di TypeScript?",
      "options": [
        "Menerapkan strict typing, generic constraints, dan type narrowing yang aman",
        "Mengabaikan type-check dengan casting 'as any' di semua return value",
        "Menonaktifkan opsi strictNullChecks di tsconfig.json",
        "Menghindari penggunaan utility types bawaan"
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
      "question": "Pada konsep 'Build Tools (Webpack/Babel)', manakah praktik penulisan type safety yang tepat di TypeScript?",
      "options": [
        "Menerapkan strict typing, generic constraints, dan type narrowing yang aman",
        "Mengabaikan type-check dengan casting 'as any' di semua return value",
        "Menonaktifkan opsi strictNullChecks di tsconfig.json",
        "Menghindari penggunaan utility types bawaan"
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
      "question": "Pada konsep 'ESLint TypeScript', manakah praktik penulisan type safety yang tepat di TypeScript?",
      "options": [
        "Menerapkan strict typing, generic constraints, dan type narrowing yang aman",
        "Mengabaikan type-check dengan casting 'as any' di semua return value",
        "Menonaktifkan opsi strictNullChecks di tsconfig.json",
        "Menghindari penggunaan utility types bawaan"
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
      "question": "Pada konsep 'Prettier Integration', manakah praktik penulisan type safety yang tepat di TypeScript?",
      "options": [
        "Menerapkan strict typing, generic constraints, dan type narrowing yang aman",
        "Mengabaikan type-check dengan casting 'as any' di semua return value",
        "Menonaktifkan opsi strictNullChecks di tsconfig.json",
        "Menghindari penggunaan utility types bawaan"
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
      "question": "Pada konsep 'Using JS Libraries', manakah praktik penulisan type safety yang tepat di TypeScript?",
      "options": [
        "Menerapkan strict typing, generic constraints, dan type narrowing yang aman",
        "Mengabaikan type-check dengan casting 'as any' di semua return value",
        "Menonaktifkan opsi strictNullChecks di tsconfig.json",
        "Menghindari penggunaan utility types bawaan"
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
      "question": "Pada konsep 'Declaration Files (.d.ts)', manakah praktik penulisan type safety yang tepat di TypeScript?",
      "options": [
        "Menerapkan strict typing, generic constraints, dan type narrowing yang aman",
        "Mengabaikan type-check dengan casting 'as any' di semua return value",
        "Menonaktifkan opsi strictNullChecks di tsconfig.json",
        "Menghindari penggunaan utility types bawaan"
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
      "question": "Pada konsep 'DefinitelyTyped & @types', manakah praktik penulisan type safety yang tepat di TypeScript?",
      "options": [
        "Menerapkan strict typing, generic constraints, dan type narrowing yang aman",
        "Mengabaikan type-check dengan casting 'as any' di semua return value",
        "Menonaktifkan opsi strictNullChecks di tsconfig.json",
        "Menghindari penggunaan utility types bawaan"
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
      "question": "Pada konsep 'Migrasi JS ke TS', manakah praktik penulisan type safety yang tepat di TypeScript?",
      "options": [
        "Menerapkan strict typing, generic constraints, dan type narrowing yang aman",
        "Mengabaikan type-check dengan casting 'as any' di semua return value",
        "Menonaktifkan opsi strictNullChecks di tsconfig.json",
        "Menghindari penggunaan utility types bawaan"
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
      "question": "Pada konsep 'Partial & Required', manakah praktik penulisan type safety yang tepat di TypeScript?",
      "options": [
        "Menerapkan strict typing, generic constraints, dan type narrowing yang aman",
        "Mengabaikan type-check dengan casting 'as any' di semua return value",
        "Menonaktifkan opsi strictNullChecks di tsconfig.json",
        "Menghindari penggunaan utility types bawaan"
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
      "question": "Pada konsep 'Pick & Omit', manakah praktik penulisan type safety yang tepat di TypeScript?",
      "options": [
        "Menerapkan strict typing, generic constraints, dan type narrowing yang aman",
        "Mengabaikan type-check dengan casting 'as any' di semua return value",
        "Menonaktifkan opsi strictNullChecks di tsconfig.json",
        "Menghindari penggunaan utility types bawaan"
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
      "question": "Pada konsep 'Record & Tuple', manakah praktik penulisan type safety yang tepat di TypeScript?",
      "options": [
        "Menerapkan strict typing, generic constraints, dan type narrowing yang aman",
        "Mengabaikan type-check dengan casting 'as any' di semua return value",
        "Menonaktifkan opsi strictNullChecks di tsconfig.json",
        "Menghindari penggunaan utility types bawaan"
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
      "question": "Pada konsep 'Readonly & Record', manakah praktik penulisan type safety yang tepat di TypeScript?",
      "options": [
        "Menerapkan strict typing, generic constraints, dan type narrowing yang aman",
        "Mengabaikan type-check dengan casting 'as any' di semua return value",
        "Menonaktifkan opsi strictNullChecks di tsconfig.json",
        "Menghindari penggunaan utility types bawaan"
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
      "question": "Pada konsep 'ReturnType & ThisType', manakah praktik penulisan type safety yang tepat di TypeScript?",
      "options": [
        "Menerapkan strict typing, generic constraints, dan type narrowing yang aman",
        "Mengabaikan type-check dengan casting 'as any' di semua return value",
        "Menonaktifkan opsi strictNullChecks di tsconfig.json",
        "Menghindari penggunaan utility types bawaan"
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
      "question": "Pada konsep 'Exclude, Extract, NonNullable', manakah praktik penulisan type safety yang tepat di TypeScript?",
      "options": [
        "Menerapkan strict typing, generic constraints, dan type narrowing yang aman",
        "Mengabaikan type-check dengan casting 'as any' di semua return value",
        "Menonaktifkan opsi strictNullChecks di tsconfig.json",
        "Menghindari penggunaan utility types bawaan"
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
      "question": "Pada konsep 'Parameters & ConstructorParameters', manakah praktik penulisan type safety yang tepat di TypeScript?",
      "options": [
        "Menerapkan strict typing, generic constraints, dan type narrowing yang aman",
        "Mengabaikan type-check dengan casting 'as any' di semua return value",
        "Menonaktifkan opsi strictNullChecks di tsconfig.json",
        "Menghindari penggunaan utility types bawaan"
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
      "question": "Pada konsep 'OmitThisParameter', manakah praktik penulisan type safety yang tepat di TypeScript?",
      "options": [
        "Menerapkan strict typing, generic constraints, dan type narrowing yang aman",
        "Mengabaikan type-check dengan casting 'as any' di semua return value",
        "Menonaktifkan opsi strictNullChecks di tsconfig.json",
        "Menghindari penggunaan utility types bawaan"
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
      "question": "Pada konsep 'Project: CLI Tool', manakah praktik penulisan type safety yang tepat di TypeScript?",
      "options": [
        "Menerapkan strict typing, generic constraints, dan type narrowing yang aman",
        "Mengabaikan type-check dengan casting 'as any' di semua return value",
        "Menonaktifkan opsi strictNullChecks di tsconfig.json",
        "Menghindari penggunaan utility types bawaan"
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
      "question": "Pada konsep 'Project: React + TypeScript', manakah praktik penulisan type safety yang tepat di TypeScript?",
      "options": [
        "Menerapkan strict typing, generic constraints, dan type narrowing yang aman",
        "Mengabaikan type-check dengan casting 'as any' di semua return value",
        "Menonaktifkan opsi strictNullChecks di tsconfig.json",
        "Menghindari penggunaan utility types bawaan"
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
      "question": "Pada konsep 'Project: REST API', manakah praktik penulisan type safety yang tepat di TypeScript?",
      "options": [
        "Menerapkan strict typing, generic constraints, dan type narrowing yang aman",
        "Mengabaikan type-check dengan casting 'as any' di semua return value",
        "Menonaktifkan opsi strictNullChecks di tsconfig.json",
        "Menghindari penggunaan utility types bawaan"
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
      "question": "Pada konsep 'Project: Type Definitions', manakah praktik penulisan type safety yang tepat di TypeScript?",
      "options": [
        "Menerapkan strict typing, generic constraints, dan type narrowing yang aman",
        "Mengabaikan type-check dengan casting 'as any' di semua return value",
        "Menonaktifkan opsi strictNullChecks di tsconfig.json",
        "Menghindari penggunaan utility types bawaan"
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
      "question": "Pada konsep 'Final: Fullstack App', manakah praktik penulisan type safety yang tepat di TypeScript?",
      "options": [
        "Menerapkan strict typing, generic constraints, dan type narrowing yang aman",
        "Mengabaikan type-check dengan casting 'as any' di semua return value",
        "Menonaktifkan opsi strictNullChecks di tsconfig.json",
        "Menghindari penggunaan utility types bawaan"
      ],
      "answer": 0
    }
  }
];

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
    try { localStorage.setItem('typescript_last_lesson', String(index)); } catch(e){}
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

// ─── Code Execution (TS 5.4.5 via ts.transpileModule — 100% in-browser) ─
function runCode() {
    const _ed = document.getElementById('code-editor');
    const code = _ed ? _ed.value : '';
    const output = document.getElementById('output');
    if (!_ed || !output) return;
    const validation = document.getElementById('validation-msg');
    const status = document.getElementById('compile-status');
    if (!code.trim()) {
        output.innerHTML = '<span class="text-slate-500">// Tulis kode dulu, lalu Run ▶</span>';
        if (status) { status.textContent = '○ Idle'; status.className = 'text-xs text-slate-500 ml-auto'; }
        return;
    }
    let logs = [];
    const origLog = console.log;
    const origWarn = console.warn;
    const origError = console.error;
    const origInfo = console.info;
    const stringify = (x) => {
        if (x === null) return 'null';
        if (typeof x === 'object') { try { return JSON.stringify(x, null, 2); } catch (_) { return String(x); } }
        return String(x);
    };
    console.log   = (...a) => logs.push(a.map(stringify).join(' '));
    console.warn  = (...a) => logs.push('⚠️ ' + a.map(stringify).join(' '));
    console.error = (...a) => logs.push('❌ ' + a.map(stringify).join(' '));
    console.info  = (...a) => logs.push(a.map(stringify).join(' '));
    try {
        if (typeof ts === 'undefined' || !ts.transpileModule) {
            output.innerHTML = '<span class="text-amber-400">⚠️ TypeScript compiler belum dimuat. Cek koneksi/CDN jsDelivr lalu refresh. <span class="text-slate-500 text-xs">cdn.jsdelivr.net/npm/typescript@5.4.5</span></span>';
            if (status) { status.textContent = '○ Offline'; status.className = 'text-xs text-amber-400 ml-auto'; }
            return;
        }
        // ts.transpileModule is transpile-only (strip types) — diagnostics optional but we surface errors cleanly
        const transpiled = ts.transpileModule(code, {
            compilerOptions: {
                module: ts.ModuleKind.None,
                target: ts.ScriptTarget.ES2022,
                strict: false,
                esModuleInterop: true,
                allowSyntheticDefaultImports: true,
                skipLibCheck: true
            },
            reportDiagnostics: true
        });
        if (transpiled.diagnostics && transpiled.diagnostics.length) {
            const errs = transpiled.diagnostics.filter(function(d){ return d.category === ts.DiagnosticCategory.Error; });
            if (errs.length) {
                const fmt = function(d){
                    var msg = ts.flattenDiagnosticMessageText(d.messageText, '\n');
                    if (typeof d.start === 'number') {
                        var upTo = code.slice(0, d.start);
                        var line = upTo.split('\n').length;
                        var col = upTo.length - upTo.lastIndexOf('\n');
                        return 'TS' + d.code + ' [L' + line + ':' + col + '] ' + msg;
                    }
                    return 'TS' + d.code + ' ' + msg;
                };
                throw new Error(errs.map(fmt).join('\n'));
            }
        }
        var js = transpiled.outputText;
        // eslint-disable-next-line no-eval
        eval(js);
        var result = logs.join('\n');
        output.innerHTML = result ? '<span class="text-emerald-400">' + escapeHtml(result) + '</span>' : '<span class="text-slate-600">// No output — coba console.log(...)</span>';
        if (status) { status.textContent = '✓ Compiled'; status.className = 'text-xs text-emerald-500 ml-auto'; }
        if (validation) {
            var exp = lessons[currentLesson] && lessons[currentLesson].expectedOutput;
            if (exp && result.trim() === exp.trim()) {
                validation.className = 'validation-msg bg-emerald-900/30 border border-emerald-500/30 text-emerald-400';
                validation.innerHTML = '<i class="fas fa-check-circle mr-2"></i>Output benar!';
                progress[lessons[currentLesson].id] = true;
                localStorage.setItem('typescript_progress', JSON.stringify(progress));
                updateProgress();
                renderNav();
            } else {
                validation.className = 'validation-msg hidden';
            }
        }
    } catch (e) {
        var msg = (e && e.message) ? e.message : String(e);
        var stack = (e && e.stack) ? ('\n' + e.stack.split('\n').slice(1, 3).join('\n')) : '';
        output.innerHTML = '<span class="text-red-400">❌ ' + escapeHtml(msg + stack) + '</span>';
        if (status) { status.textContent = '✗ Error'; status.className = 'text-xs text-red-400 ml-auto'; }
        if (validation) validation.className = 'validation-msg hidden';
    } finally {
        console.log = origLog;
        console.warn = origWarn;
        console.error = origError;
        console.info = origInfo;
    }
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


// ============================================

// ============================================
// Unified Certificate Generator & Gating (100% Completion Only)
// ============================================

window.isCourseFullyCompleted = function() {
    const total = typeof lessons !== 'undefined' ? lessons.length : 50;
    const done = Object.keys(progress || {}).filter(k => !!progress[k]).length;
    return total > 0 && done >= total;
};

window.openCertificateModal = function() {
    const modal = document.getElementById('certificate-modal');
    if (!modal) return;
    modal.classList.remove('hidden');
    modal.classList.add('flex');

    const total = typeof lessons !== 'undefined' ? lessons.length : 50;
    const done = Object.keys(progress || {}).filter(k => !!progress[k]).length;
    const pct = total > 0 ? Math.round((done / total) * 100) : 0;
    const isCompleted = done >= total && total > 0;

    const lockedView = document.getElementById('cert-locked-view');
    const unlockedView = document.getElementById('cert-unlocked-view');
    const unlockedFooter = document.getElementById('cert-unlocked-footer');

    if (!isCompleted) {
        // Show Locked State
        if (lockedView) lockedView.classList.remove('hidden');
        if (unlockedView) unlockedView.classList.add('hidden');
        if (unlockedFooter) unlockedFooter.classList.add('hidden');

        const pText = document.getElementById('cert-locked-progress-text');
        const pBar = document.getElementById('cert-locked-progress-bar');
        const rText = document.getElementById('cert-locked-remaining-text');
        if (pText) pText.textContent = `${done} / ${total} (${pct}%)`;
        if (pBar) pBar.style.width = `${pct}%`;
        if (rText) rText.textContent = `Tersisa ${Math.max(0, total - done)} pelajaran lagi untuk membuka sertifikat.`;
    } else {
        // Show Unlocked State
        if (lockedView) lockedView.classList.add('hidden');
        if (unlockedView) unlockedView.classList.remove('hidden');
        if (unlockedFooter) unlockedFooter.classList.remove('hidden');

        const savedName = localStorage.getItem('user_cert_name') || 'Software Engineer';
        const input = document.getElementById('cert-name-input');
        if (input) input.value = savedName;

        setTimeout(() => {
            window.drawCertificate();
        }, 100);
    }
};

window.closeCertificateModal = function() {
    const modal = document.getElementById('certificate-modal');
    if (!modal) return;
    modal.classList.add('hidden');
    modal.classList.remove('flex');
};

window.drawCertificate = function() {
    if (!window.isCourseFullyCompleted()) return;
    const canvas = document.getElementById('cert-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    
    const studentName = (document.getElementById('cert-name-input')?.value || 'Software Engineer').trim();
    localStorage.setItem('user_cert_name', studentName);
    
    // Background Dark Luxury
    ctx.fillStyle = '#0a0f1a';
    ctx.fillRect(0, 0, width, height);
    
    // Outer Border & Accents
    const gradient = ctx.createLinearGradient(0, 0, width, height);
    gradient.addColorStop(0, '#3b82f6');
    gradient.addColorStop(0.5, '#4f46e5');
    gradient.addColorStop(1, '#3b82f6');
    
    ctx.strokeStyle = gradient;
    ctx.lineWidth = 14;
    ctx.strokeRect(30, 30, width - 60, height - 60);
    
    // Inner thin border
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
    ctx.lineWidth = 2;
    ctx.strokeRect(45, 45, width - 90, height - 90);
    
    // Corner ornaments
    const drawCorner = (x, y) => {
        ctx.fillStyle = '#3b82f6';
        ctx.beginPath();
        ctx.arc(x, y, 6, 0, Math.PI * 2);
        ctx.fill();
    };
    drawCorner(45, 45);
    drawCorner(width - 45, 45);
    drawCorner(45, height - 45);
    drawCorner(width - 45, height - 45);
    
    // Header Tag
    ctx.textAlign = 'center';
    ctx.font = '600 16px Inter, sans-serif';
    ctx.fillStyle = '#3b82f6';
    ctx.letterSpacing = '4px';
    ctx.fillText('CERTIFICATE OF COMPLETION', width / 2, 120);
    
    // Title
    ctx.font = '800 38px Inter, sans-serif';
    ctx.fillStyle = '#ffffff';
    ctx.fillText('TypeScript Learning Path — Type Safety to Advanced', width / 2, 175);
    
    // Subtext
    ctx.font = '400 18px Inter, sans-serif';
    ctx.fillStyle = '#94a3b8';
    ctx.fillText('Diberikan kepada:', width / 2, 240);
    
    // Student Name
    ctx.font = '700 46px Inter, sans-serif';
    ctx.fillStyle = '#ffffff';
    ctx.fillText(studentName, width / 2, 310);
    
    // Underline name
    const textWidth = ctx.measureText(studentName).width;
    ctx.strokeStyle = gradient;
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo((width - textWidth) / 2 - 20, 335);
    ctx.lineTo((width + textWidth) / 2 + 20, 335);
    ctx.stroke();
    
    // Paragraph
    ctx.font = '400 18px Inter, sans-serif';
    ctx.fillStyle = '#cbd5e1';
    ctx.fillText('Telah berhasil menyelesaikan 100% seluruh kurikulum interaktif, latihan kode praktik,', width / 2, 400);
    ctx.fillText('dan uji pemahaman (quiz) pada platform TypeScript Learning Path dengan predikat Sangat Memuaskan.', width / 2, 430);
    
    // Verification & Date Footer
    const today = new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' });
    const codeId = 'LP-' + Math.abs(studentName.split('').reduce((a, b) => ((a << 5) - a) + b.charCodeAt(0), 0)).toString(36).toUpperCase().padStart(8, '0');
    
    ctx.textAlign = 'left';
    ctx.font = '500 14px JetBrains Mono, monospace';
    ctx.fillStyle = '#64748b';
    ctx.fillText(`Tanggal: ${today}`, 90, 560);
    ctx.fillText(`ID Sertifikat: #${codeId}`, 90, 585);
    ctx.fillText(`Status: Terverifikasi (100% Selesai)`, 90, 610);
    
    // Seal / Badge
    ctx.save();
    ctx.beginPath();
    ctx.arc(width - 150, 570, 48, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(255, 255, 255, 0.04)';
    ctx.fill();
    ctx.strokeStyle = gradient;
    ctx.lineWidth = 3;
    ctx.stroke();
    
    ctx.textAlign = 'center';
    ctx.font = '32px Inter, sans-serif';
    ctx.fillText('🔵', width - 150, 565);
    ctx.font = '700 10px Inter, sans-serif';
    ctx.fillStyle = '#3b82f6';
    ctx.fillText('VERIFIED', width - 150, 595);
    ctx.restore();
};

window.downloadCertificatePNG = function() {
    if (!window.isCourseFullyCompleted()) {
        alert('Sertifikat hanya dapat diunduh setelah menyelesaikan 100% seluruh modul!');
        return;
    }
    const canvas = document.getElementById('cert-canvas');
    if (!canvas) return;
    const link = document.createElement('a');
    const name = (document.getElementById('cert-name-input')?.value || 'sertifikat').trim().toLowerCase().replace(/\s+/g, '-');
    link.download = `sertifikat-${name}-typescript.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
};

window.printCertificate = function() {
    if (!window.isCourseFullyCompleted()) {
        alert('Sertifikat hanya dapat dicetak setelah menyelesaikan 100% seluruh modul!');
        return;
    }
    const canvas = document.getElementById('cert-canvas');
    if (!canvas) return;
    const dataUrl = canvas.toDataURL('image/png');
    const win = window.open('', '_blank');
    if (win) {
        win.document.write(`
            <html>
                <head>
                    <title>Cetak Sertifikat</title>
                    <style>
                        body { margin: 0; display: flex; align-items: center; justify-content: center; min-height: 100vh; background: #111; }
                        img { max-width: 95vw; max-height: 95vh; box-shadow: 0 0 20px rgba(0,0,0,0.5); }
                        @media print {
                            body { background: transparent; }
                            img { width: 100%; max-width: 100%; }
                        }
                    </style>
                </head>
                <body onload="window.print()">
                    <img src="${dataUrl}">
                </body>
            </html>
        `);
        win.document.close();
    }
};
