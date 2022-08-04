//La palabra FETCH le ipide información al servidor:

const URL = "https://jsonplaceholder.typicode.com/users";

let promise = fetch(URL);

console.log(1);
promise.then(response => console.log(response));//the siempre se aplica sobre una promesa hasta que ésta se resuelva. Espera una función callback
console.log(2);

console.log(promise);

function printNames(array) {
  array.forEach(user => console.log(user.address.geo.lat));//quiero que me imprima la lat y hasta llegar ahí tengo que pasar por user, address, geo hasta que llego a lat.
}

function printUsernames(array) {
  array.forEach(user => console.log(user.username));
}
//leyendo la funcion de arriba es:
//La funcion con nombre printNames que recibe un array
//del array, para cada (forEach)(para cada user(=>hacer un console log del username(pero en este caso le vuelvo a repetir de quién)))

/*fetch(URL)
  .then(response => response.json())
  .then(data =>printNames(data)); //estos nombres(response y data) pueden cambiar pero si uso estos siempre está bien

console.clear();//Otras pruebas
const printEmails = array => array.forEach(user => console.log(user.email));
const printCities = array => array.forEach(user => console.log(user.address.city));
const printLats = array => array.forEach (user => console.log(user.address.geo.lat));

fetch(URL)
  .then(response => {
    if (response.ok){
      return response.json();//abajo pongo otra sintaxis
    } 
    throw Error ("Hay algún problema con la respuesta" + response.statusText);//esto quiere decir que si no está ok, me devuelva esto. No me hace falta el else{} porque hemos puesto un return arriba..
  })
  .then(data => {
    printEmails(data);
    printCities(data);
    printNames(data);

  })
  .catch(error => console.log(error));*/
  
  //después del último then se pone esta función para caoturar errores en algún punto anterior, siempre igual
  //(Para gestionar los errores, yo le digo a mi código hasta que punto ejecutarse y si hasta ese punto no da errores entonces que se ejecute mi código)mira en la parte de response.

  //otra forma de sintaxis de lo de decirle el error:

/*fetch(URL)
.then(response => {
  if (!response.ok){
    throw Error ("Hay algún problema con la respuesta" + response.statusText);
  } 
  return response.json();
})*/

console.clear();
//Async / await - Alternativa a then

async function requestURL (URL){
  console.log(1.1);
  const response = await fetch(URL);
  const data = await response.json();
  //console.log(data);
  console.log(1.2);
}

console.log(1);
requestURL(URL);//esto aquí qué pinta???
console.log(2);

