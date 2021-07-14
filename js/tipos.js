//Aqui vamos a guardar en una variable la etiqueta el contenido de la etiqueta tbody
let $number = document.querySelector('tbody');
console.log($number);

//Aqui encapsulamos todas las tr para despues iterar sobre ellas
let $numberChild = $number.querySelectorAll('tr');
console.log($numberChild);

/* $numberChild.forEach(el => {
    console.log(el.querySelector('td').textContent);
}) */

$numberChild.forEach(el => {
    el.querySelectorAll('td')[1].textContent = Number(el.querySelector('td').textContent);
    el.querySelectorAll('td')[2].textContent = String(el.querySelector('td').textContent);
    //Para los booleans 
    let bool = el.querySelector('td').textContent;

    //Aqui va a comparar por todos los tipos de boleano false
    if(bool === "false" || bool === "0" || bool === "NaN" || bool === '""' || bool === "null" || bool === "undefined"){
        el.querySelectorAll('td')[3].textContent = "false";
    } else {
        el.querySelectorAll('td')[3].textContent = "true"
    }
    
})