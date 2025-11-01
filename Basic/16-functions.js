// funciones


// simple
function myFunc() {
    console.log("Hello, function!")
}

for (let i = 0; i < 5; i++) {
    myFunc()
}

// con parámetros

function myFucWithParams(name) {
    console.log(`Hello, ${name}!`)
}

myFucWithParams("Javi")
myFucWithParams("FJJA")

// funciones anonimas

const myFunc2 = function (name) {
    console.log(`Hello, ${name}!`)
}

myFunc2("Javi")

// arrow functions

const myFunc3 = (name) => {
    console.log(`Hello, ${name}!`)
}

myFunc3("Javi")

const myFunc4 = (name) => console.log(`Hello, ${name}!`)

myFunc4("Javi")

// parametros

function sum(a, b) {
    console.log(a + b)
}

sum(2, 3)

function defaultSum(a = 0, b = 0) {
    console.log(a + b)
}

// por defecto

defaultSum()
defaultSum(5)
defaultSum(5, 10)

// retorno de valores

function mult(a, b) {
    return a * b
}

let result = mult(5, 10) // devuelve 50
console.log(result)

// funciones anidadas

function extern() {
    console.log("Hello extern function")
    function intern() {
        console.log("Hello intern function")
    }
    intern() // llama a la función interna
}

extern() // llama a la función externa
// intern() // error, no se puede llamar a la función interna desde fuera

// funciones de orden superior

function applyFunc(func, param) { 
    func(param)
}

applyFunc(myFunc4, "funcion de orden superior")

// forEach con funciones

myArray = [1, 2, 3, 4]

myArray.forEach(function (value) {
    console.log(value)
})

myArray.forEach((value) => console.log(value))