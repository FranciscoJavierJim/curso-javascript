// desestructuracion y propagacion

myArray = [1, 2, 3, 4]

let persona = {
    nombre: "Javi",
    edad: 32,
    esEstudiante: false
};
myArray.push(5)
console.log(myArray); // [1, 2, 3, 4, 5]

let myValue = myArray[1]
console.log(myValue); // 2

let myNombre = persona.nombre
console.log(myNombre); // Javi

// Desestructuracion

let [myValue0, myValue1, myValue2, myValue3, myValue4, myValue5] = myArray
console.log(myValue0); // 1
console.log(myValue1); // 2
console.log(myValue2); // 3
console.log(myValue3); // 4
console.log(myValue4); // 5
console.log(myValue5); // undefined

// sintaxis de array con valores predeterminados

[myValue6 = 0, myValue7 = 0, myValue8 = 0, myValue9 = 0, myValue10 = 0, myValue11 = 0] = myArray
console.log(myValue6); 
console.log(myValue7); 
console.log(myValue8); 
console.log(myValue9); 
console.log(myValue10); 
console.log(myValue11); 

//ignorar elementos del array

let [myValue12, , , myValue16] = myArray

console.log(myValue12); // 1
console.log(myValue16); // 4


// sintaxis de objeto

let {edad, nombre, esEstudiante} = persona
console.log(edad); // Javi
console.log(nombre); // 32
console.log(esEstudiante); // false

// sintaxis de objetos con valores predeterminados

let {nombre2, edad2, esEstudiante2, email = "email@gmail.com" } = persona
console.log(nombre2); // no existe
console.log(edad2); // no existe
console.log(esEstudiante2); // no existe
console.log(email) //email@gmail.com

// sitaxis de objetos con nuevos nombres de variables

let {edad: edad3, nombre: nombre3, esEstudiante: esEstudiante3} = persona
console.log(edad3); 
console.log(nombre3); 
console.log(esEstudiante3); 

// destructuracion anidada

let persona3 = {
    nombre: "FranciscoJavier",
    edad: 35,
    esEstudiante: false,
    saludar: function() {
        console.log("La persona saluda");
    },
    trabajo: {
        puesto: "QA Engineer",
        experiencia: "1",
        camina: function() {
        console.log("La persona camina");
        }
    }
};

let {nombre: nombre4, trabajo: {puesto : puesto4}} = persona3
console.log(nombre4); // FranciscoJavier
console.log(puesto4); // QA Engineer

// Propagacion

// sintaxis de array

let myArray2 = [...myArray, 6, 7, 8, 9, 10]
console.log(myArray2); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// combinacion de arrays

let myArray3 = [ ...myArray, ...myArray2 ]
console.log(myArray3); // [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// sintaxis de objetos

let persona2 = { ...persona, direccion: "Calle Falsa 123", telefono: "555-1234" }
console.log(persona2);