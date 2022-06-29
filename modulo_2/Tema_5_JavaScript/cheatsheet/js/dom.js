// document.write("prueba de enlace");
console.clear();
//-------------------DOM (Doc Objetct Model)---------------------------
//Bascis
console.log(document);
console.log(document.domain);
console.log(document.URL);
document.title += "(DOM)"; //es lo mismo que document.title
console.log(document.title);

//Selectors
const family = document.getElementsByTagName ("div");
console.log(family);

const grandParent = document.getElementById("grandparent");
console.log(grandParent);

const parents = document.getElementsByClassName("parent"); //HTML COllection
const parent1 = parents[0];
const parent2 = parents[2];

console.log(parent1, parent2);

const children = document.getElementsByClassName("child");
console.log(children);
console.log(children[2]); //si solo quiero imprimir este child el child3

// let element = document.querySelector("div#grandparent>.parent>div.child#child4"); //los selectores son como en CSS, este selector es el más cómodo para el profesor, otro ejemplo abajo:
let element = document.querySelector(".grandparent div");
console.log(element);

//vamos a cambiarle el color de fondo al hijo:
parent1.style.backgroundColor = "#ddd"; //aquí no se usa background-color con guiones, usamos camelCase

document.body.style.backgroundColor = "#5555"; //literalmente le cambio el color a todo el body



//     //para poder iter como si fuera un array:
// Array.from(family).forEach(item => console.log(item));
//     //para hacerlo de otra manera:
// for (let familyMember of family){
//     console.log((familyMember));
// }























