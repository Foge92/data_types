/*1.1 Crea una variable que contenga la marca de un automóvil*/
let marcaAutomovil="Volkswagen";
console.log(marcaAutomovil);
console.log("-------------------------");
/*1.2 Crea un variable para almacenar la edad*/
let edad;
edad=24;
console.log(edad);
console.log("-------------------------");
/*1.3 Crea una variable `hacker1` con el nombre del conductor.*/
let hacker1;
hacker1="Iósif Stalin";
/*1.4 Imprime `"El nombre del conductor es XXXX"`.*/
console.log("El nombre del conductor es: "+hacker1);
console.log("-------------------------");
/*1.5 Imprime la suma de los siguientes valores, usando las siguientes variables :  let numUno = 38, let numDos = 14*/
let numUno=38;
let numDos=14;
console.log("La suma de los dos números es: ",numUno+numDos);
console.log("-------------------------");
/*1.6 Crea una tarjeta de presentación, y crea variables tales como nombre, hobby, mascota
Haz que se despliegue la información en el lugar correcto:
Ejemplo : "Hola soy YYYY. Me gusta YYYYYY  en mis tiempos libres y tengo un YYYY como mascota"*/
let nombre;
nombre="Israel Hernández Vázquez";
let hobby;
hobby="Ver Anime en mis tiempos libres y aprender cosas nuevas (Ejemplo: Leer acerca de la URSS)";
let mascota;
mascota="gato"
console.log("Hola soy: "+nombre+". Me gusta "+hobby+" en mis tiempos libres y tengo un "+mascota+" como mascota");
console.log("-------------------------");
/*
### Conversión de tipos

Aplica lo aprendido en clase respecto a conversión de datos, prueba y llena la siguiente tabla.

| Value to be converted | number() | String() | Boolean() |
|-----------------------|----------|----------|-----------|
| false                 |    0     |  "false" |  false    |
| true                  |    1     |   "true" |   true    |
| 0                     |    0     |    "0"   |  false    |
| 1                     |    1     |    "1"   |  true     |
| “0”                   |    0     |    "0"   |    0      |
| “000”                 |    0     |  "000"   |  true     |
| “1”                   |    1     |   "1"    |  true     |
| NaN                   |   NaN    |  "NaN"   |  false    |
| Infinity              | Infinity |"Infinity"|  true     |
| -Infinity             |-Infinity |"-Infinity"| true     |
| “”                    |    0     |          |  false    |
| “20”                  |   20     |   "20"   |  true     |
| “Twenty”              |   NaN    | "Twenty" |  true     |
| null                  |    0     |  "null"  |  false    |
| undefinited *Duda
    (undefined)         |  NaN    |"undefined"|  false    |
*/

/*Value 1*/
value1=false;
console.log(value1);
console.log("typeof false ["+typeof(value1)+"]");
falseNumber=Number(value1);
console.log(falseNumber);
console.log("typeof false Number ["+typeof(falseNumber)+"]");

falseString=String(value1);
console.log(falseString);
console.log("typeof false String ["+typeof(falseString)+"]");

falseBoolean=Boolean(value1);
console.log(falseBoolean);
console.log("typeof false Boolean ["+typeof(falseBoolean)+"]");
console.log("-------------------------");

/*Value 2*/
value2=true;
console.log(value2);
console.log("typeof true ["+typeof(value1)+"]");
trueNumber=Number(value2);
console.log(trueNumber);
console.log("typeof true Number ["+typeof(trueNumber)+"]");

trueString=String(value2);
console.log(trueString);
console.log("typeof true String ["+typeof(trueString)+"]");

trueBoolean=Boolean(value2);
console.log(trueBoolean);
console.log("typeof true Boolean ["+typeof(trueBoolean)+"]");
console.log("-------------------------");

/*Value 3*/
value3=0;
console.log(value3);
console.log("typeof cero ["+typeof(value3)+"]");
ceroNumber=Number(value3);
console.log(ceroNumber);
console.log("typeof cero Number ["+typeof(ceroNumber)+"]");

ceroString=String(value3);
console.log(ceroString);
console.log("typeof cero String ["+typeof(ceroString)+"]");

ceroBoolean=Boolean(value3);
console.log(ceroBoolean);
console.log("typeof cero Boolean ["+typeof(ceroBoolean)+"]");
console.log("-------------------------");

/*Value 4*/
value4=1;
console.log(value4);
console.log("typeof uno ["+typeof(value4)+"]");
unoNumber=Number(value4);
console.log(unoNumber);
console.log("typeof uno Number ["+typeof(unoNumber)+"]");

unoString=String(value4);
console.log(unoString);
console.log("typeof uno String ["+typeof(unoString)+"]");

unoBoolean=Boolean(value4);
console.log(unoBoolean);
console.log("typeof uno Boolean ["+typeof(unoBoolean)+"]");
console.log("-------------------------");

/*Value 5*/
value5="0";
console.log(value5);
console.log("typeof cero String ["+typeof(value5)+"]");
ceroSNumber=Number(value5);
console.log(ceroSNumber);
console.log("typeof cero String Number ["+typeof(ceroSNumber)+"]");

ceroSString=String(value5);
console.log(ceroSString);
console.log("typeof cero String String ["+typeof(ceroSString)+"]");

ceroSBoolean=Boolean(value5);
console.log(ceroSBoolean);
console.log("typeof cero String Boolean ["+typeof(ceroSBoolean)+"]");
console.log("-------------------------");

/*Value 6*/
value6="000";
console.log(value6);
console.log("typeof triple cero String ["+typeof(value6)+"]");
tripleCeroSNumber=Number(value6);
console.log(tripleCeroSNumber);
console.log("typeof triple cero String Number ["+typeof(tripleCeroSNumber)+"]");

tripleCeroSString=String(value6);
console.log(tripleCeroSString);
console.log("typeof triple cero String String ["+typeof(tripleCeroSString)+"]");

tripleceroSBoolean=Boolean(value6);
console.log(tripleceroSBoolean);
console.log("typeof triple cero String Boolean ["+typeof(tripleceroSBoolean)+"]");
console.log("-------------------------");

/*Value 7*/
value7="1";
console.log(value7);
console.log("typeof uno String ["+typeof(value7)+"]");
unoSNumber=Number(value7);
console.log(unoSNumber);
console.log("typeof uno String Number ["+typeof(unoSNumber)+"]");

unoSString=String(value7);
console.log(unoSString);
console.log("typeof uno String String ["+typeof(unoSString)+"]");

unoSBoolean=Boolean(value7);
console.log(unoSBoolean);
console.log("typeof uno String Boolean ["+typeof(unoSBoolean)+"]");
console.log("-------------------------");

/*Value 8*/
value8=NaN;
console.log(value8);
console.log("typeof NaN ["+typeof(value8)+"]");
nanNumber=Number(value8);
console.log(nanNumber);
console.log("typeof NaN Number ["+typeof(nanNumber)+"]");

nanString=String(value8);
console.log(nanString);
console.log("typeof NaN String ["+typeof(nanString)+"]");

nanBoolean=Boolean(value8);
console.log(nanBoolean);
console.log("typeof NaN Boolean ["+typeof(nanBoolean)+"]");
console.log("-------------------------");

/*Value 9*/
value9=Infinity;
console.log(value9);
console.log("typeof Infinity ["+typeof(value9)+"]");
infinityNumber=Number(value9);
console.log(infinityNumber);
console.log("typeof Infinity Number ["+typeof(infinityNumber)+"]");

infinityString=String(value9);
console.log(infinityString);
console.log("typeof Infinity String ["+typeof(infinityString)+"]");

infinityBoolean=Boolean(value9);
console.log(infinityBoolean);
console.log("typeof Inifinity Boolean ["+typeof(infinityBoolean)+"]");
console.log("-------------------------");

/*Value 10*/
value10=-Infinity;
console.log(value10);
console.log("typeof -Infinity ["+typeof(value10)+"]");
menosInfinityNumber=Number(value10);
console.log(menosInfinityNumber);
console.log("typeof -Infinity Number ["+typeof(menosInfinityNumber)+"]");

menosInfinityString=String(value10);
console.log(menosInfinityString);
console.log("typeof -Infinity String ["+typeof(menosInfinityString)+"]");

menosInfinityBoolean=Boolean(value10);
console.log(menosInfinityBoolean);
console.log("typeof -Infinity Boolean ["+typeof(menosInfinityBoolean)+"]");
console.log("-------------------------");

/*Value 11*/
value11="";
console.log(value11);
console.log("typeof -Infinity ["+typeof(value11)+"]");
vacioNumber=Number(value11);
console.log(vacioNumber);
console.log("typeof -Infinity Number ["+typeof(vacioNumber)+"]");

vacioString=String(value11);
console.log(vacioString);
console.log("typeof -Infinity String ["+typeof(vacioString)+"]");

vacioBoolean=Boolean(value11);
console.log(vacioBoolean);
console.log("typeof -Inifinity Boolean ["+typeof(vacioBoolean)+"]");
console.log("-------------------------");

/*Value 12*/
value12="20";
console.log(value12);
console.log("typeof veinte String ["+typeof(value12)+"]");
veinteSNumber=Number(value12);
console.log(veinteSNumber);
console.log("typeof veinte String Number ["+typeof(veinteSNumber)+"]");

veinteSString=String(value12);
console.log(veinteSString);
console.log("typeof veinte String String ["+typeof(veinteSString)+"]");

veinteSBoolean=Boolean(value12);
console.log(veinteSBoolean);
console.log("typeof veinte String Boolean ["+typeof(veinteSBoolean)+"]");
console.log("-------------------------");

/*Value 13*/
value13="Twenty";
console.log(value13);
console.log("typeof Twenty String ["+typeof(value13)+"]");

twentySNumber=Number(value13);
console.log(twentySNumber);
console.log("typeof Twenty String Number ["+typeof(twentySNumber)+"]");

twentySString=String(value13);
console.log(twentySString);
console.log("typeof Twenty String String ["+typeof(twentySString)+"]");

twentySBoolean=Boolean(value13);
console.log(twentySBoolean);
console.log("typeof Twenty String Boolean ["+typeof(twentySBoolean)+"]");
console.log("-------------------------");

/*Value 14*/
value14=null;
console.log(value14);
console.log("typeof null ["+typeof(value14)+"]");

nullNumber=Number(value14);
console.log(nullNumber);
console.log("typeof null Number ["+typeof(nullNumber)+"]");

nullString=String(value14);
console.log(nullString);
console.log("typeof null String ["+typeof(nullString)+"]");

nullBoolean=Boolean(value14);
console.log(nullBoolean);
console.log("typeof null Boolean ["+typeof(nullBoolean)+"]");
console.log("-------------------------");

/*Value 15*/
value15=undefined;
console.log(value15);
console.log("typeof undefined ["+typeof(value15)+"]");

undefinedNumber=Number(value15);
console.log(undefinedNumber);
console.log("typeof undefined Number ["+typeof(undefinedNumber)+"]");

undefinedString=String(value15);
console.log(undefinedString);
console.log("typeof undefined String ["+typeof(undefinedString)+"]");

undefinedBoolean=Boolean(value15);
console.log(undefinedBoolean);
console.log("typeof undefined Boolean ["+typeof(undefinedBoolean)+"]");
console.log("-------------------------");

/*
#### Bonus 1:
Ve a [lorem ipsum generator](http://www.lipsum.com/) y:
  - Crea 3 parrafos. Guarda el texto en una variable.
  - Haz que tu programa cuente el número de palabras del parrafo.
  - Haz que tu programa cuente cuantas veces aparece  [`et`](https://en.wiktionary.org/wiki/et#Latin) en el texto.
*/

loremIpsum="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultricies ut magna id scelerisque. Curabitur vitae tellus viverra, vehicula ex non, dignissim ipsum. Mauris nec tortor nibh. Pellentesque nec rhoncus metus. Sed lobortis justo accumsan aliquam commodo. Duis id bibendum libero, eu fermentum enim. Vivamus tincidunt felis ut velit mollis, at faucibus dolor viverra. Donec vel est orci.\n\n"
            +"Nam sed lobortis eros, a pulvinar lorem. Donec fringilla massa vel odio commodo vestibulum at nec dolor. Cras eget volutpat odio, eleifend semper lorem. Fusce rhoncus elementum ultricies. Proin consectetur, ipsum eu facilisis auctor, magna est euismod augue, vel finibus felis eros vel eros. Etiam commodo quam velit, vel pellentesque nisl euismod vitae. Donec ut tortor gravida, vestibulum nunc at, placerat leo. Pellentesque hendrerit metus dui, tincidunt condimentum lacus tincidunt eu. In at facilisis nisi. Pellentesque a rutrum turpis. Fusce ac egestas lectus, ac sodales est. Cras nisi enim, commodo eget mauris vel, faucibus dapibus ex. Nam vel mauris quis ex aliquam bibendum. Sed vel dignissim ligula, vel lacinia lacus. Mauris molestie quis augue placerat porta.\n\n"
            +"Fusce luctus luctus leo, et malesuada orci cursus sit amet. Etiam vitae mi blandit, sagittis neque in, finibus metus. Mauris pellentesque felis non nulla finibus sollicitudin sit amet sit amet velit. Donec ultricies aliquet est, tempus condimentum orci bibendum in. Vestibulum gravida lacinia finibus. In convallis, orci lobortis accumsan vehicula, elit nisi egestas quam, ac volutpat eros velit eu ex. Praesent purus nulla, ultrices finibus sem a, ultricies tristique est. Nulla pulvinar ante id urna consequat congue. Praesent sed nisi nec elit efficitur accumsan vel a neque. Vivamus at aliquam magna, sed scelerisque elit. Nam in varius neque. Fusce vel nulla consequat, pretium sem sit amet, posuere ligula. Integer lorem ex, suscipit nec interdum a, porttitor non magna."

console.log(loremIpsum);

loremIpsum="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultricies ut magna id scelerisque. Curabitur vitae tellus viverra, vehicula ex non, dignissim ipsum. Mauris nec tortor nibh. Pellentesque nec rhoncus metus. Sed lobortis justo accumsan aliquam commodo. Duis id bibendum libero, eu fermentum enim. Vivamus tincidunt felis ut velit mollis, at faucibus dolor viverra. Donec vel est orci. "
            +"Nam sed lobortis eros, a pulvinar lorem. Donec fringilla massa vel odio commodo vestibulum at nec dolor. Cras eget volutpat odio, eleifend semper lorem. Fusce rhoncus elementum ultricies. Proin consectetur, ipsum eu facilisis auctor, magna est euismod augue, vel finibus felis eros vel eros. Etiam commodo quam velit, vel pellentesque nisl euismod vitae. Donec ut tortor gravida, vestibulum nunc at, placerat leo. Pellentesque hendrerit metus dui, tincidunt condimentum lacus tincidunt eu. In at facilisis nisi. Pellentesque a rutrum turpis. Fusce ac egestas lectus, ac sodales est. Cras nisi enim, commodo eget mauris vel, faucibus dapibus ex. Nam vel mauris quis ex aliquam bibendum. Sed vel dignissim ligula, vel lacinia lacus. Mauris molestie quis augue placerat porta. "
            +"Fusce luctus luctus leo, et malesuada orci cursus sit amet. Etiam vitae mi blandit, sagittis neque in, finibus metus. Mauris pellentesque felis non nulla finibus sollicitudin sit amet sit amet velit. Donec ultricies aliquet est, tempus condimentum orci bibendum in. Vestibulum gravida lacinia finibus. In convallis, orci lobortis accumsan vehicula, elit nisi egestas quam, ac volutpat eros velit eu ex. Praesent purus nulla, ultrices finibus sem a, ultricies tristique est. Nulla pulvinar ante id urna consequat congue. Praesent sed nisi nec elit efficitur accumsan vel a neque. Vivamus at aliquam magna, sed scelerisque elit. Nam in varius neque. Fusce vel nulla consequat, pretium sem sit amet, posuere ligula. Integer lorem ex, suscipit nec interdum a, porttitor non magna."

console.log(loremIpsum);

/*Ocupando funcion split*/
loremIpsumDividido = loremIpsum.split (" ");
numeroPalabras = loremIpsumDividido.length;
console.log(numeroPalabras);

function contadorPalabras(parrafo){
    let tamano=parrafo.length;
    let contador=0;
    for (var i=0; i < tamano; i++) {
        if(parrafo[i]==" "){
            if(i>0 && i<tamano-1){
                contador=contador+1;
            }
        }
    }

    if(contador>=1){
        contador=contador+1;
    }

    console.log(contador);
}

/*Mi funcion hecha llamada: Contador de palabras*/
contadorPalabras(loremIpsum);

/*
#### Bonus 2:
Crea una nueva variable `phraseToCheck` y esta debe de contener un string como valor. Escribe un programa que verifique si esta variable es 
un [Palindromo](https://en.wikipedia.org/wiki/Palindrome). Te damos unos ejemplos de palindromos.

  - "A man, a plan, a canal, Panama!"
  - "Amor, Roma"
  - "race car"
  - "stack cats"
  - "step on no pets"
  - "taco cat"
  - "put it up"
  - "Was it a car or a cat I saw?" and "No 'x' in Nixon".
*/

function palindromo(palabra){
    palabraO=palabra;
    palabra = eliminarAcentos(palabra);
    palabra = palabra.toLowerCase();
    palabra=palabra.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?]/g,"");

    if(verificarPalindromo(palabra)){
        console.log("---------------------------------------------");
        console.log("La palabra: "+palabraO+", SI es un palindromo.");
        console.log("---------------------------------------------");
    } else{
        console.log("---------------------------------------------");
        console.log("La palabra: "+palabraO+", NO es un palindromo.");
        console.log("---------------------------------------------");
    }

}

function verificarPalindromo(palabra){
    let tamano=palabra.length;
    for (var i=0; i < tamano/2; i++) {
        if(palabra[i] != palabra[tamano-1-i]){
            return false;
        }else{
            return true;
        }
    }
}

function eliminarAcentos(texto) {
    return texto.normalize('NFD').replace(/([^n\u0300-\u036f]|n(?!\u0303(?![\u0300-\u036f])))[\u0300-\u036f]+/gi,"$1").normalize();
}

let phraseToCheck;

phraseToCheck="A man, a plan, a canal, Panama!";
palindromo(phraseToCheck);

phraseToCheck="Amor, Roma";
palindromo(phraseToCheck);

phraseToCheck="race car";
palindromo(phraseToCheck);

phraseToCheck="stack cats";
palindromo(phraseToCheck);

phraseToCheck="step on no pets";
palindromo(phraseToCheck);

phraseToCheck="taco cat";
palindromo(phraseToCheck);

phraseToCheck="put it up";
palindromo(phraseToCheck);

phraseToCheck="Was it a car or a cat I saw?";
palindromo(phraseToCheck);

phraseToCheck="No 'x' in Nixon";
palindromo(phraseToCheck);

/*
Pruebas Mias
*/

phraseToCheck="No 'x' in Nixon Hola";
palindromo(phraseToCheck);

phraseToCheck="A man, a plan, a canal, Panama! i";
palindromo(phraseToCheck);

phraseToCheck="A la catalana banal, atácala.";
palindromo(phraseToCheck);

phraseToCheck="A mamá, Roma le aviva el amor a papá, y a papá, Roma le aviva el amor a mamá.";
palindromo(phraseToCheck);

phraseToCheck="A Mercedes, ese de crema.";
palindromo(phraseToCheck);

phraseToCheck="A mi loca Colima.";
palindromo(phraseToCheck);

phraseToCheck="A ti no, bonita.";
palindromo(phraseToCheck);

phraseToCheck="ti no, bonita.";
palindromo(phraseToCheck);

