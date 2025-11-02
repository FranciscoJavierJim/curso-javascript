// clases

class Persona {
  constructor(nombre, edad, alias) {
    this.nombre = nombre;
    this.edad = edad;
    this.alias = alias;
  }
}

// sintaxis

let persona = new Persona("Javi", 32, "FJJA")
let persona2 = new Persona("Javi", 32, "FJJA")

console.log(persona); // undefined
console.log(persona2); // undefined

console.log(typeof persona)

// valores por defecto

class DefaultPersona {
  constructor(nombre = "sin nombre", edad = 0, alias = "sin alias") {
    this.nombre = nombre;
    this.edad = edad;
    this.alias = alias;
  }
}

let persona3 = new DefaultPersona("Javi", 32)

console.log(persona3); // undefined

// acceso a propiedades

console.log(persona3.alias)
console.log(persona3["alias"])

persona3.alias = "FJJA"
console.log(persona3.alias)

// funciones en clases

class Persona2 {
  constructor(nombre, edad, alias) {
    this.nombre = nombre;
    this.edad = edad;
    this.alias = alias;
  } 

  camina() {
    console.log("La persona camina");
  }
}

let persona4 = new Persona2("Javi", 32, "FJJA");
persona4.camina();

// propiedades privadas

class PersonaPrivada {
    #banco

    constructor(nombre, edad, alias, banco) {
        this.nombre = nombre
        this.edad = edad
        this.alias = alias
        this.#banco = banco
    }

    pagar() {
        this.#banco
    }
}

let persona5 = new PersonaPrivada("Javi", 32, "FJJA", "BancoPrivado");
// console.log(persona5.#banco); // SyntaxError

// getters y setters

class GetSetPersona {

    #nombre
    #edad
    #alias
    #banco

  constructor(nombre, edad, alias, banco) {
    this.#nombre = nombre
    this.#edad = edad
    this.#alias = alias
    this.#banco = banco
  }

  get nombre () {
    return this.#nombre
  }

  set banco (newBanco) {
    this.#banco = newBanco
  }

   get banco () {
    return this.#banco
  }
}

persona6 = new GetSetPersona("Javi", 32, "FJJA", "IBAN123456789")

console.log(persona6)
console.log(persona6.nombre)

persona6.banco = "new IBAN123456789"
console.log(persona6.banco)

// Herencia

class Animal {

    constructor(name) {
        this.name = name
    }

    sound() {
        console.log("El animal emite un sonido generico")
    }
}

class Dog extends Animal {
   
    run() {
        console.log("El perro corre")
   
    }
}

let MyDog = new Dog("Doggy")
MyDog.run()
MyDog.sound()