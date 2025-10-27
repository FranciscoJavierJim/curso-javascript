// loops o bucles: estructuras de control que repiten un bloque de código mientras una condición sea verdadera

// for: bucle que se repite un número determinado de veces

for (let i = 0; i < 5; i++) {
    console.log("Hola")
}

for (let i = 0; i < 5; i++) {
    console.log(`Hola ${i}`)
}

const numbers = [1, 2, 3, 4, 5]

for (let i = 0; i < numbers.length; i++) {
    console.log(`Elemento: ${numbers[i]}`)
}

// while: bucle que se repite mientras una condición sea verdadera

let i = 0

while (i < 5) {
    console.log(`Hola ${i}`)  
    i++  
}

// do...while: bucle que se repite al menos una vez y luego mientras una condición sea verdadera

i = 6
do{
    console.log(`Hola ${i}`)  
    i++
} while (i < 5)

// for of: bucle que itera sobre los elementos de una colección (arrays, strings, etc.)

myArray = [1, 2, 3, 4]
    
mySet = new Set(["Javi", "FJJA", "javi@javi.com", "cordoba"])

myMap = new Map([
    ["name", "Javi"],
    ["surname", "FJJA"],
    ["age", 32],
    ["email", "javi@javi.com"],
])

myString = "Hola JavaScript"

for (let valor of myArray) {
    console.log(valor)
}

for (let valor of mySet) {
    console.log(valor)
}

for (let valor of myMap) {
    console.log(valor)
}

for (let valor of myString) {
    console.log(valor)
}

// buenas practicas

// break y continue

for (let i = 0; i < 10; i++) {
    if (i == 5) {
        continue
    } else if (i == 8) {
        break
    }
    console.log(`Hola ${i}`)
}