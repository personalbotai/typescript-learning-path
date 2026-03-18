import json, re

with open('app.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Extract lessons array
match = re.search(r'const INTERACTIVE_LESSONS = (\[.*?\]);', content, re.DOTALL)
if not match:
    print("No lessons found!")
    exit(1)

lessons = json.loads(match.group(1))

# Rich descriptions for TypeScript topics
DESC = {
    1: "<p>TypeScript adalah superset JavaScript yang menambahkan static typing. Setiap kode JavaScript valid juga merupakan TypeScript.</p><h4>Keunggulan:</h4><ul><li><strong>Type Safety</strong>: Error terdeteksi saat development, bukan runtime</li><li><strong>IntelliSense</strong>: Autocomplete lebih akurat di IDE</li><li><strong>Refactoring</strong>: Lebih aman karena tipe diketahui</li></ul><h4>Cara Kerja:</h4><ul><li>Compile: <code>tsc app.ts</code> → <code>app.js</code></li><li>Type checking hilang setelah compile ke JavaScript</li></ul>",
    2: "<p>TypeScript mendukung tipe data primitif dan kompleks dengan annotation eksplisit.</p><h4>Tipe Primitif:</h4><ul><li><code>string</code>: teks, <code>number</code>: angka, <code>boolean</code>: true/false</li><li><code>null</code>, <code>undefined</code>, <code>symbol</code>, <code>bigint</code></li></ul><h4>Type Annotation:</h4><ul><li><code>let nama: string = \"Archon\"</code></li><li><code>let umur: number = 25</code></li><li>Type inference: TypeScript bisa tebak tipe dari nilai</li></ul>",
    3: "<p>Interface mendefinisikan bentuk (contract) object dalam TypeScript.</p><h4>Sintaks:</h4><ul><li><code>interface User { nama: string; umur: number; }</code></li><li>Optional: <code>email?: string</code></li><li>Readonly: <code>readonly id: number</code></li></ul><h4>vs Type Alias:</h4><ul><li>Interface bisa <code>extends</code> dan <code>implements</code></li><li>Type alias lebih fleksibel (union, intersection)</li></ul>",
    4: "<p>Type alias memberi nama untuk tipe yang kompleks. Union type mengizinkan nilai dari beberapa tipe.</p><h4>Type Alias:</h4><ul><li><code>type ID = string | number</code></li><li><code>type Point = { x: number; y: number }</code></li></ul><h4>Union (|):</h4><ul><li><code>string | number</code> = bisa string atau number</li><li>Gunakan type guard untuk narrowing</li></ul>",
    5: "<p>Generics membuat komponen yang bekerja dengan berbagai tipe tanpa kehilangan type safety.</p><h4>Sintaks:</h4><ul><li><code>function identity&lt;T&gt;(arg: T): T</code></li><li><code>interface Box&lt;T&gt; { value: T }</code></li></ul><h4>Constraints:</h4><ul><li><code>&lt;T extends string&gt;</code> = T harus string-like</li></ul><h4>Use Cases:</h4><ul><li>Container types, utility functions, API responses</li></ul>",
    6: "<p>Enum mendefinisikan kumpulan nilai bernama yang konstan.</p><h4>Types:</h4><ul><li>Numeric: <code>enum Direction { Up, Down }</code></li><li>String: <code>enum Color { Red = \"RED\" }</code></li></ul><h4>Computed:</h4><ul><li><code>enum Flags { Read = 1, Write = 2, ReadWrite = Read | Write }</code></li></ul>",
}

for lesson in lessons:
    lid = lesson['id']
    if lid in DESC:
        lesson['description'] = DESC[lid]
    elif 'konsep penting' in lesson.get('description', ''):
        title = lesson['title']
        lesson['description'] = f"<p><strong>{title}</strong> adalah konsep dalam TypeScript yang penting untuk dipahami.</p><h4>Yang Dipelajari:</h4><ul><li>Sintaks dan penggunaan</li><li>Type safety dan best practices</li><li>Contoh kode praktis</li></ul>"

new_content = content[:match.start(1)] + json.dumps(lessons, indent=4, ensure_ascii=False) + content[match.end(1):]
with open('app.js', 'w', encoding='utf-8') as f:
    f.write(new_content)

print(f"Fixed {len(lessons)} TypeScript descriptions!")
