     1|// TypeScript Learning Path
     2|const MODULES = [
     3|    {
     4|        "id": 1,
     5|        "title": "Pengenalan TypeScript",
     6|        "icon": "fas fa-play-circle"
     7|    },
     8|    {
     9|        "id": 2,
    10|        "title": "Type System",
    11|        "icon": "fas fa-shield-alt"
    12|    },
    13|    {
    14|        "id": 3,
    15|        "title": "OOP",
    16|        "icon": "fas fa-object-group"
    17|    },
    18|    {
    19|        "id": 4,
    20|        "title": "Advanced Types",
    21|        "icon": "fas fa-cogs"
    22|    },
    23|    {
    24|        "id": 5,
    25|        "title": "Modules & Tooling",
    26|        "icon": "fas fa-tools"
    27|    }
    28|];
    29|
    30|const lessons = [
    31|    {
    32|        "id": 1,
    33|        "title": "1. Abstract Classes",
    34|        "module": "Pengenalan TypeScript",
    35|        "moduleId": 1,
    36|        "mdFile": "https://raw.githubusercontent.com/personalbotai/typescript-learning-path/gh-pages/lessons/abstract-classes.md",
    37|        "description": "<p><strong>Abstract Classes</strong></p>",
    38|        "defaultCode": "// Write TypeScript here\nconst msg: string = \"Hello, TypeScript!\";\nconsole.log(msg);",
    39|        "expectedOutput": "Hello, TypeScript!",
    40|        "hint": "Pelajari materi.",
    41|        "quiz": {
    42|            "question": "Apa yang dipelajari di Abstract Classes?",
    43|            "options": [
    44|                "A",
    45|                "B",
    46|                "C",
    47|                "D"
    48|            ],
    49|            "answer": 0
    50|        }
    51|    },
    52|    {
    53|        "id": 2,
    54|        "title": "2. Access Modifiers",
    55|        "module": "Pengenalan TypeScript",
    56|        "moduleId": 1,
    57|        "mdFile": "https://raw.githubusercontent.com/personalbotai/typescript-learning-path/gh-pages/lessons/access-modifiers.md",
    58|        "description": "<p><strong>Access Modifiers</strong></p>",
    59|        "defaultCode": "// Write TypeScript here\nconst msg: string = \"Hello, TypeScript!\";\nconsole.log(msg);",
    60|        "expectedOutput": "Hello, TypeScript!",
    61|        "hint": "Pelajari materi.",
    62|        "quiz": {
    63|            "question": "Apa yang dipelajari di Access Modifiers?",
    64|            "options": [
    65|                "A",
    66|                "B",
    67|                "C",
    68|                "D"
    69|            ],
    70|            "answer": 0
    71|        }
    72|    },
    73|    {
    74|        "id": 3,
    75|        "title": "3. Ambient Modules",
    76|        "module": "Pengenalan TypeScript",
    77|        "moduleId": 1,
    78|        "mdFile": "https://raw.githubusercontent.com/personalbotai/typescript-learning-path/gh-pages/lessons/ambient-modules.md",
    79|        "description": "<p><strong>Ambient Modules</strong></p>",
    80|        "defaultCode": "// Write TypeScript here\nconst msg: string = \"Hello, TypeScript!\";\nconsole.log(msg);",
    81|        "expectedOutput": "Hello, TypeScript!",
    82|        "hint": "Pelajari materi.",
    83|        "quiz": {
    84|            "question": "Apa yang dipelajari di Ambient Modules?",
    85|            "options": [
    86|                "A",
    87|                "B",
    88|                "C",
    89|                "D"
    90|            ],
    91|            "answer": 0
    92|        }
    93|    },
    94|    {
    95|        "id": 4,
    96|        "title": "4. Any Dan Unknown",
    97|        "module": "Pengenalan TypeScript",
    98|        "moduleId": 1,
    99|        "mdFile": "https://raw.githubusercontent.com/personalbotai/typescript-learning-path/gh-pages/lessons/any-dan-unknown.md",
   100|        "description": "<p><strong>Any Dan Unknown</strong></p>",
   101|        "defaultCode": "// Write TypeScript here\nconst msg: string = \"Hello, TypeScript!\";\nconsole.log(msg);",
   102|        "expectedOutput": "Hello, TypeScript!",
   103|        "hint": "Pelajari materi.",
   104|        "quiz": {
   105|            "question": "Apa yang dipelajari di Any Dan Unknown?",
   106|            "options": [
   107|                "A",
   108|                "B",
   109|                "C",
   110|                "D"
   111|            ],
   112|            "answer": 0
   113|        }
   114|    },
   115|    {
   116|        "id": 5,
   117|        "title": "5. Apa Itu Typescript",
   118|        "module": "Pengenalan TypeScript",
   119|        "moduleId": 1,
   120|        "mdFile": "https://raw.githubusercontent.com/personalbotai/typescript-learning-path/gh-pages/lessons/apa-itu-typescript.md",
   121|        "description": "<p><strong>Apa Itu Typescript</strong></p>",
   122|        "defaultCode": "// Write TypeScript here\nconst msg: string = \"Hello, TypeScript!\";\nconsole.log(msg);",
   123|        "expectedOutput": "Hello, TypeScript!",
   124|        "hint": "Pelajari materi.",
   125|        "quiz": {
   126|            "question": "Apa yang dipelajari di Apa Itu Typescript?",
   127|            "options": [
   128|                "A",
   129|                "B",
   130|                "C",
   131|                "D"
   132|            ],
   133|            "answer": 0
   134|        }
   135|    },
   136|    {
   137|        "id": 6,
   138|        "title": "6. Array Dan Tuple",
   139|        "module": "Pengenalan TypeScript",
   140|        "moduleId": 1,
   141|        "mdFile": "https://raw.githubusercontent.com/personalbotai/typescript-learning-path/gh-pages/lessons/array-dan-tuple.md",
   142|        "description": "<p><strong>Array Dan Tuple</strong></p>",
   143|        "defaultCode": "// Write TypeScript here\nconst msg: string = \"Hello, TypeScript!\";\nconsole.log(msg);",
   144|        "expectedOutput": "Hello, TypeScript!",
   145|        "hint": "Pelajari materi.",
   146|        "quiz": {
   147|            "question": "Apa yang dipelajari di Array Dan Tuple?",
   148|            "options": [
   149|                "A",
   150|                "B",
   151|                "C",
   152|                "D"
   153|            ],
   154|            "answer": 0
   155|        }
   156|    },
   157|    {
   158|        "id": 7,
   159|        "title": "7. Arrow Functions Types",
   160|        "module": "Pengenalan TypeScript",
   161|        "moduleId": 1,
   162|        "mdFile": "https://raw.githubusercontent.com/personalbotai/typescript-learning-path/gh-pages/lessons/arrow-functions-types.md",
   163|        "description": "<p><strong>Arrow Functions Types</strong></p>",
   164|        "defaultCode": "// Write TypeScript here\nconst msg: string = \"Hello, TypeScript!\";\nconsole.log(msg);",
   165|        "expectedOutput": "Hello, TypeScript!",
   166|        "hint": "Pelajari materi.",
   167|        "quiz": {
   168|            "question": "Apa yang dipelajari di Arrow Functions Types?",
   169|            "options": [
   170|                "A",
   171|                "B",
   172|                "C",
   173|                "D"
   174|            ],
   175|            "answer": 0
   176|        }
   177|    },
   178|    {
   179|        "id": 8,
   180|        "title": "8. Barrel Files",
   181|        "module": "Pengenalan TypeScript",
   182|        "moduleId": 1,
   183|        "mdFile": "https://raw.githubusercontent.com/personalbotai/typescript-learning-path/gh-pages/lessons/barrel-files.md",
   184|        "description": "<p><strong>Barrel Files</strong></p>",
   185|        "defaultCode": "// Write TypeScript here\nconst msg: string = \"Hello, TypeScript!\";\nconsole.log(msg);",
   186|        "expectedOutput": "Hello, TypeScript!",
   187|        "hint": "Pelajari materi.",
   188|        "quiz": {
   189|            "question": "Apa yang dipelajari di Barrel Files?",
   190|            "options": [
   191|                "A",
   192|                "B",
   193|                "C",
   194|                "D"
   195|            ],
   196|            "answer": 0
   197|        }
   198|    },
   199|    {
   200|        "id": 9,
   201|        "title": "9. Build Tools Webpack Babel",
   202|        "module": "Pengenalan TypeScript",
   203|        "moduleId": 1,
   204|        "mdFile": "https://raw.githubusercontent.com/personalbotai/typescript-learning-path/gh-pages/lessons/build-tools-webpack-babel.md",
   205|        "description": "<p><strong>Build Tools Webpack Babel</strong></p>",
   206|        "defaultCode": "// Write TypeScript here\nconst msg: string = \"Hello, TypeScript!\";\nconsole.log(msg);",
   207|        "expectedOutput": "Hello, TypeScript!",
   208|        "hint": "Pelajari materi.",
   209|        "quiz": {
   210|            "question": "Apa yang dipelajari di Build Tools Webpack Babel?",
   211|            "options": [
   212|                "A",
   213|                "B",
   214|                "C",
   215|                "D"
   216|            ],
   217|            "answer": 0
   218|        }
   219|    },
   220|    {
   221|        "id": 10,
   222|        "title": "10. Class Dasar",
   223|        "module": "Pengenalan TypeScript",
   224|        "moduleId": 1,
   225|        "mdFile": "https://raw.githubusercontent.com/personalbotai/typescript-learning-path/gh-pages/lessons/class-dasar.md",
   226|        "description": "<p><strong>Class Dasar</strong></p>",
   227|        "defaultCode": "// Write TypeScript here\nconst msg: string = \"Hello, TypeScript!\";\nconsole.log(msg);",
   228|        "expectedOutput": "Hello, TypeScript!",
   229|        "hint": "Pelajari materi.",
   230|        "quiz": {
   231|            "question": "Apa yang dipelajari di Class Dasar?",
   232|            "options": [
   233|                "A",
   234|                "B",
   235|                "C",
   236|                "D"
   237|            ],
   238|            "answer": 0
   239|        }
   240|    },
   241|    {
   242|        "id": 11,
   243|        "title": "11. Compiler Options Target Module Lib",
   244|        "module": "Pengenalan TypeScript",
   245|        "moduleId": 1,
   246|        "mdFile": "https://raw.githubusercontent.com/personalbotai/typescript-learning-path/gh-pages/lessons/compiler-options-target-module-lib.md",
   247|        "description": "<p><strong>Compiler Options Target Module Lib</strong></p>",
   248|        "defaultCode": "// Write TypeScript here\nconst msg: string = \"Hello, TypeScript!\";\nconsole.log(msg);",
   249|        "expectedOutput": "Hello, TypeScript!",
   250|        "hint": "Pelajari materi.",
   251|        "quiz": {
   252|            "question": "Apa yang dipelajari di Compiler Options Target Module Lib?",
   253|            "options": [
   254|                "A",
   255|                "B",
   256|                "C",
   257|                "D"
   258|            ],
   259|            "answer": 0
   260|        }
   261|    },
   262|    {
   263|        "id": 12,
   264|        "title": "12. Conditional Types",
   265|        "module": "Pengenalan TypeScript",
   266|        "moduleId": 1,
   267|        "mdFile": "https://raw.githubusercontent.com/personalbotai/typescript-learning-path/gh-pages/lessons/conditional-types.md",
   268|        "description": "<p><strong>Conditional Types</strong></p>",
   269|        "defaultCode": "// Write TypeScript here\nconst msg: string = \"Hello, TypeScript!\";\nconsole.log(msg);",
   270|        "expectedOutput": "Hello, TypeScript!",
   271|        "hint": "Pelajari materi.",
   272|        "quiz": {
   273|            "question": "Apa yang dipelajari di Conditional Types?",
   274|            "options": [
   275|                "A",
   276|                "B",
   277|                "C",
   278|                "D"
   279|            ],
   280|            "answer": 0
   281|        }
   282|    },
   283|    {
   284|        "id": 13,
   285|        "title": "13. Constructor Parameter Properties",
   286|        "module": "Pengenalan TypeScript",
   287|        "moduleId": 1,
   288|        "mdFile": "https://raw.githubusercontent.com/personalbotai/typescript-learning-path/gh-pages/lessons/constructor-parameter-properties.md",
   289|        "description": "<p><strong>Constructor Parameter Properties</strong></p>",
   290|        "defaultCode": "// Write TypeScript here\nconst msg: string = \"Hello, TypeScript!\";\nconsole.log(msg);",
   291|        "expectedOutput": "Hello, TypeScript!",
   292|        "hint": "Pelajari materi.",
   293|        "quiz": {
   294|            "question": "Apa yang dipelajari di Constructor Parameter Properties?",
   295|            "options": [
   296|                "A",
   297|                "B",
   298|                "C",
   299|                "D"
   300|            ],
   301|            "answer": 0
   302|        }
   303|    },
   304|    {
   305|        "id": 14,
   306|        "title": "14. Declaration Files D Ts",
   307|        "module": "Pengenalan TypeScript",
   308|        "moduleId": 1,
   309|        "mdFile": "https://raw.githubusercontent.com/personalbotai/typescript-learning-path/gh-pages/lessons/declaration-files-d-ts.md",
   310|        "description": "<p><strong>Declaration Files D Ts</strong></p>",
   311|        "defaultCode": "// Write TypeScript here\nconst msg: string = \"Hello, TypeScript!\";\nconsole.log(msg);",
   312|        "expectedOutput": "Hello, TypeScript!",
   313|        "hint": "Pelajari materi.",
   314|        "quiz": {
   315|            "question": "Apa yang dipelajari di Declaration Files D Ts?",
   316|            "options": [
   317|                "A",
   318|                "B",
   319|                "C",
   320|                "D"
   321|            ],
   322|            "answer": 0
   323|        }
   324|    },
   325|    {
   326|        "id": 15,
   327|        "title": "15. Declaration Merging",
   328|        "module": "Pengenalan TypeScript",
   329|        "moduleId": 1,
   330|        "mdFile": "https://raw.githubusercontent.com/personalbotai/typescript-learning-path/gh-pages/lessons/declaration-merging.md",
   331|        "description": "<p><strong>Declaration Merging</strong></p>",
   332|        "defaultCode": "// Write TypeScript here\nconst msg: string = \"Hello, TypeScript!\";\nconsole.log(msg);",
   333|        "expectedOutput": "Hello, TypeScript!",
   334|        "hint": "Pelajari materi.",
   335|        "quiz": {
   336|            "question": "Apa yang dipelajari di Declaration Merging?",
   337|            "options": [
   338|                "A",
   339|                "B",
   340|                "C",
   341|                "D"
   342|            ],
   343|            "answer": 0
   344|        }
   345|    },
   346|    {
   347|        "id": 16,
   348|        "title": "16. Default Type Params",
   349|        "module": "Pengenalan TypeScript",
   350|        "moduleId": 1,
   351|        "mdFile": "https://raw.githubusercontent.com/personalbotai/typescript-learning-path/gh-pages/lessons/default-type-params.md",
   352|        "description": "<p><strong>Default Type Params</strong></p>",
   353|        "defaultCode": "// Write TypeScript here\nconst msg: string = \"Hello, TypeScript!\";\nconsole.log(msg);",
   354|        "expectedOutput": "Hello, TypeScript!",
   355|        "hint": "Pelajari materi.",
   356|        "quiz": {
   357|            "question": "Apa yang dipelajari di Default Type Params?",
   358|            "options": [
   359|                "A",
   360|                "B",
   361|                "C",
   362|                "D"
   363|            ],
   364|            "answer": 0
   365|        }
   366|    },
   367|    {
   368|        "id": 17,
   369|        "title": "17. Default Vs Named Export",
   370|        "module": "Type System",
   371|        "moduleId": 2,
   372|        "mdFile": "https://raw.githubusercontent.com/personalbotai/typescript-learning-path/gh-pages/lessons/default-vs-named-export.md",
   373|        "description": "<p><strong>Default Vs Named Export</strong></p>",
   374|        "defaultCode": "// Write TypeScript here\nconst msg: string = \"Hello, TypeScript!\";\nconsole.log(msg);",
   375|        "expectedOutput": "Hello, TypeScript!",
   376|        "hint": "Pelajari materi.",
   377|        "quiz": {
   378|            "question": "Apa yang dipelajari di Default Vs Named Export?",
   379|            "options": [
   380|                "A",
   381|                "B",
   382|                "C",
   383|                "D"
   384|            ],
   385|            "answer": 0
   386|        }
   387|    },
   388|    {
   389|        "id": 18,
   390|        "title": "18. Definitelytyped",
   391|        "module": "Type System",
   392|        "moduleId": 2,
   393|        "mdFile": "https://raw.githubusercontent.com/personalbotai/typescript-learning-path/gh-pages/lessons/definitelytyped.md",
   394|        "description": "<p><strong>Definitelytyped</strong></p>",
   395|        "defaultCode": "// Write TypeScript here\nconst msg: string = \"Hello, TypeScript!\";\nconsole.log(msg);",
   396|        "expectedOutput": "Hello, TypeScript!",
   397|        "hint": "Pelajari materi.",
   398|        "quiz": {
   399|            "question": "Apa yang dipelajari di Definitelytyped?",
   400|            "options": [
   401|                "A",
   402|                "B",
   403|                "C",
   404|                "D"
   405|            ],
   406|            "answer": 0
   407|        }
   408|    },
   409|    {
   410|        "id": 19,
   411|        "title": "19. Dynamic Import Code Splitting",
   412|        "module": "Type System",
   413|        "moduleId": 2,
   414|        "mdFile": "https://raw.githubusercontent.com/personalbotai/typescript-learning-path/gh-pages/lessons/dynamic-import-code-splitting.md",
   415|        "description": "<p><strong>Dynamic Import Code Splitting</strong></p>",
   416|        "defaultCode": "// Write TypeScript here\nconst msg: string = \"Hello, TypeScript!\";\nconsole.log(msg);",
   417|        "expectedOutput": "Hello, TypeScript!",
   418|        "hint": "Pelajari materi.",
   419|        "quiz": {
   420|            "question": "Apa yang dipelajari di Dynamic Import Code Splitting?",
   421|            "options": [
   422|                "A",
   423|                "B",
   424|                "C",
   425|                "D"
   426|            ],
   427|            "answer": 0
   428|        }
   429|    },
   430|    {
   431|        "id": 20,
   432|        "title": "20. Enum Named Constants",
   433|        "module": "Type System",
   434|        "moduleId": 2,
   435|        "mdFile": "https://raw.githubusercontent.com/personalbotai/typescript-learning-path/gh-pages/lessons/enum-named-constants.md",
   436|        "description": "<p><strong>Enum Named Constants</strong></p>",
   437|        "defaultCode": "// Write TypeScript here\nconst msg: string = \"Hello, TypeScript!\";\nconsole.log(msg);",
   438|        "expectedOutput": "Hello, TypeScript!",
   439|        "hint": "Pelajari materi.",
   440|        "quiz": {
   441|            "question": "Apa yang dipelajari di Enum Named Constants?",
   442|            "options": [
   443|                "A",
   444|                "B",
   445|                "C",
   446|                "D"
   447|            ],
   448|            "answer": 0
   449|        }
   450|    },
   451|    {
   452|        "id": 21,
   453|        "title": "21. Es6 Modules Import Export",
   454|        "module": "Type System",
   455|        "moduleId": 2,
   456|        "mdFile": "https://raw.githubusercontent.com/personalbotai/typescript-learning-path/gh-pages/lessons/es6-modules-import-export.md",
   457|        "description": "<p><strong>Es6 Modules Import Export</strong></p>",
   458|        "defaultCode": "// Write TypeScript here\nconst msg: string = \"Hello, TypeScript!\";\nconsole.log(msg);",
   459|        "expectedOutput": "Hello, TypeScript!",
   460|        "hint": "Pelajari materi.",
   461|        "quiz": {
   462|            "question": "Apa yang dipelajari di Es6 Modules Import Export?",
   463|            "options": [
   464|                "A",
   465|                "B",
   466|                "C",
   467|                "D"
   468|            ],
   469|            "answer": 0
   470|        }
   471|    },
   472|    {
   473|        "id": 22,
   474|        "title": "22. Eslint Typescript",
   475|        "module": "Type System",
   476|        "moduleId": 2,
   477|        "mdFile": "https://raw.githubusercontent.com/personalbotai/typescript-learning-path/gh-pages/lessons/eslint-typescript.md",
   478|        "description": "<p><strong>Eslint Typescript</strong></p>",
   479|        "defaultCode": "// Write TypeScript here\nconst msg: string = \"Hello, TypeScript!\";\nconsole.log(msg);",
   480|        "expectedOutput": "Hello, TypeScript!",
   481|        "hint": "Pelajari materi.",
   482|        "quiz": {
   483|            "question": "Apa yang dipelajari di Eslint Typescript?",
   484|            "options": [
   485|                "A",
   486|                "B",
   487|                "C",
   488|                "D"
   489|            ],
   490|            "answer": 0
   491|        }
   492|    },
   493|    {
   494|        "id": 23,
   495|        "title": "23. Exclude Extract Nonnullable",
   496|        "module": "Type System",
   497|        "moduleId": 2,
   498|        "mdFile": "https://raw.githubusercontent.com/personalbotai/typescript-learning-path/gh-pages/lessons/exclude-extract-nonnullable.md",
   499|        "description": "<p><strong>Exclude Extract Nonnullable</strong></p>",
   500|        "defaultCode": "// Write TypeScript here\nconst msg: string = \"Hello, TypeScript!\";\nconsole.log(msg);",
   501|        "expectedOutput": "Hello, TypeScript!",
   502|        "hint": "Pelajari materi.",
   503|        "quiz": {
   504|            "question": "Apa yang dipelajari di Exclude Extract Nonnullable?",
   505|            "options": [
   506|                "A",
   507|                "B",
   508|                "C",
   509|                "D"
   510|            ],
   511|            "answer": 0
   512|        }
   513|    },
   514|    {
   515|        "id": 24,
   516|        "title": "24. Extending Interfaces Types",
   517|        "module": "Type System",
   518|        "moduleId": 2,
   519|        "mdFile": "https://raw.githubusercontent.com/personalbotai/typescript-learning-path/gh-pages/lessons/extending-interfaces-types.md",
   520|        "description": "<p><strong>Extending Interfaces Types</strong></p>",
   521|        "defaultCode": "// Write TypeScript here\nconst msg: string = \"Hello, TypeScript!\";\nconsole.log(msg);",
   522|        "expectedOutput": "Hello, TypeScript!",
   523|        "hint": "Pelajari materi.",
   524|        "quiz": {
   525|            "question": "Apa yang dipelajari di Extending Interfaces Types?",
   526|            "options": [
   527|                "A",
   528|                "B",
   529|                "C",
   530|                "D"
   531|            ],
   532|            "answer": 0
   533|        }
   534|    },
   535|    {
   536|        "id": 25,
   537|        "title": "25. Final Project Fullstack",
   538|        "module": "Type System",
   539|        "moduleId": 2,
   540|        "mdFile": "https://raw.githubusercontent.com/personalbotai/typescript-learning-path/gh-pages/lessons/final-project-fullstack.md",
   541|        "description": "<p><strong>Final Project Fullstack</strong></p>",
   542|        "defaultCode": "// Write TypeScript here\nconst msg: string = \"Hello, TypeScript!\";\nconsole.log(msg);",
   543|        "expectedOutput": "Hello, TypeScript!",
   544|        "hint": "Pelajari materi.",
   545|        "quiz": {
   546|            "question": "Apa yang dipelajari di Final Project Fullstack?",
   547|            "options": [
   548|                "A",
   549|                "B",
   550|                "C",
   551|                "D"
   552|            ],
   553|            "answer": 0
   554|        }
   555|    },
   556|    {
   557|        "id": 26,
   558|        "title": "26. Function Overloads",
   559|        "module": "Type System",
   560|        "moduleId": 2,
   561|        "mdFile": "https://raw.githubusercontent.com/personalbotai/typescript-learning-path/gh-pages/lessons/function-overloads.md",
   562|        "description": "<p><strong>Function Overloads</strong></p>",
   563|        "defaultCode": "// Write TypeScript here\nconst msg: string = \"Hello, TypeScript!\";\nconsole.log(msg);",
   564|        "expectedOutput": "Hello, TypeScript!",
   565|        "hint": "Pelajari materi.",
   566|        "quiz": {
   567|            "question": "Apa yang dipelajari di Function Overloads?",
   568|            "options": [
   569|                "A",
   570|                "B",
   571|                "C",
   572|                "D"
   573|            ],
   574|            "answer": 0
   575|        }
   576|    },
   577|    {
   578|        "id": 27,
   579|        "title": "27. Function Types",
   580|        "module": "Type System",
   581|        "moduleId": 2,
   582|        "mdFile": "https://raw.githubusercontent.com/personalbotai/typescript-learning-path/gh-pages/lessons/function-types.md",
   583|        "description": "<p><strong>Function Types</strong></p>",
   584|        "defaultCode": "// Write TypeScript here\nconst msg: string = \"Hello, TypeScript!\";\nconsole.log(msg);",
   585|        "expectedOutput": "Hello, TypeScript!",
   586|        "hint": "Pelajari materi.",
   587|        "quiz": {
   588|            "question": "Apa yang dipelajari di Function Types?",
   589|            "options": [
   590|                "A",
   591|                "B",
   592|                "C",
   593|                "D"
   594|            ],
   595|            "answer": 0
   596|        }
   597|    },
   598|    {
   599|        "id": 28,
   600|        "title": "28. Generic Constraints",
   601|        "module": "Type System",
   602|        "moduleId": 2,
   603|        "mdFile": "https://raw.githubusercontent.com/personalbotai/typescript-learning-path/gh-pages/lessons/generic-constraints.md",
   604|        "description": "<p><strong>Generic Constraints</strong></p>",
   605|        "defaultCode": "// Write TypeScript here\nconst msg: string = \"Hello, TypeScript!\";\nconsole.log(msg);",
   606|        "expectedOutput": "Hello, TypeScript!",
   607|        "hint": "Pelajari materi.",
   608|        "quiz": {
   609|            "question": "Apa yang dipelajari di Generic Constraints?",
   610|            "options": [
   611|                "A",
   612|                "B",
   613|                "C",
   614|                "D"
   615|            ],
   616|            "answer": 0
   617|        }
   618|    },
   619|    {
   620|        "id": 29,
   621|        "title": "29. Generic Functions Dasar",
   622|        "module": "Type System",
   623|        "moduleId": 2,
   624|        "mdFile": "https://raw.githubusercontent.com/personalbotai/typescript-learning-path/gh-pages/lessons/generic-functions-dasar.md",
   625|        "description": "<p><strong>Generic Functions Dasar</strong></p>",
   626|        "defaultCode": "// Write TypeScript here\nconst msg: string = \"Hello, TypeScript!\";\nconsole.log(msg);",
   627|        "expectedOutput": "Hello, TypeScript!",
   628|        "hint": "Pelajari materi.",
   629|        "quiz": {
   630|            "question": "Apa yang dipelajari di Generic Functions Dasar?",
   631|            "options": [
   632|                "A",
   633|                "B",
   634|                "C",
   635|                "D"
   636|            ],
   637|            "answer": 0
   638|        }
   639|    },
   640|    {
   641|        "id": 30,
   642|        "title": "30. Generic Interfaces Classes",
   643|        "module": "Type System",
   644|        "moduleId": 2,
   645|        "mdFile": "https://raw.githubusercontent.com/personalbotai/typescript-learning-path/gh-pages/lessons/generic-interfaces-classes.md",
   646|        "description": "<p><strong>Generic Interfaces Classes</strong></p>",
   647|        "defaultCode": "// Write TypeScript here\nconst msg: string = \"Hello, TypeScript!\";\nconsole.log(msg);",
   648|        "expectedOutput": "Hello, TypeScript!",
   649|        "hint": "Pelajari materi.",
   650|        "quiz": {
   651|            "question": "Apa yang dipelajari di Generic Interfaces Classes?",
   652|            "options": [
   653|                "A",
   654|                "B",
   655|                "C",
   656|                "D"
   657|            ],
   658|            "answer": 0
   659|        }
   660|    },
   661|    {
   662|        "id": 31,
   663|        "title": "31. Generic Utility Types",
   664|        "module": "Type System",
   665|        "moduleId": 2,
   666|        "mdFile": "https://raw.githubusercontent.com/personalbotai/typescript-learning-path/gh-pages/lessons/generic-utility-types.md",
   667|        "description": "<p><strong>Generic Utility Types</strong></p>",
   668|        "defaultCode": "// Write TypeScript here\nconst msg: string = \"Hello, TypeScript!\";\nconsole.log(msg);",
   669|        "expectedOutput": "Hello, TypeScript!",
   670|        "hint": "Pelajari materi.",
   671|        "quiz": {
   672|            "question": "Apa yang dipelajari di Generic Utility Types?",
   673|            "options": [
   674|                "A",
   675|                "B",
   676|                "C",
   677|                "D"
   678|            ],
   679|            "answer": 0
   680|        }
   681|    },
   682|    {
   683|        "id": 32,
   684|        "title": "32. Hello World",
   685|        "module": "Type System",
   686|        "moduleId": 2,
   687|        "mdFile": "https://raw.githubusercontent.com/personalbotai/typescript-learning-path/gh-pages/lessons/hello-world.md",
   688|        "description": "<p><strong>Hello World</strong></p>",
   689|        "defaultCode": "// Write TypeScript here\nconst msg: string = \"Hello, TypeScript!\";\nconsole.log(msg);",
   690|        "expectedOutput": "Hello, TypeScript!",
   691|        "hint": "Pelajari materi.",
   692|        "quiz": {
   693|            "question": "Apa yang dipelajari di Hello World?",
   694|            "options": [
   695|                "A",
   696|                "B",
   697|                "C",
   698|                "D"
   699|            ],
   700|            "answer": 0
   701|        }
   702|    },
   703|    {
   704|        "id": 33,
   705|        "title": "33. Include Exclude Files",
   706|        "module": "OOP",
   707|        "moduleId": 3,
   708|        "mdFile": "https://raw.githubusercontent.com/personalbotai/typescript-learning-path/gh-pages/lessons/include-exclude-files.md",
   709|        "description": "<p><strong>Include Exclude Files</strong></p>",
   710|        "defaultCode": "// Write TypeScript here\nconst msg: string = \"Hello, TypeScript!\";\nconsole.log(msg);",
   711|        "expectedOutput": "Hello, TypeScript!",
   712|        "hint": "Pelajari materi.",
   713|        "quiz": {
   714|            "question": "Apa yang dipelajari di Include Exclude Files?",
   715|            "options": [
   716|                "A",
   717|                "B",
   718|                "C",
   719|                "D"
   720|            ],
   721|            "answer": 0
   722|        }
   723|    },
   724|    {
   725|        "id": 34,
   726|        "title": "34. Index Signatures",
   727|        "module": "OOP",
   728|        "moduleId": 3,
   729|        "mdFile": "https://raw.githubusercontent.com/personalbotai/typescript-learning-path/gh-pages/lessons/index-signatures.md",
   730|        "description": "<p><strong>Index Signatures</strong></p>",
   731|        "defaultCode": "// Write TypeScript here\nconst msg: string = \"Hello, TypeScript!\";\nconsole.log(msg);",
   732|        "expectedOutput": "Hello, TypeScript!",
   733|        "hint": "Pelajari materi.",
   734|        "quiz": {
   735|            "question": "Apa yang dipelajari di Index Signatures?",
   736|            "options": [
   737|                "A",
   738|                "B",
   739|                "C",
   740|                "D"
   741|            ],
   742|            "answer": 0
   743|        }
   744|    },
   745|    {
   746|        "id": 35,
   747|        "title": "35. Indexed Access Types",
   748|        "module": "OOP",
   749|        "moduleId": 3,
   750|        "mdFile": "https://raw.githubusercontent.com/personalbotai/typescript-learning-path/gh-pages/lessons/indexed-access-types.md",
   751|        "description": "<p><strong>Indexed Access Types</strong></p>",
   752|        "defaultCode": "// Write TypeScript here\nconst msg: string = \"Hello, TypeScript!\";\nconsole.log(msg);",
   753|        "expectedOutput": "Hello, TypeScript!",
   754|        "hint": "Pelajari materi.",
   755|        "quiz": {
   756|            "question": "Apa yang dipelajari di Indexed Access Types?",
   757|            "options": [
   758|                "A",
   759|                "B",
   760|                "C",
   761|                "D"
   762|            ],
   763|            "answer": 0
   764|        }
   765|    },
   766|    {
   767|        "id": 36,
   768|        "title": "36. Inheritance Extends Super",
   769|        "module": "OOP",
   770|        "moduleId": 3,
   771|        "mdFile": "https://raw.githubusercontent.com/personalbotai/typescript-learning-path/gh-pages/lessons/inheritance-extends-super.md",
   772|        "description": "<p><strong>Inheritance Extends Super</strong></p>",
   773|        "defaultCode": "// Write TypeScript here\nconst msg: string = \"Hello, TypeScript!\";\nconsole.log(msg);",
   774|        "expectedOutput": "Hello, TypeScript!",
   775|        "hint": "Pelajari materi.",
   776|        "quiz": {
   777|            "question": "Apa yang dipelajari di Inheritance Extends Super?",
   778|            "options": [
   779|                "A",
   780|                "B",
   781|                "C",
   782|                "D"
   783|            ],
   784|            "answer": 0
   785|        }
   786|    },
   787|    {
   788|        "id": 37,
   789|        "title": "37. Instalasi Typescript",
   790|        "module": "OOP",
   791|        "moduleId": 3,
   792|        "mdFile": "https://raw.githubusercontent.com/personalbotai/typescript-learning-path/gh-pages/lessons/instalasi-typescript.md",
   793|        "description": "<p><strong>Instalasi Typescript</strong></p>",
   794|        "defaultCode": "// Write TypeScript here\nconst msg: string = \"Hello, TypeScript!\";\nconsole.log(msg);",
   795|        "expectedOutput": "Hello, TypeScript!",
   796|        "hint": "Pelajari materi.",
   797|        "quiz": {
   798|            "question": "Apa yang dipelajari di Instalasi Typescript?",
   799|            "options": [
   800|                "A",
   801|                "B",
   802|                "C",
   803|                "D"
   804|            ],
   805|            "answer": 0
   806|        }
   807|    },
   808|    {
   809|        "id": 38,
   810|        "title": "38. Interface Dasar",
   811|        "module": "OOP",
   812|        "moduleId": 3,
   813|        "mdFile": "https://raw.githubusercontent.com/personalbotai/typescript-learning-path/gh-pages/lessons/interface-dasar.md",
   814|        "description": "<p><strong>Interface Dasar</strong></p>",
   815|        "defaultCode": "// Write TypeScript here\nconst msg: string = \"Hello, TypeScript!\";\nconsole.log(msg);",
   816|        "expectedOutput": "Hello, TypeScript!",
   817|        "hint": "Pelajari materi.",
   818|        "quiz": {
   819|            "question": "Apa yang dipelajari di Interface Dasar?",
   820|            "options": [
   821|                "A",
   822|                "B",
   823|                "C",
   824|                "D"
   825|            ],
   826|            "answer": 0
   827|        }
   828|    },
   829|    {
   830|        "id": 39,
   831|        "title": "39. Interface Vs Type Alias",
   832|        "module": "OOP",
   833|        "moduleId": 3,
   834|        "mdFile": "https://raw.githubusercontent.com/personalbotai/typescript-learning-path/gh-pages/lessons/interface-vs-type-alias.md",
   835|        "description": "<p><strong>Interface Vs Type Alias</strong></p>",
   836|        "defaultCode": "// Write TypeScript here\nconst msg: string = \"Hello, TypeScript!\";\nconsole.log(msg);",
   837|        "expectedOutput": "Hello, TypeScript!",
   838|        "hint": "Pelajari materi.",
   839|        "quiz": {
   840|            "question": "Apa yang dipelajari di Interface Vs Type Alias?",
   841|            "options": [
   842|                "A",
   843|                "B",
   844|                "C",
   845|                "D"
   846|            ],
   847|            "answer": 0
   848|        }
   849|    },
   850|    {
   851|        "id": 40,
   852|        "title": "40. Intersection Types",
   853|        "module": "OOP",
   854|        "moduleId": 3,
   855|        "mdFile": "https://raw.githubusercontent.com/personalbotai/typescript-learning-path/gh-pages/lessons/intersection-types.md",
   856|        "description": "<p><strong>Intersection Types</strong></p>",
   857|        "defaultCode": "// Write TypeScript here\nconst msg: string = \"Hello, TypeScript!\";\nconsole.log(msg);",
   858|        "expectedOutput": "Hello, TypeScript!",
   859|        "hint": "Pelajari materi.",
   860|        "quiz": {
   861|            "question": "Apa yang dipelajari di Intersection Types?",
   862|            "options": [
   863|                "A",
   864|                "B",
   865|                "C",
   866|                "D"
   867|            ],
   868|            "answer": 0
   869|        }
   870|    },
   871|    {
   872|        "id": 41,
   873|        "title": "41. Mapped Types",
   874|        "module": "OOP",
   875|        "moduleId": 3,
   876|        "mdFile": "https://raw.githubusercontent.com/personalbotai/typescript-learning-path/gh-pages/lessons/mapped-types.md",
   877|        "description": "<p><strong>Mapped Types</strong></p>",
   878|        "defaultCode": "// Write TypeScript here\nconst msg: string = \"Hello, TypeScript!\";\nconsole.log(msg);",
   879|        "expectedOutput": "Hello, TypeScript!",
   880|        "hint": "Pelajari materi.",
   881|        "quiz": {
   882|            "question": "Apa yang dipelajari di Mapped Types?",
   883|            "options": [
   884|                "A",
   885|                "B",
   886|                "C",
   887|                "D"
   888|            ],
   889|            "answer": 0
   890|        }
   891|    },
   892|    {
   893|        "id": 42,
   894|        "title": "42. Migrasi Js Ke Ts",
   895|        "module": "OOP",
   896|        "moduleId": 3,
   897|        "mdFile": "https://raw.githubusercontent.com/personalbotai/typescript-learning-path/gh-pages/lessons/migrasi-js-ke-ts.md",
   898|        "description": "<p><strong>Migrasi Js Ke Ts</strong></p>",
   899|        "defaultCode": "// Write TypeScript here\nconst msg: string = \"Hello, TypeScript!\";\nconsole.log(msg);",
   900|        "expectedOutput": "Hello, TypeScript!",
   901|        "hint": "Pelajari materi.",
   902|        "quiz": {
   903|            "question": "Apa yang dipelajari di Migrasi Js Ke Ts?",
   904|            "options": [
   905|                "A",
   906|                "B",
   907|                "C",
   908|                "D"
   909|            ],
   910|            "answer": 0
   911|        }
   912|    },
   913|    {
   914|        "id": 43,
   915|        "title": "43. Namespaces Organisasi Kode",
   916|        "module": "OOP",
   917|        "moduleId": 3,
   918|        "mdFile": "https://raw.githubusercontent.com/personalbotai/typescript-learning-path/gh-pages/lessons/namespaces-organisasi-kode.md",
   919|        "description": "<p><strong>Namespaces Organisasi Kode</strong></p>",
   920|        "defaultCode": "// Write TypeScript here\nconst msg: string = \"Hello, TypeScript!\";\nconsole.log(msg);",
   921|        "expectedOutput": "Hello, TypeScript!",
   922|        "hint": "Pelajari materi.",
   923|        "quiz": {
   924|            "question": "Apa yang dipelajari di Namespaces Organisasi Kode?",
   925|            "options": [
   926|                "A",
   927|                "B",
   928|                "C",
   929|                "D"
   930|            ],
   931|            "answer": 0
   932|        }
   933|    },
   934|    {
   935|        "id": 44,
   936|        "title": "44. Nullable Types",
   937|        "module": "OOP",
   938|        "moduleId": 3,
   939|        "mdFile": "https://raw.githubusercontent.com/personalbotai/typescript-learning-path/gh-pages/lessons/nullable-types.md",
   940|        "description": "<p><strong>Nullable Types</strong></p>",
   941|        "defaultCode": "// Write TypeScript here\nconst msg: string = \"Hello, TypeScript!\";\nconsole.log(msg);",
   942|        "expectedOutput": "Hello, TypeScript!",
   943|        "hint": "Pelajari materi.",
   944|        "quiz": {
   945|            "question": "Apa yang dipelajari di Nullable Types?",
   946|            "options": [
   947|                "A",
   948|                "B",
   949|                "C",
   950|                "D"
   951|            ],
   952|            "answer": 0
   953|        }
   954|    },
   955|    {
   956|        "id": 45,
   957|        "title": "45. Omit Thisparameter",
   958|        "module": "OOP",
   959|        "moduleId": 3,
   960|        "mdFile": "https://raw.githubusercontent.com/personalbotai/typescript-learning-path/gh-pages/lessons/omit-thisparameter.md",
   961|        "description": "<p><strong>Omit Thisparameter</strong></p>",
   962|        "defaultCode": "// Write TypeScript here\nconst msg: string = \"Hello, TypeScript!\";\nconsole.log(msg);",
   963|        "expectedOutput": "Hello, TypeScript!",
   964|        "hint": "Pelajari materi.",
   965|        "quiz": {
   966|            "question": "Apa yang dipelajari di Omit Thisparameter?",
   967|            "options": [
   968|                "A",
   969|                "B",
   970|                "C",
   971|                "D"
   972|            ],
   973|            "answer": 0
   974|        }
   975|    },
   976|    {
   977|        "id": 46,
   978|        "title": "46. Optional Default Params",
   979|        "module": "OOP",
   980|        "moduleId": 3,
   981|        "mdFile": "https://raw.githubusercontent.com/personalbotai/typescript-learning-path/gh-pages/lessons/optional-default-params.md",
   982|        "description": "<p><strong>Optional Default Params</strong></p>",
   983|        "defaultCode": "// Write TypeScript here\nconst msg: string = \"Hello, TypeScript!\";\nconsole.log(msg);",
   984|        "expectedOutput": "Hello, TypeScript!",
   985|        "hint": "Pelajari materi.",
   986|        "quiz": {
   987|            "question": "Apa yang dipelajari di Optional Default Params?",
   988|            "options": [
   989|                "A",
   990|                "B",
   991|                "C",
   992|                "D"
   993|            ],
   994|            "answer": 0
   995|        }
   996|    },
   997|    {
   998|        "id": 47,
   999|        "title": "47. Optional Readonly Properties",
  1000|        "module": "OOP",
  1001|        "moduleId": 3,
  1002|        "mdFile": "https://raw.githubusercontent.com/personalbotai/typescript-learning-path/gh-pages/lessons/optional-readonly-properties.md",
  1003|        "description": "<p><strong>Optional Readonly Properties</strong></p>",
  1004|        "defaultCode": "// Write TypeScript here\nconst msg: string = \"Hello, TypeScript!\";\nconsole.log(msg);",
  1005|        "expectedOutput": "Hello, TypeScript!",
  1006|        "hint": "Pelajari materi.",
  1007|        "quiz": {
  1008|            "question": "Apa yang dipelajari di Optional Readonly Properties?",
  1009|            "options": [
  1010|                "A",
  1011|                "B",
  1012|                "C",
  1013|                "D"
  1014|            ],
  1015|            "answer": 0
  1016|        }
  1017|    },
  1018|    {
  1019|        "id": 48,
  1020|        "title": "48. Parameter Utilities",
  1021|        "module": "OOP",
  1022|        "moduleId": 3,
  1023|        "mdFile": "https://raw.githubusercontent.com/personalbotai/typescript-learning-path/gh-pages/lessons/parameter-utilities.md",
  1024|        "description": "<p><strong>Parameter Utilities</strong></p>",
  1025|        "defaultCode": "// Write TypeScript here\nconst msg: string = \"Hello, TypeScript!\";\nconsole.log(msg);",
  1026|        "expectedOutput": "Hello, TypeScript!",
  1027|        "hint": "Pelajari materi.",
  1028|        "quiz": {
  1029|            "question": "Apa yang dipelajari di Parameter Utilities?",
  1030|            "options": [
  1031|                "A",
  1032|                "B",
  1033|                "C",
  1034|                "D"
  1035|            ],
  1036|            "answer": 0
  1037|        }
  1038|    },
  1039|    {
  1040|        "id": 49,
  1041|        "title": "49. Parameters Constructorparameters",
  1042|        "module": "Advanced Types",
  1043|        "moduleId": 4,
  1044|        "mdFile": "https://raw.githubusercontent.com/personalbotai/typescript-learning-path/gh-pages/lessons/parameters-constructorparameters.md",
  1045|        "description": "<p><strong>Parameters Constructorparameters</strong></p>",
  1046|        "defaultCode": "// Write TypeScript here\nconst msg: string = \"Hello, TypeScript!\";\nconsole.log(msg);",
  1047|        "expectedOutput": "Hello, TypeScript!",
  1048|        "hint": "Pelajari materi.",
  1049|        "quiz": {
  1050|            "question": "Apa yang dipelajari di Parameters Constructorparameters?",
  1051|            "options": [
  1052|                "A",
  1053|                "B",
  1054|                "C",
  1055|                "D"
  1056|            ],
  1057|            "answer": 0
  1058|        }
  1059|    },
  1060|    {
  1061|        "id": 50,
  1062|        "title": "50. Partial Required",
  1063|        "module": "Advanced Types",
  1064|        "moduleId": 4,
  1065|        "mdFile": "https://raw.githubusercontent.com/personalbotai/typescript-learning-path/gh-pages/lessons/partial-required.md",
  1066|        "description": "<p><strong>Partial Required</strong></p>",
  1067|        "defaultCode": "// Write TypeScript here\nconst msg: string = \"Hello, TypeScript!\";\nconsole.log(msg);",
  1068|        "expectedOutput": "Hello, TypeScript!",
  1069|        "hint": "Pelajari materi.",
  1070|        "quiz": {
  1071|            "question": "Apa yang dipelajari di Partial Required?",
  1072|            "options": [
  1073|                "A",
  1074|                "B",
  1075|                "C",
  1076|                "D"
  1077|            ],
  1078|            "answer": 0
  1079|        }
  1080|    },
  1081|    {
  1082|        "id": 51,
  1083|        "title": "51. Path Mapping Module Resolution",
  1084|        "module": "Advanced Types",
  1085|        "moduleId": 4,
  1086|        "mdFile": "https://raw.githubusercontent.com/personalbotai/typescript-learning-path/gh-pages/lessons/path-mapping-module-resolution.md",
  1087|        "description": "<p><strong>Path Mapping Module Resolution</strong></p>",
  1088|        "defaultCode": "// Write TypeScript here\nconst msg: string = \"Hello, TypeScript!\";\nconsole.log(msg);",
  1089|        "expectedOutput": "Hello, TypeScript!",
  1090|        "hint": "Pelajari materi.",
  1091|        "quiz": {
  1092|            "question": "Apa yang dipelajari di Path Mapping Module Resolution?",
  1093|            "options": [
  1094|                "A",
  1095|                "B",
  1096|                "C",
  1097|                "D"
  1098|            ],
  1099|            "answer": 0
  1100|        }
  1101|    },
  1102|    {
  1103|        "id": 52,
  1104|        "title": "52. Pick Omit",
  1105|        "module": "Advanced Types",
  1106|        "moduleId": 4,
  1107|        "mdFile": "https://raw.githubusercontent.com/personalbotai/typescript-learning-path/gh-pages/lessons/pick-omit.md",
  1108|        "description": "<p><strong>Pick Omit</strong></p>",
  1109|        "defaultCode": "// Write TypeScript here\nconst msg: string = \"Hello, TypeScript!\";\nconsole.log(msg);",
  1110|        "expectedOutput": "Hello, TypeScript!",
  1111|        "hint": "Pelajari materi.",
  1112|        "quiz": {
  1113|            "question": "Apa yang dipelajari di Pick Omit?",
  1114|            "options": [
  1115|                "A",
  1116|                "B",
  1117|                "C",
  1118|                "D"
  1119|            ],
  1120|            "answer": 0
  1121|        }
  1122|    },
  1123|    {
  1124|        "id": 53,
  1125|        "title": "53. Prettier Integration",
  1126|        "module": "Advanced Types",
  1127|        "moduleId": 4,
  1128|        "mdFile": "https://raw.githubusercontent.com/personalbotai/typescript-learning-path/gh-pages/lessons/prettier-integration.md",
  1129|        "description": "<p><strong>Prettier Integration</strong></p>",
  1130|        "defaultCode": "// Write TypeScript here\nconst msg: string = \"Hello, TypeScript!\";\nconsole.log(msg);",
  1131|        "expectedOutput": "Hello, TypeScript!",
  1132|        "hint": "Pelajari materi.",
  1133|        "quiz": {
  1134|            "question": "Apa yang dipelajari di Prettier Integration?",
  1135|            "options": [
  1136|                "A",
  1137|                "B",
  1138|                "C",
  1139|                "D"
  1140|            ],
  1141|            "answer": 0
  1142|        }
  1143|    },
  1144|    {
  1145|        "id": 54,
  1146|        "title": "54. Project Cli Tool",
  1147|        "module": "Advanced Types",
  1148|        "moduleId": 4,
  1149|        "mdFile": "https://raw.githubusercontent.com/personalbotai/typescript-learning-path/gh-pages/lessons/project-cli-tool.md",
  1150|        "description": "<p><strong>Project Cli Tool</strong></p>",
  1151|        "defaultCode": "// Write TypeScript here\nconst msg: string = \"Hello, TypeScript!\";\nconsole.log(msg);",
  1152|        "expectedOutput": "Hello, TypeScript!",
  1153|        "hint": "Pelajari materi.",
  1154|        "quiz": {
  1155|            "question": "Apa yang dipelajari di Project Cli Tool?",
  1156|            "options": [
  1157|                "A",
  1158|                "B",
  1159|                "C",
  1160|                "D"
  1161|            ],
  1162|            "answer": 0
  1163|        }
  1164|    },
  1165|    {
  1166|        "id": 55,
  1167|        "title": "55. Project React Ts",
  1168|        "module": "Advanced Types",
  1169|        "moduleId": 4,
  1170|        "mdFile": "https://raw.githubusercontent.com/personalbotai/typescript-learning-path/gh-pages/lessons/project-react-ts.md",
  1171|        "description": "<p><strong>Project React Ts</strong></p>",
  1172|        "defaultCode": "// Write TypeScript here\nconst msg: string = \"Hello, TypeScript!\";\nconsole.log(msg);",
  1173|        "expectedOutput": "Hello, TypeScript!",
  1174|        "hint": "Pelajari materi.",
  1175|        "quiz": {
  1176|            "question": "Apa yang dipelajari di Project React Ts?",
  1177|            "options": [
  1178|                "A",
  1179|                "B",
  1180|                "C",
  1181|                "D"
  1182|            ],
  1183|            "answer": 0
  1184|        }
  1185|    },
  1186|    {
  1187|        "id": 56,
  1188|        "title": "56. Project Rest Api",
  1189|        "module": "Advanced Types",
  1190|        "moduleId": 4,
  1191|        "mdFile": "https://raw.githubusercontent.com/personalbotai/typescript-learning-path/gh-pages/lessons/project-rest-api.md",
  1192|        "description": "<p><strong>Project Rest Api</strong></p>",
  1193|        "defaultCode": "// Write TypeScript here\nconst msg: string = \"Hello, TypeScript!\";\nconsole.log(msg);",
  1194|        "expectedOutput": "Hello, TypeScript!",
  1195|        "hint": "Pelajari materi.",
  1196|        "quiz": {
  1197|            "question": "Apa yang dipelajari di Project Rest Api?",
  1198|            "options": [
  1199|                "A",
  1200|                "B",
  1201|                "C",
  1202|                "D"
  1203|            ],
  1204|            "answer": 0
  1205|        }
  1206|    },
  1207|    {
  1208|        "id": 57,
  1209|        "title": "57. Project Setup Typescript",
  1210|        "module": "Advanced Types",
  1211|        "moduleId": 4,
  1212|        "mdFile": "https://raw.githubusercontent.com/personalbotai/typescript-learning-path/gh-pages/lessons/project-setup-typescript.md",
  1213|        "description": "<p><strong>Project Setup Typescript</strong></p>",
  1214|        "defaultCode": "// Write TypeScript here\nconst msg: string = \"Hello, TypeScript!\";\nconsole.log(msg);",
  1215|        "expectedOutput": "Hello, TypeScript!",
  1216|        "hint": "Pelajari materi.",
  1217|        "quiz": {
  1218|            "question": "Apa yang dipelajari di Project Setup Typescript?",
  1219|            "options": [
  1220|                "A",
  1221|                "B",
  1222|                "C",
  1223|                "D"
  1224|            ],
  1225|            "answer": 0
  1226|        }
  1227|    },
  1228|    {
  1229|        "id": 58,
  1230|        "title": "58. Project Type Definitions",
  1231|        "module": "Advanced Types",
  1232|        "moduleId": 4,
  1233|        "mdFile": "https://raw.githubusercontent.com/personalbotai/typescript-learning-path/gh-pages/lessons/project-type-definitions.md",
  1234|        "description": "<p><strong>Project Type Definitions</strong></p>",
  1235|        "defaultCode": "// Write TypeScript here\nconst msg: string = \"Hello, TypeScript!\";\nconsole.log(msg);",
  1236|        "expectedOutput": "Hello, TypeScript!",
  1237|        "hint": "Pelajari materi.",
  1238|        "quiz": {
  1239|            "question": "Apa yang dipelajari di Project Type Definitions?",
  1240|            "options": [
  1241|                "A",
  1242|                "B",
  1243|                "C",
  1244|                "D"
  1245|            ],
  1246|            "answer": 0
  1247|        }
  1248|    },
  1249|    {
  1250|        "id": 59,
  1251|        "title": "59. Readonly Params",
  1252|        "module": "Advanced Types",
  1253|        "moduleId": 4,
  1254|        "mdFile": "https://raw.githubusercontent.com/personalbotai/typescript-learning-path/gh-pages/lessons/readonly-params.md",
  1255|        "description": "<p><strong>Readonly Params</strong></p>",
  1256|        "defaultCode": "// Write TypeScript here\nconst msg: string = \"Hello, TypeScript!\";\nconsole.log(msg);",
  1257|        "expectedOutput": "Hello, TypeScript!",
  1258|        "hint": "Pelajari materi.",
  1259|        "quiz": {
  1260|            "question": "Apa yang dipelajari di Readonly Params?",
  1261|            "options": [
  1262|                "A",
  1263|                "B",
  1264|                "C",
  1265|                "D"
  1266|            ],
  1267|            "answer": 0
  1268|        }
  1269|    },
  1270|    {
  1271|        "id": 60,
  1272|        "title": "60. Readonly Record",
  1273|        "module": "Advanced Types",
  1274|        "moduleId": 4,
  1275|        "mdFile": "https://raw.githubusercontent.com/personalbotai/typescript-learning-path/gh-pages/lessons/readonly-record.md",
  1276|        "description": "<p><strong>Readonly Record</strong></p>",
  1277|        "defaultCode": "// Write TypeScript here\nconst msg: string = \"Hello, TypeScript!\";\nconsole.log(msg);",
  1278|        "expectedOutput": "Hello, TypeScript!",
  1279|        "hint": "Pelajari materi.",
  1280|        "quiz": {
  1281|            "question": "Apa yang dipelajari di Readonly Record?",
  1282|            "options": [
  1283|                "A",
  1284|                "B",
  1285|                "C",
  1286|                "D"
  1287|            ],
  1288|            "answer": 0
  1289|        }
  1290|    },
  1291|    {
  1292|        "id": 61,
  1293|        "title": "61. Record Tuple",
  1294|        "module": "Advanced Types",
  1295|        "moduleId": 4,
  1296|        "mdFile": "https://raw.githubusercontent.com/personalbotai/typescript-learning-path/gh-pages/lessons/record-tuple.md",
  1297|        "description": "<p><strong>Record Tuple</strong></p>",
  1298|        "defaultCode": "// Write TypeScript here\nconst msg: string = \"Hello, TypeScript!\";\nconsole.log(msg);",
  1299|        "expectedOutput": "Hello, TypeScript!",
  1300|        "hint": "Pelajari materi.",
  1301|        "quiz": {
  1302|            "question": "Apa yang dipelajari di Record Tuple?",
  1303|            "options": [
  1304|                "A",
  1305|                "B",
  1306|                "C",
  1307|                "D"
  1308|            ],
  1309|            "answer": 0
  1310|        }
  1311|    },
  1312|    {
  1313|        "id": 62,
  1314|        "title": "62. Rest Spread",
  1315|        "module": "Advanced Types",
  1316|        "moduleId": 4,
  1317|        "mdFile": "https://raw.githubusercontent.com/personalbotai/typescript-learning-path/gh-pages/lessons/rest-spread.md",
  1318|        "description": "<p><strong>Rest Spread</strong></p>",
  1319|        "defaultCode": "// Write TypeScript here\nconst msg: string = \"Hello, TypeScript!\";\nconsole.log(msg);",
  1320|        "expectedOutput": "Hello, TypeScript!",
  1321|        "hint": "Pelajari materi.",
  1322|        "quiz": {
  1323|            "question": "Apa yang dipelajari di Rest Spread?",
  1324|            "options": [
  1325|                "A",
  1326|                "B",
  1327|                "C",
  1328|                "D"
  1329|            ],
  1330|            "answer": 0
  1331|        }
  1332|    },
  1333|    {
  1334|        "id": 63,
  1335|        "title": "63. Returntype Parameters Thistype",
  1336|        "module": "Advanced Types",
  1337|        "moduleId": 4,
  1338|        "mdFile": "https://raw.githubusercontent.com/personalbotai/typescript-learning-path/gh-pages/lessons/returntype-parameters-thistype.md",
  1339|        "description": "<p><strong>Returntype Parameters Thistype</strong></p>",
  1340|        "defaultCode": "// Write TypeScript here\nconst msg: string = \"Hello, TypeScript!\";\nconsole.log(msg);",
  1341|        "expectedOutput": "Hello, TypeScript!",
  1342|        "hint": "Pelajari materi.",
  1343|        "quiz": {
  1344|            "question": "Apa yang dipelajari di Returntype Parameters Thistype?",
  1345|            "options": [
  1346|                "A",
  1347|                "B",
  1348|                "C",
  1349|                "D"
  1350|            ],
  1351|            "answer": 0
  1352|        }
  1353|    },
  1354|    {
  1355|        "id": 64,
  1356|        "title": "64. Strict Mode Options",
  1357|        "module": "Advanced Types",
  1358|        "moduleId": 4,
  1359|        "mdFile": "https://raw.githubusercontent.com/personalbotai/typescript-learning-path/gh-pages/lessons/strict-mode-options.md",
  1360|        "description": "<p><strong>Strict Mode Options</strong></p>",
  1361|        "defaultCode": "// Write TypeScript here\nconst msg: string = \"Hello, TypeScript!\";\nconsole.log(msg);",
  1362|        "expectedOutput": "Hello, TypeScript!",
  1363|        "hint": "Pelajari materi.",
  1364|        "quiz": {
  1365|            "question": "Apa yang dipelajari di Strict Mode Options?",
  1366|            "options": [
  1367|                "A",
  1368|                "B",
  1369|                "C",
  1370|                "D"
  1371|            ],
  1372|            "answer": 0
  1373|        }
  1374|    },
  1375|    {
  1376|        "id": 65,
  1377|        "title": "65. Template Literal Types",
  1378|        "module": "Modules & Tooling",
  1379|        "moduleId": 5,
  1380|        "mdFile": "https://raw.githubusercontent.com/personalbotai/typescript-learning-path/gh-pages/lessons/template-literal-types.md",
  1381|        "description": "<p><strong>Template Literal Types</strong></p>",
  1382|        "defaultCode": "// Write TypeScript here\nconst msg: string = \"Hello, TypeScript!\";\nconsole.log(msg);",
  1383|        "expectedOutput": "Hello, TypeScript!",
  1384|        "hint": "Pelajari materi.",
  1385|        "quiz": {
  1386|            "question": "Apa yang dipelajari di Template Literal Types?",
  1387|            "options": [
  1388|                "A",
  1389|                "B",
  1390|                "C",
  1391|                "D"
  1392|            ],
  1393|            "answer": 0
  1394|        }
  1395|    },
  1396|    {
  1397|        "id": 66,
  1398|        "title": "66. Tipe Primitif",
  1399|        "module": "Modules & Tooling",
  1400|        "moduleId": 5,
  1401|        "mdFile": "https://raw.githubusercontent.com/personalbotai/typescript-learning-path/gh-pages/lessons/tipe-primitif.md",
  1402|        "description": "<p><strong>Tipe Primitif</strong></p>",
  1403|        "defaultCode": "// Write TypeScript here\nconst msg: string = \"Hello, TypeScript!\";\nconsole.log(msg);",
  1404|        "expectedOutput": "Hello, TypeScript!",
  1405|        "hint": "Pelajari materi.",
  1406|        "quiz": {
  1407|            "question": "Apa yang dipelajari di Tipe Primitif?",
  1408|            "options": [
  1409|                "A",
  1410|                "B",
  1411|                "C",
  1412|                "D"
  1413|            ],
  1414|            "answer": 0
  1415|        }
  1416|    },
  1417|    {
  1418|        "id": 67,
  1419|        "title": "67. Tsconfig Json Struktur",
  1420|        "module": "Modules & Tooling",
  1421|        "moduleId": 5,
  1422|        "mdFile": "https://raw.githubusercontent.com/personalbotai/typescript-learning-path/gh-pages/lessons/tsconfig-json-struktur.md",
  1423|        "description": "<p><strong>Tsconfig Json Struktur</strong></p>",
  1424|        "defaultCode": "// Write TypeScript here\nconst msg: string = \"Hello, TypeScript!\";\nconsole.log(msg);",
  1425|        "expectedOutput": "Hello, TypeScript!",
  1426|        "hint": "Pelajari materi.",
  1427|        "quiz": {
  1428|            "question": "Apa yang dipelajari di Tsconfig Json Struktur?",
  1429|            "options": [
  1430|                "A",
  1431|                "B",
  1432|                "C",
  1433|                "D"
  1434|            ],
  1435|            "answer": 0
  1436|        }
  1437|    },
  1438|    {
  1439|        "id": 68,
  1440|        "title": "68. Type Aliases",
  1441|        "module": "Modules & Tooling",
  1442|        "moduleId": 5,
  1443|        "mdFile": "https://raw.githubusercontent.com/personalbotai/typescript-learning-path/gh-pages/lessons/type-aliases.md",
  1444|        "description": "<p><strong>Type Aliases</strong></p>",
  1445|        "defaultCode": "// Write TypeScript here\nconst msg: string = \"Hello, TypeScript!\";\nconsole.log(msg);",
  1446|        "expectedOutput": "Hello, TypeScript!",
  1447|        "hint": "Pelajari materi.",
  1448|        "quiz": {
  1449|            "question": "Apa yang dipelajari di Type Aliases?",
  1450|            "options": [
  1451|                "A",
  1452|                "B",
  1453|                "C",
  1454|                "D"
  1455|            ],
  1456|            "answer": 0
  1457|        }
  1458|    },
  1459|    {
  1460|        "id": 69,
  1461|        "title": "69. Type Assertions",
  1462|        "module": "Modules & Tooling",
  1463|        "moduleId": 5,
  1464|        "mdFile": "https://raw.githubusercontent.com/personalbotai/typescript-learning-path/gh-pages/lessons/type-assertions.md",
  1465|        "description": "<p><strong>Type Assertions</strong></p>",
  1466|        "defaultCode": "// Write TypeScript here\nconst msg: string = \"Hello, TypeScript!\";\nconsole.log(msg);",
  1467|        "expectedOutput": "Hello, TypeScript!",
  1468|        "hint": "Pelajari materi.",
  1469|        "quiz": {
  1470|            "question": "Apa yang dipelajari di Type Assertions?",
  1471|            "options": [
  1472|                "A",
  1473|                "B",
  1474|                "C",
  1475|                "D"
  1476|            ],
  1477|            "answer": 0
  1478|        }
  1479|    },
  1480|    {
  1481|        "id": 70,
  1482|        "title": "70. Type Guards",
  1483|        "module": "Modules & Tooling",
  1484|        "moduleId": 5,
  1485|        "mdFile": "https://raw.githubusercontent.com/personalbotai/typescript-learning-path/gh-pages/lessons/type-guards.md",
  1486|        "description": "<p><strong>Type Guards</strong></p>",
  1487|        "defaultCode": "// Write TypeScript here\nconst msg: string = \"Hello, TypeScript!\";\nconsole.log(msg);",
  1488|        "expectedOutput": "Hello, TypeScript!",
  1489|        "hint": "Pelajari materi.",
  1490|        "quiz": {
  1491|            "question": "Apa yang dipelajari di Type Guards?",
  1492|            "options": [
  1493|                "A",
  1494|                "B",
  1495|                "C",
  1496|                "D"
  1497|            ],
  1498|            "answer": 0
  1499|        }
  1500|    },
  1501|    {
  1502|        "id": 71,
  1503|        "title": "71. Type Inference",
  1504|        "module": "Modules & Tooling",
  1505|        "moduleId": 5,
  1506|        "mdFile": "https://raw.githubusercontent.com/personalbotai/typescript-learning-path/gh-pages/lessons/type-inference.md",
  1507|        "description": "<p><strong>Type Inference</strong></p>",
  1508|        "defaultCode": "// Write TypeScript here\nconst msg: string = \"Hello, TypeScript!\";\nconsole.log(msg);",
  1509|        "expectedOutput": "Hello, TypeScript!",
  1510|        "hint": "Pelajari materi.",
  1511|        "quiz": {
  1512|            "question": "Apa yang dipelajari di Type Inference?",
  1513|            "options": [
  1514|                "A",
  1515|                "B",
  1516|                "C",
  1517|                "D"
  1518|            ],
  1519|            "answer": 0
  1520|        }
  1521|    },
  1522|    {
  1523|        "id": 72,
  1524|        "title": "72. Type Narrowing",
  1525|        "module": "Modules & Tooling",
  1526|        "moduleId": 5,
  1527|        "mdFile": "https://raw.githubusercontent.com/personalbotai/typescript-learning-path/gh-pages/lessons/type-narrowing.md",
  1528|        "description": "<p><strong>Type Narrowing</strong></p>",
  1529|        "defaultCode": "// Write TypeScript here\nconst msg: string = \"Hello, TypeScript!\";\nconsole.log(msg);",
  1530|        "expectedOutput": "Hello, TypeScript!",
  1531|        "hint": "Pelajari materi.",
  1532|        "quiz": {
  1533|            "question": "Apa yang dipelajari di Type Narrowing?",
  1534|            "options": [
  1535|                "A",
  1536|                "B",
  1537|                "C",
  1538|                "D"
  1539|            ],
  1540|            "answer": 0
  1541|        }
  1542|    },
  1543|    {
  1544|        "id": 73,
  1545|        "title": "73. Typescript Compiler Tsc",
  1546|        "module": "Modules & Tooling",
  1547|        "moduleId": 5,
  1548|        "mdFile": "https://raw.githubusercontent.com/personalbotai/typescript-learning-path/gh-pages/lessons/typescript-compiler-tsc.md",
  1549|        "description": "<p><strong>Typescript Compiler Tsc</strong></p>",
  1550|        "defaultCode": "// Write TypeScript here\nconst msg: string = \"Hello, TypeScript!\";\nconsole.log(msg);",
  1551|        "expectedOutput": "Hello, TypeScript!",
  1552|        "hint": "Pelajari materi.",
  1553|        "quiz": {
  1554|            "question": "Apa yang dipelajari di Typescript Compiler Tsc?",
  1555|            "options": [
  1556|                "A",
  1557|                "B",
  1558|                "C",
  1559|                "D"
  1560|            ],
  1561|            "answer": 0
  1562|        }
  1563|    },
  1564|    {
  1565|        "id": 74,
  1566|        "title": "74. Typescript Vs Javascript",
  1567|        "module": "Modules & Tooling",
  1568|        "moduleId": 5,
  1569|        "mdFile": "https://raw.githubusercontent.com/personalbotai/typescript-learning-path/gh-pages/lessons/typescript-vs-javascript.md",
  1570|        "description": "<p><strong>Typescript Vs Javascript</strong></p>",
  1571|        "defaultCode": "// Write TypeScript here\nconst msg: string = \"Hello, TypeScript!\";\nconsole.log(msg);",
  1572|        "expectedOutput": "Hello, TypeScript!",
  1573|        "hint": "Pelajari materi.",
  1574|        "quiz": {
  1575|            "question": "Apa yang dipelajari di Typescript Vs Javascript?",
  1576|            "options": [
  1577|                "A",
  1578|                "B",
  1579|                "C",
  1580|                "D"
  1581|            ],
  1582|            "answer": 0
  1583|        }
  1584|    },
  1585|    {
  1586|        "id": 75,
  1587|        "title": "75. Union Types",
  1588|        "module": "Modules & Tooling",
  1589|        "moduleId": 5,
  1590|        "mdFile": "https://raw.githubusercontent.com/personalbotai/typescript-learning-path/gh-pages/lessons/union-types.md",
  1591|        "description": "<p><strong>Union Types</strong></p>",
  1592|        "defaultCode": "// Write TypeScript here\nconst msg: string = \"Hello, TypeScript!\";\nconsole.log(msg);",
  1593|        "expectedOutput": "Hello, TypeScript!",
  1594|        "hint": "Pelajari materi.",
  1595|        "quiz": {
  1596|            "question": "Apa yang dipelajari di Union Types?",
  1597|            "options": [
  1598|                "A",
  1599|                "B",
  1600|                "C",
  1601|                "D"
  1602|            ],
  1603|            "answer": 0
  1604|        }
  1605|    },
  1606|    {
  1607|        "id": 76,
  1608|        "title": "76. Using Js Libraries",
  1609|        "module": "Modules & Tooling",
  1610|        "moduleId": 5,
  1611|        "mdFile": "https://raw.githubusercontent.com/personalbotai/typescript-learning-path/gh-pages/lessons/using-js-libraries.md",
  1612|        "description": "<p><strong>Using Js Libraries</strong></p>",
  1613|        "defaultCode": "// Write TypeScript here\nconst msg: string = \"Hello, TypeScript!\";\nconsole.log(msg);",
  1614|        "expectedOutput": "Hello, TypeScript!",
  1615|        "hint": "Pelajari materi.",
  1616|        "quiz": {
  1617|            "question": "Apa yang dipelajari di Using Js Libraries?",
  1618|            "options": [
  1619|                "A",
  1620|                "B",
  1621|                "C",
  1622|                "D"
  1623|            ],
  1624|            "answer": 0
  1625|        }
  1626|    },
  1627|    {
  1628|        "id": 77,
  1629|        "title": "77. Void Never Dan Tipe Khusus",
  1630|        "module": "Modules & Tooling",
  1631|        "moduleId": 5,
  1632|        "mdFile": "https://raw.githubusercontent.com/personalbotai/typescript-learning-path/gh-pages/lessons/void-never-dan-tipe-khusus.md",
  1633|        "description": "<p><strong>Void Never Dan Tipe Khusus</strong></p>",
  1634|        "defaultCode": "// Write TypeScript here\nconst msg: string = \"Hello, TypeScript!\";\nconsole.log(msg);",
  1635|        "expectedOutput": "Hello, TypeScript!",
  1636|        "hint": "Pelajari materi.",
  1637|        "quiz": {
  1638|            "question": "Apa yang dipelajari di Void Never Dan Tipe Khusus?",
  1639|            "options": [
  1640|                "A",
  1641|                "B",
  1642|                "C",
  1643|                "D"
  1644|            ],
  1645|            "answer": 0
  1646|        }
  1647|    }
  1648|];
  1649|
  1650|let currentLesson=0;
  1651|let progress=JSON.parse(localStorage.getItem('typescript_progress')||'{}');
  1652|
  1653|function renderNav() {
  1654|    const nav = document.getElementById('lessons-nav');
  1655|    nav.innerHTML = MODULES.map(mod => {
  1656|        const modLessons = lessons.filter(l => l.moduleId === mod.id);
  1657|        const completed = modLessons.filter(l => progress[l.id]).length;
  1658|        const isExpanded = mod.id === (Math.floor(currentLesson / 10) + 1);
  1659|        return `
  1660|            <div class="mb-3">
  1661|                <div class="flex items-center justify-between px-2 py-1.5 text-sm font-semibold text-gray-300 cursor-pointer hover:text-white rounded hover:bg-gray-700/50" onclick="toggleModule(${mod.id})">
  1662|                    <span><i class="${mod.icon} mr-2 text-blue-400"></i>${mod.title}</span>
  1663|                    <span class="text-xs text-gray-500">${completed}/${modLessons.length}</span>
  1664|                </div>
  1665|                <div id="module-${mod.id}" class="space-y-0.5 mt-1 ${isExpanded ? '' : 'hidden'}">
  1666|                    ${modLessons.map(l => {
  1667|                        const idx = lessons.indexOf(l);
  1668|                        return `<button onclick="loadLesson(${idx})" 
  1669|                            class="w-full text-left px-3 py-1.5 rounded text-xs hover:bg-gray-700 transition 
  1670|                            ${idx === currentLesson ? 'lesson-active' : ''} 
  1671|                            ${progress[l.id] ? 'text-green-400' : 'text-gray-400'}">
  1672|                            <span class="mr-1">${progress[l.id] ? '✅' : '○'}</span>${l.title}
  1673|                        </button>`;
  1674|                    }).join('')}
  1675|                </div>
  1676|            </div>
  1677|        `;
  1678|    }).join('');
  1679|}
  1680|
  1681|function toggleModule(modId) {
  1682|    const el = document.getElementById('module-' + modId);
  1683|    if (el) el.classList.toggle('hidden');
  1684|}
  1685|
  1686|async function loadLesson(index) {
  1687|    currentLesson = index;
  1688|    const lesson = lessons[index];
  1689|    
  1690|    // Show loading
  1691|    document.getElementById('lesson-content').innerHTML = `<h2 class="text-xl font-bold mb-4">${lesson.title}</h2><div class="text-gray-400"><i class="fas fa-spinner fa-spin mr-2"></i>Loading...</div>`;
  1692|    
  1693|    // Fetch and render markdown from lessons folder
  1694|    let contentHtml = lesson.description || '';
  1695|    if (lesson.mdFile && typeof marked !== 'undefined') {
  1696|        try {
  1697|            const response = await fetch(lesson.mdFile);
  1698|            if (response.ok) {
  1699|                const mdText = await response.text();
  1700|                contentHtml = marked.parse(mdText);
  1701|            }
  1702|        } catch (e) {
  1703|            console.error('Error loading:', lesson.mdFile, e);
  1704|        }
  1705|    }
  1706|    
  1707|    document.getElementById('lesson-content').innerHTML = `
  1708|        <div class="text-xs text-gray-500 mb-2">${lesson.module || ''}</div>
  1709|        <h2 class="text-xl font-bold mb-4 text-white">${lesson.title}</h2>
  1710|        <div class="prose prose-invert prose-sm max-w-none leading-relaxed
  1711|            prose-headings:text-blue-300 prose-h2:text-lg prose-h2:mt-6 prose-h2:mb-3
  1712|            prose-h3:text-base prose-h3:mt-4 prose-h3:mb-2
  1713|            prose-p:text-gray-300 prose-p:mb-3
  1714|            prose-code:text-green-400 prose-code:bg-gray-800 prose-code:px-1 prose-code:rounded
  1715|            prose-pre:bg-gray-900 prose-pre:border prose-pre:border-gray-700
  1716|            prose-ul:text-gray-300 prose-li:mb-1
  1717|            prose-strong:text-white prose-a:text-blue-400">
  1718|            ${contentHtml}
  1719|        </div>`;
  1720|    document.getElementById('code-editor').value = (lesson.defaultCode || '').replace(/\\n/g, '\n');
  1721|    document.getElementById('output').innerHTML = '<span class="text-gray-500">// Output akan muncul di sini</span>';
  1722|    document.getElementById('validation-msg').className = 'mt-4 p-3 rounded hidden';
  1723|    if (lesson.quiz) {
  1724|        document.getElementById('quiz-section').classList.remove('hidden');
  1725|        document.getElementById('quiz-content').innerHTML = `<p class="font-medium">${lesson.quiz.question}</p><div class="space-y-2">${lesson.quiz.options.map((opt, i) => `<label class="flex items-center space-x-2 cursor-pointer"><input type="radio" name="quiz" value="${i}" class="text-blue-500"><span>${opt}</span></label>`).join('')}</div>`;
  1726|    } else { document.getElementById('quiz-section').classList.add('hidden'); }
  1727|    document.getElementById('prev-btn').disabled = index === 0;
  1728|    document.getElementById('next-btn').disabled = index === lessons.length - 1;
  1729|    // Update complete button
  1730|    const completeBtn = document.getElementById('complete-btn');
  1731|    const completedBtn = document.getElementById('completed-btn');
  1732|    if (progress[lesson.id]) {
  1733|        completeBtn.style.display = 'none';
  1734|        completedBtn.style.display = 'block';
  1735|    } else {
  1736|        completeBtn.style.display = 'block';
  1737|        completedBtn.style.display = 'none';
  1738|    }
  1739|    
  1740|    // Update breadcrumb
  1741|    const mod = MODULES.find(m => m.id === lesson.moduleId);
  1742|    document.getElementById('breadcrumb').textContent = mod ? mod.title : '';
  1743|    
  1744|    // Update nav buttons
  1745|    document.getElementById('prev-btn').disabled = index === 0;
  1746|    document.getElementById('next-btn').disabled = index === lessons.length - 1;
  1747|    
  1748|    renderNav();
  1749|    window.scrollTo(0, 0);
  1750|}
  1751|
  1752|// Overridden by Pyodide in index.html
  1753|// // runCode is overridden by Pyodide in index.html
  1754|async function runCode() {
  1755|    const code = document.getElementById('code-editor').value;
  1756|    const output = document.getElementById('output');
  1757|    const validation = document.getElementById('validation-msg');
  1758|    let logs = [];
  1759|    const orig = console.log;
  1760|    console.log = (...a) => logs.push(a.map(x => typeof x === 'object' ? JSON.stringify(x) : String(x)).join(' '));
  1761|    try {
        let js = ts.transpileModule(code, { compilerOptions: { module: ts.ModuleKind.None, target: ts.ScriptTarget.ESNext } }).outputText;
  1763|        eval(js);
  1764|        const result = logs.join('\n');
  1765|        output.innerHTML = '<span class="text-green-400">' + escapeHtml(result) + '</span>';
  1766|        const exp = lessons[currentLesson]?.expectedOutput;
  1767|        if (exp && result.trim() === exp.trim()) {
  1768|            validation.className = 'mt-4 p-3 rounded bg-green-900/50 border border-green-500 text-green-300';
  1769|            validation.innerHTML = '✅ Benar!';
  1770|            progress[lessons[currentLesson].id] = true;
  1771|            localStorage.setItem('typescript_progress', JSON.stringify(progress));
  1772|            updateProgress(); renderNav();
  1773|        } else if (exp) {
  1774|            validation.className = 'mt-4 p-3 rounded bg-yellow-900/50 border border-yellow-500 text-yellow-300';
  1775|            validation.innerHTML = '💡 ' + (lessons[currentLesson]?.hint || '');
  1776|        }
  1777|    } catch(e) {
  1778|        output.innerHTML = '<span class="text-red-400">❌ ' + escapeHtml(e.message) + '</span>';
  1779|    }
  1780|    console.log = orig;
  1781|}
  1782|
  1783|function resetCode() { document.getElementById('code-editor').value = lessons[currentLesson].defaultCode; }
  1784|function checkQuiz() {
  1785|    const selected = document.querySelector('input[name="quiz"]:checked');
  1786|    if (!selected) return alert('Pilih jawaban dulu!');
  1787|    const msg = document.createElement('div');
  1788|    msg.className = parseInt(selected.value) === lessons[currentLesson].quiz.answer ? 'mt-3 p-3 rounded bg-green-900/50 border border-green-500 text-green-300' : 'mt-3 p-3 rounded bg-red-900/50 border border-red-500 text-red-300';
  1789|    msg.innerHTML = parseInt(selected.value) === lessons[currentLesson].quiz.answer ? '<i class="fas fa-check-circle mr-2"></i>Benar!' : '<i class="fas fa-times-circle mr-2"></i>Salah!';
  1790|    document.getElementById('quiz-content').appendChild(msg);
  1791|    setTimeout(() => msg.remove(), 3000);
  1792|}
  1793|function nextLesson() { if (currentLesson < lessons.length - 1) loadLesson(currentLesson + 1); }
  1794|function prevLesson() { if (currentLesson > 0) loadLesson(currentLesson - 1); }
  1795|
  1796|function markComplete() {
  1797|    const lesson = lessons[currentLesson];
  1798|    progress[lesson.id] = true;
  1799|    localStorage.setItem('typescript_progress', JSON.stringify(progress));
  1800|    
  1801|    const completeBtn = document.getElementById('complete-btn');
  1802|    const completedBtn = document.getElementById('completed-btn');
  1803|    completeBtn.style.display = 'none';
  1804|    completedBtn.style.display = 'block';
  1805|    
  1806|    renderNav();
  1807|    
  1808|    // Auto-advance to next lesson
  1809|    if (currentLesson < lessons.length - 1) {
  1810|        setTimeout(() => loadLesson(currentLesson + 1), 500);
  1811|    }
  1812|}
  1813|
  1814|function updateProgress() { const done = Object.keys(progress).length; const pct = Math.round((done / lessons.length) * 100); document.getElementById('course-progress').textContent = pct + '%'; document.getElementById('progress-fill').style.width = pct + '%'; }
  1815|function resetProgress() { if (!confirm('Reset semua progress?')) return; progress = {}; localStorage.removeItem('typescript_progress'); renderNav(); updateProgress(); }
  1816|function escapeHtml(str) { return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
  1817|
  1818|// Initialize on page load
  1819|document.addEventListener('DOMContentLoaded', () => {
  1820|    // Load progress from localStorage
  1821|    progress = JSON.parse(localStorage.getItem('typescript_progress') || '{}');
  1822|    
  1823|    // Render sidebar
  1824|    renderNav();
  1825|    
  1826|    // Load first lesson
  1827|    if (lessons.length > 0) {
  1828|        loadLesson(0);
  1829|    }
  1830|});
  1831|