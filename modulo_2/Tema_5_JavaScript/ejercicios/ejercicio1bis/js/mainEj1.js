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

//Apartado 6:
const numeroComprobar = document.querySelector("#num1");//si no pongo la # aquí, no hace lo del rojo

numeroComprobar.nextElementSibling.addEventListener("click", function(){
    if(numeroComprobar.value % 2 !== 0){
        numeroComprobar.style.border = "2px solid red";
    }else{
        numeroComprobar.style.border = "";
    };
});
//Apartado 7:
const ul = document.getElementById("ap7");
for (let i = 1; i <= 10; i++) {
    const newLi = document.createElement("li");//defino el nuevo elemento, la li(lista)
    newLi.textContent =`Elemento ${i}`;//le digo que el contenido de cada elemento es esto
    ul.appendChild(newLi);//le digo que a ul le meta dentro el nuevo elemento, newLi
};

//Apartado 8:
const newPage = document.querySelector("#newPage");
const link = document.querySelector("a");
newPage.addEventListener("click", () => link.target="_blank");

//Apartado 9:
const textToChange = document.querySelector("#paragraphCambiarColor");
const selectColors = document.querySelector("#colorInput");
selectColors.addEventListener("change", (e) => { //aquí había puesto del revés las const en el evento y no funcionaba.tengo que preguntarme dónde ocurre el evento
    textToChange.style.color = e.target.value;
    //en clase aquí ponen lo de más abajo, es ejemplo
});

/*en clase, debajo de la última línea de la función:
let dict = {
    //red :"Rojo";
    //green: "Verde";
};es menos habitual hacer esto, es acceder al obj por corchetes
console.log(dict[e.target.value]);*/


//Apartado 10:
//creo las const:
const numAleatorio = document.querySelector("#generateNumAl");
const showNumAl = document.querySelector("#paragraphNumAleatorio");
//creo el evento para que me genere numAleatorio al pinchar el botón:
numAleatorio.addEventListener("click", () => {
    numAleatorio.value = Math.floor(Math.random()*100);
    showNumAl.textContent = numAleatorio.value;
});
//ahora creo el botón para que me muetre la lista de los nº antes generados
// const listOfNumbersGenerated = document.querySelector("li");//está oculta en html
// const buttonShow = document.querySelector("#numGenerados");//botón para que aparezca
// //creo función que me vaya guardando los números generados:
// let listNumbers = [];
// function numerosGenerados (Number){
//     for (let i = 0; i < 10; i++) {
//         listOfNumbersGenerated.value = listNumbers[i];
        
//     };
// };
// //mostrar la lista ol:
// function showList(num) {
//     listOfNumbersGenerated.display.
// }


//quiero crear el evento de que me muestre la lista al pulsar este botón
// buttonShow.addEventListener("click", (e) =>{ 
//     listOfNumbersGenerated. = e.target.value;
// })

//creo lista donde se irán guardando esos números, generados. 
//Debe ser un array, en el que se irán guardando los números:bucle
//  let listNumbers = [];
// for (let i = 0; i < 10; i++) {
//     listNumbers.slice(i);//aquí le digo lo que quiero que haga, en este caso que me los ordene
// };
// console.log(listNumbers);

//en clase:APARTADO 10:
const currentRandom = document.getElementById("currentRandom");
const totalNumbers = document.getElementById("totalNumbers");
const oddNumbers = document.getElementById("oddNumbers");
const evenNumbers = document.getElementById("evenNumbers");
//Aquí genero los aleatorios:
document.getElementById("randomButton").onclick = () => {
   const randomNumber = Math.floor (Math.random()*100)//alternativa a Math.floor: parseInt(Math.random()*100);
    /* document.getElementById("randomButton").addEventListener("click", () => {}); alternativa a la forma de escribir el evento con .on---*/
   currentRandom.textContent = randomNumber;

//     //esto me convierte el textcontent enun numero y le va sumando 1 al contador para saber cuántos números me ha generado, y la de abajo también
   totalNumbers.textContent++;//es lo mismo a: 
   //totalNumbers.textContent = Number (totalNumbers.textContent) + 1;

   //esto es para ver los pares:
    randomNumber % 2 === 0 ? evenNumbers.textContent++ : oddNumbers.textContent++;

};

//Función para mostrar la lista de esos arrays:

//en clase: APARTADO 11:
const listaNumeros = document.getElementById("listaNumeros");
const inputLista = document.getElementById("inputLista");
const buttonLista = document.getElementById("buttonLista");
let numbersList = [1, 15, 20, 35, 70];

function fillList () {
    //Vacía la lista  y la rellena de nuevo elemento a elemento
    listaNumeros.innerHTML = ""; //con esto me cargo lo que tenga dentro
    for (let number of numbersList) {
        newLi = document.createElement("li");
        newLi.textContent = number;
        listaNumeros.appendChild(newLi);
      
    };
};
/*con la función fillList puedo modificar el array como yo quiera*/

function addToList (){
    //Parsea el input, comprueba si existe y los añade:
    let numberToJoin = Number (inputLista.value);
    if (numbersList.indexOf(numberToJoin) === -1) {
        numbersList.push (numberToJoin);
        fillList();
    }else {
        window.alert ("Oooops, El número ya está en la lista");
    };
};
fillList(); //esto es para llamar a la función y qu eme aparezcan en pantalla los número que vamos añadiendo
buttonLista.addEventListener("click", addToList);

/*OTRA SOLUCIÓN MÁS SENCILLA de otro compañero:*/
/*const myArray = [];

function addNumber() {
    const num = inputLista.value;
    if(myArray.includes (num)){
        alert("error");
    }else {
        const li =document.createElement("li");
        listaNumeros.prepend(li);
        li.textContent = num;
        myArray.push(num);
    };
};
buttonLista.addEventListener("click", addNumber);*/


//apartado 11(mi intento):
// const firstInput = document.getElementById("listaParaComprobar");
// const secondInput = document.querySelector("#introNumbers");
// const buttonComprobar = document.querySelector("#comprobar");
// const p11 = document.getElementById("paragraph11");


// buttonComprobar.addEventListener("click", () => {
    
//     if (firstInput.value == secondInput.value){//¿cómo es esto en vez de textContent para un número, así?
//         p11.textContent = `El número ya existe en la lista.`;
//     }else {
//         p11.textContent = `El número introducido no estaba en la lista`;
//     };

// });

// const limpiar = getElementById("limpiar");
// limpiar.addEventListener("click", () => {
//     document.getElementById("introNumbers").value="";//&& document.getElementById("paragraph11"); 

// });



//apartado 12:
document.querySelector("#toggler").onclick = (e) => e.target.classList.toggle("btn");

//en clase: ÚLTIMA PARTE.REFACTORIZAR:

/*let buttons = document.getElementsByClassName("btn2-red");//Devuelve el HTMLCollection
//le ponemos let para que sea una variable y así poder usar buttons en la opción 2 más abajo*/

//Esto lo comento porque es lo que tengo que refactorizar:
// buttons[0].addEventListener("click", () => {
//     buttons[0].style.backgroundColor = "red";
// });
// buttons[1].addEventListener("click", () => {
//     buttons[1].style.backgroundColor = "red";
// });
// buttons[2].addEventListener("click", () => {
//     buttons[2].style.backgroundColor = "red";
// });

//Solución 1:
// Array.from(buttons).forEach(button => {button.onclick = e => e.target.style.backgroundColor = "red");

    //la hago más desglosada:

// Array.from(buttons).forEach(button => {
//     button.addEventListener("click", function (e){
//         e.target.style.backgroundColor = "red";
//     });
// });

//Solución 2:
const buttons = document.querySelectorAll(".btn2-red");//devuelve Nodelist que tiene disponible forEach
buttons.forEach(button => {
    button.addEventListener("click", function (e) {
        e.target.style.backgroundColor = "red";
    });
});









