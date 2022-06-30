// document.write("prueba de enlace");
console.clear();
//-------------------DOM (Doc Objetct Model)---------------------------
//BASICS--------------------
console.log(document);
console.log(document.domain);
console.log(document.URL);
document.title += "(DOM)"; //es lo mismo que document.title
console.log(document.title);

//SELECTORS-------------------voy creando los selectores
const family = document.getElementsByTagName ("div");
console.log(family);

const grandParent = document.getElementById("grandparent");
console.log(grandParent);

//Aquí definimos los parent
const parents = document.getElementsByClassName("parent"); //HTML COllection
const parent1 = parents[0];
const parent2 = parents[1];

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

children[0].parentNode.style.backgroundColor = "#666";

const changeBackground = element => element.style.backgroundColor = "#333";
//el color #333 es que yo le creo y cada vez que llamo a esa función y le asigno un contenedor a modificar, se cambia  ese color:
changeBackground(children[0]);
changeBackground(parent1);

const changeBackground2 = (element, color) => element.style.backgroundColor = color;
//pero si quiero cambiarle el color y que no sea #333, le asigno otra variable que se llame "color" y entonces la tengo que escribir cuando llamo a la función:
changeBackground2(parent2.children[1], "red");

//Nunca utilizaremos accesos tan complejos como el siguiente, mejor definir nueva const
const changeBackground3 = (element, color) => element.style.backgroundColor = color
changeBackground3(grandParent.children[1].previousElementSibling.lastElementChild, "green");

                        //     //para poder iter como si fuera un array:
                        // Array.from(family).forEach(item => console.log(item));
                        //     //para hacerlo de otra manera:
                        // for (let familyMember of family){
                        //     console.log((familyMember));
                        // }

//PROPIEDADES----------------------------------
//esto hace que me desaparezcan padres e hijos:
// children[0].innerHTML = "<h1>Hola futuro</h1>"; 
// console.log(children[0].innerHTML);
// console.log(children[0].textContent);//Ignora etiquetas

// console.log("classList: ", parent1classList);
// parent1.classList.remove("bg-dark");
// parent1.classList.add("bg-red");
// console.log("classList: ", parent1.classList);

// parent1.classList.toggle("bg-red");
//toggle: Alterna la clase, si no está, la incluye, si está, la elimina.

//MÉTODOS-----------------------------------
parent1.setAttribute("name", "nombre-parent1"); //se ve en consola

//Create / Remove elements
//creamos el elemento:
let myDiv = document.createElement("div")
myDiv.id = "new Div";
myDiv.classList.add("child");
myDiv.textContent = "child 2.5";
//lo introducimos en el DOM:
parent1.appendChild(myDiv);

//creamos mismo nodo con dos nombres:
let myDiv2 = myDiv;

// parent2.appendChild(myDiv2);//es lo mismo así que lo que hace es cambiarlo de parent, al parent2

//Clonamos, para que me salga en los dos parents, un nuevo nodo a partir del original:
myDiv2 = myDiv.cloneNode(true);
parent2.appendChild(myDiv2);

let myDiv3 = myDiv.cloneNode(); //no tiene ni nombre ni el mismo tamaño porque no le he puesto "true" así que no es un hijo, no es una "copia profunda"
parent2.before(myDiv3);
parent2.after(myDiv.cloneNode());

//Crear una función que me devuelva un nodo nuevo y que reciba etiqueta e ID:function
function nodoNuevo (label,id){
    let myNodoNuevo = document.createElement(label);
        myNodoNuevo.id = id;

    return myNodoNuevo;    
     
}

let newDiv = nodoNuevo("div", "identificador1");
let table = nodoNuevo("table", "identificador2");
parent2.appendChild(newDiv);
parent2.appendChild(table);







































