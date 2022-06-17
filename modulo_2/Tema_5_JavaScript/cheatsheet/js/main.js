console.log("hola") //esto lo hacemos para probar que se enlaza bien al html.

//---------------------Uso de JS externo-----------------------------------------
function saludo () {
    alert ("Hola desde un script externo");
    console.log("has hecho click");
}
// document.getElementsByTagName("a").item(2).addEventListener("click", saludo);

//--------------------Depuración / logging (crear logs, es diferente de "login")----------------------------------------
// alert("Mensaje");
console.log("Mensaje");

//--------------------Variables--------------------------------------------------
// var-->function scope (funciona en todos los bloques para evitar errores)
// let / const --> block scope (sólo funcionan dentro del bloque donde está definida)

function saludar() {
    console.log("Inicial: ", contador);

    //comprobar con var y let y ver diferencias
    for (var contador = 0; contador < 3; contador++ ) {
        console.log(contador);
    }

    console.log("Final: ", contador);
}

saludar();
 console.clear();

//Inicialización
let day;
day = 5;

let monthName = "Octubre";

let month = 10;

let hour, minute, second;


let array = [15, 20, 25];
console.log(array[0], array[1], array[2]);

let [var1, var2, var3 ] = [15, 20, 25]; //Avanzada, lo veremos más adelante
console.log(var1, var2, var3);

//const --> block scope
const x = 1;
// const y; //Error: missing = in const (no te deja definirla sin darle un valor con = por eso te devuelve ese error)
// x = 2; //Error: invalid assigment to const 'x', porque su valor es 1 com viene arriba
console.clear();
//--------------------TIPOS DE DATOS--------------------------------------------
//DATOS PRIMITIVOS:
let str = String ("I'm a string");
let str2 = "I'm another string"; //Recomendada
console.log(typeof str, typeof str2, typeof""); 

//let st = "string" ES IGUAL A "string"

let num = Number(5);
let num2 = 5;
console.log(typeof num, typeof num2, typeof 5.3, typeof"5");

let bool = Boolean(true); 
let bool2 = false;
console.log(typeof bool, typeof bool2, typeof true, typeof "true");

let undef;
console.log(undef, typeof undef);

let selectedColor = null; //null servirá para limpiar una variables
console.log(selectedColor, typeof selectedColor);

//OBJETOS
array = Array(1, 2, 3) ;
let array2 = [1, 2, 3];
console.log(array, array2);
console.log(typeof array, typeof array2);

console.log(typeof new Date("2021-05-12"));
console.log(typeof new Error("Mensaje de error"));

// console.clear();
//--------------------STRINGS--------------------------
str = "Hola futuro";
console.log(str, str.length);
console.log(str.indexOf("futuro"), str.indexOf("cadena no presente"));
console.log("La última ocurrencia de 'U' está en el índice", str.lastIndexOf("u"));

console.log("Hola mundo".concat(". Adiós mundo."));
console.log("Hola mundo" + ". Adiós mundo"); //Equivalente a .concat
str = str + ". Adiós mundo";
str += ". Adiós mundo";//IMP QUE NO HAYA ESPACIOS ENTRE '+ y ='. Esto es lo mismo que la inmediatament superior pero más corta
console.log(str);

console.log(str.replace("mundo", "futuro"));
console.log(str.replaceAll("mundo", "futuro"));
console.log(str.toLowerCase()); //cambia a minúsculas
console.log(str.toUpperCase());//cambia a mayúsculas

console.log(`El día de mi cumpleaños es el ${day}`); //que es equivalente a lo de abajo:
console.log("El día de mi cumpleaños es el", day, ".");// lo mismo d forma más larga

//Parsing (cambiar un dato de un tipo a otro):
let number = Number("asadasdasda"); //NaN = Not a Number. No genera error.
console.log(number, typeof number);

number = Number("1000");
console.log(number, typeof number);

number += "1000";  //Entiende que es una concatenación, no una suma.
console.log(number, typeof number);

console.log("1" + 1, "1" - 1); //¡IMP!-----esto es característico de JS, la parte izquierda concatena los Strings, ya que + tiene la función a parte de suma, de concatenar y la parte derecha me hace  una cuenta porque - no tiene otra función en JS con lo que hace la matemática.

//------------------OBJECTS--------------------------------------------------------------
let person = {
    name: "John",
    age: 30,
    blonde: false,
    walk:function(){
        console.log("Hey, estoy andando.");
    }, //Pre-ES6
    jump(){
        console.log("Hey, estoy saltando.");
    }, //Es6
    presentarse() {
        console.log(`Me llamo  ${this.name}, tengo ${this.age} y ${this.blonde ? "soy rubio" : "soy moreno"}`);
    }
    
}

//Acceso por punto / Dot notation
console.log(typeof person, person);
console.log(`Se llama ${person.name} y tiene ${person.age} años y es ${person.blonde}`);

person.name = "Jane";


console.log(person);
console.log(`Se llama ${person.name} y tiene ${person.age} años. `);

//Acceso por corchetes / Brackets notation
let nombreDeLaPropiedadQueQuiero = "blonde";
console.log(person[nombreDeLaPropiedadQueQuiero]);

//Ampliación
person.children = ["Martha", "Peter"];  //esto es un array
console.log(person);
console.log(person.children[0], person.children[1]);

person.walk();
person.jump();
//Esto viene arriba: 
    // walk:function(){
    //     console.log("Hey, estoy andando.");
    // }, //Pre-ES6
    // jump(){
    //     console.log("Hey, estoy saltando.");
    // } //Es6

    console.log({});    //esto es un OBJETO
    console.log([]);   //esto es un ARRAY
    console.log("");  //esto es un STRING 
    console.log(typeof{}, typeof [], typeof""); //me muestra lo que son cada uno de los de arriba

//This
//creamos person2:
const person2 = {
    name: "Thomas",
    talk() {
        console.log(this.name); //este this es como poner person2, porque estoy dentro del objeto y hago referencia a él.
        console.log(`Me llamo ${this.name}`);
        }
}

person2.talk();
// person2.walk();

// console.clear();

//--------------ARRAYS---------------------------------
let selectedColors = ["red", "blue"]; //Array de Strings
console.log(selectedColors, selectedColors.length, typeof selectedColors);

selectedColors[2] = "green"; //Si no existe, lo crea
console.log(selectedColors, selectedColors.length);

selectedColors.push("violet", "white"); //push es añadir un elemento al final del Array
console.log(selectedColors, selectedColors.length);

let removedItem = selectedColors.pop(); //borra el últ.elem. del array te lo devuelve 
console.log(selectedColors, selectedColors.length);

selectedColors.unshift("white"); //agrega al inicio del array
console.log(selectedColors, selectedColors.length);

selectedColors.shift(); //elimina el primer ele.del array y lo devuelve
console.log(selectedColors, selectedColors.length);

selectedColors.sort(); //ordena alfabéticamente el array

console.log("El rojo está en el índice ", selectedColors.indexOf("red"));

console.log(selectedColors.slice(1 , 3));
console.log(selectedColors);

console.log("Los elementos borrados son: ", selectedColors.splice(1 , 3));
console.log("El array se ha quedado así: ", selectedColors);

// console.clear();

//Crear un objeto 'niño' que tenga las propiedades: nombre, altura, género y amigoS. AmigoS estará inicialmente vacío y añadiremos posteriormente 3 elementos con los nombres. Después, añadiremos uno extra al inicio.


let nino = {
    name: "Snooki", //recordar que aquí son comas no punto y coma
    height:"1.72",
    gender:"male",
    amigoS: ["PEDRO"],//ESTO NO SE VERÁ POR COMO HE CREADO EL ARRAY DE NOMBRES ABAJO, PARA EVITARLO, USAR PUSH COMO SE VE EN EL EJEMPLO DE NINA.
}


nino.amigoS = ["Sara", "Juanje", "Coco"];//mientras amigos arriba esté vacío, bien. Si tuviera un nombre al poner esto s elo carga, para evitarlo, le pongo push
nino.amigoS.unshift("Tim");//me lo pone en la posición 0
console.log(nino, nino.length);


let nina = {
    name: "Mizar", //recordar que aquí son comas no punto y coma
    height:"1.65",
    gender:"female",
    amigoS: ["Alex"],
    perderAmigo() {
        this.amigoS.pop()
    }
}
nina.amigoS.push("Sara", "Juanje", "Coco");
console.log(nina);

nina.perderAmigo();
console.log(nina);

// console.clear();
//-------------CONDICIONALES---------------------------------
const randomNumber = 9;
const guessedNumber = "5";

if (typeof randomNumber !== typeof guessedNumber) {
    console.log("Hey, tiene que introducir el mismo tipo");
}

if (randomNumber===guessedNumber) {
    console.log("Has acertado el número");
} else if(randomNumber > guessedNumber) {
    console.log("El número secreto es mayor");
} else  if(randomNumber < guessedNumber) {
    console.log("El número secreto es menor");
}

//Operador Terniario / Ternary Operator(un IF pero en una sola línea para dos opciones solamente)
//meto esta funcion .person, más arriba en línea 119
person.presentarse(); //esto es para llamar a la función

let variable = 12 < 10 ? "el primero es menor" : "el primero es mayor"
console.log(variable);

//Switch
let option = 3;
switch(option){
    case 1:
        //Bloque de código para valor 1
        console.log("Option vale 1");
        break; //es un "si no"
    case 2:
        //bloque de código para valor 2
        console.log("Option vale 2");
        break;
    case 3:
        //bloque de código para valor 3
        console.log("Option vale 3");
        break;
    default: //"De otro modo" del pseint
        console.log("otra opción");
        break;
}   

console.clear();
//-------------FUNCIONES / FUNCTIONS---------------------------------
//NOMBRADAS---------------
function greet(name, lastName){
    return`Hola, ${name} ${lastName}. ¿Qué tal?`;
}

console.log(greet("Marcos", "Aurelio"));
// greet("Marcos", "Aurelio");

//Que dvuelva el cuadrado de un número que recibe por parámetro
function square(number){
    return `El cuadrado es ${number*number}`;
}

// console.log(square(5));
//ANÓNIMAS--------------------
let numbersArray = [5, 51, 1,15, 2];
console.log(numbersArray);
numbersArray.sort(); //si no le digo nada me ordena los número s anivel ASCII (todos los que empiecen por 1, luego por 2 etc)
console.log(numbersArray);

numbersArray.sort();
