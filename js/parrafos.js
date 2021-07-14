//Aqui vamos a contar cuantas palabras hay en un texto
let $parrafos = document.querySelectorAll('p');
console.log($parrafos);


$parrafos.forEach((el, indx) => {

    let parrafoActual = el.textContent;
    //Aqui vamos a quitar saltos de linea, tabulaciones, o espacios adicionales para asegurarnos de contar exactamente las palabras
    parrafoActual = parrafoActual.replace(/\r?\n/g," ");
    parrafoActual = parrafoActual.replace(/[]+/g," ");
    parrafoActual = parrafoActual.replace(/^ /g,"");
    parrafoActual = parrafoActual.replace(/ $/g,"");

    //Aqui vamos a convertir el parrafo en un array separandolo por espacios para sacar las palabras
    let parrafoContar = parrafoActual.split(" ").length;
    console.log(`El numero de palabras en el parrafo ${indx + 1} es de ${parrafoContar} palabras`);
    console.log(`El numero de veces que se repite la conjugacion "et" en el parrafo ${indx + 1} es de ${parrafoActual.match(/et/g).length} veces`);

    /* console.log(el.textContent.split(" ").length);
    console.log(el.textContent.match(/et/g).length); */
})