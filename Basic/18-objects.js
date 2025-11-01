// Sintaxis

let persona = {
    nombre: "Javi",
    edad: 32,
    esEstudiante: false
};

// Acceder a las propiedades

//Notacion punto
console.log(persona.nombre); // "Javi"

// Notacion corchetes
console.log(persona["nombre"]); // "Javi"

// Modificar propiedades
persona.edad = 33;
persona["esEstudiante"] = true;
console.log(persona.edad); // 33
console.log(persona.esEstudiante); // true

// Agregar propiedades
persona.altura = 1.85;
persona["peso"] = 90;

console.log(persona.altura); // 1.85
console.log(persona.peso); // 90

// Eliminar propiedades
delete persona.esEstudiante;
console.log(persona.esEstudiante); // undefined

// Métodos de objetos (funciones dentro de objetos)

let persona2 = {
    nombre: "FJJA",
    edad: 30,
    esEstudiante: true,
    saludar: function() {
        console.log("La persona saluda");
    }
};

persona2.saludar(); // "La persona saluda"

// Animacion de objetos

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

console.log(persona3)

console.log(persona3.trabajo.puesto); // "QA Engineer"
persona3.trabajo.camina(); // "La persona camina"

// Igualdad de objetos

let persona4 = {
    nombre: "Javi",
    edad: 32,
    esEstudiante: false
};

console.log(persona);
console.log(persona4);
console.log(persona == persona4); // false
console.log(persona === persona4); // false

console.log(persona.nombre == persona4.nombre); // true
console.log(persona.nombre === persona4.nombre); // true

// Iteracion

for (let key in persona4) {
    console.log(key + ": " + persona4[key]);
}

// Funciones como objetos

function Person(name, age) {
    this.name = name;
    this.age = age;
}

let person5 = new Person("Javi", 32);
console.log(person5)
console.log(person5.name); // "Javi"

console.log(typeof Person); // "function"
console.log(typeof person5); // "object"

