// Module definitions for TypeScript Learning Path
const MODULES = [
    {
        id: 1,
        title: "Dasar-Dasar TypeScript",
        description: "Pengenalan TypeScript, perbedaan dengan JavaScript, setup environment, dan kompilasi.",
        lessons: [
            { id: 1, title: "Apa itu TypeScript?", slug: "apa-itu-typescript", duration: "15 min" },
            { id: 2, title: "TypeScript vs JavaScript", slug: "typescript-vs-javascript", duration: "10 min" },
            { id: 3, title: "Instalasi TypeScript", slug: "instalasi-typescript", duration: "10 min" },
            { id: 4, title: "TypeScript Compiler (tsc)", slug: "typescript-compiler-tsc", duration: "15 min" },
            { id: 5, title: "Project Setup dengan TypeScript", slug: "project-setup-typescript", duration: "15 min" },
            { id: 6, title: "Hello World: TypeScript Pertama", slug: "hello-world", duration: "10 min" }
        ],
        quiz: {
            questionCount: 10,
            passingScore: 70
        }
    },
    {
        id: 2,
        title: "Tipe Dasar TypeScript",
        description: "Tipe primitif, type assertions, any, unknown, array, tuple, enum, dan tipe khusus.",
        lessons: [
            { id: 1, title: "Tipe Primitif: string, number, boolean", slug: "tipe-primitif", duration: "20 min" },
            { id: 2, title: "Type any dan unknown", slug: "any-dan-unknown", duration: "15 min" },
            { id: 3, title: "Array dan Tuple", slug: "array-dan-tuple", duration: "20 min" },
            { id: 4, title: "Enum dan Named Constants", slug: "enum-named-constants", duration: "15 min" },
            { id: 5, title: "Tipe Khusus: void, never, null, undefined", slug: "void-never-dan-tipe-khusus", duration: "15 min" },
            { id: 6, title: "Type Assertions", slug: "type-assertions", duration: "15 min" }
        ],
        quiz: {
            questionCount: 10,
            passingScore: 70
        }
    },
    {
        id: 3,
        title: "Advanced Types",
        description: "Union types, intersection types, type guards, type narrowing, dan conditional types.",
        lessons: [
            { id: 1, title: "Union Types", slug: "union-types", duration: "20 min" },
            { id: 2, title: "Intersection Types", slug: "intersection-types", duration: "20 min" },
            { id: 3, title: "Type Guards dan Type Narrowing", slug: "type-guards", duration: "25 min" },
            { id: 4, title: "Type Narrowing Techniques", slug: "type-narrowing", duration: "20 min" },
            { id: 5, title: "Nullable Types dan Optional Chaining", slug: "nullable-types", duration: "15 min" },
            { id: 6, title: "Type Inference", slug: "type-inference", duration: "15 min" },
            { id: 7, title: "Indexed Access Types", slug: "indexed-access-types", duration: "20 min" },
            { id: 8, title: "Conditional Types", slug: "conditional-types", duration: "25 min" },
            { id: 9, title: "Mapped Types", slug: "mapped-types", duration: "25 min" },
            { id: 10, title: "Template Literal Types", slug: "template-literal-types", duration: "20 min" }
        ],
        quiz: {
            questionCount: 15,
            passingScore: 70
        }
    },
    {
        id: 4,
        title: "Interfaces dan Type Aliases",
        description: "Interface, optional dan readonly properties, type aliases, dan perbedaannya.",
        lessons: [
            { id: 1, title: "Interface Dasar", slug: "interface-dasar", duration: "20 min" },
            { id: 2, title: "Optional dan Readonly Properties", slug: "optional-readonly-properties", duration: "15 min" },
            { id: 3, title: "Type Aliases", slug: "type-aliases", duration: "15 min" },
            { id: 4, title: "Interface vs Type Alias", slug: "interface-vs-type-alias", duration: "20 min" },
            { id: 5, title: "Extending Interfaces dan Types", slug: "extending-interfaces-types", duration: "20 min" },
            { id: 6, title: "Index Signatures", slug: "index-signatures", duration: "15 min" }
        ],
        quiz: {
            questionCount: 12,
            passingScore: 70
        }
    },
    {
        id: 5,
        title: "Functions TypeScript",
        description: "Function types, overloads, rest parameters, optional parameters, dan arrow functions.",
        lessons: [
            { id: 1, title: "Function Types", slug: "function-types", duration: "20 min" },
            { id: 2, title: "Rest Parameters dan Spread", slug: "rest-spread", duration: "15 min" },
            { id: 3, title: "Optional dan Default Parameters", slug: "optional-default-params", duration: "15 min" },
            { id: 4, title: "Function Overloads", slug: "function-overloads", duration: "20 min" },
            { id: 5, title: "Arrow Functions dengan Types", slug: "arrow-functions-types", duration: "15 min" }
        ],
        quiz: {
            questionCount: 12,
            passingScore: 70
        }
    },
    {
        id: 6,
        title: "Generics",
        description: "Generic functions, interfaces, classes, constraints, dan utility types.",
        lessons: [
            { id: 1, title: "Generic Functions Dasar", slug: "generic-functions-dasar", duration: "25 min" },
            { id: 2, title: "Generic Interfaces dan Classes", slug: "generic-interfaces-classes", duration: "25 min" },
            { id: 3, title: "Generic Constraints", slug: "generic-constraints", duration: "20 min" },
            { id: 4, title: "Default Type Parameters", slug: "default-type-params", duration: "15 min" },
            { id: 5, title: "Generic Utility Types", slug: "generic-utility-types", duration: "20 min" },
            { id: 6, title: "Parameter Utilities: Partial, Required, Pick, Omit", slug: "parameter-utilities", duration: "25 min" }
        ],
        quiz: {
            questionCount: 15,
            passingScore: 70
        }
    },
    {
        id: 7,
        title: "Classes TypeScript",
        description: "Class definitions, inheritance, modifiers, static members, abstract classes.",
        lessons: [
            { id: 1, title: "Class Dasar", slug: "class-dasar", duration: "20 min" },
            { id: 2, title: "Inheritance dengan extends dan super", slug: "inheritance-extends-super", duration: "20 min" },
            { id: 3, title: "Access Modifiers: public, private, protected", slug: "access-modifiers", duration: "20 min" },
            { id: 4, title: "Readonly dan Static Properties", slug: "readonly-params", duration: "15 min" },
            { id: 5, title: "Abstract Classes dan Methods", slug: "abstract-classes", duration: "20 min" },
            { id: 6, title: "Constructor Parameters Properties", slug: "constructor-parameter-properties", duration: "15 min" }
        ],
        quiz: {
            questionCount: 12,
            passingScore: 70
        }
    },
    {
        id: 8,
        title: "Modules dan Namespaces",
        description: "ES6 modules, import/export patterns, barrel files, declaration merging, namespaces.",
        lessons: [
            { id: 1, title: "ES6 Modules: import dan export", slug: "es6-modules-import-export", duration: "20 min" },
            { id: 2, title: "Default vs Named Exports", slug: "default-vs-named-export", duration: "15 min" },
            { id: 3, title: "Barrel Files dan Re-export", slug: "barrel-files", duration: "15 min" },
            { id: 4, title: "Dynamic Import dan Code Splitting", slug: "dynamic-import-code-splitting", duration: "20 min" },
            { id: 5, title: "Ambient Modules dan declare", slug: "ambient-modules", duration: "20 min" },
            { id: 6, title: "Namespaces untuk Organisasi Kode", slug: "namespaces-organisasi-kode", duration: "20 min" },
            { id: 7, title: "Declaration Merging", slug: "declaration-merging", duration: "20 min" }
        ],
        quiz: {
            questionCount: 15,
            passingScore: 70
        }
    },
    {
        id: 9,
        title: "Configuration Tooling",
        description: "tsconfig.json, compiler options, build tools, bundlers, linting, formatting.",
        lessons: [
            { id: 1, title: "tsconfig.json Struktur dan Opsi", slug: "tsconfig-json-struktur", duration: "25 min" },
            { id: 2, title: "Compiler Options: target, module, lib", slug: "compiler-options-target-module-lib", duration: "20 min" },
            { id: 3, title: "Strict Mode Options", slug: "strict-mode-options", duration: "20 min" },
            { id: 4, title: "Include, Exclude, dan Files", slug: "include-exclude-files", duration: "15 min" },
            { id: 5, title: "Path Mapping dan Module Resolution", slug: "path-mapping-module-resolution", duration: "20 min" },
            { id: 6, title: "Build Tools: Webpack, Babel, esbuild", slug: "build-tools-webpack-babel", duration: "25 min" },
            { id: 7, title: "ESLint untuk TypeScript", slug: "eslint-typescript", duration: "20 min" },
            { id: 8, title: "Prettier Integration", slug: "prettier-integration", duration: "15 min" }
        ],
        quiz: {
            questionCount: 15,
            passingScore: 70
        }
    },
    {
        id: 10,
        title: "Integration dengan JavaScript",
        description: "Using JS libraries, declaration files (.d.ts), DefinitelyTyped, dan migration.",
        lessons: [
            { id: 1, title: "Using JavaScript Libraries", slug: "using-js-libraries", duration: "20 min" },
            { id: 2, title: "Declaration Files (.d.ts)", slug: "declaration-files-d-ts", duration: "25 min" },
            { id: 3, title: "DefinitelyTyped dan @types", slug: "definitelytyped", duration: "15 min" },
            { id: 4, title: "Migrasi JavaScript ke TypeScript", slug: "migrasi-js-ke-ts", duration: "25 min" }
        ],
        quiz: {
            questionCount: 10,
            passingScore: 70
        }
    },
    {
        id: 11,
        title: "Advanced Utility Types",
        description: "Built-in utility types: Partial, Required, Pick, Omit, Record, Readonly, ReturnType, ThisType.",
        lessons: [
            { id: 1, title: "Partial dan Required Types", slug: "partial-required", duration: "20 min" },
            { id: 2, title: "Pick dan Omit", slug: "pick-omit", duration: "20 min" },
            { id: 3, title: "Record dan Tuple Types", slug: "record-tuple", duration: "15 min" },
            { id: 4, title: "Readonly dan Mutable", slug: "readonly-record", duration: "15 min" },
            { id: 5, title: "ReturnType, InstanceType, ThisType", slug: "returntype-parameters-thistype", duration: "25 min" },
            { id: 6, title: "Exclude, Extract, NonNullable", slug: "exclude-extract-nonnullable", duration: "20 min" },
            { id: 7, title: "Parameters dan ConstructorParameters", slug: "parameters-constructorparameters", duration: "20 min" },
            { id: 8, title: "Omit ThisParameter", slug: "omit-thisparameter", duration: "15 min" }
        ],
        quiz: {
            questionCount: 15,
            passingScore: 70
        }
    },
    {
        id: 12,
        title: "Real-World Projects",
        description: "Project CLI tool, React TypeScript, REST API, type definitions, fullstack aplikasi.",
        lessons: [
            { id: 1, title: "Project: CLI Tool dengan TypeScript", slug: "project-cli-tool", duration: "30 min" },
            { id: 2, title: "Project: React dengan TypeScript", slug: "project-react-ts", duration: "40 min" },
            { id: 3, title: "Project: REST API dengan Express + TypeScript", slug: "project-rest-api", duration: "40 min" },
            { id: 4, title: "Project: Custom Type Definitions", slug: "project-type-definitions", duration: "30 min" },
            { id: 5, title: "Final Project: Fullstack TypeScript App", slug: "final-project-fullstack", duration: "60 min" }
        ],
        quiz: {
            questionCount: 20,
            passingScore: 70
        }
    }
];

// Export for use in app.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = MODULES;
} else {
    window.MODULES = MODULES;
}