//para ver que todo está bien enlazado:
console.log("<h5>hola</h5>", "<br>");
document.write("<h5>hola</h5>", "<br>");
console.log("probando");

//Apartado 1: Partimos de un HTML con un div vacío. Con JS, añadir dos elementos p con un texto dentro.
//Creo las constantes:
const contenedor = document.getElementById("mainContainer");
const paragraph1 = document.getElementById("p1");
const paragraph2 = document.getElementById("p2");
//Les meto texto dentro:
paragraph1.textContent = "Lorem ipsum";
paragraph2.textContent = "Párrafo de prueba 2";
//Ahora los inserto:
contenedor.appendChild(paragraph1);
contenedor.appendChild(paragraph2);

// document.write("sdfsdfgsdfgadfgdfg");

//Apartado 2: Al pulsar el boton, cambiar el color del fondo del cuerpo del HTML
// const button = document.querySelector("button");
// button.addEventListener("click", function () {
//     document.body.style.backgroundColor = "red";
// });

//Apartado 3: Partimos de un HTML con una lista de 3 URLs (texto) de imágenes y un element img . Al hacer click 
//en cada URL, cambiará la imagen a la que contenga dicha URL.
// const listItems = document.getElementsByTagName("li"); //listItems lo voy a tratar como un array luego
// const image = document.querySelector("img");

// const changeImage = (e)  => image.src = e.target.textContent;

// listItems[0].addEventListener("click", changeImage);
// listItems[1].addEventListener("click", changeImage);
// listItems[2].addEventListener("click", changeImage);

//v2 - Autoría:
// const list = document.querySelector("ul");
//const image = document.querySelector("img");

// const changeImage = e => {image.src = e.target.textContent; console.log(e)};

// list.addEventListener("click", changeImage);

//Apartado 4: Añadir un input de tipo texto y un botón. Al pulsar el botón debe escribirse el texto 
//del input en un párrafo 4.2 Añadir un nuevo input pero esta vez cambiará el texto con cada pulsación de 
//tecla del usuario.


// const ap4Paragraph = document.getElementById("fillableParagraph");
// const ap4Input = document.querySelector("input");
// const ap4Button = document.querySelectorAll("button")[1];

// ap4Button.addEventListener("click", () => {
//     ap4Paragraph.textContent = ap4Input.value;
//     ap4Input.value = "";
// });

// //apartado 4.2:    
// const ap42Paragraph = document.getElementById("fillableParagraph2");
// const ap42Input = document.querySelectorAll("input")[1];

// ap42Input.addEventListener("input", () => ap42Paragraph.textContent = ap42Input.value);



