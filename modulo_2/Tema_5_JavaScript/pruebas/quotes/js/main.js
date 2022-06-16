//compruebo que esté bien enlazado y lo veo en Consola
console.log("holaaaaaaa");
document.write("Hola desde JavaScript");


//document.getElementsByTagName("a").item(2).addEventListener("click", saludo);

//Creo los arrays:
quotes = new Array(4);
sources = new Array(4);

//Los inicializamos:
quotes[0] = "Estoy probando un ejercicio de mi libro, esto es el array 0";
source[0] = "Mark Twain";

quotes[1] = "Este sería el array 1";
source[1] = "Will Rogers"

quotes[2] = "Estoy e sería el array 2";
source[2] = "Garrison Keilor"

quotes[3] = "Estoye sería el array 3";
source[3] = "Steven Wright"

//Obtenemos un índice aleatorio para el array:
i = Math.floor(Math.random() * quotes.length);

//Le damos estilo a las citas como en HTML (no sé por qué):
document.write("<p style='background-color: #ffb6c1' >\"");
document.write(quotes[i] + "\"");
document.write("<em>- " + sources[i] + "</em>");
document.write("</p>");

getQuote(i);

