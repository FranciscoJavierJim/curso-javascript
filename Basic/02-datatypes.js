// Tipos de datos primitivos en JavaScript

// String (cadena de texto)
let myName = "Javi"
let email = "fjja@gmail.com"


// Number (número)
let age = 32
let height = 1.85
let weight = 90


// Boolean (booleano)
let isStudent = true
let isTeacher = false


// Undefined (indefinido)
let undefinedValue
console.log(undefinedValue) // Imprime: undefined


// Null (nulo)
let nullValue = null


// Symbol (símbolo) -> usado para crear identificadores únicos
let mySymbol = Symbol("mySymbol")


// BigInt (entero grande)
let myBigInt = BigInt(9007199254779879878946524478242045749875020157870540548708540564)
let myBigInt2 = 9007199254779879878946524478242045749875020157870540548708540564n


// Mostramos los tipos de datos en la consola
console.log(typeof myName)          // Imprime: string
console.log(typeof email)           // Imprime: string
console.log(typeof age)           // Imprime: number
console.log(typeof height)        // Imprime: number
console.log(typeof isStudent)     // Imprime: boolean
console.log(typeof undefinedValue) // Imprime: undefined
console.log(typeof nullValue)     // Imprime: object (esto es un comportamiento histórico de JavaScript)
console.log(typeof mySymbol)      // Imprime: symbol
console.log(typeof myBigInt)      // Imprime: bigint