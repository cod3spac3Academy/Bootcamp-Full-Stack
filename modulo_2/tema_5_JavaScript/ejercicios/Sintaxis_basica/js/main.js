// document.write("compruebo enlaces");
// console.log("compruebo enlaces");

//1.Define e inicializa un array con 5 elementos string en una sola línea.
let array = ["rojo", "azul", "verde" , "amarillo", "blanco"];
console.log(array);
document.write(array);

//2.Define un array inicialmente vacío . Añade tres elementos de tipo number posteriormente. Elimina por 
//completo el primero y añade dos nuevos números al inicio. En cada paso, imprime la longitud y el array
//entero por consola utilizando un string template del tipo : `Longitud:${}`.
let array1 = [];
console.log(array1);

array1.push(5, 6, 9);
console.log(array1, array1.length);
console.log(`La longitud de ${array1} es ${array1.length}`);

array1.shift();
console.log(`La longitud de ${array1} es ${array1.length}`);
array1.unshift(12,13);
console.log(`La longitud de ${array1} es ${array1.length}`);

//3.Escribe una función nombrada que devuelva true si el argumento dado es de tipo boolean y false en
//caso contrario.
let i = 0;
function myName(i) {
  
    if (i => 10) {
        return "is True";
        
    } else{
        return "is False";
    }
};

console.log(myName(5));

//4.Escribe una función que devuelva la longitud de un string recibido por argumento.
let a = "Hola, soy un string, al que vamos a calcular la longitud.";
function longiString(a) {
    return `La longitud es ${a.length}.`
    
}

console.log(typeof function (){});
console.log(a.length);

//5.Crea una función de flecha que reciba una cantidad de minutos y lo devuelva convertido en segundos.
let changeToSeconds = function (minutes) {
    return minutes*60
};
changeToSeconds = minutes => minutes*60;
console.log(changeToSeconds(30));

//6.Crea una función que reciba un número y devuelva el siguiente número par. (Si él es par, lo devolverá
//directamente).
let num1 = 0;
function numPar(num1) {
    if (num1 % 2 === 0) {
        return (`El ${num1} es número par`);
    } else {
        return `El ${num1} es impar, el siguiente número par es ${num1+1}.`
    }
}
console.log(numPar(19));

//7.Crea una función que reciba una edad y devuelva la cantidad de días que esa persona ha vivido. Puedes
//obviar los años bisiestos.
let edad = 0;
function edadEnDias (edad){
    return (`La edad de esa persona en días es ${edad*365} días.`)
}
console.log(edadEnDias(6));

//8.Crea una función que reciba un array y devuelva su último elemento. Prueba tu función con varios arrays
//de diferentes longitudes.
// let array2 = ["teléfono", "impresora", "lámpara"];comento esto porque no me sale, me sale si lo encajo en el consol.log

const lastElement = function (array2) {
    return array2[array2.length-1];
    
}
console.log(lastElement(["telefono", "impresora", "lámpara"]));

//-------------según el profesor:-----------
const lastElementOf = array => array[array.length -1];
console.log(lastElementOf([1,2,4]));
//-------------------------------------------

//9.Un granjero necesita contar la cantidad de patas de los animales en sus diferentes granjas muy
//frecuentemente, pero tiene tres especies: pollos (2 patas), vacas (4 patas) y cerdos (4 patas). Tu función
//recibirá la cantidad de animales en ese orden y devolverá la cantidad de patas totales. 
let pollos = 0;
let vacas = 0;
let cerdos = 0;
console.log(typeof pollos, typeof vacas, typeof cerdos);
// let patasPollos = 2*pollos;
// let patasVacas = 4*vacas;
// let patasCerdos = 4*cerdos;

let countLegs = function (pollos, vacas, cerdos){
    return 2*pollos + 4*vacas + 4*cerdos;
}
console.log(countLegs(5,2,8));

//10.Crea una función que determine si dos datos recibidos por argumentos son del mismo tipo.

let determinarDatos = function (a, b){
    if (typeof a == typeof b){
        return `Los dos datos son del mismo tipo.`;
    } else {
        return "Son datos de diferente tipo";
    }
};
console.log(determinarDatos("grillo", 8));

//11. Crea una función que reciba un string con una frase y devuelva un array donde cada elemento será una
//palabra de la frase original. Investigar método existente de los strings para este fin.
let frase = "Investigar método existente de los strings para este fin." 
let arr = frase.split(` `);
console.log(arr);

//12.Inicializa dos objetos, address1 y address2 con las propiedades: provincia, ciudad, municipio, código
//postal, calle, número, planta, y número de puerta.
let address1 = {
    provincia: "Málaga",
    ciudad: "Marbella",
    municipio: "Marbella",
    códigoPostal: "29601",
    calle:"Avda Mercado",
    número: "3",
    planta: "3" ,
    númeroPuerta: "C",
}
let address2 = {
    provincia: "Jaén",
    ciudad: "Huertoliva" ,
    municipio: "Alcor",
    códigoPostal: "46052",
    calle: "Avenida Europa" ,
    número: "27",
    planta:"2" ,
    númeroPuerta: "A",
}
console.log(address1.provincia, address2.provincia);

//13. Los dominios en la web, se componen del nombre de dominio (codespaceacademy) y de un TLD (top
//level domain) como, por ejemplo .com / .es / .org, etc. Crea una función que se llame parseDomain() que
//reciba por argumento un string y devuelva un objeto con dos propiedades: domain y tld. 
// let parseDomain = function ("", ""){
//     return `El dominicio sería ${} `
// }

//14. Nos han prohibido el uso del operador de igualdad estricta (===), pero queremos poder seguir utilizando
//dicha esa funcionalidad. Crea una función que devuelva true si dos números tienen el mismo valor y el
//mismo tipo de dato. Debemos usar el operador lógico “&&”. Prueba tu función con dos estos inputs:

// function strictEquality (){
//      if (number === number) && (typeof number === typeof number) {
//         return true;
//     } else {
//         return false;
//     }
// };

// console.log(strictEquality(5, 5));

//15. Crea una función que reciba dos strings y devuelva true si tienen la misma longitud y false en caso
//contrario.

let str1 = "suave";
let str2 = "caliente";
  
function mismaLong () {
    if (typeof str1 === typeof str2) {
        console.log("Son del mismo tipo las variables");
    } if (str1.length === str2.length){
        console.log("Y tienen la misma longitud");
    } else {
        console.log("Son del mismo tipo pero no tienen la misma longitud");
    }
};
console.log(mismaLong(""));//aquí llamo a la función, si no, no me aparece en consola pero me aparece también un undefined que no sé por qué

//16.Crea una función que reciba un string y determine si está vacío sin utilizar la propiedad length.
let str3 = "loco";
let str4 = "";
console.log(str3==="");
console.log(str4==="");
//en clase:
const isEmpty = function (str){
    return str ? false : true;
}
console.log(isEmpty(""));
console.log(isEmpty());
console.log(isEmpty("algo"));

//17. Imprimir elemento a elemento el array del apartado 1 de cuatro formas diferentes: 
//while//for//for of//forEach.
//copio de clase porque no me sale:
let colores = ["rojo", "azul", "verde" , "amarillo", "blanco"]; //es mi array del ejercicio 1.
//en clase:
let e = 0;
while (e < colores.lenght-1) {
    console.log(`Índice ${e} : ${colores[e]}`);
    
};
for (let e = 0; e < colores.length-1; e++) {
    console.log(`Índice ${e} : ${colores[e]}`);
    
};
for (let color of colores) {
    console.log(color);
};

colores.forEach((item, index) => console.log(`index ${index} : ${item}`));

//18.Crea una función que reciba un string y un número N y devuelva el string original repetido N veces.
let text = "No haré memes sobre el profesor  ";
let result = text.repeat(3);
console.log(result);

function repeatString(text, Number){ 
    return text.repeat(Number);

}
console.log(repeatString("Pruebo mu función  ", 2));

//en clase, un compañero:
const repeatString2 = (string, n) => {
    let repeatString2 = "";
    for (let i =  0; i < n; i++){
        repeatString2 += string;
    }
    return repeatString2;
};
repeatString2("COMO LO HA HECHO UN COMPAÑERO EN CLASE: No haré memes al profesor ", 2);

//19.Crea una función que recibe un objeto con dos campos, votos positivos y votos negativos y que devuelva
//la cuenta final.
//en clase:
const getVoteCount = function (obj){
    return obj.upVotes - obj.downVotes;
};
const votes ={upVotes: 35, downVotes:15};
console.log(getVoteCount(votes));//con el objeto creado a parte
console.log(getVoteCount({upVotes:35, downVotes:15}));//dándole el objeto en el propio log.

//esto lo estaba haciendo yo pero no me ha salido:
// let votes = { //este es mi objeto votos, con los negativos y los positivos
//     upVotes : Number(35),
//     downVotes : Number(20),
// };
// function getVoteCount (votes){
//     return (upVotes-downVotes);
// };
// console.log(getVoteCount());

//20.Crea una función que recibe un array de tipos de datos mezclados y que devuelva otro array con el tipo
//de cada uno de los elementos.
// let miNuevoArray = ["string", 5];
// let array20b = [];
// console.log(typeof miNuevoArray);
//en clase el profesor:
function typeOfArray (array){
    arrayTypes =[];
    array.forEach (element => {
        arrayTypes.push(typeof element); //REPASAR ESTO BIEN
    })
    return arrayTypes;
}
const testArray = ["i'm learning JS in a bootcamp", 7.5, {}, 0, undefined, [], "codespace"];
console.log(typeOfArray(testArray));

//21. Función que dado un array de números con formato string devuelva un array con los números ya
//parseados:
// let misNumeros = ["5", "18", "35", "87"];
function getParsedArray (array){
    const parsedArray = [];

    array.forEach(element=> {
        parsedArray.push(Number(element));
    });
    return parsedArray;
}
console.log(getParsedArray(["18", "23", "5"]));

//y si lo hago con un array ya definido: NO ME SALE
// function getParsedArray2 (array){
//     const parsedArray2 = ["5", "18", "35", "87"];

//     array.forEach(element=> {
//         parsedArray2.push(Number(element));
//     });
//     return parsedArray2;
// }
// console.log(getParsedArray2());

//22.Crea una función de flecha que devuelva “Positivo” si el número que recibe por argumento es mayor o
///igual que cero y “Negativo” en caso contrario. Usa el operador ternario
let num = 0;

const queEsNum = (num) => num >= 0 ? "positivo" : "negativo";
console.log(queEsNum(-5));
console.log(queEsNum(12));
console.log(queEsNum(0));

//23.Crea una función que dado un array cualquiera y un índice, borre el elemento guardado en ese índice.
//clase:
const removeItem = (array, index) => array.splice(index, 1);

//24.Usando la función del apartado anterior, crea otra función que dado un array de números y un número a
//filtrar, devuelva un array borrando todos las apariciones de dicho número.
//clase:
const filterItem = (array, numberToFilter) => {
    array.forEach ((element, index) => {
        if (element === numberToFilter){
            removeItem(array, index);

        }
    });
};
const arrayFiltered = [1,5,6,7,5];
filterItem(arrayFiltered, 5);
console.log(arrayFiltered);

//INCISO. TIPOS DE FUNCIONES:
//FUNCIÓN NOMBRADA:
function suma (num1, num2){
    return num1+num2;
};
console.log(suma(2,2));

//FUNCIÓN ANÓNIMA
const saludar = function (){
    console.log("Hello");
}
console.log(saludar());

//FUNCIÓN FLECHA:
const perimeterOfSquare = (side) => 4*side;
console.log(perimeterOfSquare(5));

//25.Crea dos funciones que recibirán un objeto, la primera devolverá un array con los nombres de todas 
//sus propiedades. La segunda devolverá un array con los valores de dichas propiedades.
//Investigar los métodos keys y values del prototipo de Object.
let tarjetaPerson = {
    nombre : "Sara",
    apellidos : "Villegas",
    edad : 27,
    num_pie : 37,
    
};

console.log(Object.keys(tarjetaPerson));
console.log(Object.values(tarjetaPerson));

//26.Crea una función que invierta un string.
let string26 = ".nóicamargorp ed sedrat sal ne éfac led érasuba oN"
function stringReverse (str){
    return string26.split ("").reverse("").join("");
    
};

console.log(stringReverse());

//27.Crea una función que compare strings sin tener en cuenta las mayúsculas / minúsculas.
//localeCompare()
let stringA = "vamos a comparar dos strings sin tener en cuenta las mayúsculas";
let stringB = "vamos A COMPARAR dos StriNgs sin tener EN CUENTA las mayúsculas";

function compararStrings(str){
    if (stringA.toUpperCase() === stringB.toUpperCase()) {
        return "The strings are equal.";
    } else {
        return "The strings ARE NOT THE SAME.";
    };
};

console.log(compararStrings());

//28.Crea una función que convierta en mayúscula sólo la primera letra de cada palabra de un string dado. El
//apartado 11 será de ayuda. Investigar cómo unir un array de strings en un único string.
let strAB = "vamos a convertir en mayúscula sólo la primera letra de cada palabra";
console.log(strAB.toUpperCase()); //con esto convierto todas las letras en mayúsculas
//strAB.split()

console.log(strAB.split(""));//como no he puesto espacio entre comillas me separa letra a letra
console.log(strAB.split(` `));//esto me convierte en componenete del array cada palabra por separado(si no pongo el espacio, me lo separa letra a letra)
let arrayAB = strAB.split(" ");
//esta función me pone en mayuscula la primera letra de cada palabra:
function capitalize (array){
    return arrayAB.map (element => {
       return element.charAt(0).toUpperCase() + element.substring(1).toLowerCase();
       
      
    });
};
console.log(capitalize(""));
// console.log(capitalize.toString(""));
//ahora hago otra función con esta dentro para que me pase el array a string:
// function deArrayPasoString(array) {
//     if (capitalize() === array){
//         return capitalize.toString();
//     };
        
// };
// console.log(deArrayPasoString());

//29.Crea una función en una única línea que reciba un valor lógico y devuelva el opuesto.

const valorLogicoOpuesto = (logical) => !logical;

console.log(valorLogicoOpuesto(true));
console.log(valorLogicoOpuesto(false));











