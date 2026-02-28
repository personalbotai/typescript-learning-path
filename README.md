# TypeScript Learning Path

**Interactive, hands-on TypeScript course from zero to advanced full-stack development**

[![GitHub Pages](https://img.shields.io/badge/Deploy-GitHub%20Pages-blue?logo=github)](https://personalbotai.github.io/typescript-learning-path/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Status](https://img.shields.io/badge/Status-Building-orange)]

---

## 📚 About This Repository

This is part of the **Multi-Language Interactive Learning Paths** project - a comprehensive set of 15 language-specific learning platforms built with:

- **Pure HTML/CSS/JavaScript** (no build step required)
- **Tailwind CSS** for styling
- **Monaco Editor** for code editing (VS Code's editor)
- **Babel Standalone** for TypeScript transpilation in-browser
- **localStorage** for progress persistence
- **Responsive design** (mobile-first)
- **Deployed on GitHub Pages** (free hosting)

## 🎯 Learning Path Structure

**12 Modules**, **65+ Lessons**, **12 Quizzes**, **5 Projects**

1. **Dasar-Dasar TypeScript** (6 lessons) - Introduction, setup, tsc, Hello World
2. **Tipe Dasar TypeScript** (6 lessons) - Primitives, any, unknown, arrays, tuples, enums, void, never, assertions
3. **Advanced Types** (10 lessons) - Union, intersection, type guards, narrowing, conditional types, mapped types, template literals
4. **Interfaces dan Type Aliases** (6 lessons) - Interface, optional/readonly, type aliases, extending, index signatures
5. **Functions TypeScript** (5 lessons) - Function types, overloads, rest/spread, optional/default params, arrow functions
6. **Generics** (6 lessons) - Generic functions, classes, constraints, utility types, Partial/Required/Pick/Omit
7. **Classes TypeScript** (6 lessons) - Classes, inheritance, modifiers, static, abstract, constructor parameters
8. **Modules dan Namespaces** (7 lessons) - ES6 modules, imports/exports, barrel files, dynamic import, namespaces, declaration merging
9. **Configuration Tooling** (8 lessons) - tsconfig.json, compiler options, strict mode, path mapping, build tools (Webpack/Babel), ESLint, Prettier
10. **Integration dengan JavaScript** (4 lessons) - Using JS libraries, .d.ts files, DefinitelyTyped, migration
11. **Advanced Utility Types** (8 lessons) - Partial, Required, Pick, Omit, Record, Readonly, ReturnType, ThisType, Exclude, Extract
12. **Real-World Projects** (5 lessons) - CLI tool, React + TypeScript, Express REST API, custom type definitions, fullstack app

## 🚀 Quick Start

### For Learners

1. Visit the live site: **https://personalbotai.github.io/typescript-learning-path/**
2. Pick a module from the sidebar
3. Read the lesson, try the code examples
4. Click **Run** to execute TypeScript code in-browser (transpiled via Babel)
5. Complete quizzes to test understanding
6. Build projects at the end of each module
7. Track your progress automatically saved in browser

### For Developers (Local Setup)

```bash
# Clone this repository
git clone https://github.com/personalbotai/typescript-learning-path.git
cd typescript-learning-path

# Start a local server (any method):
# Option 1: Python
python3 -m http.server 8000

# Option 2: Node.js (http-server)
npx http-server -p 8000

# Option 3: PHP
php -S localhost:8000

# Open browser to http://localhost:8000
```

**Note**: Some features (like code execution) require a web server due to CORS restrictions. Opening `index.html` directly may not work.

## 📁 Repository Structure

```
typescript-learning-path/
├── index.html          # Main HTML entry point (with Monaco Editor + Babel)
├── styles.css          # Custom CSS (Tailwind + custom styles)
├── app.js              # Main application logic + TypeScript transpilation
├── modules.js          # Module definitions (12 modules, 65 lessons)
├── quiz.js             # Quiz system
├── progress.js         # Progress tracking & achievements
├── lessons/            # Lesson content (HTML files)
│   ├── apa-itu-typescript.html
│   ├── tipe-primitif.html
│   ├── array-dan-tuple.html
│   ├── enum-named-constants.html
│   └── ... (60+ more TypeScript lessons)
├── quizzes/            # Quiz data (JSON)
│   ├── module-1.json
│   ├── module-2.json
│   └── ... (12 quiz files, 171 questions total)
├── README.md
├── CONTRIBUTING.md
└── LICENSE
```

## 🛠️ Technology Stack

| Component | Technology | Purpose |
|-----------|------------|---------|
| Styling | Tailwind CSS (CDN) | Utility-first CSS framework |
| Code Editor | Monaco Editor | VS Code's editor component |
| TypeScript Compiler | Babel Standalone + TypeScript preset | Transpile TypeScript to JavaScript in-browser |
| Code Runner | Custom evaluator | Execute transpiled JavaScript (sandboxed) |
| Progress Tracking | localStorage | Save user progress locally |
| Diagrams | Mermaid.js (future) | Flowcharts & architecture diagrams |
| Deployment | GitHub Pages | Free static hosting with CI/CD |

## 📖 Curriculum Overview

### Module 1: Dasar-Dasar TypeScript
- Introduction to TypeScript, differences from JavaScript
- Installation and environment setup
- TypeScript compiler (tsc) usage
- Configuration and project structure
- Hello World program

### Module 2: Tipe Dasar TypeScript
- Primitive types: string, number, boolean
- `any` and `unknown` types
- Arrays and tuples
- Enums and named constants
- Special types: `void`, `never`, `null`, `undefined`
- Type assertions

### Module 3: Advanced Types
- Union types
- Intersection types
- Type guards and narrowing
- Indexed access types
- Conditional types
- Mapped types
- Template literal types

### Module 4: Interfaces dan Type Aliases
- Interface basics
- Optional and readonly properties
- Type aliases
- Interface vs Type Alias comparison
- Extending interfaces and types
- Index signatures

### Module 5: Functions TypeScript
- Function types and signatures
- Rest parameters and spread
- Optional and default parameters
- Function overloads
- Arrow functions with types

### Module 6: Generics
- Generic functions
- Generic interfaces and classes
- Generic constraints (extends, keyof)
- Default type parameters
- Built-in utility types
- Parameter utilities: Partial, Required, Pick, Omit

### Module 7: Classes TypeScript
- Class definitions and constructors
- Inheritance with extends/super
- Access modifiers: public, private, protected
- Readonly and static members
- Abstract classes and methods
- Constructor parameter properties

### Module 8: Modules dan Namespaces
- ES6 modules: import/export
- Default vs named exports
- Barrel files and re-export patterns
- Dynamic import and code splitting
- Ambient modules and `declare`
- Namespaces for code organization
- Declaration merging

### Module 9: Configuration Tooling
- tsconfig.json structure and options
- Compiler options: target, module, lib
- Strict mode options (strict, noImplicitAny, etc.)
- Include, exclude, and files patterns
- Path mapping and module resolution
- Build tools: Webpack, Babel, esbuild
- Linting with ESLint for TypeScript
- Code formatting with Prettier

### Module 10: Integration dengan JavaScript
- Using existing JavaScript libraries
- Declaration files (.d.ts)
- DefinitelyTyped and @types packages
- Migrating JavaScript codebase to TypeScript
- Gradual adoption strategies

### Module 11: Advanced Utility Types
- Partial and Required
- Pick and Omit
- Record and Tuple types
- Readonly utility
- ReturnType, InstanceType, ThisType
- Exclude, Extract, NonNullable
- Parameters, ConstructorParameters
- OmitThisParameter

### Module 12: Real-World Projects
- Building CLI tools with TypeScript and Node.js
- React applications with TypeScript
- REST API with Express + TypeScript
- Creating custom type definition packages
- Full-stack TypeScript application (frontend + backend)

## 🤝 Contributing

We welcome contributions! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

**Mulai belajar TypeScript sekarang dan tingkatkan skill pengembangan software Anda!** 🚀
