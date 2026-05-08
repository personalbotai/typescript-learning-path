// TypeScript Learning Path
const MODULES = [
    {
        "id": 1,
        "title": "Pengenalan TypeScript",
        "icon": "fas fa-play-circle"
    },
    {
        "id": 2,
        "title": "Type System",
        "icon": "fas fa-shield-alt"
    },
    {
        "id": 3,
        "title": "OOP",
        "icon": "fas fa-object-group"
    },
    {
        "id": 4,
        "title": "Advanced Types",
        "icon": "fas fa-cogs"
    },
    {
        "id": 5,
        "title": "Modules & Tooling",
        "icon": "fas fa-tools"
    }
];

const lessons = [
    {
        "id": 1,
        "title": "1. Abstract Classes",
        "module": "Pengenalan TypeScript",
        "moduleId": 1,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/typescript-learning-path/gh-pages/lessons/abstract-classes.md",
        "description": "<p><strong>Abstract Classes</strong></p>",
        "defaultCode": "// Write TypeScript here\nconst msg: string = \"Hello, TypeScript!\";\nconsole.log(msg);",
        "expectedOutput": "Hello, TypeScript!",
        "hint": "Pelajari materi.",
        "quiz": {
            "question": "Apa yang dipelajari di Abstract Classes?",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "answer": 0
        }
    },
    {
        "id": 2,
        "title": "2. Access Modifiers",
        "module": "Pengenalan TypeScript",
        "moduleId": 1,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/typescript-learning-path/gh-pages/lessons/access-modifiers.md",
        "description": "<p><strong>Access Modifiers</strong></p>",
        "defaultCode": "// Write TypeScript here\nconst msg: string = \"Hello, TypeScript!\";\nconsole.log(msg);",
        "expectedOutput": "Hello, TypeScript!",
        "hint": "Pelajari materi.",
        "quiz": {
            "question": "Apa yang dipelajari di Access Modifiers?",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "answer": 0
        }
    },
    {
        "id": 3,
        "title": "3. Ambient Modules",
        "module": "Pengenalan TypeScript",
        "moduleId": 1,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/typescript-learning-path/gh-pages/lessons/ambient-modules.md",
        "description": "<p><strong>Ambient Modules</strong></p>",
        "defaultCode": "// Write TypeScript here\nconst msg: string = \"Hello, TypeScript!\";\nconsole.log(msg);",
        "expectedOutput": "Hello, TypeScript!",
        "hint": "Pelajari materi.",
        "quiz": {
            "question": "Apa yang dipelajari di Ambient Modules?",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "answer": 0
        }
    },
    {
        "id": 4,
        "title": "4. Any Dan Unknown",
        "module": "Pengenalan TypeScript",
        "moduleId": 1,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/typescript-learning-path/gh-pages/lessons/any-dan-unknown.md",
        "description": "<p><strong>Any Dan Unknown</strong></p>",
        "defaultCode": "// Write TypeScript here\nconst msg: string = \"Hello, TypeScript!\";\nconsole.log(msg);",
        "expectedOutput": "Hello, TypeScript!",
        "hint": "Pelajari materi.",
        "quiz": {
            "question": "Apa yang dipelajari di Any Dan Unknown?",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "answer": 0
        }
    },
    {
        "id": 5,
        "title": "5. Apa Itu Typescript",
        "module": "Pengenalan TypeScript",
        "moduleId": 1,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/typescript-learning-path/gh-pages/lessons/apa-itu-typescript.md",
        "description": "<p><strong>Apa Itu Typescript</strong></p>",
        "defaultCode": "// Write TypeScript here\nconst msg: string = \"Hello, TypeScript!\";\nconsole.log(msg);",
        "expectedOutput": "Hello, TypeScript!",
        "hint": "Pelajari materi.",
        "quiz": {
            "question": "Apa yang dipelajari di Apa Itu Typescript?",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "answer": 0
        }
    },
    {
        "id": 6,
        "title": "6. Array Dan Tuple",
        "module": "Pengenalan TypeScript",
        "moduleId": 1,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/typescript-learning-path/gh-pages/lessons/array-dan-tuple.md",
        "description": "<p><strong>Array Dan Tuple</strong></p>",
        "defaultCode": "// Write TypeScript here\nconst msg: string = \"Hello, TypeScript!\";\nconsole.log(msg);",
        "expectedOutput": "Hello, TypeScript!",
        "hint": "Pelajari materi.",
        "quiz": {
            "question": "Apa yang dipelajari di Array Dan Tuple?",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "answer": 0
        }
    },
    {
        "id": 7,
        "title": "7. Arrow Functions Types",
        "module": "Pengenalan TypeScript",
        "moduleId": 1,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/typescript-learning-path/gh-pages/lessons/arrow-functions-types.md",
        "description": "<p><strong>Arrow Functions Types</strong></p>",
        "defaultCode": "// Write TypeScript here\nconst msg: string = \"Hello, TypeScript!\";\nconsole.log(msg);",
        "expectedOutput": "Hello, TypeScript!",
        "hint": "Pelajari materi.",
        "quiz": {
            "question": "Apa yang dipelajari di Arrow Functions Types?",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "answer": 0
        }
    },
    {
        "id": 8,
        "title": "8. Barrel Files",
        "module": "Pengenalan TypeScript",
        "moduleId": 1,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/typescript-learning-path/gh-pages/lessons/barrel-files.md",
        "description": "<p><strong>Barrel Files</strong></p>",
        "defaultCode": "// Write TypeScript here\nconst msg: string = \"Hello, TypeScript!\";\nconsole.log(msg);",
        "expectedOutput": "Hello, TypeScript!",
        "hint": "Pelajari materi.",
        "quiz": {
            "question": "Apa yang dipelajari di Barrel Files?",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "answer": 0
        }
    },
    {
        "id": 9,
        "title": "9. Build Tools Webpack Babel",
        "module": "Pengenalan TypeScript",
        "moduleId": 1,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/typescript-learning-path/gh-pages/lessons/build-tools-webpack-babel.md",
        "description": "<p><strong>Build Tools Webpack Babel</strong></p>",
        "defaultCode": "// Write TypeScript here\nconst msg: string = \"Hello, TypeScript!\";\nconsole.log(msg);",
        "expectedOutput": "Hello, TypeScript!",
        "hint": "Pelajari materi.",
        "quiz": {
            "question": "Apa yang dipelajari di Build Tools Webpack Babel?",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "answer": 0
        }
    },
    {
        "id": 10,
        "title": "10. Class Dasar",
        "module": "Pengenalan TypeScript",
        "moduleId": 1,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/typescript-learning-path/gh-pages/lessons/class-dasar.md",
        "description": "<p><strong>Class Dasar</strong></p>",
        "defaultCode": "// Write TypeScript here\nconst msg: string = \"Hello, TypeScript!\";\nconsole.log(msg);",
        "expectedOutput": "Hello, TypeScript!",
        "hint": "Pelajari materi.",
        "quiz": {
            "question": "Apa yang dipelajari di Class Dasar?",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "answer": 0
        }
    },
    {
        "id": 11,
        "title": "11. Compiler Options Target Module Lib",
        "module": "Pengenalan TypeScript",
        "moduleId": 1,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/typescript-learning-path/gh-pages/lessons/compiler-options-target-module-lib.md",
        "description": "<p><strong>Compiler Options Target Module Lib</strong></p>",
        "defaultCode": "// Write TypeScript here\nconst msg: string = \"Hello, TypeScript!\";\nconsole.log(msg);",
        "expectedOutput": "Hello, TypeScript!",
        "hint": "Pelajari materi.",
        "quiz": {
            "question": "Apa yang dipelajari di Compiler Options Target Module Lib?",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "answer": 0
        }
    },
    {
        "id": 12,
        "title": "12. Conditional Types",
        "module": "Pengenalan TypeScript",
        "moduleId": 1,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/typescript-learning-path/gh-pages/lessons/conditional-types.md",
        "description": "<p><strong>Conditional Types</strong></p>",
        "defaultCode": "// Write TypeScript here\nconst msg: string = \"Hello, TypeScript!\";\nconsole.log(msg);",
        "expectedOutput": "Hello, TypeScript!",
        "hint": "Pelajari materi.",
        "quiz": {
            "question": "Apa yang dipelajari di Conditional Types?",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "answer": 0
        }
    },
    {
        "id": 13,
        "title": "13. Constructor Parameter Properties",
        "module": "Pengenalan TypeScript",
        "moduleId": 1,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/typescript-learning-path/gh-pages/lessons/constructor-parameter-properties.md",
        "description": "<p><strong>Constructor Parameter Properties</strong></p>",
        "defaultCode": "// Write TypeScript here\nconst msg: string = \"Hello, TypeScript!\";\nconsole.log(msg);",
        "expectedOutput": "Hello, TypeScript!",
        "hint": "Pelajari materi.",
        "quiz": {
            "question": "Apa yang dipelajari di Constructor Parameter Properties?",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "answer": 0
        }
    },
    {
        "id": 14,
        "title": "14. Declaration Files D Ts",
        "module": "Pengenalan TypeScript",
        "moduleId": 1,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/typescript-learning-path/gh-pages/lessons/declaration-files-d-ts.md",
        "description": "<p><strong>Declaration Files D Ts</strong></p>",
        "defaultCode": "// Write TypeScript here\nconst msg: string = \"Hello, TypeScript!\";\nconsole.log(msg);",
        "expectedOutput": "Hello, TypeScript!",
        "hint": "Pelajari materi.",
        "quiz": {
            "question": "Apa yang dipelajari di Declaration Files D Ts?",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "answer": 0
        }
    },
    {
        "id": 15,
        "title": "15. Declaration Merging",
        "module": "Pengenalan TypeScript",
        "moduleId": 1,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/typescript-learning-path/gh-pages/lessons/declaration-merging.md",
        "description": "<p><strong>Declaration Merging</strong></p>",
        "defaultCode": "// Write TypeScript here\nconst msg: string = \"Hello, TypeScript!\";\nconsole.log(msg);",
        "expectedOutput": "Hello, TypeScript!",
        "hint": "Pelajari materi.",
        "quiz": {
            "question": "Apa yang dipelajari di Declaration Merging?",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "answer": 0
        }
    },
    {
        "id": 16,
        "title": "16. Default Type Params",
        "module": "Pengenalan TypeScript",
        "moduleId": 1,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/typescript-learning-path/gh-pages/lessons/default-type-params.md",
        "description": "<p><strong>Default Type Params</strong></p>",
        "defaultCode": "// Write TypeScript here\nconst msg: string = \"Hello, TypeScript!\";\nconsole.log(msg);",
        "expectedOutput": "Hello, TypeScript!",
        "hint": "Pelajari materi.",
        "quiz": {
            "question": "Apa yang dipelajari di Default Type Params?",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "answer": 0
        }
    },
    {
        "id": 17,
        "title": "17. Default Vs Named Export",
        "module": "Type System",
        "moduleId": 2,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/typescript-learning-path/gh-pages/lessons/default-vs-named-export.md",
        "description": "<p><strong>Default Vs Named Export</strong></p>",
        "defaultCode": "// Write TypeScript here\nconst msg: string = \"Hello, TypeScript!\";\nconsole.log(msg);",
        "expectedOutput": "Hello, TypeScript!",
        "hint": "Pelajari materi.",
        "quiz": {
            "question": "Apa yang dipelajari di Default Vs Named Export?",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "answer": 0
        }
    },
    {
        "id": 18,
        "title": "18. Definitelytyped",
        "module": "Type System",
        "moduleId": 2,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/typescript-learning-path/gh-pages/lessons/definitelytyped.md",
        "description": "<p><strong>Definitelytyped</strong></p>",
        "defaultCode": "// Write TypeScript here\nconst msg: string = \"Hello, TypeScript!\";\nconsole.log(msg);",
        "expectedOutput": "Hello, TypeScript!",
        "hint": "Pelajari materi.",
        "quiz": {
            "question": "Apa yang dipelajari di Definitelytyped?",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "answer": 0
        }
    },
    {
        "id": 19,
        "title": "19. Dynamic Import Code Splitting",
        "module": "Type System",
        "moduleId": 2,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/typescript-learning-path/gh-pages/lessons/dynamic-import-code-splitting.md",
        "description": "<p><strong>Dynamic Import Code Splitting</strong></p>",
        "defaultCode": "// Write TypeScript here\nconst msg: string = \"Hello, TypeScript!\";\nconsole.log(msg);",
        "expectedOutput": "Hello, TypeScript!",
        "hint": "Pelajari materi.",
        "quiz": {
            "question": "Apa yang dipelajari di Dynamic Import Code Splitting?",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "answer": 0
        }
    },
    {
        "id": 20,
        "title": "20. Enum Named Constants",
        "module": "Type System",
        "moduleId": 2,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/typescript-learning-path/gh-pages/lessons/enum-named-constants.md",
        "description": "<p><strong>Enum Named Constants</strong></p>",
        "defaultCode": "// Write TypeScript here\nconst msg: string = \"Hello, TypeScript!\";\nconsole.log(msg);",
        "expectedOutput": "Hello, TypeScript!",
        "hint": "Pelajari materi.",
        "quiz": {
            "question": "Apa yang dipelajari di Enum Named Constants?",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "answer": 0
        }
    },
    {
        "id": 21,
        "title": "21. Es6 Modules Import Export",
        "module": "Type System",
        "moduleId": 2,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/typescript-learning-path/gh-pages/lessons/es6-modules-import-export.md",
        "description": "<p><strong>Es6 Modules Import Export</strong></p>",
        "defaultCode": "// Write TypeScript here\nconst msg: string = \"Hello, TypeScript!\";\nconsole.log(msg);",
        "expectedOutput": "Hello, TypeScript!",
        "hint": "Pelajari materi.",
        "quiz": {
            "question": "Apa yang dipelajari di Es6 Modules Import Export?",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "answer": 0
        }
    },
    {
        "id": 22,
        "title": "22. Eslint Typescript",
        "module": "Type System",
        "moduleId": 2,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/typescript-learning-path/gh-pages/lessons/eslint-typescript.md",
        "description": "<p><strong>Eslint Typescript</strong></p>",
        "defaultCode": "// Write TypeScript here\nconst msg: string = \"Hello, TypeScript!\";\nconsole.log(msg);",
        "expectedOutput": "Hello, TypeScript!",
        "hint": "Pelajari materi.",
        "quiz": {
            "question": "Apa yang dipelajari di Eslint Typescript?",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "answer": 0
        }
    },
    {
        "id": 23,
        "title": "23. Exclude Extract Nonnullable",
        "module": "Type System",
        "moduleId": 2,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/typescript-learning-path/gh-pages/lessons/exclude-extract-nonnullable.md",
        "description": "<p><strong>Exclude Extract Nonnullable</strong></p>",
        "defaultCode": "// Write TypeScript here\nconst msg: string = \"Hello, TypeScript!\";\nconsole.log(msg);",
        "expectedOutput": "Hello, TypeScript!",
        "hint": "Pelajari materi.",
        "quiz": {
            "question": "Apa yang dipelajari di Exclude Extract Nonnullable?",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "answer": 0
        }
    },
    {
        "id": 24,
        "title": "24. Extending Interfaces Types",
        "module": "Type System",
        "moduleId": 2,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/typescript-learning-path/gh-pages/lessons/extending-interfaces-types.md",
        "description": "<p><strong>Extending Interfaces Types</strong></p>",
        "defaultCode": "// Write TypeScript here\nconst msg: string = \"Hello, TypeScript!\";\nconsole.log(msg);",
        "expectedOutput": "Hello, TypeScript!",
        "hint": "Pelajari materi.",
        "quiz": {
            "question": "Apa yang dipelajari di Extending Interfaces Types?",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "answer": 0
        }
    },
    {
        "id": 25,
        "title": "25. Final Project Fullstack",
        "module": "Type System",
        "moduleId": 2,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/typescript-learning-path/gh-pages/lessons/final-project-fullstack.md",
        "description": "<p><strong>Final Project Fullstack</strong></p>",
        "defaultCode": "// Write TypeScript here\nconst msg: string = \"Hello, TypeScript!\";\nconsole.log(msg);",
        "expectedOutput": "Hello, TypeScript!",
        "hint": "Pelajari materi.",
        "quiz": {
            "question": "Apa yang dipelajari di Final Project Fullstack?",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "answer": 0
        }
    },
    {
        "id": 26,
        "title": "26. Function Overloads",
        "module": "Type System",
        "moduleId": 2,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/typescript-learning-path/gh-pages/lessons/function-overloads.md",
        "description": "<p><strong>Function Overloads</strong></p>",
        "defaultCode": "// Write TypeScript here\nconst msg: string = \"Hello, TypeScript!\";\nconsole.log(msg);",
        "expectedOutput": "Hello, TypeScript!",
        "hint": "Pelajari materi.",
        "quiz": {
            "question": "Apa yang dipelajari di Function Overloads?",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "answer": 0
        }
    },
    {
        "id": 27,
        "title": "27. Function Types",
        "module": "Type System",
        "moduleId": 2,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/typescript-learning-path/gh-pages/lessons/function-types.md",
        "description": "<p><strong>Function Types</strong></p>",
        "defaultCode": "// Write TypeScript here\nconst msg: string = \"Hello, TypeScript!\";\nconsole.log(msg);",
        "expectedOutput": "Hello, TypeScript!",
        "hint": "Pelajari materi.",
        "quiz": {
            "question": "Apa yang dipelajari di Function Types?",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "answer": 0
        }
    },
    {
        "id": 28,
        "title": "28. Generic Constraints",
        "module": "Type System",
        "moduleId": 2,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/typescript-learning-path/gh-pages/lessons/generic-constraints.md",
        "description": "<p><strong>Generic Constraints</strong></p>",
        "defaultCode": "// Write TypeScript here\nconst msg: string = \"Hello, TypeScript!\";\nconsole.log(msg);",
        "expectedOutput": "Hello, TypeScript!",
        "hint": "Pelajari materi.",
        "quiz": {
            "question": "Apa yang dipelajari di Generic Constraints?",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "answer": 0
        }
    },
    {
        "id": 29,
        "title": "29. Generic Functions Dasar",
        "module": "Type System",
        "moduleId": 2,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/typescript-learning-path/gh-pages/lessons/generic-functions-dasar.md",
        "description": "<p><strong>Generic Functions Dasar</strong></p>",
        "defaultCode": "// Write TypeScript here\nconst msg: string = \"Hello, TypeScript!\";\nconsole.log(msg);",
        "expectedOutput": "Hello, TypeScript!",
        "hint": "Pelajari materi.",
        "quiz": {
            "question": "Apa yang dipelajari di Generic Functions Dasar?",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "answer": 0
        }
    },
    {
        "id": 30,
        "title": "30. Generic Interfaces Classes",
        "module": "Type System",
        "moduleId": 2,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/typescript-learning-path/gh-pages/lessons/generic-interfaces-classes.md",
        "description": "<p><strong>Generic Interfaces Classes</strong></p>",
        "defaultCode": "// Write TypeScript here\nconst msg: string = \"Hello, TypeScript!\";\nconsole.log(msg);",
        "expectedOutput": "Hello, TypeScript!",
        "hint": "Pelajari materi.",
        "quiz": {
            "question": "Apa yang dipelajari di Generic Interfaces Classes?",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "answer": 0
        }
    },
    {
        "id": 31,
        "title": "31. Generic Utility Types",
        "module": "Type System",
        "moduleId": 2,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/typescript-learning-path/gh-pages/lessons/generic-utility-types.md",
        "description": "<p><strong>Generic Utility Types</strong></p>",
        "defaultCode": "// Write TypeScript here\nconst msg: string = \"Hello, TypeScript!\";\nconsole.log(msg);",
        "expectedOutput": "Hello, TypeScript!",
        "hint": "Pelajari materi.",
        "quiz": {
            "question": "Apa yang dipelajari di Generic Utility Types?",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "answer": 0
        }
    },
    {
        "id": 32,
        "title": "32. Hello World",
        "module": "Type System",
        "moduleId": 2,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/typescript-learning-path/gh-pages/lessons/hello-world.md",
        "description": "<p><strong>Hello World</strong></p>",
        "defaultCode": "// Write TypeScript here\nconst msg: string = \"Hello, TypeScript!\";\nconsole.log(msg);",
        "expectedOutput": "Hello, TypeScript!",
        "hint": "Pelajari materi.",
        "quiz": {
            "question": "Apa yang dipelajari di Hello World?",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "answer": 0
        }
    },
    {
        "id": 33,
        "title": "33. Include Exclude Files",
        "module": "OOP",
        "moduleId": 3,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/typescript-learning-path/gh-pages/lessons/include-exclude-files.md",
        "description": "<p><strong>Include Exclude Files</strong></p>",
        "defaultCode": "// Write TypeScript here\nconst msg: string = \"Hello, TypeScript!\";\nconsole.log(msg);",
        "expectedOutput": "Hello, TypeScript!",
        "hint": "Pelajari materi.",
        "quiz": {
            "question": "Apa yang dipelajari di Include Exclude Files?",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "answer": 0
        }
    },
    {
        "id": 34,
        "title": "34. Index Signatures",
        "module": "OOP",
        "moduleId": 3,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/typescript-learning-path/gh-pages/lessons/index-signatures.md",
        "description": "<p><strong>Index Signatures</strong></p>",
        "defaultCode": "// Write TypeScript here\nconst msg: string = \"Hello, TypeScript!\";\nconsole.log(msg);",
        "expectedOutput": "Hello, TypeScript!",
        "hint": "Pelajari materi.",
        "quiz": {
            "question": "Apa yang dipelajari di Index Signatures?",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "answer": 0
        }
    },
    {
        "id": 35,
        "title": "35. Indexed Access Types",
        "module": "OOP",
        "moduleId": 3,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/typescript-learning-path/gh-pages/lessons/indexed-access-types.md",
        "description": "<p><strong>Indexed Access Types</strong></p>",
        "defaultCode": "// Write TypeScript here\nconst msg: string = \"Hello, TypeScript!\";\nconsole.log(msg);",
        "expectedOutput": "Hello, TypeScript!",
        "hint": "Pelajari materi.",
        "quiz": {
            "question": "Apa yang dipelajari di Indexed Access Types?",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "answer": 0
        }
    },
    {
        "id": 36,
        "title": "36. Inheritance Extends Super",
        "module": "OOP",
        "moduleId": 3,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/typescript-learning-path/gh-pages/lessons/inheritance-extends-super.md",
        "description": "<p><strong>Inheritance Extends Super</strong></p>",
        "defaultCode": "// Write TypeScript here\nconst msg: string = \"Hello, TypeScript!\";\nconsole.log(msg);",
        "expectedOutput": "Hello, TypeScript!",
        "hint": "Pelajari materi.",
        "quiz": {
            "question": "Apa yang dipelajari di Inheritance Extends Super?",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "answer": 0
        }
    },
    {
        "id": 37,
        "title": "37. Instalasi Typescript",
        "module": "OOP",
        "moduleId": 3,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/typescript-learning-path/gh-pages/lessons/instalasi-typescript.md",
        "description": "<p><strong>Instalasi Typescript</strong></p>",
        "defaultCode": "// Write TypeScript here\nconst msg: string = \"Hello, TypeScript!\";\nconsole.log(msg);",
        "expectedOutput": "Hello, TypeScript!",
        "hint": "Pelajari materi.",
        "quiz": {
            "question": "Apa yang dipelajari di Instalasi Typescript?",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "answer": 0
        }
    },
    {
        "id": 38,
        "title": "38. Interface Dasar",
        "module": "OOP",
        "moduleId": 3,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/typescript-learning-path/gh-pages/lessons/interface-dasar.md",
        "description": "<p><strong>Interface Dasar</strong></p>",
        "defaultCode": "// Write TypeScript here\nconst msg: string = \"Hello, TypeScript!\";\nconsole.log(msg);",
        "expectedOutput": "Hello, TypeScript!",
        "hint": "Pelajari materi.",
        "quiz": {
            "question": "Apa yang dipelajari di Interface Dasar?",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "answer": 0
        }
    },
    {
        "id": 39,
        "title": "39. Interface Vs Type Alias",
        "module": "OOP",
        "moduleId": 3,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/typescript-learning-path/gh-pages/lessons/interface-vs-type-alias.md",
        "description": "<p><strong>Interface Vs Type Alias</strong></p>",
        "defaultCode": "// Write TypeScript here\nconst msg: string = \"Hello, TypeScript!\";\nconsole.log(msg);",
        "expectedOutput": "Hello, TypeScript!",
        "hint": "Pelajari materi.",
        "quiz": {
            "question": "Apa yang dipelajari di Interface Vs Type Alias?",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "answer": 0
        }
    },
    {
        "id": 40,
        "title": "40. Intersection Types",
        "module": "OOP",
        "moduleId": 3,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/typescript-learning-path/gh-pages/lessons/intersection-types.md",
        "description": "<p><strong>Intersection Types</strong></p>",
        "defaultCode": "// Write TypeScript here\nconst msg: string = \"Hello, TypeScript!\";\nconsole.log(msg);",
        "expectedOutput": "Hello, TypeScript!",
        "hint": "Pelajari materi.",
        "quiz": {
            "question": "Apa yang dipelajari di Intersection Types?",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "answer": 0
        }
    },
    {
        "id": 41,
        "title": "41. Mapped Types",
        "module": "OOP",
        "moduleId": 3,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/typescript-learning-path/gh-pages/lessons/mapped-types.md",
        "description": "<p><strong>Mapped Types</strong></p>",
        "defaultCode": "// Write TypeScript here\nconst msg: string = \"Hello, TypeScript!\";\nconsole.log(msg);",
        "expectedOutput": "Hello, TypeScript!",
        "hint": "Pelajari materi.",
        "quiz": {
            "question": "Apa yang dipelajari di Mapped Types?",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "answer": 0
        }
    },
    {
        "id": 42,
        "title": "42. Migrasi Js Ke Ts",
        "module": "OOP",
        "moduleId": 3,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/typescript-learning-path/gh-pages/lessons/migrasi-js-ke-ts.md",
        "description": "<p><strong>Migrasi Js Ke Ts</strong></p>",
        "defaultCode": "// Write TypeScript here\nconst msg: string = \"Hello, TypeScript!\";\nconsole.log(msg);",
        "expectedOutput": "Hello, TypeScript!",
        "hint": "Pelajari materi.",
        "quiz": {
            "question": "Apa yang dipelajari di Migrasi Js Ke Ts?",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "answer": 0
        }
    },
    {
        "id": 43,
        "title": "43. Namespaces Organisasi Kode",
        "module": "OOP",
        "moduleId": 3,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/typescript-learning-path/gh-pages/lessons/namespaces-organisasi-kode.md",
        "description": "<p><strong>Namespaces Organisasi Kode</strong></p>",
        "defaultCode": "// Write TypeScript here\nconst msg: string = \"Hello, TypeScript!\";\nconsole.log(msg);",
        "expectedOutput": "Hello, TypeScript!",
        "hint": "Pelajari materi.",
        "quiz": {
            "question": "Apa yang dipelajari di Namespaces Organisasi Kode?",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "answer": 0
        }
    },
    {
        "id": 44,
        "title": "44. Nullable Types",
        "module": "OOP",
        "moduleId": 3,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/typescript-learning-path/gh-pages/lessons/nullable-types.md",
        "description": "<p><strong>Nullable Types</strong></p>",
        "defaultCode": "// Write TypeScript here\nconst msg: string = \"Hello, TypeScript!\";\nconsole.log(msg);",
        "expectedOutput": "Hello, TypeScript!",
        "hint": "Pelajari materi.",
        "quiz": {
            "question": "Apa yang dipelajari di Nullable Types?",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "answer": 0
        }
    },
    {
        "id": 45,
        "title": "45. Omit Thisparameter",
        "module": "OOP",
        "moduleId": 3,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/typescript-learning-path/gh-pages/lessons/omit-thisparameter.md",
        "description": "<p><strong>Omit Thisparameter</strong></p>",
        "defaultCode": "// Write TypeScript here\nconst msg: string = \"Hello, TypeScript!\";\nconsole.log(msg);",
        "expectedOutput": "Hello, TypeScript!",
        "hint": "Pelajari materi.",
        "quiz": {
            "question": "Apa yang dipelajari di Omit Thisparameter?",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "answer": 0
        }
    },
    {
        "id": 46,
        "title": "46. Optional Default Params",
        "module": "OOP",
        "moduleId": 3,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/typescript-learning-path/gh-pages/lessons/optional-default-params.md",
        "description": "<p><strong>Optional Default Params</strong></p>",
        "defaultCode": "// Write TypeScript here\nconst msg: string = \"Hello, TypeScript!\";\nconsole.log(msg);",
        "expectedOutput": "Hello, TypeScript!",
        "hint": "Pelajari materi.",
        "quiz": {
            "question": "Apa yang dipelajari di Optional Default Params?",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "answer": 0
        }
    },
    {
        "id": 47,
        "title": "47. Optional Readonly Properties",
        "module": "OOP",
        "moduleId": 3,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/typescript-learning-path/gh-pages/lessons/optional-readonly-properties.md",
        "description": "<p><strong>Optional Readonly Properties</strong></p>",
        "defaultCode": "// Write TypeScript here\nconst msg: string = \"Hello, TypeScript!\";\nconsole.log(msg);",
        "expectedOutput": "Hello, TypeScript!",
        "hint": "Pelajari materi.",
        "quiz": {
            "question": "Apa yang dipelajari di Optional Readonly Properties?",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "answer": 0
        }
    },
    {
        "id": 48,
        "title": "48. Parameter Utilities",
        "module": "OOP",
        "moduleId": 3,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/typescript-learning-path/gh-pages/lessons/parameter-utilities.md",
        "description": "<p><strong>Parameter Utilities</strong></p>",
        "defaultCode": "// Write TypeScript here\nconst msg: string = \"Hello, TypeScript!\";\nconsole.log(msg);",
        "expectedOutput": "Hello, TypeScript!",
        "hint": "Pelajari materi.",
        "quiz": {
            "question": "Apa yang dipelajari di Parameter Utilities?",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "answer": 0
        }
    },
    {
        "id": 49,
        "title": "49. Parameters Constructorparameters",
        "module": "Advanced Types",
        "moduleId": 4,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/typescript-learning-path/gh-pages/lessons/parameters-constructorparameters.md",
        "description": "<p><strong>Parameters Constructorparameters</strong></p>",
        "defaultCode": "// Write TypeScript here\nconst msg: string = \"Hello, TypeScript!\";\nconsole.log(msg);",
        "expectedOutput": "Hello, TypeScript!",
        "hint": "Pelajari materi.",
        "quiz": {
            "question": "Apa yang dipelajari di Parameters Constructorparameters?",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "answer": 0
        }
    },
    {
        "id": 50,
        "title": "50. Partial Required",
        "module": "Advanced Types",
        "moduleId": 4,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/typescript-learning-path/gh-pages/lessons/partial-required.md",
        "description": "<p><strong>Partial Required</strong></p>",
        "defaultCode": "// Write TypeScript here\nconst msg: string = \"Hello, TypeScript!\";\nconsole.log(msg);",
        "expectedOutput": "Hello, TypeScript!",
        "hint": "Pelajari materi.",
        "quiz": {
            "question": "Apa yang dipelajari di Partial Required?",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "answer": 0
        }
    },
    {
        "id": 51,
        "title": "51. Path Mapping Module Resolution",
        "module": "Advanced Types",
        "moduleId": 4,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/typescript-learning-path/gh-pages/lessons/path-mapping-module-resolution.md",
        "description": "<p><strong>Path Mapping Module Resolution</strong></p>",
        "defaultCode": "// Write TypeScript here\nconst msg: string = \"Hello, TypeScript!\";\nconsole.log(msg);",
        "expectedOutput": "Hello, TypeScript!",
        "hint": "Pelajari materi.",
        "quiz": {
            "question": "Apa yang dipelajari di Path Mapping Module Resolution?",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "answer": 0
        }
    },
    {
        "id": 52,
        "title": "52. Pick Omit",
        "module": "Advanced Types",
        "moduleId": 4,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/typescript-learning-path/gh-pages/lessons/pick-omit.md",
        "description": "<p><strong>Pick Omit</strong></p>",
        "defaultCode": "// Write TypeScript here\nconst msg: string = \"Hello, TypeScript!\";\nconsole.log(msg);",
        "expectedOutput": "Hello, TypeScript!",
        "hint": "Pelajari materi.",
        "quiz": {
            "question": "Apa yang dipelajari di Pick Omit?",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "answer": 0
        }
    },
    {
        "id": 53,
        "title": "53. Prettier Integration",
        "module": "Advanced Types",
        "moduleId": 4,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/typescript-learning-path/gh-pages/lessons/prettier-integration.md",
        "description": "<p><strong>Prettier Integration</strong></p>",
        "defaultCode": "// Write TypeScript here\nconst msg: string = \"Hello, TypeScript!\";\nconsole.log(msg);",
        "expectedOutput": "Hello, TypeScript!",
        "hint": "Pelajari materi.",
        "quiz": {
            "question": "Apa yang dipelajari di Prettier Integration?",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "answer": 0
        }
    },
    {
        "id": 54,
        "title": "54. Project Cli Tool",
        "module": "Advanced Types",
        "moduleId": 4,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/typescript-learning-path/gh-pages/lessons/project-cli-tool.md",
        "description": "<p><strong>Project Cli Tool</strong></p>",
        "defaultCode": "// Write TypeScript here\nconst msg: string = \"Hello, TypeScript!\";\nconsole.log(msg);",
        "expectedOutput": "Hello, TypeScript!",
        "hint": "Pelajari materi.",
        "quiz": {
            "question": "Apa yang dipelajari di Project Cli Tool?",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "answer": 0
        }
    },
    {
        "id": 55,
        "title": "55. Project React Ts",
        "module": "Advanced Types",
        "moduleId": 4,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/typescript-learning-path/gh-pages/lessons/project-react-ts.md",
        "description": "<p><strong>Project React Ts</strong></p>",
        "defaultCode": "// Write TypeScript here\nconst msg: string = \"Hello, TypeScript!\";\nconsole.log(msg);",
        "expectedOutput": "Hello, TypeScript!",
        "hint": "Pelajari materi.",
        "quiz": {
            "question": "Apa yang dipelajari di Project React Ts?",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "answer": 0
        }
    },
    {
        "id": 56,
        "title": "56. Project Rest Api",
        "module": "Advanced Types",
        "moduleId": 4,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/typescript-learning-path/gh-pages/lessons/project-rest-api.md",
        "description": "<p><strong>Project Rest Api</strong></p>",
        "defaultCode": "// Write TypeScript here\nconst msg: string = \"Hello, TypeScript!\";\nconsole.log(msg);",
        "expectedOutput": "Hello, TypeScript!",
        "hint": "Pelajari materi.",
        "quiz": {
            "question": "Apa yang dipelajari di Project Rest Api?",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "answer": 0
        }
    },
    {
        "id": 57,
        "title": "57. Project Setup Typescript",
        "module": "Advanced Types",
        "moduleId": 4,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/typescript-learning-path/gh-pages/lessons/project-setup-typescript.md",
        "description": "<p><strong>Project Setup Typescript</strong></p>",
        "defaultCode": "// Write TypeScript here\nconst msg: string = \"Hello, TypeScript!\";\nconsole.log(msg);",
        "expectedOutput": "Hello, TypeScript!",
        "hint": "Pelajari materi.",
        "quiz": {
            "question": "Apa yang dipelajari di Project Setup Typescript?",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "answer": 0
        }
    },
    {
        "id": 58,
        "title": "58. Project Type Definitions",
        "module": "Advanced Types",
        "moduleId": 4,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/typescript-learning-path/gh-pages/lessons/project-type-definitions.md",
        "description": "<p><strong>Project Type Definitions</strong></p>",
        "defaultCode": "// Write TypeScript here\nconst msg: string = \"Hello, TypeScript!\";\nconsole.log(msg);",
        "expectedOutput": "Hello, TypeScript!",
        "hint": "Pelajari materi.",
        "quiz": {
            "question": "Apa yang dipelajari di Project Type Definitions?",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "answer": 0
        }
    },
    {
        "id": 59,
        "title": "59. Readonly Params",
        "module": "Advanced Types",
        "moduleId": 4,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/typescript-learning-path/gh-pages/lessons/readonly-params.md",
        "description": "<p><strong>Readonly Params</strong></p>",
        "defaultCode": "// Write TypeScript here\nconst msg: string = \"Hello, TypeScript!\";\nconsole.log(msg);",
        "expectedOutput": "Hello, TypeScript!",
        "hint": "Pelajari materi.",
        "quiz": {
            "question": "Apa yang dipelajari di Readonly Params?",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "answer": 0
        }
    },
    {
        "id": 60,
        "title": "60. Readonly Record",
        "module": "Advanced Types",
        "moduleId": 4,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/typescript-learning-path/gh-pages/lessons/readonly-record.md",
        "description": "<p><strong>Readonly Record</strong></p>",
        "defaultCode": "// Write TypeScript here\nconst msg: string = \"Hello, TypeScript!\";\nconsole.log(msg);",
        "expectedOutput": "Hello, TypeScript!",
        "hint": "Pelajari materi.",
        "quiz": {
            "question": "Apa yang dipelajari di Readonly Record?",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "answer": 0
        }
    },
    {
        "id": 61,
        "title": "61. Record Tuple",
        "module": "Advanced Types",
        "moduleId": 4,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/typescript-learning-path/gh-pages/lessons/record-tuple.md",
        "description": "<p><strong>Record Tuple</strong></p>",
        "defaultCode": "// Write TypeScript here\nconst msg: string = \"Hello, TypeScript!\";\nconsole.log(msg);",
        "expectedOutput": "Hello, TypeScript!",
        "hint": "Pelajari materi.",
        "quiz": {
            "question": "Apa yang dipelajari di Record Tuple?",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "answer": 0
        }
    },
    {
        "id": 62,
        "title": "62. Rest Spread",
        "module": "Advanced Types",
        "moduleId": 4,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/typescript-learning-path/gh-pages/lessons/rest-spread.md",
        "description": "<p><strong>Rest Spread</strong></p>",
        "defaultCode": "// Write TypeScript here\nconst msg: string = \"Hello, TypeScript!\";\nconsole.log(msg);",
        "expectedOutput": "Hello, TypeScript!",
        "hint": "Pelajari materi.",
        "quiz": {
            "question": "Apa yang dipelajari di Rest Spread?",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "answer": 0
        }
    },
    {
        "id": 63,
        "title": "63. Returntype Parameters Thistype",
        "module": "Advanced Types",
        "moduleId": 4,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/typescript-learning-path/gh-pages/lessons/returntype-parameters-thistype.md",
        "description": "<p><strong>Returntype Parameters Thistype</strong></p>",
        "defaultCode": "// Write TypeScript here\nconst msg: string = \"Hello, TypeScript!\";\nconsole.log(msg);",
        "expectedOutput": "Hello, TypeScript!",
        "hint": "Pelajari materi.",
        "quiz": {
            "question": "Apa yang dipelajari di Returntype Parameters Thistype?",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "answer": 0
        }
    },
    {
        "id": 64,
        "title": "64. Strict Mode Options",
        "module": "Advanced Types",
        "moduleId": 4,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/typescript-learning-path/gh-pages/lessons/strict-mode-options.md",
        "description": "<p><strong>Strict Mode Options</strong></p>",
        "defaultCode": "// Write TypeScript here\nconst msg: string = \"Hello, TypeScript!\";\nconsole.log(msg);",
        "expectedOutput": "Hello, TypeScript!",
        "hint": "Pelajari materi.",
        "quiz": {
            "question": "Apa yang dipelajari di Strict Mode Options?",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "answer": 0
        }
    },
    {
        "id": 65,
        "title": "65. Template Literal Types",
        "module": "Modules & Tooling",
        "moduleId": 5,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/typescript-learning-path/gh-pages/lessons/template-literal-types.md",
        "description": "<p><strong>Template Literal Types</strong></p>",
        "defaultCode": "// Write TypeScript here\nconst msg: string = \"Hello, TypeScript!\";\nconsole.log(msg);",
        "expectedOutput": "Hello, TypeScript!",
        "hint": "Pelajari materi.",
        "quiz": {
            "question": "Apa yang dipelajari di Template Literal Types?",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "answer": 0
        }
    },
    {
        "id": 66,
        "title": "66. Tipe Primitif",
        "module": "Modules & Tooling",
        "moduleId": 5,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/typescript-learning-path/gh-pages/lessons/tipe-primitif.md",
        "description": "<p><strong>Tipe Primitif</strong></p>",
        "defaultCode": "// Write TypeScript here\nconst msg: string = \"Hello, TypeScript!\";\nconsole.log(msg);",
        "expectedOutput": "Hello, TypeScript!",
        "hint": "Pelajari materi.",
        "quiz": {
            "question": "Apa yang dipelajari di Tipe Primitif?",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "answer": 0
        }
    },
    {
        "id": 67,
        "title": "67. Tsconfig Json Struktur",
        "module": "Modules & Tooling",
        "moduleId": 5,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/typescript-learning-path/gh-pages/lessons/tsconfig-json-struktur.md",
        "description": "<p><strong>Tsconfig Json Struktur</strong></p>",
        "defaultCode": "// Write TypeScript here\nconst msg: string = \"Hello, TypeScript!\";\nconsole.log(msg);",
        "expectedOutput": "Hello, TypeScript!",
        "hint": "Pelajari materi.",
        "quiz": {
            "question": "Apa yang dipelajari di Tsconfig Json Struktur?",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "answer": 0
        }
    },
    {
        "id": 68,
        "title": "68. Type Aliases",
        "module": "Modules & Tooling",
        "moduleId": 5,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/typescript-learning-path/gh-pages/lessons/type-aliases.md",
        "description": "<p><strong>Type Aliases</strong></p>",
        "defaultCode": "// Write TypeScript here\nconst msg: string = \"Hello, TypeScript!\";\nconsole.log(msg);",
        "expectedOutput": "Hello, TypeScript!",
        "hint": "Pelajari materi.",
        "quiz": {
            "question": "Apa yang dipelajari di Type Aliases?",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "answer": 0
        }
    },
    {
        "id": 69,
        "title": "69. Type Assertions",
        "module": "Modules & Tooling",
        "moduleId": 5,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/typescript-learning-path/gh-pages/lessons/type-assertions.md",
        "description": "<p><strong>Type Assertions</strong></p>",
        "defaultCode": "// Write TypeScript here\nconst msg: string = \"Hello, TypeScript!\";\nconsole.log(msg);",
        "expectedOutput": "Hello, TypeScript!",
        "hint": "Pelajari materi.",
        "quiz": {
            "question": "Apa yang dipelajari di Type Assertions?",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "answer": 0
        }
    },
    {
        "id": 70,
        "title": "70. Type Guards",
        "module": "Modules & Tooling",
        "moduleId": 5,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/typescript-learning-path/gh-pages/lessons/type-guards.md",
        "description": "<p><strong>Type Guards</strong></p>",
        "defaultCode": "// Write TypeScript here\nconst msg: string = \"Hello, TypeScript!\";\nconsole.log(msg);",
        "expectedOutput": "Hello, TypeScript!",
        "hint": "Pelajari materi.",
        "quiz": {
            "question": "Apa yang dipelajari di Type Guards?",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "answer": 0
        }
    },
    {
        "id": 71,
        "title": "71. Type Inference",
        "module": "Modules & Tooling",
        "moduleId": 5,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/typescript-learning-path/gh-pages/lessons/type-inference.md",
        "description": "<p><strong>Type Inference</strong></p>",
        "defaultCode": "// Write TypeScript here\nconst msg: string = \"Hello, TypeScript!\";\nconsole.log(msg);",
        "expectedOutput": "Hello, TypeScript!",
        "hint": "Pelajari materi.",
        "quiz": {
            "question": "Apa yang dipelajari di Type Inference?",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "answer": 0
        }
    },
    {
        "id": 72,
        "title": "72. Type Narrowing",
        "module": "Modules & Tooling",
        "moduleId": 5,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/typescript-learning-path/gh-pages/lessons/type-narrowing.md",
        "description": "<p><strong>Type Narrowing</strong></p>",
        "defaultCode": "// Write TypeScript here\nconst msg: string = \"Hello, TypeScript!\";\nconsole.log(msg);",
        "expectedOutput": "Hello, TypeScript!",
        "hint": "Pelajari materi.",
        "quiz": {
            "question": "Apa yang dipelajari di Type Narrowing?",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "answer": 0
        }
    },
    {
        "id": 73,
        "title": "73. Typescript Compiler Tsc",
        "module": "Modules & Tooling",
        "moduleId": 5,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/typescript-learning-path/gh-pages/lessons/typescript-compiler-tsc.md",
        "description": "<p><strong>Typescript Compiler Tsc</strong></p>",
        "defaultCode": "// Write TypeScript here\nconst msg: string = \"Hello, TypeScript!\";\nconsole.log(msg);",
        "expectedOutput": "Hello, TypeScript!",
        "hint": "Pelajari materi.",
        "quiz": {
            "question": "Apa yang dipelajari di Typescript Compiler Tsc?",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "answer": 0
        }
    },
    {
        "id": 74,
        "title": "74. Typescript Vs Javascript",
        "module": "Modules & Tooling",
        "moduleId": 5,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/typescript-learning-path/gh-pages/lessons/typescript-vs-javascript.md",
        "description": "<p><strong>Typescript Vs Javascript</strong></p>",
        "defaultCode": "// Write TypeScript here\nconst msg: string = \"Hello, TypeScript!\";\nconsole.log(msg);",
        "expectedOutput": "Hello, TypeScript!",
        "hint": "Pelajari materi.",
        "quiz": {
            "question": "Apa yang dipelajari di Typescript Vs Javascript?",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "answer": 0
        }
    },
    {
        "id": 75,
        "title": "75. Union Types",
        "module": "Modules & Tooling",
        "moduleId": 5,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/typescript-learning-path/gh-pages/lessons/union-types.md",
        "description": "<p><strong>Union Types</strong></p>",
        "defaultCode": "// Write TypeScript here\nconst msg: string = \"Hello, TypeScript!\";\nconsole.log(msg);",
        "expectedOutput": "Hello, TypeScript!",
        "hint": "Pelajari materi.",
        "quiz": {
            "question": "Apa yang dipelajari di Union Types?",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "answer": 0
        }
    },
    {
        "id": 76,
        "title": "76. Using Js Libraries",
        "module": "Modules & Tooling",
        "moduleId": 5,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/typescript-learning-path/gh-pages/lessons/using-js-libraries.md",
        "description": "<p><strong>Using Js Libraries</strong></p>",
        "defaultCode": "// Write TypeScript here\nconst msg: string = \"Hello, TypeScript!\";\nconsole.log(msg);",
        "expectedOutput": "Hello, TypeScript!",
        "hint": "Pelajari materi.",
        "quiz": {
            "question": "Apa yang dipelajari di Using Js Libraries?",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "answer": 0
        }
    },
    {
        "id": 77,
        "title": "77. Void Never Dan Tipe Khusus",
        "module": "Modules & Tooling",
        "moduleId": 5,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/typescript-learning-path/gh-pages/lessons/void-never-dan-tipe-khusus.md",
        "description": "<p><strong>Void Never Dan Tipe Khusus</strong></p>",
        "defaultCode": "// Write TypeScript here\nconst msg: string = \"Hello, TypeScript!\";\nconsole.log(msg);",
        "expectedOutput": "Hello, TypeScript!",
        "hint": "Pelajari materi.",
        "quiz": {
            "question": "Apa yang dipelajari di Void Never Dan Tipe Khusus?",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "answer": 0
        }
    }
];

let currentLesson=0;
let progress=JSON.parse(localStorage.getItem('typescript_progress')||'{}');

function renderNav() {
    const nav = document.getElementById('lessons-nav');
    nav.innerHTML = MODULES.map(mod => {
        const modLessons = lessons.filter(l => l.moduleId === mod.id);
        const completed = modLessons.filter(l => progress[l.id]).length;
        const isExpanded = mod.id === (Math.floor(currentLesson / 10) + 1);
        return `
            <div class="mb-3">
                <div class="flex items-center justify-between px-2 py-1.5 text-sm font-semibold text-gray-300 cursor-pointer hover:text-white rounded hover:bg-gray-700/50" onclick="toggleModule(${mod.id})">
                    <span><i class="${mod.icon} mr-2 text-blue-400"></i>${mod.title}</span>
                    <span class="text-xs text-gray-500">${completed}/${modLessons.length}</span>
                </div>
                <div id="module-${mod.id}" class="space-y-0.5 mt-1 ${isExpanded ? '' : 'hidden'}">
                    ${modLessons.map(l => {
                        const idx = lessons.indexOf(l);
                        return `<button onclick="loadLesson(${idx})" 
                            class="w-full text-left px-3 py-1.5 rounded text-xs hover:bg-gray-700 transition 
                            ${idx === currentLesson ? 'lesson-active' : ''} 
                            ${progress[l.id] ? 'text-green-400' : 'text-gray-400'}">
                            <span class="mr-1">${progress[l.id] ? '✅' : '○'}</span>${l.title}
                        </button>`;
                    }).join('')}
                </div>
            </div>
        `;
    }).join('');
}

function toggleModule(modId) {
    const el = document.getElementById('module-' + modId);
    if (el) el.classList.toggle('hidden');
}

async function loadLesson(index) {
    currentLesson = index;
    const lesson = lessons[index];
    
    // Show loading
    document.getElementById('lessonBody').innerHTML = `<h2 class="text-xl font-bold mb-4">${lesson.title}</h2><div class="text-gray-400"><i class="fas fa-spinner fa-spin mr-2"></i>Loading...</div>`;
    
    // Fetch and render markdown from lessons folder
    let contentHtml = lesson.description || '';
    if (lesson.mdFile && typeof marked !== 'undefined') {
        try {
            const response = await fetch(lesson.mdFile);
            if (response.ok) {
                const mdText = await response.text();
                contentHtml = marked.parse(mdText);
            }
        } catch (e) {
            console.error('Error loading:', lesson.mdFile, e);
        }
    }
    
    document.getElementById('lessonBody').innerHTML = `
        <div class="text-xs text-gray-500 mb-2">${lesson.module || ''}</div>
        <h2 class="text-xl font-bold mb-4 text-white">${lesson.title}</h2>
        <div class="prose prose-invert prose-sm max-w-none leading-relaxed
            prose-headings:text-blue-300 prose-h2:text-lg prose-h2:mt-6 prose-h2:mb-3
            prose-h3:text-base prose-h3:mt-4 prose-h3:mb-2
            prose-p:text-gray-300 prose-p:mb-3
            prose-code:text-green-400 prose-code:bg-gray-800 prose-code:px-1 prose-code:rounded
            prose-pre:bg-gray-900 prose-pre:border prose-pre:border-gray-700
            prose-ul:text-gray-300 prose-li:mb-1
            prose-strong:text-white prose-a:text-blue-400">
            ${contentHtml}
        </div>`;
    document.getElementById('code-editor').value = (lesson.defaultCode || '').replace(/\\n/g, '\n');
    document.getElementById('output').innerHTML = '<span class="text-gray-500">// Output akan muncul di sini</span>';
    document.getElementById('validation-msg').className = 'mt-4 p-3 rounded hidden';
    if (lesson.quiz) {
        document.getElementById('quiz-section').classList.remove('hidden');
        document.getElementById('quiz-content').innerHTML = `<p class="font-medium">${lesson.quiz.question}</p><div class="space-y-2">${lesson.quiz.options.map((opt, i) => `<label class="flex items-center space-x-2 cursor-pointer"><input type="radio" name="quiz" value="${i}" class="text-blue-500"><span>${opt}</span></label>`).join('')}</div>`;
    } else { document.getElementById('quiz-section').classList.add('hidden'); }
    document.getElementById('prev-btn').disabled = index === 0;
    document.getElementById('next-btn').disabled = index === lessons.length - 1;
    // Update complete button
    const completeBtn = document.getElementById('complete-btn');
    const completedBtn = document.getElementById('completed-btn');
    if (progress[lesson.id]) {
        completeBtn.style.display = 'none';
        completedBtn.style.display = 'block';
    } else {
        completeBtn.style.display = 'block';
        completedBtn.style.display = 'none';
    }
    
    // Update breadcrumb
    const mod = MODULES.find(m => m.id === lesson.moduleId);
    document.getElementById('breadcrumb').textContent = mod ? mod.title : '';
    
    // Update nav buttons
    document.getElementById('prev-btn').disabled = index === 0;
    document.getElementById('next-btn').disabled = index === lessons.length - 1;
    
    renderNav();
    window.scrollTo(0, 0);
}

// Overridden by Pyodide in index.html
// // runCode is overridden by Pyodide in index.html
async function runCode() {
    const code = document.getElementById('code-editor').value;
    const output = document.getElementById('output');
    const validation = document.getElementById('validation-msg');
    let logs = [];
    const orig = console.log;
    console.log = (...a) => logs.push(a.map(x => typeof x === 'object' ? JSON.stringify(x) : String(x)).join(' '));
    try {
        let js = ts.transpileModule(code, { compilerOptions: { module: ts.ModuleKind.None, target: ts.ScriptTarget.ESNext } }).outputText;
        eval(js);
        const result = logs.join('\n');
        output.innerHTML = '<span class="text-green-400">' + escapeHtml(result) + '</span>';
        const exp = lessons[currentLesson]?.expectedOutput;
        if (exp && result.trim() === exp.trim()) {
            validation.className = 'mt-4 p-3 rounded bg-green-900/50 border border-green-500 text-green-300';
            validation.innerHTML = '✅ Benar!';
            progress[lessons[currentLesson].id] = true;
            localStorage.setItem('typescript_progress', JSON.stringify(progress));
            updateProgress(); renderNav();
        } else if (exp) {
            validation.className = 'mt-4 p-3 rounded bg-yellow-900/50 border border-yellow-500 text-yellow-300';
            validation.innerHTML = '💡 ' + (lessons[currentLesson]?.hint || '');
        }
    } catch(e) {
        output.innerHTML = '<span class="text-red-400">❌ ' + escapeHtml(e.message) + '</span>';
    }
    console.log = orig;
}

function resetCode() { document.getElementById('code-editor').value = lessons[currentLesson].defaultCode; }
function checkQuiz() {
    const selected = document.querySelector('input[name="quiz"]:checked');
    if (!selected) return alert('Pilih jawaban dulu!');
    const msg = document.createElement('div');
    msg.className = parseInt(selected.value) === lessons[currentLesson].quiz.answer ? 'mt-3 p-3 rounded bg-green-900/50 border border-green-500 text-green-300' : 'mt-3 p-3 rounded bg-red-900/50 border border-red-500 text-red-300';
    msg.innerHTML = parseInt(selected.value) === lessons[currentLesson].quiz.answer ? '<i class="fas fa-check-circle mr-2"></i>Benar!' : '<i class="fas fa-times-circle mr-2"></i>Salah!';
    document.getElementById('quiz-content').appendChild(msg);
    setTimeout(() => msg.remove(), 3000);
}
function nextLesson() { if (currentLesson < lessons.length - 1) loadLesson(currentLesson + 1); }
function prevLesson() { if (currentLesson > 0) loadLesson(currentLesson - 1); }

function markComplete() {
    const lesson = lessons[currentLesson];
    progress[lesson.id] = true;
    localStorage.setItem('typescript_progress', JSON.stringify(progress));
    
    const completeBtn = document.getElementById('complete-btn');
    const completedBtn = document.getElementById('completed-btn');
    completeBtn.style.display = 'none';
    completedBtn.style.display = 'block';
    
    renderNav();
    
    // Auto-advance to next lesson
    if (currentLesson < lessons.length - 1) {
        setTimeout(() => loadLesson(currentLesson + 1), 500);
    }
}

function updateProgress() { const done = Object.keys(progress).length; const pct = Math.round((done / lessons.length) * 100); document.getElementById('course-progress').textContent = pct + '%'; document.getElementById('progress-fill').style.width = pct + '%'; }
function resetProgress() { if (!confirm('Reset semua progress?')) return; progress = {}; localStorage.removeItem('typescript_progress'); renderNav(); updateProgress(); }
function escapeHtml(str) { return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    // Load progress from localStorage
    progress = JSON.parse(localStorage.getItem('typescript_progress') || '{}');
    
    // Render sidebar
    renderNav();
    
    // Load first lesson
    if (lessons.length > 0) {
        loadLesson(0);
    }
});
