// set

// declaracion

let mySet = new Set()
console.log(mySet)

// inicializacion

mySet = new Set(["Javi", "FJJA", "javi@javi.com", "cordoba"])
console.log(mySet)

// metodos comunes

// add: añade un elemento al set
mySet.add("5")
mySet.add("javascript")
console.log(mySet)

// delete: elimina un elemento del set
mySet.delete("FJJA")
console.log(mySet)

console.log(mySet.delete("5")) // devuelve true si lo elimina, false si no lo encuentra
console.log(mySet)

console.log(mySet.delete("1")) // devuelve true si lo elimina, false si no lo encuentra
console.log(mySet)

// has: devuelve true si el elemento existe en el set, false si no

console.log(mySet.has("cordoba")) // true
console.log(mySet.has("FJJA")) // false


// size: devuelve el tamaño del set

console.log(mySet.size)

// convertir un set a un array

let myArray = Array.from(mySet)
console.log(myArray)

// convertir un array en un set

mySet = new Set(myArray)
console.log(mySet)

//

mySet.add("Javi") // no se añade porque ya existe, no admite duplicados
mySet.add("Nuevo valor") // se añade porque no existe
mySet.add("JaVi") // se añade porque es diferente (mayúsculas y minúsculas)
console.log(mySet)