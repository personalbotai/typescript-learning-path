Modul 4
                Lesson 3
            
            
# Type Aliases

            

                **Type Aliases** (alias tipe) memungkinkan kita membuat nama baru untuk tipe yang sudah ada dengan keyword `type`. Berbeda dengan interface, type alias bisa digunakan untuk membuat tipe untuk primitive, union, intersection, dan banyak lagi.
            

            
                ⏱️ 15 menit
                📊 Kesulitan: Menengah
                📚 Tipe: Type Aliases
            
        

        
            
## 
                1
                Tujuan Pembelajaran
            

            
                
- 
                    ✓
                    Mendefinisikan type alias dengan `type`
                

                
- 
                    ✓
                    Membuat alias untuk tipe primitive, object, union, dan intersection
                

                
- 
                    ✓
                    Memahami perbedaan antara type alias dan interface
                

                
- 
                    ✓
                    Menggunakan type alias dalam function signatures dan variables
                

            
        

        
            
## 
                2
                Penjelasan
            

            
                

                    Type Alias adalah cara untuk memberikan nama pada tipe apa pun. Unlike interface, type alias tidak membuat tipe baru - hanya memberikan alias (nama alternatif) untuk tipe yang sudah ada. Type alias sangat fleksibel karena bisa digunakan untuk primitive types, union types, intersection types, tuple, function types, dan object types.
                

                
### Sintaks Dasar

                

```
// Alias untuk primitive type
type UserId = number;
type Username = string;

let id: UserId = 123;
let name: Username = "alice";
```

                

                
### Type Alias untuk Object

                

```
// Object type alias
type User = {
    id: number;
    name: string;
    email: string;
};

const user: User = {
    id: 1,
    name: "Alice",
    email: "alice@example.com"
};
```

                

                
### Type Alias untuk Union dan Intersection

                

```
// Union type alias
type StringOrNumber = string | number;

// Intersection type alias
type Named = { name: string };
type Aged = { age: number };
type Person = Named & Aged;
```

                

                
### Type Alias untuk Function

                

```
type Greet = (name: string) => string;

const hello: Greet = (name) => `Hello, ${name}!`;

// Atau dengan arrow function
type Calculator = (x: number, y: number) => number;
const add: Calculator = (a, b) => a + b;
```

                

                
### Tuple dengan Type Alias

                

```
type StringNumberPair = [string, number];

const pair: StringNumberPair = ["age", 30];
```

                

                
### Readonly dengan Type Alias

                

```
type ReadonlyUser = {
    readonly id: number;
    readonly name: string;
};

const user: ReadonlyUser = { id: 1, name: "Bob" };
// user.name = "Alice"; // Error
```

                

                
### Mapped Types dengan Type Alias

                

```
type PartialUser = {
    [P in keyof User]?: User[P];
};
```

                

                
                    

                        **💡 Tips:** Gunakan type alias ketika membuat tipe yang bukan object shape (union, intersection, function, primitive) atau ketika Anda ingin membuat tipe yang lebih fleksibel. Gunakan interface ketika mendefinisikan kontrak object atau class contracts.
                    

                
            
        

        
            
## 
                3
                Latihan
            

            
                
                    
### Latihan 1: Union Type untuk Status

                    

                        Buat type alias `OrderStatus` yang bisa berupa `"pending"`, `"processing"`, `"shipped"`, atau `"delivered"`. Buat function `updateStatus` yang menerima parameter bertipe `OrderStatus`.
                    

                    
                        Lihat Solusi
                        

```
type OrderStatus = "pending" | "processing" | "shipped" | "delivered";

function updateStatus(status: OrderStatus) {
    console.log("Status updated to:", status);
}

updateStatus("shipped");  // OK
// updateStatus("cancelled"); // Error - not in union
```

                        
                    
                

                
                    
### Latihan 2: Function Type untuk Validator

                    

                        Buat type alias `Validator` untuk function yang menerima `string` dan mengembalikan `boolean`. Buat function `isEmail` dan `isPhone` yang sesuai dengan type `Validator`.
                    

                    
                        Lihat Solusi
                        

```
type Validator = (input: string) => boolean;

const isEmail: Validator = (input) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input);
};

const isPhone: Validator = (input) => {
    return /^[0-9]+$/.test(input);
};
```

                        
                    
                
            
        

        
            
                ← Sebelumnya
            
            
                Modul 4 - Lesson 3 dari 6
            
            
                Selanjutnya →