// Ejercicio 1//

let cal1 = parseFloat(prompt('Ingrense la primer calificacion del 0 al 100'));
let cal2 = parseFloat(prompt('Ingrense la segunda calificacion del 0 al 100'));
let cal3 = parseFloat(prompt('Ingrense la tercera calificacion del 0 al 100'));
let cal4 = parseFloat(prompt('Ingrense la cuarta calificacion del 0 al 100'));
let promedio = (cal1 + cal2 + cal3 + cal4) / 4;

if (promedio >= 90) {
    alert("Eres excelente con un promedio de: " + promedio);
} else if (promedio >= 75) {
    alert("Has sido aprobado con un promedio de: " + promedio);
} else if (promedio >= 60) {
    alert("Casi que repruebas con un promedio de: " + promedio);
} else {
    alert("Has sido reprobado con un promedio de: " + promedio);
}


// Ejercicio 2//


let edad = parseInt(prompt('Ingrese su edad'));
let estudiante = prompt('¿Eres estudiante?').toLowerCase();
let distancia = parseInt(prompt('Ingrese la distancia en km que viajará'));
let costo = 50;


if (edad >= 18) {
    costo = costo * 0.50; 
    costo = costo * 0.70; 
}


if (distancia > 30) {
    let exceso = distancia - 30;
    let bloques = Math.floor(exceso / 10);
    let aumento = bloques * (50 * 0.10); 
    costo = costo + aumento;
}

alert('El precio final es de: ' + costo);



//Ejercicio 3//


let opcionDelUsuario = parseInt(prompt('¿Que desea convertir? Elija una de las siguientes opciones: \n 1. Grados Celsius a Fahrenheit \n 2. Grados Fahrenheit a Celsius \n 3. Metros a Kilometros \n 4. Kilometros a Metros \n'));

if (opcionDelUsuario === 1) {
    let gradosCelsius = parseFloat(prompt('Ingrese los grados Celsius'));
    let gradosFahrenheit = (gradosCelsius * 1.8) + 32;
    alert('Los grados Fahrenheit son: ' + gradosFahrenheit);
} else if (opcionDelUsuario === 2) {
    let gradosFahrenheit = parseFloat(prompt('Ingrese los grados Fahrenheit'));
    let gradosCelsius = (gradosFahrenheit - 32) / 1.8;
    alert('Los grados Celsius son: ' + gradosCelsius);
} else if (opcionDelUsuario === 3) {
    let metros = parseFloat(prompt('Ingrese los metros'));
    let kilometros = metros / 1000;
    alert('Los kilometros son: ' + kilometros);
} else if (opcionDelUsuario === 4) {
    let kilometros = parseFloat(prompt('Ingrese los kilometros'));
    let metros = kilometros * 1000;
    alert('Los metros son: ' + metros);
} else {
    alert('Opcion no valida');
}

//Ejercicio 4//


let total = parseFloat(prompt("Ingrese el precio total de la compra:"));
let tarjeta = prompt("¿Tiene tarjeta de cliente frecuente? (si/no)").toLowerCase();

let precioFinal = total;
let mensaje = "";

if (total > 500) {
    precioFinal = total * 0.90; 
    mensaje = "Se aplicó un 10% de descuento";

    if (tarjeta === "si") {
        precioFinal = precioFinal * 0.95; 
        mensaje += " + 5% adicional por tarjeta";
    }

} else if (total <= 100) {
    precioFinal = total * 1.05; 
    mensaje = "Se aplicó un recargo del 5%";
} else {
    mensaje = "No se aplicaron descuentos";
}

alert("Precio final: $" + precioFinal.toFixed(2) + "\n" + mensaje);


//Ejercicio 5//



let nacimiento = parseInt(prompt("Ingrese su año de nacimiento:"));
let actual = parseInt(prompt("Ingrese el año actual:"));
let cumplio = prompt("¿Ya cumplió años este año? (si/no)").toLowerCase();

let edad = actual - nacimiento;

if (cumplio === "no") {
    edad = edad - 1;
}

let etapa = "";

if (edad < 18) {
    etapa = "Menor de edad";
} else if (edad >= 18 && edad <= 30) {
    etapa = "Adulto joven";
} else if (edad >= 31 && edad <= 59) {
    etapa = "Adulto";
} else {
    etapa = "Adulto mayor";
}

alert("Tu edad es: " + edad + "\nEtapa de vida: " + etapa);

 */

