//Marca de mi auto, string
let marca="Mercedes-Benz";
console.log("La marca de mi auto:"+marca);
//Mi edad, number
let edad=23;
console.log("Mi edad es: "+edad);
//Nombre del conductor, string
let hacker1="José Antonio";
console.log("El nombre del conductor es "+hacker1);
//Suma de dos numeros
let numUno=38;
let numDos=14;
console.log("La suma de "+numUno+" y "+numDos+" es "+(numDos+numUno));
//Tarjeta de presentación
let nombre="José Antonio";
let hobby="Ver Anime";
let mascota="Perro";
console.log("Hola soy "+nombre+". Me gusta "+hobby+" en mis tiempos libres y tengo un "+mascota+" como mascota.");
//Conversión
function conversion(valor){
console.log(Number(valor));
console.log(String(valor));
console.log(Boolean(valor));
}
conversion(undefined);

//Bonus1
let contenedor="Lorem ipsum      dolor sit amet, consectetur adipiscing elit. Integer hendrerit lectus varius sapien aliquam mattis. Suspendisse laoreet libero quis ligula finibus, eget consequat lorem dapibus. Aliquam quis viverra purus, a pharetra augue. Maecenas tincidunt in dolor at auctor. Morbi est nunc, feugiat quis ipsum id, pharetra efficitur quam. In in libero sit amet dui varius vestibulum a tempor nunc. Maecenas rhoncus augue vitae erat facilisis, sit amet cursus purus luctus. Nullam vel felis odio. Etiam lobortis pharetra enim, vel hendrerit metus tempus placerat. Vestibulum imperdiet ligula nisi, ut lacinia sem venenatis ac. Sed pretium mi a tellus commodo, eget ultricies ligula facilisis. Maecenas semper tristique enim quis vulputate. Nulla vitae massa sem. Fusce sollicitudin elit accumsan pellentesque accumsan. Nam pellentesque sem massa, nec vestibulum ante aliquet ac. Ut libero nisl, tempor ut feugiat non, sodales eu leo.\nNulla eu suscipit purus. Aenean suscipit nulla id rutrum imperdiet. Morbi vitae mauris porttitor augue blandit egestas. Etiam in odio mi. Donec mi ante, hendrerit sit amet sapien nec, hendrerit interdum diam. Nulla ante arcu, euismod quis hendrerit eget, lacinia id libero. In auctor leo nisl, ut pulvinar ipsum cursus eu. Sed sit amet augue tristique, interdum risus sed, ornare ligula. In non sagittis arcu. Etiam consectetur consectetur iaculis. Sed convallis sed magna quis convallis. In sed vehicula sem, in aliquet magna. In feugiat justo leo, et maximus lectus faucibus sed. Cras tortor ante, fermentum eget consectetur fermentum, gravida ut nulla. Pellentesque feugiat auctor leo.\nPhasellus scelerisque pharetra nisl sollicitudin ultricies. Praesent luctus felis eu semper placerat. Nunc consequat egestas sapien, vitae sagittis ex fermentum quis. Mauris sed turpis posuere, eleifend dui tempor, egestas justo. Curabitur ac tortor vestibulum, gravida mauris a, varius tortor. Aliquam sit amet elit pretium, mattis leo venenatis, elementum quam. Integer a eros sodales eros venenatis viverra. Praesent scelerisque et diam vitae vestibulum. Aliquam erat volutpat. Duis quis ipsum vitae ligula dignissim aliquet et sit amet nunc. Cras commodo lorem tellus. Duis pretium at enim non egestas. Ut lectus augue, malesuada id aliquam ac, malesuada ut arcu.";
//Función para contar numero de palabras
function contar(parrafo){
    let cadena;
    //console.log(parrafo.split(/\s+/));
    //Split, para crear un arreglo de subcadenas del string, indicado por un patron en este caso
    //los espacios en blanco
    cadena=parrafo.split(/\s+/);
    return cadena.length;
}
//Función para contar las veces que se encuentra et en la cadena
function buscaret(parrafo){
    let cadena;
    //Split, para crear un arreglo de subcadenas del string, indicado por un patron en este caso
    //los espacios en blanco
    cadena=parrafo.split("et");
    //Como la ultima subcadena no contiene et, se le resta un uno.
    return cadena.length-1;
}
console.log("El numero de palabras es "+contar(contenedor));
console.log("Las veces que se repite et es: "+buscaret(contenedor));



