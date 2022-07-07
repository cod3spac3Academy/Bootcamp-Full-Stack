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

//Apartado 3:
//creo las const para los eventos de los enlaces y el de la imagen
const listItems = document.querySelector("ul");//si le digo por TagName me daba error
const image = document.querySelector("img");
//creo la const que hace de función para cambiar el enlace por la imagen:
const changeImage = (e) => image.src = e.target.textContent;//aquí le digo que la imagen debe ser igual al texto de cada elemento de la lista para luego al llamarlo, que haga esto.Es una arrow function

//ahora le digo que cuando cada elemento sea pinchado, use la función arrow de changeImage:
listItems.addEventListener("click", changeImage);

//Apartado 4:
//creo la const para el click del evento:
const input = document.querySelector("input");//selecionando la propia etqieuta html si no, con id no me salía
const button2 = document.getElementById("bot2");
const p3 = document.getElementById("paragraph3");

button2.addEventListener("click", () => {
    p3.textContent = input.value;//aquí le digo que el contenido del párrafo es lo que haya en la const input
    input.value = ""; //aquí le digo que la const input es un string
});

//apartado 4.2: no sé hacerlo
//Apartado 5:
const mensaje = document.getElementById("mensaje");
const contador = document.getElementById("contador");//hago este contador para contar caracteres
const button3 = document.getElementById("bot3");
function salirDebajoDelRecuadro(){
    contador.textContent = mensaje.value;
};//esta función es para decirle que escriba en el párrafo abajo lo que ponga en recuadro
mensaje.addEventListener("input", salirDebajoDelRecuadro);//con esto hago que me salga debajo del recuadro
let minLength = 15;
mensaje.addEventListener("click", function (e) {
    if (e.target.value.length > 15){
       e.target.style.color = "blue";

    }else {
        e.target.style.color = "red";
    };
});












