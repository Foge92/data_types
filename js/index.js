// Crea una variable que contenga la marca de un automóvi
var marcaAutomovil = "Chevrolet";

//Crea un variable para almacenar la edad
var edad = 26;

//Crea una variable `hacker1` con el nombre del conductor.
//var hacker1 = window.prompt("Escribe el nombre del conductor");

//Imprime `"El nombre del conductor es XXXX"`.
//console.log("El nombre del conductor es " + hacker1);

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

/*
Bonus 1:
Crea 3 parrafos. Guarda el texto en una variable.
Haz que tu programa cuente el número de palabras del parrafo.
Haz que tu programa cuente cuantas veces aparece et en el texto.
*/
var parr1 = document.getElementsByClassName(".parrafo-1");
var parr2 = document.getElementsByClassName(".parrafo-2");
var parr3 = document.getElementsByClassName(".parrafo-3");

var parrafo;
var numeroPalabras;
var parrafoDividido;

function cuentaPalabras(parrafo) {
    parrafoDividido = parrafo.split(" ");
    numeroPalabras = parrafoDividido.length;

    return `"El numero de palabras es ${numeroPalabras} ."`;
} //cuenta palabras

console.log(cuentaPalabras(parr1));
console.log(cuentaPalabras(parr2));
console.log(cuentaPalabras(parr3));


/*
function cuentaEt(parrafo) {

        if (parrafo.toLowerCase() === "et") 
    
        
        return `"La palabra 'et' se repite ${veces} veces"`;

}//cuentaEt

console.log(cuentaEt(parr1));
console.log(cuentaEt(parr2));
console.log(cuentaEt(parr3));
*/

/*
Bonus 2:
Crea una nueva variable phraseToCheck y esta debe de contener un string como valor.
 Escribe un programa que verifique si esta variable es un Palindromo. 
*/
let phraseToCheck;
let palindromo;

function checaPalindromo(phraseToCheck) {
    palindromo = phraseToCheck.toLowerCase().split("").reverse().join("").replace(" ", "");
    frase = phraseToCheck.toLowerCase().replace(" ", "");
    if (palindromo == frase) return "Si es palindromo"
    if (palindromo != frase) return "No es palindromo"
} //checaPalindromo

console.log(checaPalindromo("A man, a plan, a canal, Panama!"));
console.log(checaPalindromo("Amor, Roma"));
console.log(checaPalindromo("race car"));
console.log(checaPalindromo("stack cats"));
console.log(checaPalindromo("step on no pets"));
console.log(checaPalindromo("taco cat"));
console.log(checaPalindromo("put it up"));
console.log(checaPalindromo("Was it a car or a cat I saw?"));
console.log(checaPalindromo("No 'x' in Nixon"));
