//Iteracion 1: Data types.

//1.1 Crea una variable que contenga la marca de un automóvil.
let carName = "tsuru";

//1.2 Crea un variable para almacenar la edad.
let edad = 27;

//1.3 Crea una variable `hacker1` con el nombre del conductor.
let hacker1 = "Ricardo";

//1.4 Imprime `"El nombre del conductor es XXXX"`.
console.log(`El nombre del conductor es ${hacker1}`);

//1.5 Imprime la suma de los siguientes valores, usando las siguientes variables :  let numUno = 38, let numDos = 14
let numUno = 38;
let numDos = 14;

let sumaResultado = numUno + numDos;
console.log(sumaResultado);

/* 1.6 Crea una tarjeta de presentación, y crea variables tales como nombre, hobby, mascota
Haz que se despliegue la información en el lugar correcto:
Ejemplo : "Hola soy YYYY. Me gusta YYYYYY  en mis tiempos libres y tengo un YYYY como mascota" */

let nombre = prompt("¿Cual es tu nombre?", "escribe uno");
let hobby = prompt("¿Cual es tu hobby favorito?", "escribe que te gusta hacer");
let nombreMascota = prompt("¿Que mascota tienes?", "escribe su nombre aqui");

let presentacion = `Hola, soy ${nombre}. Me gusta ${hobby} en mis tiempos libres y tengo un ${nombreMascota}`;

console.log(presentacion);

