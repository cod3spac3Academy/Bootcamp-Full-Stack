//Apartado 1:
//creo las constante de cada etiqueta html:
const contenedor =  document.getElementById("paragraph1");
const p1 = document.getElementById("paragraph1");
const p2 = document.getElementById("paragraph2");
//le meto el texto que quiero a la constante de los párrafos:
p1.textContent = "Párrrafo 1: lorem ipsum at dorr.";
p2.textContent = "Párrafo 2: a ver si esta vez me sale.";

//Apartado 2:
//creo la const que será el elemento
const button1 = document.getElementById("bot1");
//comento mi función porque no me hace nada, aunque la veo igual que la arrow
// button1.addEventListener("click", function(){
//     document.body.style.backgroundColor = "red";
// });

//pruebo con arrow function:
button1.addEventListener("click", () => document.body.style.backgroundColor = "red");








