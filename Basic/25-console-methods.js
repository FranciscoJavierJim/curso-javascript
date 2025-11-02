//console

// console.log

console.log("Hola JavaScript")

// error

console.error("Este mensaje es un error")

// warn

console.warn("Este es un mensaje de advertencia")

//info

console.info("Este es un mensaje de informacion adicional")

// table

let data = [
    ["Javi", 32],
    ["Javier", 30]
]

console.table(data)

data = [
    { name: "Javi", age: 32},
    { name: "Javier", age: 30}
]

console.table(data)

// group

console.group("Usuario:")
console.log("Nombre: Javi")
console.log("Edad: 32")
console.groupEnd()

// time

console.time("Tiempo de ejecucion")

for (let i = 0; i < 10000; i++) {

}

console.timeEnd("Tiempo de ejecucion")

// assert

let age = 17
console.assert(age >= 18, "El usuario debe ser mayor de edad")

// count

console.count("Click")
console.count("Click")
console.count("Click")
console.countReset("Click")

console.count("Click")

// trace

function funcA() {
    funcB()
}

function funcB() {
    console.trace("Seguimiento de la ejecucion")
}

funcA()

// clear

// console.clear()