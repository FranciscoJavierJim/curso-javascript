// Strings

// Concatenación

let myName = "Javi"
let greeting = "Hola, " + myName + "!"
console.log(greeting)

// Longitud

console.log(greeting.length)

// Acceso a caracteres
console.log(greeting[0]) // Primer carácter
console.log(greeting[10]) // Último carácter

// Metodos comunes
console.log(greeting.toUpperCase()) // Mayúsculas
console.log(greeting.toLowerCase()) // Minúsculas
console.log(greeting.indexOf("Javi")) // Índice de la subcadena
console.log(greeting.includes("Javi")) // Verifica si contiene la subcadena
console.log(greeting.slice(0, 9)) // Subcadena desde el índice 0 hasta el 5
console.log(greeting.replace("Javi", "Juan")) // Reemplazo de subcadena

// Template literals (plantillas de texto)
let message = `Hola, este es mi 
primer curso de JavaScript`
console.log(message)

let age = 32
let info = `Mi nombre es ${myName} y tengo ${age} años.`
console.log(info)