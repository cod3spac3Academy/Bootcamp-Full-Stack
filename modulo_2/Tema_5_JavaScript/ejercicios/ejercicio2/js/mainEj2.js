//EJERCICIO 2:
//1 y 2. Crear un array vacío, un constructor(plantilla) para los datos del objeto usuario:(los métodos que son IncrementProducts y emptyProducts no se ponen en el paréntesis de arriba porque se definen ya por su propia función)
function User(name, firstLastName, secondLastName, email, age, city){
    this.name = name;
    this.firstLastName = firstLastName;
    this.secondLastName = secondLastName;
    this.email = email;
    this.age = age;
    this.city = city;
    this.productsCount = 0;
    this.incrementProducts = function (){
        this.productsCount++;
    };
    this.emptyProducts = function (){
        this.productsCount = 0;
}};

//Data:
const users = [
    new User("María", "Nuñez", "Coronado", "mnunez@gmail.com", 18, "Albacete"),
    new User("Lucía", "García", "Ruíz", "lgarcia@gmail.com", 41, "Madrid"),
    new User("Fran", "Gómez", "Fernández", "fgomez@gmail.com", 35, "Málaga")
];

users.forEach(user => console.log(user.email))

console.log(users[0] instanceof User); //te devuelve true o false. Es para saber si users está creado a partir del constructor User.

//3. Selectores:
const select =document.querySelector("#userSelect");
const list =document.querySelector("#userInfo");
const incrementButton =document.querySelector("#incrementButton");
const emptyButton =document.querySelector("#emptyButton");

//4. Creamos elemento Option para cada usuario:
/*for (let user of users) {//creo variable user de users objetos
    console.log(user);//hasta aquí lo que hace es imprimirlos todos
    console.log(user.name);//solo me imprime nombres
    const newOption = document.createElement("option");//esto es para el desplegable
    newOption.textContent = user.name;//le asigno al desplegable, los valores de los nombres
    select.appendChild(newOption);//con esto, le mando lo que hemos creado al DOM, se añade ya al desplegable
    
};*/

//he comentado el for of anterior para poner este for each:

users.forEach  (user => { //el item de la función original lo llamo ya user porque lo conocemos
    const newOption = document.createElement("option");
    newOption.textContent = user.name;
    select.appendChild(newOption);
});//lo de dentro es igual que el for of

//5. Rellenamos la lista con las propiedades de un usuario.
/*for (const key in users[0]){
    console.log(`key: ${key}, value: ${users[0][key]}`);
};*/
//con [key] puedo acceder tanto al nombre de la propiedad como a su valor.
function fillList(user){
    
    list.innerHTML ="";
    
    for (const propertyName in user){
        const value = user[propertyName];
    
        if(typeof value !== "function"){
           const newListItem = document.createElement("li");
           newListItem.innerHTML = `<b>${propertyName}:</b> ${value}`;//el inner.HTML es el que hace que me aparezca la tabla completa
           newListItem.classList.add("list-group-item");//con esto le añado una clase de bootstrap para que se vea el diseño igual a bootstrap
           list.appendChild(newListItem);
        
             /*list.innerHTML+= `<li class="list-group-item"><b>${propertyName}:</b>${value}</li>`*///solo me han salido los recuadros con esto, no con todo lo anterior del if que he comentado
        };
    };



};
//8. Actualizamos el CARRITO:lo pongo aquí seguido para que los listeners estén todos juntos abajo.
fillList(users[0]);
function processProducts (e){
    const selectedUser = users.find (user => user.name === select.value);//con esta linea solo cambio la linea de productos del que esté seleccionado
    
    if (e.target === incrementButton){
        selectedUser.incrementProducts();
    }else {
        selectedUser.emptyProducts();
    };
    fillList(selectedUser);//con esto hago que se me muestre 
};

/*for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
        const element = object[key];
        
    }
} esta es la estructura del for  in.*/

//6. Añadir listeners necesarios:
//el select y los dos botones.
select.addEventListener("change", e =>{
    const selectedUser = users.find(user=> user.name === select.value);
    fillList(selectedUser);//esto me actualiza la ista entera
});
/*fillList(users[0]);*/ //como hemos metido todo en funciones, si no pongo esto, no se me ejecuta
//el que me aparezca el recuadro, con lo que tengo que ejecutarlo yo así para que aparezca de
//primeras un usuario


/*Otra forma de poner esta función de arriba es:
select.addEventListener("change", e => {
    console.log(users.find(user => user.name === select.value));

es para buscar elementos en un array (.find)*/



    //añado sus listeners:
incrementButton.addEventListener("click", processProducts);
emptyButton.addEventListener("click", processProducts);




