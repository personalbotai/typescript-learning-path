import json, subprocess

# Module structure for TypeScript
MODULES = [
    {"id": 1, "title": "Pengenalan TypeScript", "icon": "fas fa-play-circle", "lessons": ["apa-itu-typescript", "setup-environment", "tipe-data-dasar"]},
    {"id": 2, "title": "Type System", "icon": "fas fa-shield-alt", "lessons": ["interface-dasar", "type-aliases", "union-intersection", "generics", "enum", "utility-types"]},
    {"id": 3, "title": "OOP TypeScript", "icon": "fas fa-object-group", "lessons": ["class-dasar", "access-modifiers", "abstract-classes", "inheritance"]},
    {"id": 4, "title": "Advanced Types", "icon": "fas fa-cogs", "lessons": ["type-guards", "conditional-types", "mapped-types", "decorators"]},
    {"id": 5, "title": "Modules & Tooling", "icon": "fas fa-tools", "lessons": ["modules-import-export", "tsconfig", "declaration-files"]},
    {"id": 6, "title": "Async & Integration", "icon": "fas fa-sync-alt", "lessons": ["async-await", "type-assertions"]},
]

def h(title, desc, code, output, hint, quiz_q, quiz_opts, quiz_ans):
    return {"title": title, "description": desc, "defaultCode": code, "expectedOutput": output, "hint": hint, "quiz": {"question": quiz_q, "options": quiz_opts, "answer": quiz_ans}}

COMPREHENSIVE = {
"apa-itu-typescript": h("Apa itu TypeScript?",
    """<p><strong>TypeScript</strong> adalah superset JavaScript yang menambahkan <strong>static typing</strong>. Dikembangkan oleh Microsoft sejak 2012.</p>
<h4>🎯 Mengapa TypeScript?</h4>
<ul>
<li><strong>Type Safety</strong>: Error terdeteksi saat development, bukan runtime</li>
<li><strong>IntelliSense</strong>: Autocomplete lebih akurat di IDE</li>
<li><strong>Refactoring</strong>: Lebih aman karena tipe diketahui</li>
<li><strong>Self-Documenting</strong>: Tipe = dokumentasi hidup</li>
</ul>
<h4>⚙️ Cara Kerja</h4>
<pre><code>// TypeScript (.ts) → Compile → JavaScript (.js)
// tsc app.ts → app.js

// TypeScript: type annotation
let nama: string = "Archon";

// JavaScript output (type dihapus):
var nama = "Archon";</code></pre>
<h4>📊 Statistik</h4>
<ul>
<li>73% developer JS menggunakan TypeScript (State of JS 2023)</li>
<li>Digunakan oleh: Angular, Vue 3, Deno, Next.js</li>
</ul>""",
    'let pesan: string = "Hello, TypeScript!";\nconsole.log(pesan);\nlet umur: number = 25;\nconsole.log(`Umur: ${umur}`);',
    "Hello, TypeScript!\nUmur: 25",
    "TypeScript = JavaScript + type annotation. Compile ke JS sebelum dijalankan.",
    "Siapa yang mengembangkan TypeScript?",
    ["Google", "Facebook", "Microsoft", "Apple"],
    2
),

"interface-dasar": h("Interface Dasar",
    """<p><strong>Interface</strong> mendefinisikan bentuk (contract) object dalam TypeScript. Interface memastikan object memiliki property dan method yang diperlukan.</p>
<h4>📝 Sintaks Dasar</h4>
<pre><code>interface User {
    nama: string;
    umur: number;
    email?: string;      // Optional (?)
    readonly id: number; // Tidak bisa diubah
}

// Menggunakan interface
const user: User = {
    nama: "Archon",
    umur: 25,
    id: 1
};</code></pre>
<h4>🔄 Interface vs Type Alias</h4>
<table>
<tr><td><strong>Interface</strong></td><td><strong>Type Alias</strong></td></tr>
<tr><td>Bisa di-extends</td><td>Bisa union/intersection</td></tr>
<tr><td>Open (bisa ditambah)</td><td>Closed (immutable)</td></tr>
<tr><td>Untuk object saja</td><td>Untuk semua tipe</td></tr>
</table>
<h4>📐 Extending Interface</h4>
<pre><code>interface Employee extends User {
    jabatan: string;
    gaji: number;
}

// Multiple extends
interface Manager extends Employee, Leader {
    tim: User[];
}</code></pre>""",
    'interface User {\n    nama: string;\n    umur: number;\n    email?: string;\n}\n\nconst user: User = {\n    nama: "Archon",\n    umur: 25\n};\n\nconsole.log(user.nama);\nconsole.log(user.umur);',
    "Archon\n25",
    "Interface = contract untuk object. ? = optional. readonly = tidak bisa diubah.",
    "Keyword untuk membuat interface yang mewarisi interface lain?",
    ["implements", "extends", "inherits", "super"],
    1
),

"generics": h("Generics",
    """<p><strong>Generics</strong> membuat komponen yang bekerja dengan berbagai tipe tanpa kehilangan type safety. Generics = "tipe yang bisa dikonfigurasi".</p>
<h4>📝 Fungsi Generic</h4>
<pre><code>// Tanpa generic: any (hilang type info)
function identityAny(arg: any): any { return arg; }

// Dengan generic: type preserved!
function identity<T>(arg: T): T { return arg; }

// Penggunaan
identity<string>("Halo");  // T adalah string
identity<number>(42);      // T adalah number
// TypeScript bisa infer: identity("Halo") → T = string</code></pre>
<h4>📦 Interface Generic</h4>
<pre><code>interface Box<T> {
    value: T;
    getValue(): T;
}

const numBox: Box<number> = { value: 100, getValue() { return this.value; } };
const strBox: Box<string> = { value: "Hello", getValue() { return this.value; } };</code></pre>
<h4>🔒 Constraints</h4>
<pre><code>// T harus punya property 'length'
interface HasLength { length: number; }
function logLength<T extends HasLength>(arg: T): void {
    console.log(arg.length);
}

logLength("Hello");    // ✅ string punya length
logLength([1, 2, 3]);  // ✅ array punya length
logLength(42);         // ❌ number tidak punya length</code></pre>
<h4>🎯 Use Cases</h4>
<ul>
<li>Container types (Array, Promise, Map)</li>
<li>API response wrapper</li>
<li>Utility functions yang flexible</li>
</ul>""",
    'function identity<T>(arg: T): T {\n    return arg;\n}\n\nconsole.log(identity<string>("Halo"));\nconsole.log(identity<number>(42));\n\ninterface Box<T> {\n    value: T;\n}\nconst box: Box<number> = { value: 100 };\nconsole.log(box.value);',
    "Halo\n42\n100",
    "Generics = <T> placeholder type. extends = constraint. TypeScript infer otomatis.",
    "Untuk membatasi tipe generic, keyword yang digunakan?",
    ["implements", "extends", "restricts", "requires"],
    1
),
}

# Read existing app.js
with open('app.js', 'r') as f:
    content = f.read()

start_marker = 'const INTERACTIVE_LESSONS = '
start = content.index(start_marker) + len(start_marker)
bracket_count = 0
end = start
for j in range(start, len(content)):
    if content[j] == '[': bracket_count += 1
    elif content[j] == ']': bracket_count -= 1
    if bracket_count == 0:
        end = j + 1
        break

lessons = json.loads(content[start:end])
print(f"Found {len(lessons)} lessons")

# Merge comprehensive content
for l in lessons:
    title = l['title']
    if '. ' in title:
        title = title.split('. ', 1)[1]
    slug = title.lower().replace(' ', '-').replace(':', '').replace('(', '').replace(')', '')
    
    for key in COMPREHENSIVE:
        if key in slug or slug in key:
            comp = COMPREHENSIVE[key]
            l['description'] = comp['description']
            l['defaultCode'] = comp['defaultCode']
            l['expectedOutput'] = comp['expectedOutput']
            l['hint'] = comp['hint']
            if comp.get('quiz') and comp['quiz']['options'][0] not in ["Opsi A", "Opsi B"]:
                l['quiz'] = comp['quiz']
            break
    else:
        if 'konsep penting' in l.get('description', '') or len(l.get('description', '')) < 100:
            l['description'] = f"""<p><strong>{title}</strong> adalah konsep penting dalam TypeScript.</p>
<h4>🎯 Yang Dipelajari:</h4>
<ul><li>Sintaks dan implementasi TypeScript</li><li>Type safety dan best practices</li><li>Contoh kode praktis</li></ul>"""

# Add modules to content
modules_js = json.dumps(MODULES, indent=4, ensure_ascii=False)
lessons_js = json.dumps(lessons, indent=4, ensure_ascii=False)

# Read footer from current app.js
footer_start = content.index('// State')
footer = content[footer_start:]

new_content = f"""// TypeScript Learning Path - Comprehensive Interactive Tutorial

const MODULES = {modules_js};

const lessons = {lessons_js};

{footer}"""

with open('app.js', 'w', encoding='utf-8') as f:
    f.write(new_content)

print(f"Updated {len(lessons)} TypeScript lessons with modules!")
