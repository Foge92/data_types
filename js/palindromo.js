/* Bonus 2:
Crea una nueva variable phraseToCheck y esta debe de contener un string como valor. Escribe un programa que verifique si esta variable es un Palindromo. Te damos unos ejemplos de palindromos.

"A man, a plan, a canal, Panama!"
"Amor, Roma"
"race car"
"stack cats"
"step on no pets"
"taco cat"
"put it up"
"Was it a car or a cat I saw?" and "No 'x' in Nixon". */

//Esta solucion no la saque yo, pero me parecio hermosa cuando la descubri, y super sencilla de entender *-*
function esPalindromo(str) 
{
    return str == str.split('').reverse().join('');
}

//Pero la tuve que corregir :( para que quitara signos de puntuacion y ya no se ve tan hermosa
function esPalindromo(str) 
{   
    //creo una variable que quite signos de puntuacion de la cadena de texto.
    tmp = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()\s\?]/g,"").toLowerCase();
    return tmp == tmp.split('').reverse().join('');
}

console.log(esPalindromo("Was it a car or a cat I saw?"));