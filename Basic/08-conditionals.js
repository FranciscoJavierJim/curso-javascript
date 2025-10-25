//if (si)
let age =37

if (age == 37) {
    console.log("Tienes 37 años")
}

//else (si no)
else {
    console.log("No tienes 37 años")
}

//else if (si no, si)
if (age == 37) {
    console.log("Tienes 37 años")
}
else if (age < 18) {
    console.log("Eres menor de edad")
}
    else {
    console.log("No tienes 37 años y eres mayor de edad")
}


//Operador ternario
const message = 37 ? "La edad es 37" : "La edad no es 37"
console.log(message)


//switch (segun)
let day = 5
let dayName 

switch (day) {
    case 0:
        dayName = "lunes"
        break
    case 1:
        dayName = "martes"
        break
    case 2:
        dayName = "miércoles"
        break
    case 3:
        dayName = "jueves"
        break
    case 4:
        dayName = "viernes"
        break
    case 5:
        dayName = "sábado"
        break
    case 6:
        dayName = "domingo"
        break
    default:
        dayName = "Día no válido"
}

console.log(`Hoy es ${dayName}`)
