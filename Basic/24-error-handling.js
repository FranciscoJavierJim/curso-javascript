// manejo de errores

// excepcion
 let myObject
// console.log(myObject.email)

// tratamiento de errores
// try-catch

try {
    console.log(myObject.email)
    console.log("finaliza la ejecucion")
} catch (error) {
    console.log("se ha producido un error:", error.message)
}

// finally

try {
    console.log(myObject.email)
    console.log("finaliza la ejecucion")
} catch {
    console.log("se ha producido un error")
} finally{
    console.log("este codigo se ejecuta siempre")
}
