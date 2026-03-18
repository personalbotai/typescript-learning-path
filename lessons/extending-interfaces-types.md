Modul 4
                Lesson 5
            
            
# Extending Interfaces dan Types

            

                **Extending** memungkinkan kita membuat tipe baru berdasarkan tipe yang sudah ada, dengan menambahkan atau mengubah properti. Interface menggunakan keyword `extends`, sedangkan type alias menggunakan operator intersection (`&`).
            

            
                ⏱️ 20 menit
                📊 Kesulitan: Menengah
                📚 Tipe: Inheritance
            
        

        
            
## 
                1
                Tujuan Pembelajaran
            

            
                
- 
                    ✓
                    Meng-extend interface dengan `extends`
                

                
- 
                    ✓
                    Meng-combine type alias dengan intersection (`&`)
                

                
- 
                    ✓
                    Memahami multiple extends dan complex composition
                

                
- 
                    ✓
                    Menggunakan extending untuk membuat tipe hierarki
                

            
        

        
            
## 
                2
                Penjelasan
            

            
                

                    Extending memungkinkan kita membuat tipe baru yang mewarisi (inherits) properti dari tipe lain, lalu menambahkan atau meng-override properti tertentu. Ini sangat berguna untuk membuat tipe hierarki atau reuse tipe yang sudah ada.
                

                
### Interface Extends Interface

                

```
interface Animal {
    name: string;
    age: number;
}

interface Mammal extends Animal {
    hasFur: boolean;
    giveBirth(): void;
}

// Mammal memiliki semua properti dari Animal + properti tambahan
const dog: Mammal = {
    name: "Rex",
    age: 3,
    hasFur: true,
    giveBirth: () => console.log("puppy")
};
```

                

                
### Multiple Extends

                

```
interface A { a: string; }
interface B { b: number; }
interface C { c: boolean; }

interface ABC extends A, B, C {
    // Tambah properti sendiri
    d: string;
}

// ABC memiliki properti a, b, c, d
```

                

                
### Type Alias Extending dengan Intersection

                

```
type Animal = {
    name: string;
    age: number;
};

type Bird = Animal & {
    canFly: boolean;
    fly(): void;
};
```

                

                
### Extending dengan Generic

                

```
interface Repository<T> {
    findById(id: number): T;
    save(entity: T): void;
}

interface UserRepository extends Repository<User> {
    // Tambah method spesifik untuk User
    findByEmail(email: string): User;
}
```

                

                
### Overriding Properties

                

```
interface Base {
    name: string;
    id: number;
}

interface Derived extends Base {
    // Override tipe properti 'id' dari number ke string
    id: string;
    extra: boolean;
}
```

                

                
### Extending Class (Interface bisa extends class)

                

```
class BaseClass {
    constructor(public name: string) {}
}

interface Extended extends BaseClass {
    age: number;
}

// Class instance harus memenuhi interface
const obj = new BaseClass("test");
// const e: Extended = obj; // Error - tidak punya age
```

                

                
                    

                        **💡 Tips:** Gunakan extending ketika ingin membuat tipe yang lebih spesifik dari tipe yang sudah ada. Interface `extends` lebih cocok untuk hierarki class/object. Type alias intersection lebih fleksibel untuk compose tipe heterogeneous.
                    

                
            
        

        
            
## 
                3
                Latihan
            

            
                
                    
### Latihan 1: Interface Hierarchy

                    

                        Buat interface `Person` dengan properti `name: string`. Lalu buat interface `Employee` yang extends `Person` dengan tambahan `employeeId: number` dan `department: string`. Buat object yang memenuhi `Employee`.
                    

                    
                        Lihat Solusi
                        

```
interface Person {
    name: string;
}

interface Employee extends Person {
    employeeId: number;
    department: string;
}

const emp: Employee = {
    name: "Alice",
    employeeId: 1001,
    department: "Engineering"
};
```

                        
                    
                

                
                    
### Latihan 2: Type Composition dengan Intersection

                    

                        Buat type alias `HasName` (`{ name: string }`) dan `HasId` (`{ id: number }`). Gabungkan dengan intersection untuk membuat `Entity` yang memiliki kedua properti tersebut.
                    

                    
                        Lihat Solusi
                        

```
type HasName = { name: string };
type HasId = { id: number };

type Entity = HasName & HasId;

const e: Entity = { name: "Bob", id: 42 };
```

                        
                    
                
            
        

        
            
                ← Sebelumnya
            
            
                Modul 4 - Lesson 5 dari 6
            
            
                Selanjutnya →