// Crea una variable que contenga la marca de un automóvi
var marcaAutomovil = "Chevrolet";

//Crea un variable para almacenar la edad
var edad = 26;

//Crea una variable `hacker1` con el nombre del conductor.
var hacker1 = window.prompt("Escribe el nombre del conductor");

//Imprime `"El nombre del conductor es XXXX"`.
console.log("El nombre del conductor es " + hacker1);

//Imprime la suma de los siguientes valores, usando las siguientes variables :  let numUno = 38, let numDos = 14
var numUno = 38;
var numDos = 14;
var resultado = Number(numUno + numDos);
console.log(resultado);

/* Crea una tarjeta de presentación, y crea variables tales como nombre, hobby, mascota 
Haz que se despliegue la información en el lugar correcto:
        Ejemplo : "Hola soy YYYY. Me gusta YYYYYY  en mis tiempos libres y tengo un YYYY como mascota"
        */
var nombre = "América";
var gustos = "ver Netflix, ilustrar y jugar con mis gatos";
var mascota = "tres gatos"
let anadirInfo = document.getElementsByClassName('tarjeta-presentacion-info')[0];
anadirInfo.innerText = "Hola soy " + nombre + ". Me gusta " + gustos + " en mis tiempos libres y tengo " + mascota + " como mascota.";