let user = "Funval";
let password = "Progra123";
let tries = 3;
let balance = 1000;

while (tries > 0) {
    let userGuest = prompt(' Bienvenido al banco Funval, ingrese su usuario:');
    let passwordGuest = prompt("Ingrese su contraseña:");
    
    if (userGuest === user && passwordGuest === password) {
        alert("Bienvenido/a " + userGuest);
        let continueMenu = true; 

        
        while (continueMenu) {
            let menuOption = prompt(`
                Seleccione una de las siguientes opciones:

                1- Retiro
                2- Deposito
                3- Ver Saldo
                4- Salir
            `);

            switch (menuOption) {
                case "1":
                    let withdrawal = parseFloat(prompt("Monto a retirar:"));
                    if (withdrawal <= balance) {
                        balance -= withdrawal;
                        alert(`Retiro exitoso. Saldo: $${balance}`);
                    } else {
                        alert("Saldo insuficiente");
                    }
                    break;
                case "2":
                    let deposit = parseFloat(prompt("Monto a depositar:"));
                    balance += deposit;
                    alert(`Depósito exitoso. Saldo: $${balance}`);
                    break;
                case "3":
                    alert(`Tu saldo es: $${balance}`);
                    break;
                case "4":
                    alert("Gracias por usar nuestro servicio vuelva pronto");
                    continueMenu = false; 
                    tries = 0; 
                    break;
                default:
                    alert("Opción no válida");
                    break;
            }
        }
    } else {
        tries--;
        if (tries > 0) {
            alert(`Datos incorrectos. Te quedan ${tries} intentos.`);
        } else {
            alert("Excedió el número de intentos. Comuníquese con su banco.");
        }
    }
}