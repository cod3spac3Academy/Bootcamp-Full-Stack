console.log("hola") //esto lo hacemos para probar que se enlaza bien al html.

//---------------------Uso de JS externo-----------------------------------------
function saludo () {
    alert ("Hola desde un script externo");
    console.log("has hecho click");
}
document.getElementsByTagName("a").item(2).addEventListener("click", saludo);

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

console.clear();
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

//--------------------OBJECTS--------------------------------------------------------------
let person = {
    name: "John",
    age: 30,
    blonde: false,
    walk:function(){
        console.log("Hey, estoy andando.");
    }, //Pre-ES6
    jump(){
        console.log("Hey, estoy saltando.");
    } //Es6
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