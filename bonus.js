// primer parrafo
let parrafo = "Lorem Ipsum es simplemente texto de relleno de la industria de la impresión y la composición tipográfica. Lorem Ipsum ha sido el texto de relleno estándar de la industria desde la década de 1500, cuando un impresor desconocido tomó una galera de tipos y la mezcló para hacer un libro de muestras tipográficas. Ha sobrevivido no solo a cinco siglos, sino también al salto a la composición tipográfica electrónica, permaneciendo esencialmente sin cambios. Se popularizó en la década de 1960 con el lanzamiento de hojas de Letraset que contenían pasajes de Lorem Ipsum y, más recientemente, con software de autoedición como Aldus PageMaker que incluía versiones de Lorem Ipsum."
// segundo parrafo
let parrafo2 = "Es un hecho establecido desde hace mucho tiempo que un lector se distraerá con el contenido legible de una página cuando mire su diseño. El punto de usar Lorem Ipsum es que tiene una distribución de letras más o menos normal, en lugar de usar 'Contenido aquí, contenido aquí', lo que hace que parezca un inglés legible. Muchos paquetes de autoedición y editores de páginas web ahora usan Lorem Ipsum como su modelo de texto predeterminado, y una búsqueda de 'lorem ipsum' revelará muchos sitios web aún en su infancia. Varias versiones han evolucionado a lo largo de los años, a veces por accidente, a veces a propósito (humor inyectado y cosas por el estilo)"
// tercer parrafo
let parrafo3 = "Hay muchas variaciones de pasajes de Lorem Ipsum disponibles, pero la mayoría han sufrido alteraciones de alguna forma, por humor inyectado o palabras aleatorias que no parecen ni un poco creíbles. Si va a utilizar un pasaje de Lorem Ipsum, debe asegurarse de que no haya nada vergonzoso escondido en medio del texto. Todos los generadores de Lorem Ipsum en Internet tienden a repetir fragmentos predefinidos según sea necesario, lo que lo convierte en el primer generador verdadero en Internet. Utiliza un diccionario de más de 200 palabras latinas, combinado con un puñado de estructuras de oraciones modelo, para generar Lorem Ipsum que parece razonable. Por lo tanto, el Lorem Ipsum generado está siempre libre de repeticiones, humor inyectado o palabras no características, etc."
textoAreaDividido = parrafo.split(" "); // esta linea divide la cadena en cadenas chicas cada vez que encuentra un espacio.
numeroPalabras = textoAreaDividido.length; // esta linea cuenta cuantas cadenitas se hicieron
console.log("El primer parrafo tiene " + numeroPalabras + " palabras."); // muestra en pantalla el numero de palabras de parrafo

textoPalabraRepetida = parrafo.split("et"); // esta linea crea una cadena chiquita cada vez que aparece un et
numPalabraRepetida = textoPalabraRepetida.length; // cuenta cuantas cadenitas hay
console.log("En el primer parrafo aparece et " + numPalabraRepetida + " veces") // muestra en la pantalla el numero de las cadenitas que hay 

textoAreaDividido2 = parrafo2.split(" "); 
numeroPalabras2 = textoAreaDividido2.length; 
console.log("El segundo parrafo tiene " + numeroPalabras2 + " palabras."); 

textoPalabraRepetida2 = parrafo2.split("et");
numPalabraRepetida2 = textoPalabraRepetida2.length;
console.log("En el segundo parrafo aparece et " + numPalabraRepetida2 + " veces");

textoAreaDividido3 = parrafo3.split(" "); 
numeroPalabras3 = textoAreaDividido3.length; 
console.log("El tercer parrafo tiene " + numeroPalabras3 + " palabras."); 

textoPalabraRepetida3 = parrafo3.split("et");
numPalabraRepetida3 = textoPalabraRepetida3.length;
console.log("En el tercer parrafo aparece et " + numPalabraRepetida3 + " veces");