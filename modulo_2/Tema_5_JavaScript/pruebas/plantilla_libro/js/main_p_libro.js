console.log("Hola");  //para comprobar que enlaza bien
document.write("Hola desde JavaScript")

//Hacemos una prueba de generar números aleatorios y ver su media, usando el  objeto nativo MATH
let total = 0;
for (i=1; i<=5000; i++) {
    let numAleatorio = Math.random();
    total += numAleatorio;
    if (i % 1000 == 0){
        console.log(`Generated  ${i}  numbers ...`);
        
    }
}
let average = total / 5000;
average = Math.round (average *1000)/1000;
console.log(`Average of 5000 numbers is  ${average} .`);

//Objeto nativo DATE--- las fechas son a partir del 1 enero de 1970.
let birthday = new Date (9, 16, 1984);
console.log(birthday);

//RECORRRER PROPIEDADES DE UN OBJETO-------------------------------
//Definimos las variables
names = new Array();
let i = 0;
//prompt es una declaración que solicita al usuario una serie de nombres
//Repite y solicita los nombres
do {
    next = window.prompt("Enter the name", "");
    if (next > " ") names [i] = next;
    i = i + 1;
} while (next > " ");

console.log(names.length);
document.write(names.lenght);

//Muestra los nombres
for (i in names){
    document.write(`El nombre de ${names} .`);
}
console.log();



