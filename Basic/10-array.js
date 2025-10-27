// array

// como declarar um array
let myArray = [] 
let myArray2 = new Array()

console.log(myArray)
console.log(myArray2)

// inicializar um array con valores

myArray = [1, 2, 3, 4]
myArray2 = new Array(1, 2, 3, 4)

console.log(myArray)
console.log(myArray2)

myArray = ["Javi", "FJJA", "32", true]
myArray2 = new Array("Javi", "FJJA", "32", true)

console.log(myArray)
console.log(myArray2)

myArray2 = new Array(3)
myArray2[0] = "Javi"
myArray2[1] = "FJJA"
myArray2[2] = "32"

console.log(myArray2)

// Métodos comunes

myArray = []

// push: añade un elemento al final del array
// pop: elimina el último elemento del array

myArray.push("Javi")
myArray.push("FJJA")
myArray.push("32")

console.log(myArray)

console.log(myArray.pop()) // elimina y devuelve el último elemento

console.log(myArray)

// shift: elimina el primer elemento del array
// unshift: añade un elemento al principio del array

myArray.shift()
console.log(myArray)

myArray.unshift("Javi", "32")
console.log(myArray)

// length: devuelve la longitud del array

console.log(myArray.length)

// clear: vacía el array

myArray = []
console.log(myArray)

// slice: devuelve una copia de una parte del array
myArray.push("Javi", "FJJA", "32", true)

let myNewArray = myArray.slice(1, 3)

console.log(myArray)
console.log(myNewArray)

// splice: elimina o reemplaza elementos del array

myArray.splice(1, 3)
console.log(myArray)