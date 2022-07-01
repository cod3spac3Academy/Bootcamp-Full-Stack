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
let str3 = "";
function comprobarString (){
    console.log(false==="");
}
console.log(comprobarString());




