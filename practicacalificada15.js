
 for ( let numTriangulos = 0; numTriangulos < 3; numTriangulos++) {
    let base = parseFloat(prompt('Ingrese la base del triangulo ' + (numTriangulos + 1)));
    let altura = parseFloat(prompt('Ingrese la altura del triangulo ' + (numTriangulos + 1)));
    let area = (base * altura) / 2;
    alert('El area del triangulo ' + (numTriangulos + 1) + ' es: ' + area);
}


//Ejercicio 2//


 for ( let conversion = 0; conversion < 5; conversion++) {
    let numCelsius = parseFloat(prompt('Ingrese los grados Celsius de la temperatura ' + (conversion + 1)));
    
    let resultado = (numCelsius * 1.8 ) + 32;
    alert('En grados Fahrenheit la temperatura de ' + (conversion + 1) + ' es: ' + resultado + '°F');
} 


//Ejercicio 3//

 let vocales = ['a', 'e', 'i', 'o', 'u']
let intentos = 3
while (intentos > 0) {
    let palabra = prompt(`Ingresa una palabra (Te quedan ${intentos} intentos):`)
    if (palabra === null) break
    if (palabra.length < 3) {
        alert('La palabra debe tener al menos 3 caracteres. No cuenta como intento.')
        
    } else {
        let totalVocales = 0
        for (let i = 0; i < palabra.length; i++) {
            if (vocales.includes(palabra[i].toLowerCase())) {
                totalVocales++
            }
        }
        alert(`La palabra "${palabra}" tiene ${totalVocales} vocales.`)
        intentos--
    }
}
alert("Gracias por usar el programa.") */

//Ejercicio 4//

 alert('Al usar este programa te lanzara un mensaje diciendo si es par o impar el rango de numeros que des.')
function clasificarParesImpares(inicio, fin) {
    alert(`--- Clasificando desde ${inicio} hasta el ${fin} ---`);

    for (let i = inicio; i <= fin; i++) {
        if (i % 2 === 0) {
            alert(`${i} es PAR`);
        } else {
            alert(`${i} es IMPAR`);
        }
    }
}
let numInicio = parseInt(prompt("Introduce el número de inicio:"));
let numFin = parseInt(prompt("Introduce el número de fin:"));

clasificarParesImpares(numInicio, numFin); */


//Ejercicio 5//


 function mayorYSuma(numeros) {
    let sumaTotal = 0
    let elMayor = numeros[0];
    for (let i = 0; i < numeros.length; i++) {
        sumaTotal += numeros[i]

        if (numeros[i] > elMayor) {
            elMayor = numeros[i]
        }
    }
    
    alert("El número mayor es: " + elMayor)
    alert("La suma total es: " + sumaTotal)
}
let misNumeros = []
let contador = 5

while (contador > 0) {
    let entrada = prompt(`Ingresa un número (Faltan ${contador}):`)
    
   
    if (entrada !== null && entrada !== "") {
        misNumeros.push(parseFloat(entrada))
        contador--
    } else {
        alert("Por favor, ingresa un número válido.")
    }
}
mayorYSuma(misNumeros) */