// TypeScript Interactive Lessons - Follows Go template pattern
// Lessons with defaultCode, expectedOutput, hint, and quiz

const INTERACTIVE_LESSONS = [
    {
        id: 1,
        title: "1. Hello World TypeScript",
        description: `Selamat datang di TypeScript! Di lesson pertama ini, kamu akan belajar:
        <ul class="list-disc pl-5 space-y-2 mt-3">
            <li><strong>console.log</strong>: Fungsi untuk mencetak output ke terminal</li>
            <li><strong>Type Annotation</strong>: Cara mendeklarasikan tipe data secara eksplisit</li>
            <li><strong>let & const</strong>: Keyword untuk deklarasi variabel</li>
            <li><strong>Compile</strong>: TypeScript dikompilasi menjadi JavaScript</li>
        </ul>
        <div class="mt-4 p-4 bg-blue-900/30 border border-blue-700 rounded">
            <strong>Perintah yang akan dipelajari:</strong><br>
            <code class="text-yellow-300">console.log("Hello, TypeScript!")</code><br>
            <code class="text-yellow-300">let nama: string = "TypeScript"</code>
        </div>`,
        defaultCode: `// Hello World TypeScript\nlet pesan: string = "Hello, World!";\nconsole.log(pesan);`,
        expectedOutput: "Hello, World!",
        hint: "Gunakan console.log() untuk mencetak teks. Tipe string ditandai dengan : string",
        quiz: {
            question: "Fungsi apa yang digunakan untuk mencetak output di TypeScript?",
            options: ["print()", "console.log()", "fmt.Println()", "echo()"],
            answer: 1
        }
    },
    {
        id: 2,
        title: "2. Tipe Data Dasar",
        description: `TypeScript memiliki tipe data statis. Tipe dasar yang akan dipelajari:
        <ul class="list-disc pl-5 space-y-2 mt-3">
            <li><strong>string</strong>: Teks (di dalam tanda kutip)</li>
            <li><strong>number</strong>: Bilangan bulat dan desimal</li>
            <li><strong>boolean</strong>: Nilai true/false</li>
            <li><strong>Type Annotation</strong>: Menulis tipe setelah nama variabel dengan <code>:</code></li>
        </ul>
        <div class="mt-4 p-4 bg-blue-900/30 border border-blue-700 rounded">
            <strong>Contoh deklarasi:</strong><br>
            <code class="text-yellow-300">let nama: string = "Budi"</code><br>
            <code class="text-yellow-300">let umur: number = 25</code><br>
            <code class="text-yellow-300">let aktif: boolean = true</code>
        </div>`,
        defaultCode: `// Deklarasi variabel dengan tipe data\nlet nama: string = "Developer TS";\nlet umur: number = 30;\nlet tinggi: number = 175.5;\nlet aktif: boolean = true;\n\nconsole.log("Nama:", nama);\nconsole.log("Umur:", umur);\nconsole.log("Tinggi:", tinggi);\nconsole.log("Aktif:", aktif);`,
        expectedOutput: "Nama: Developer TS\nUmur: 30\nTinggi: 175.5\nAktif: true",
        hint: "Pastikan semua variabel memiliki tipe yang benar: string, number, boolean",
        quiz: {
            question: "Tipe data mana yang benar untuk menyimpan nilai 3.14 di TypeScript?",
            options: ["int", "float", "number", "decimal"],
            answer: 2
        }
    },
    {
        id: 3,
        title: "3. Array dan Tuple",
        description: `Koleksi data di TypeScript:
        <ul class="list-disc pl-5 space-y-2 mt-3">
            <li><strong>Array</strong>: Kumpulan data dengan tipe sama, ditulis <code>tipe[]</code> atau <code>Array&lt;tipe&gt;</code></li>
            <li><strong>Tuple</strong>: Array dengan tipe tetap untuk setiap posisi</li>
            <li><strong>for...of</strong>: Iterasi elemen array</li>
            <li><strong>length</strong>: Panjang array</li>
        </ul>
        <div class="mt-4 p-4 bg-blue-900/30 border border-blue-700 rounded">
            <strong>Contoh:</strong><br>
            <code class="text-yellow-300">let buah: string[] = ["Apel", "Jeruk"]</code><br>
            <code class="text-yellow-300">let koordinat: [number, number] = [10, 20]</code>
        </div>`,
        defaultCode: `// Array dan Tuple\nlet buah: string[] = ["Apel", "Jeruk", "Mangga"];\nlet angka: number[] = [1, 2, 3, 4, 5];\nlet pasangan: [string, number] = ["Budi", 25];\n\n// Cetak array buah\nfor (let i = 0; i < buah.length; i++) {\n    console.log((i + 1) + ". " + buah[i]);\n}\n\nconsole.log("Pasangan:", pasangan[0], "-", pasangan[1]);`,
        expectedOutput: "1. Apel\n2. Jeruk\n3. Mangga\nPasangan: Budi - 25",
        hint: "Gunakan for loop untuk iterasi array. Akses elemen dengan array[index]",
        quiz: {
            question: "Bagaimana cara mendeklarasikan array string di TypeScript?",
            options: ["string arr()", "string[]", "Array<string>", "Keduanya string[] dan Array<string> benar"],
            answer: 3
        }
    },
    {
        id: 4,
        title: "4. Enum",
        description: `Enum adalah kumpulan nilai konstan yang dapat diberi nama:
        <ul class="list-disc pl-5 space-y-2 mt-3">
            <li><strong>enum</strong>: Keyword untuk mendefinisikan enum</li>
            <li><strong>Numeric enum</strong>: Dimulai dari 0 secara default</li>
            <li><strong>String enum</strong>: Setiap nilai diberi string eksplisit</li>
            <li><strong>Penggunaan</strong>: Sangat berguna untuk status, arah, kategori</li>
        </ul>
        <div class="mt-4 p-4 bg-blue-900/30 border border-blue-700 rounded">
            <strong>Contoh:</strong><br>
            <code class="text-yellow-300">enum Status { Aktif, Nonaktif }</code><br>
            <code class="text-yellow-300">let s: Status = Status.Aktif</code>
        </div>`,
        defaultCode: `// Enum di TypeScript\nenum Hari {\n    Senin,\n    Selasa,\n    Rabu,\n    Kamis,\n    Jumat,\n    Sabtu,\n    Minggu\n}\n\nenum Warna {\n    Merah = "MERAH",\n    Hijau = "HIJAU",\n    Biru = "BIRU"\n}\n\nlet hariIni: Hari = Hari.Rabu;\nlet warnaFavorit: Warna = Warna.Biru;\n\nconsole.log("Hari ke-" + hariIni);\nconsole.log("Warna:", warnaFavorit);`,
        expectedOutput: "Hari ke-2\nWarna: BIRU",
        hint: "Enum numerik dimulai dari 0. Hari.Senin = 0, Hari.Selasa = 1, dst.",
        quiz: {
            question: "Nilai default dari elemen pertama numeric enum adalah?",
            options: ["1", "undefined", "0", "null"],
            answer: 2
        }
    },
    {
        id: 5,
        title: "5. Interface",
        description: `Interface mendefinisikan struktur (bentuk) sebuah objek:
        <ul class="list-disc pl-5 space-y-2 mt-3">
            <li><strong>interface</strong>: Keyword untuk mendefinisikan kontrak</li>
            <li><strong>Properties</strong>: Field dengan tipe tertentu</li>
            <li><strong>Optional</strong>: Ditandai dengan <code>?</code></li>
            <li><strong>Readonly</strong>: Tidak bisa diubah setelah dibuat</li>
        </ul>
        <div class="mt-4 p-4 bg-blue-900/30 border border-blue-700 rounded">
            <strong>Contoh:</strong><br>
            <code class="text-yellow-300">interface User {<br>&nbsp;&nbsp;nama: string;<br>&nbsp;&nbsp;umur: number;<br>&nbsp;&nbsp;email?: string;<br>}</code>
        </div>`,
        defaultCode: `// Interface di TypeScript\ninterface Mahasiswa {\n    nama: string;\n    nim: string;\n    ipk: number;\n    aktif?: boolean;\n}\n\n// Membuat objek dari interface\nlet mhs1: Mahasiswa = {\n    nama: "Budi Santoso",\n    nim: "2023001",\n    ipk: 3.75,\n    aktif: true\n};\n\nlet mhs2: Mahasiswa = {\n    nama: "Ani Wijaya",\n    nim: "2023002",\n    ipk: 3.50\n};\n\nconsole.log(mhs1.nama + " (" + mhs1.nim + ") - IPK: " + mhs1.ipk);\nconsole.log(mhs2.nama + " (" + mhs2.nim + ") - IPK: " + mhs2.ipk);`,
        expectedOutput: "Budi Santoso (2023001) - IPK: 3.75\nAni Wijaya (2023002) - IPK: 3.5",
        hint: "Buat interface dengan properti nama, nim, ipk. Properti opsional ditandai dengan ?",
        quiz: {
            question: "Bagaimana cara menandai properti opsional di interface?",
            options: ["Dengan kata kunci optional", "Dengan tanda ?", "Dengan tanda !", "Dengan kata kunci maybe"],
            answer: 1
        }
    },
    {
        id: 6,
        title: "6. Type Aliases",
        description: `Type Alias memberikan nama baru untuk tipe data:
        <ul class="list-disc pl-5 space-y-2 mt-3">
            <li><strong>type</strong>: Keyword untuk mendefinisikan alias</li>
            <li><strong>Union Types</strong>: Menggabungkan beberapa tipe dengan <code>|</code></li>
            <li><strong>Intersection Types</strong>: Menggabungkan tipe dengan <code>&amp;</code></li>
            <li><strong>Literal Types</strong>: Tipe dengan nilai spesifik</li>
        </ul>
        <div class="mt-4 p-4 bg-blue-900/30 border border-blue-700 rounded">
            <strong>Contoh:</strong><br>
            <code class="text-yellow-300">type ID = string | number</code><br>
            <code class="text-yellow-300">type Arah = "utara" | "selatan" | "timur" | "barat"</code>
        </div>`,
        defaultCode: `// Type Aliases\ntype ID = string | number;\ntype Status = "aktif" | "nonaktif" | "pending";\n\ninterface Dasar {\n    id: ID;\n    tanggalDibuat: string;\n}\n\ninterface Produk extends Dasar {\n    nama: string;\n    harga: number;\n    status: Status;\n}\n\nlet produk1: Produk = {\n    id: "PRD001",\n    nama: "Laptop",\n    harga: 15000000,\n    status: "aktif",\n    tanggalDibuat: "2024-01-15"\n};\n\nconsole.log("ID:", produk1.id);\nconsole.log("Nama:", produk1.nama);\nconsole.log("Status:", produk1.status);`,
        expectedOutput: "ID: PRD001\nNama: Laptop\nStatus: aktif",
        hint: "type digunakan untuk membuat alias. Union type menggunakan | (pipe)",
        quiz: {
            question: "Operator apa yang digunakan untuk union types?",
            options: ["&", "|", "+", "||"],
            answer: 1
        }
    },
    {
        id: 7,
        title: "7. Functions dengan Tipe",
        description: `Fungsi di TypeScript memiliki tipe untuk parameter dan return value:
        <ul class="list-disc pl-5 space-y-2 mt-3">
            <li><strong>Parameter types</strong>: Tipe ditulis setelah nama parameter</li>
            <li><strong>Return type</strong>: Tipe ditulis setelah <code>)</code></li>
            <li><strong>Optional params</strong>: Ditandai dengan <code>?</code></li>
            <li><strong>Default values</strong>: Nilai default untuk parameter</li>
        </ul>
        <div class="mt-4 p-4 bg-blue-900/30 border border-blue-700 rounded">
            <strong>Contoh:</strong><br>
            <code class="text-yellow-300">function tambah(a: number, b: number): number {<br>&nbsp;&nbsp;return a + b;<br>}</code>
        </div>`,
        defaultCode: `// Fungsi dengan tipe\nfunction tambah(a: number, b: number): number {\n    return a + b;\n}\n\nfunction greet(nama: string): string {\n    return "Hello, " + nama + "!";\n}\n\nfunction hitungDiskon(harga: number, diskon: number = 10): number {\n    return harga - (harga * diskon / 100);\n}\n\nlet hasil: number = tambah(10, 20);\nlet pesan: string = greet("Gopher");\nlet hargaDiskon: number = hitungDiskon(100000);\n\nconsole.log(hasil);\nconsole.log(pesan);\nconsole.log("Harga diskon:", hargaDiskon);`,
        expectedOutput: "30\nHello, Gopher!\nHarga diskon: 90000",
        hint: "Tipe parameter ditulis setelah nama: (param: tipe). Tipe return setelah ): tipe",
        quiz: {
            question: "Di mana return type ditulis dalam deklarasi fungsi?",
            options: ["Sebelum nama fungsi", "Setelah parameter dengan :", "Di dalam body fungsi", "Tidak perlu ditulis"],
            answer: 1
        }
    },
    {
        id: 8,
        title: "8. Classes",
        description: `Class di TypeScript lebih kuat dari JavaScript:
        <ul class="list-disc pl-5 space-y-2 mt-3">
            <li><strong>Access modifiers</strong>: <code>public</code>, <code>private</code>, <code>protected</code></li>
            <li><strong>Constructor</strong>: Method khusus untuk inisialisasi</li>
            <li><strong>Properties</strong>: Field dengan tipe dan modifier</li>
            <li><strong>Methods</strong>: Fungsi dalam class</li>
        </ul>
        <div class="mt-4 p-4 bg-blue-900/30 border border-blue-700 rounded">
            <strong>Contoh:</strong><br>
            <code class="text-yellow-300">class Person {<br>&nbsp;&nbsp;constructor(public nama: string) {}<br>}</code>
        </div>`,
        defaultCode: `// Class di TypeScript\nclass Mobil {\n    public merek: string;\n    public tahun: number;\n    private _kecepatan: number;\n\n    constructor(merek: string, tahun: number) {\n        this.merek = merek;\n        this.tahun = tahun;\n        this._kecepatan = 0;\n    }\n\n    public gas(increment: number): void {\n        this._kecepatan += increment;\n    }\n\n    public rem(decrement: number): void {\n        this._kecepatan = Math.max(0, this._kecepatan - decrement);\n    }\n\n    public info(): string {\n        return this.merek + " (" + this.tahun + ") - " + this._kecepatan + " km/h";\n    }\n}\n\nlet avanza: Mobil = new Mobil("Toyota Avanza", 2023);\navanza.gas(60);\navanza.rem(20);\nconsole.log(avanza.info());`,
        expectedOutput: "Toyota Avanza (2023) - 40 km/h",
        hint: "Gunakan constructor untuk inisialisasi. Method public untuk akses dari luar class",
        quiz: {
            question: "Access modifier apa yang membuat properti hanya bisa diakses dalam class itu sendiri?",
            options: ["public", "protected", "private", "internal"],
            answer: 2
        }
    },
    {
        id: 9,
        title: "9. Generics",
        description: `Generics memungkinkan membuat komponen yang bekerja dengan berbagai tipe:
        <ul class="list-disc pl-5 space-y-2 mt-3">
            <li><strong>&lt;T&gt;</strong>: Type parameter (placeholder untuk tipe)</li>
            <li><strong>Generic Function</strong>: Fungsi yang fleksibel terhadap tipe</li>
            <li><strong>Generic Class</strong>: Class yang bisa menampung berbagai tipe</li>
            <li><strong>Constraints</strong>: Membatasi tipe yang diizinkan dengan <code>extends</code></li>
        </ul>
        <div class="mt-4 p-4 bg-blue-900/30 border border-blue-700 rounded">
            <strong>Contoh:</strong><br>
            <code class="text-yellow-300">function identitas&lt;T&gt;(arg: T): T { return arg; }</code><br>
            <code class="text-yellow-300">class Kotak&lt;T&gt; { isi: T; }</code>
        </div>`,
        defaultCode: `// Generics di TypeScript\nfunction identitas<T>(arg: T): T {\n    return arg;\n}\n\nfunction ambilElemenPertama<T>(arr: T[]): T | undefined {\n    return arr[0];\n}\n\nclass Tumpukan<T> {\n    private items: T[] = [];\n\n    push(item: T): void {\n        this.items.push(item);\n    }\n\n    pop(): T | undefined {\n        return this.items.pop();\n    }\n\n    peek(): T | undefined {\n        return this.items[this.items.length - 1];\n    }\n}\n\nlet strStack = new Tumpukan<string>();\nstrStack.push("TypeScript");\nstrStack.push("Generics");\n\nconsole.log(identitas<string>("Hello"));\nconsole.log(ambilElemenPertama<number>([10, 20, 30]));\nconsole.log(strStack.peek());`,
        expectedOutput: "Hello\n10\nGenerics",
        hint: "<T> adalah type parameter. Saat memanggil, bisa ditulis eksplisit: fungsi<tipe>()",
        quiz: {
            question: "Apa fungsi type parameter <T> dalam generics?",
            options: ["Membatasi satu tipe saja", "Placeholder yang bisa diisi berbagai tipe", "Mengubah tipe runtime", "Menghapus tipe"],
            answer: 1
        }
    },
    {
        id: 10,
        title: "10. Type Guards",
        description: `Type Guards membantu mengecek tipe di runtime:
        <ul class="list-disc pl-5 space-y-2 mt-3">
            <li><strong>typeof</strong>: Mengecek tipe primitif</li>
            <li><strong>instanceof</strong>: Mengecek instance class</li>
            <li><strong>in</strong>: Mengecek properti dalam objek</li>
            <li><strong>User-defined guards</strong>: Fungsi yang return <code>arg is Type</code></li>
        </ul>
        <div class="mt-4 p-4 bg-blue-900/30 border border-blue-700 rounded">
            <strong>Contoh:</strong><br>
            <code class="text-yellow-300">if (typeof x === "string") { /* x adalah string */ }</code><br>
            <code class="text-yellow-300">function isString(x: any): x is string { ... }</code>
        </div>`,
        defaultCode: `// Type Guards\ntype Bentuk = { jenis: "lingkaran"; radius: number } | { jenis: "persegi"; sisi: number };\n\nfunction hitungLuas(bentuk: Bentuk): number {\n    if (bentuk.jenis === "lingkaran") {\n        return Math.PI * bentuk.radius * bentuk.radius;\n    } else {\n        return bentuk.sisi * bentuk.sisi;\n    }\n}\n\nfunction formatNilai(nilai: string | number): string {\n    if (typeof nilai === "string") {\n        return nilai.toUpperCase();\n    } else {\n        return nilai.toFixed(2);\n    }\n}\n\nlet lingkaran: Bentuk = { jenis: "lingkaran", radius: 5 };\nlet persegi: Bentuk = { jenis: "persegi", sisi: 4 };\n\nconsole.log("Luas lingkaran:", hitungLuas(lingkaran).toFixed(2));\nconsole.log("Luas persegi:", hitungLuas(persegi));\nconsole.log("Format:", formatNilai("typescript"));\nconsole.log("Format:", formatNilai(3.14159));`,
        expectedOutput: "Luas lingkaran: 78.54\nLuas persegi: 16\nFormat: TYPESCRIPT\nFormat: 3.14",
        hint: "Type guards mempersempit tipe. Discriminated union menggunakan properti 'jenis' untuk membedakan",
        quiz: {
            question: "Keyword apa yang digunakan untuk mengecek tipe primitif di runtime?",
            options: ["typecheck", "typeof", "typeis", "checktype"],
            answer: 1
        }
    },
    {
        id: 11,
        title: "11. Async/Await",
        description: `Operasi asinkron di TypeScript dengan Promise dan async/await:
        <ul class="list-disc pl-5 space-y-2 mt-3">
            <li><strong>Promise</strong>: Objek yang mewakili hasil operasi async</li>
            <li><strong>async</strong>: Keyword untuk fungsi yang mengembalikan Promise</li>
            <li><strong>await</strong>: Menunggu Promise selesai</li>
            <li><strong>try/catch</strong>: Menangani error dalam async</li>
        </ul>
        <div class="mt-4 p-4 bg-blue-900/30 border border-blue-700 rounded">
            <strong>Contoh:</strong><br>
            <code class="text-yellow-300">async function fetchData(): Promise&lt;string&gt; { ... }</code><br>
            <code class="text-yellow-300">let data = await fetchData();</code>
        </div>`,
        defaultCode: `// Async/Await\ndelay(ms: number): Promise<void> {\n    return new Promise(resolve => setTimeout(resolve, ms));\n}\n\nasync function ambilData(): Promise<string> {\n    console.log("Mengambil data...");\n    await delay(100);\n    return "Data berhasil diambil";\n}\n\nasync function prosesData(): Promise<string[]> {\n    console.log("Memproses...");\n    await delay(50);\n    return ["Item 1", "Item 2", "Item 3"];\n}\n\nasync function main(): Promise<void> {\n    try {\n        let pesan: string = await ambilData();\n        console.log(pesan);\n        \n        let items: string[] = await prosesData();\n        console.log("Jumlah item:", items.length);\n        \n        for (let item of items) {\n            console.log("-", item);\n        }\n    } catch (error) {\n        console.log("Error:", error);\n    }\n}\n\nmain();`,
        expectedOutput: "Mengambil data...\nData berhasil diambil\nMemproses...\nJumlah item: 3\n- Item 1\n- Item 2\n- Item 3",
        hint: "async function mengembalikan Promise. await menunggu Promise selesai. Gunakan try/catch untuk error handling",
        quiz: {
            question: "Apa yang dikembalikan oleh async function?",
            options: ["void", "any", "Promise", "undefined"],
            answer: 2
        }
    },
    {
        id: 12,
        title: "12. Modules (Import/Export)",
        description: `Modularisasi kode dengan ES6 modules:
        <ul class="list-disc pl-5 space-y-2 mt-3">
            <li><strong>export</strong>: Mengekspos fungsi, class, atau variabel</li>
            <li><strong>import</strong>: Mengimpor dari modul lain</li>
            <li><strong>default export</strong>: Eksport utama dari modul</li>
            <li><strong>named export</strong>: Eksport dengan nama tertentu</li>
        </ul>
        <div class="mt-4 p-4 bg-blue-900/30 border border-blue-700 rounded">
            <strong>Contoh:</strong><br>
            <code class="text-yellow-300">export function hitung() {}</code><br>
            <code class="text-yellow-300">export default class App {}</code><br>
            <code class="text-yellow-300">import App from './app'</code>
        </div>`,
        defaultCode: `// Modules - Simulasi (dalam satu file)\n// Biasanya ini terpisah di file berbeda\n\n// === math-utils.ts ===\nexport function tambah(a: number, b: number): number {\n    return a + b;\n}\n\nexport function kurang(a: number, b: number): number {\n    return a - b;\n}\n\nexport const PI: number = 3.14159;\n\nexport default class Kalkulator {\n    static kali(a: number, b: number): number {\n        return a * b;\n    }\n    \n    static bagi(a: number, b: number): number {\n        return a / b;\n    }\n}\n\n// === app.ts (main file) ===\n// import Kalkulator, { tambah, kurang, PI } from './math-utils';\n\n// Karena simulasi dalam satu file, langsung panggil:\nconsole.log("Tambah:", tambah(10, 5));\nconsole.log("Kurang:", kurang(10, 5));\nconsole.log("Kali:", Kalkulator.kali(10, 5));\nconsole.log("Bagi:", Kalkulator.bagi(10, 5));\nconsole.log("PI:", PI);`,
        expectedOutput: "Tambah: 15\nKurang: 5\nKali: 50\nBagi: 2\nPI: 3.14159",
        hint: "export untuk mengekspos, import untuk mengimpor. Default export untuk eksport utama",
        quiz: {
            question: "Untuk mengeksport satu fungsi utama dari file, gunakan?",
            options: ["export main", "export default", "module.exports", "export *"],
            answer: 1
        }
    },
    {
        id: 13,
        title: "13. Utility Types",
        description: `TypeScript menyediakan utility types bawaan:
        <ul class="list-disc pl-5 space-y-2 mt-3">
            <li><strong>Partial&lt;T&gt;</strong>: Semua properti menjadi opsional</li>
            <li><strong>Required&lt;T&gt;</strong>: Semua properti menjadi wajib</li>
            <li><strong>Readonly&lt;T&gt;</strong>: Semua properti menjadi readonly</li>
            <li><strong>Pick&lt;T, K&gt;</strong>: Memilih properti tertentu</li>
            <li><strong>Omit&lt;T, K&gt;</strong>: Menghapus properti tertentu</li>
            <li><strong>Record&lt;K, T&gt;</strong>: Membuat tipe objek dengan key dan value</li>
        </ul>
        <div class="mt-4 p-4 bg-blue-900/30 border border-blue-700 rounded">
            <strong>Contoh:</strong><br>
            <code class="text-yellow-300">type Opsional = Partial&lt;User&gt;</code><br>
            <code class="text-yellow-300">type HanyaNama = Pick&lt;User, "nama"&gt;</code>
        </div>`,
        defaultCode: `// Utility Types\ninterface ProdukLengkap {\n    id: number;\n    nama: string;\n    harga: number;\n    deskripsi: string;\n    stok: number;\n}\n\ntype ProdukOpsional = Partial<ProdukLengkap>;\ntype ProdukReadonly = Readonly<ProdukLengkap>;\ntype ProdukRingkas = Pick<ProdukLengkap, "id" | "nama" | "harga">;\ntype ProdukTanpaDesk = Omit<ProdukLengkap, "deskripsi">;\ntype Katalog = Record<string, ProdukRingkas>;\n\n// Partial - semua opsional\nlet produkBaru: ProdukOpsional = { nama: "Laptop" };\n\n// Pick - hanya properti tertentu\nlet ringkas: ProdukRingkas = { id: 1, nama: "Mouse", harga: 150000 };\n\n// Record - objek dengan key-value\nlet katalog: Katalog = {\n    "PRD001": { id: 1, nama: "Keyboard", harga: 500000 },\n    "PRD002": { id: 2, nama: "Monitor", harga: 3000000 }\n};\n\nconsole.log("Produk baru:", produkBaru.nama);\nconsole.log("Ringkas:", ringkas.nama, "-", ringkas.harga);\nconsole.log("Katalog:", Object.keys(katalog).length, "produk");`,
        expectedOutput: "Produk baru: Laptop\nRingkas: Mouse - 150000\nKatalog: 2 produk",
        hint: "Partial membuat semua properti opsional. Pick memilih properti tertentu. Record membuat tipe objek",
        quiz: {
            question: "Utility type apa yang membuat semua properti menjadi opsional?",
            options: ["Required<T>", "Partial<T>", "Optional<T>", "Maybe<T>"],
            answer: 1
        }
    },
    {
        id: 14,
        title: "14. Decorators (Eksperimental)",
        description: `Decorator adalah fungsi khusus yang bisa memodifikasi class, method, atau property:
        <ul class="list-disc pl-5 space-y-2 mt-3">
            <li><strong>@decorator</strong>: Syntax decorator dengan @</li>
            <li><strong>Class Decorator</strong>: Memodifikasi class constructor</li>
            <li><strong>Method Decorator</strong>: Memodifikasi method</li>
            <li><strong>Aktifkan</strong>: Perlu <code>experimentalDecorators: true</code> di tsconfig</li>
        </ul>
        <div class="mt-4 p-4 bg-blue-900/30 border border-blue-700 rounded">
            <strong>Contoh:</strong><br>
            <code class="text-yellow-300">@sealed<br>class MyComponent {}</code>
        </div>`,
        defaultCode: `// Decorators (simulasi tanpa compiler)\n// Di tsconfig.json: "experimentalDecorators": true\n\n// Class Decorator - simulasikan sebagai fungsi\nfunction logClass(target: any): any {\n    console.log("Class terdaftar:", target.name);\n    return target;\n}\n\nfunction tambahMetadata(key: string, value: string) {\n    return function(target: any): any {\n        target.metadata = target.metadata || {};\n        target.metadata[key] = value;\n        return target;\n    };\n}\n\n// Simulasi decorator application\n// @logClass\n// @tambahMetadata("version", "1.0.0")\nclass UserService {\n    private users: string[] = [];\n\n    addUser(nama: string): void {\n        this.users.push(nama);\n    }\n\n    getUsers(): string[] {\n        return this.users;\n    }\n}\n\n// Manual decorator simulation\nlogClass(UserService);\ntambahMetadata("version", "1.0.0")(UserService);\n\nlet service = new UserService();\nservice.addUser("Budi");\nservice.addUser("Ani");\n\nconsole.log("Users:", service.getUsers().join(", "));`,
        expectedOutput: "Class terdaftar: UserService\nUsers: Budi, Ani",
        hint: "Decorator adalah fungsi yang menerima target (class/method) dan mengembalikan modifikasi",
        quiz: {
            question: "Apa yang perlu diaktifkan di tsconfig.json untuk menggunakan decorators?",
            options: ["enableDecorators", "experimentalDecorators", "decorators", "allowDecorators"],
            answer: 1
        }
    },
    {
        id: 15,
        title: "15. Interface & Polymorphism",
        description: `Interface digunakan untuk polimorfisme - objek berbeda bisa diperlakukan sama:
        <ul class="list-disc pl-5 space-y-2 mt-3">
            <li><strong>Interface sebagai contract</strong>: Mendefinisikan method yang harus ada</li>
            <li><strong>Polymorphism</strong>: Berbagai implementasi, satu interface</li>
            <li><strong>Dependency Injection</strong>: Bergantung pada abstraksi, bukan konkret</li>
            <li><strong>Code Reuse</strong>: Fungsi bisa bekerja dengan semua implementasi</li>
        </ul>
        <div class="mt-4 p-4 bg-blue-900/30 border border-blue-700 rounded">
            <strong>Contoh:</strong><br>
            <code class="text-yellow-300">interface Speaker { speak(): string; }</code><br>
            <code class="text-yellow-300">class Dog implements Speaker { ... }</code>
        </div>`,
        defaultCode: `// Interface & Polymorphism\ninterface Speaker {\n    speak(): string;\n}\n\nclass Dog implements Speaker {\n    constructor(private name: string) {}\n    \n    speak(): string {\n        return this.name + " says: Woof!";\n    }\n}\n\nclass Cat implements Speaker {\n    constructor(private name: string) {}\n    \n    speak(): string {\n        return this.name + " says: Meow!";\n    }\n}\n\nclass Robot implements Speaker {\n    constructor(private model: string) {}\n    \n    speak(): string {\n        return this.model + " says: Beep boop!";\n    }\n}\n\nfunction saySomething(speaker: Speaker): void {\n    console.log(speaker.speak());\n}\n\nlet dog: Dog = new Dog("Rex");\nlet cat: Cat = new Cat("Whiskers");\nlet robot: Robot = new Robot("T-800");\n\nsaySomething(dog);\nsaySomething(cat);\nsaySomething(robot);`,
        expectedOutput: "Rex says: Woof!\nWhiskers says: Meow!\nT-800 says: Beep boop!",
        hint: "Buat interface Speaker dengan method speak(): string. Class mengimplementasi dengan implements Speaker",
        quiz: {
            question: "Keyword apa yang digunakan class untuk mengimplementasi interface?",
            options: ["extends", "inherits", "implements", "uses"],
            answer: 2
        }
    }
];

// Export for use in app.js
if (typeof window !== 'undefined') {
    window.INTERACTIVE_LESSONS = INTERACTIVE_LESSONS;
}
