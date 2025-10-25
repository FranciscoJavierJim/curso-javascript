// Operadores

// Operadores Aritméticos
let a= 5
let b= 10

console.log(a + b) // Suma
console.log(a - b) // Resta
console.log(a * b) // Multiplicación
console.log(a / b) // División
console.log(a % b) // Módulo
console.log(a ** 2) // Exponente

a++ // Incremento
b-- // Decremento
console.log(a)
console.log(b)


// Operadores de Asignación
let myVariable = 2
console.log(myVariable)
myVariable += 2 // Equivalente a myVariable = myVariable + 2
console.log(myVariable)

myVariable -= 2
myVariable *= 2
myVariable /= 2
myVariable %= 2
myVariable **= 2


// Operadores de Comparación
console.log(a > b)
console.log(a < b)
console.log(a >= b)
console.log(a <= b)
console.log(a == b)
console.log(a == 6) // Igualdad de valor
console.log(a == "6") // Igualdad de valor
console.log(a == a)
console.log(a === a) // Igualdad por identidad (por valor y tipo)
console.log(a === 6) 
console.log(a === "6")
console.log(a != b)


// Operadores Lógicos

// and (&&)
console.log(5 > 10 && 15 > 20)
console.log(5 < 10 && 15 < 20)
console.log(5 < 10 && 15 > 20)

// or (||)
console.log(5 > 10 || 15 > 20)
console.log(5 < 10 || 15 < 20)
console.log(5 < 10 || 15 > 20)

// not (!)
console.log(!(5 > 10 && 15 > 20))
console.log(!(5 > 10 || 15 > 20))


// Operador Ternario
const isRaining = true
isRaining ? console.log("Está lloviendo") : console.log("No está lloviendo")

const isRaining2 = false
isRaining2 ? console.log("Está lloviendo") : console.log("No está lloviendo")