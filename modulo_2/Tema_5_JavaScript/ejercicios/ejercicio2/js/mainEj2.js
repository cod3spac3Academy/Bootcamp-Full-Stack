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
        this.productCount++;
    };
    this.emptyProducts = function (){
        this.productCount = 0;
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

for (const propertyName in users[0]){
    const value = users[0][propertyName];

    if(typeof value !== "function"){
       const newListItem = document.createElement("li");
       newListItem.textcontent = `${propertyName}, ${value}`;
       newListItem.classList.add("list-group-item");//con esto le añado una clase de bootstrap para que se vea el diseño igual a bootstrap
       list.appendChild(newListItem);
    };
}

/*for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
        const element = object[key];
        
    }
} esta es la estructura del for  in.*/

//6. Añadir listeners necesarios:
//el select y los dos botones.
select.addEventListener("change", e =>{
    console.log(select.value);
});
/*Otra forma de poner esta función de arriba es:
select.addEventListener("change", e => {
    console.log(users.find(user => user.name === select.value));
});
es para buscar elementos en un array (.find)*/

incrementButton.addEventListener("")

