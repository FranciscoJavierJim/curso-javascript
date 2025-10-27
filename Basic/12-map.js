// map

// declaracion

let myMap = new Map()
console.log(myMap)

// inicializacion

myMap = new Map([
    ["name", "Javi"],
    ["surname", "FJJA"],
    ["age", 32],
    ["email", "javi@javi.com"],
])

console.log(myMap)

// metodos y propiedades comunes

// set: añade o actualiza un elemento en el map
myMap.set("city", "Córdoba")
myMap.set("age", 33) // actualiza el valor de age
console.log(myMap)

// get: obtiene el valor de una clave
console.log(myMap.get("name")) // Javi
console.log(myMap.get("age")) // 33
console.log(myMap.get("ages")) // undefined (no existe)

// has: devuelve true si la clave existe en el map, false si no
console.log(myMap.has("email")) // true
console.log(myMap.has("phone")) // false

// delete: elimina un elemento del map
myMap.delete("surname")
console.log(myMap)

// keys: devuelve un iterable con las claves del map
console.log(myMap.keys())

// values: devuelve un iterable con los valores del map
console.log(myMap.values())

// entries: devuelve un iterable con los pares [clave, valor]
console.log(myMap.entries())

// size: devuelve el número de elementos en el map
console.log(myMap.size)

// clear: elimina todos los elementos del map
myMap.clear()
console.log(myMap)

