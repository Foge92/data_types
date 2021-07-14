// Iteración número 1
var marca = "Audi";

var edad = 18;

var hacker1 = "Roberto Ramirez";

console.log("El nombre del conductor es " + hacker1);

var numUno = 38;
var numDos = 14; 
console.log(numUno + numDos);

var miNombre = "Carlos";
var miEdad = 22;
var mihobby = "mis hobbies son saltar la cuerda, resolver problemas de Física, jugar Minecraft y juegos de mesa";
var miMascota = "he tenido tortugas, peces y una salamanquesa";
var miSueno = "mi sueño es volverme Físico Médico e inventar cosas biomédicas";
var miProContra = "soy alguien bastante organizado, con perspectiva ante los problemas, y versátil para todo. Podría crecer en mis habilidades de comunicación y orientación a futuro";
console.log("Hola a todos mi nombre es " + miNombre + ". Actualmente soy un joven de " + miEdad + " años y " + miSueno + ". \n" + "Considero que " + miProContra + 
    ". Y como datos curisos puedo mencionar que " + mihobby + "; y que por mascotas " + miMascota);

console.log(Number(false)); // 0
console.log(String(false)); // "false"
console.log(Boolean(false)); // false

console.log(Number(true)); // 1
console.log(String(true)); // "true"
console.log(Boolean(true)); // true

console.log(Number(0));  // 0
console.log(String(0)); // "0"
console.log(Boolean(0)); // false

console.log(Number(1)); // 1
console.log(String(1)); // "1"
console.log(Boolean(1)); // true

console.log(Number("0")); // 0
console.log(String("0")); // "0"
console.log(Boolean("0")); // true

console.log(Number("000")); // 0
console.log(String("000")); // "000"
console.log(Boolean("000")); // true

console.log(Number("1")); // 1
console.log(String("1")); // "1"
console.log(Boolean("1")); // true

console.log(Number(NaN)); // NaN
console.log(String(NaN)); // "NaN"
console.log(Boolean(NaN)); // false

console.log(Number(Infinity)); // Infinity
console.log(String(Infinity)); // "Infinity"
console.log(Boolean(Infinity)); // true

console.log(Number(-Infinity)); // -Infinity
console.log(String(-Infinity)); // "-Infinity"
console.log(Boolean(-Infinity)); // true

console.log(Number("")); // 0
console.log(String("")); //
console.log(Boolean("")); // false

console.log(Number("20")); // 20
console.log(String("20")); // "20"
console.log(Boolean("20")); // false

console.log(Number("twenty")); // NaN
console.log(String("twenty")); // "twenty"
console.log(Boolean("twenty")); // true

console.log(Number(null)); // 0
console.log(String(null)); // "null"
console.log(Boolean(null)); // false

console.log(Number(undefined)); // NaN
console.log(String(undefined)); // "undefined"
console.log(Boolean(undefined)); // false