//OOP: PROGRAMACIÓN ORIENTADA A OBJETOS:
//ANTES DE ECMA SCRIPT 6 (ES6):
function Car (brand, model, year){
    this.brand = brand;
    this.model = model;
    this.year = year;

    this.getAge = function (){
        let age = new Date().getFullYear() - this.year;//todo esto ya está creado en JS
        console.log(`This ${this.brand} ${this.model} is ${age} years old`);
    }
};
let myCar = new Car("Ford", "Mustang", 1990);
let myCar2 = new Car("Kia", "Ceed", 2017);
console.log(myCar, myCar2);
myCar.getAge();
myCar2.getAge();

Car.getHP = function (){//No actualiza la instancia
    console.log("This car has 300 horsepower");
}

Car.prototype.getHP = function (){ //Solo modifica la instacia myCar
    console.log("This car has 400 horsepower");
}

myCar.getHP();
myCar2.getHP();

function SUV(brand, model, year, width, height){
    Car.call(this, brand, model, year);//con esto llamo al constructor Car y le pido sus elementos al lado de this
    this.width = width; //como estas dos no estaban en el constructor Car, aquí las añado.
    this.height = height;
};

let mySUV = new SUV("Ford", "Kia", 2017, 2200, 2000);
let mySUV2 = new SUV("Ford", "Kia", 2009, 2500, 1800);

console.log(mySUV, mySUV2);
mySUV.getAge();
mySUV2.getAge();

console.clear();
//AHORA VAMOS A VER CÓMO SE HACE AHORA( con ES6), MUCHO MÁS FÁCIL:----------------------------------------------********
//ES6 también es la responsable de que se puedan usar arrow functions.
//sintaxis:
class Book {
    constructor(title, author, year){ //esto es una función especial que se llama constructor
        this.title = title;
        this.author = author;
        this.year = year;
    }
    getSummary() { //aquí se ponen funciones que ya existan, no se crean aquí
        console.log(`${this.title} was written by ${this.author} in ${this.year}`);
    }

    getType (){
        console.log("I'm a normal book");
    }
}
const book1 = new Book("Metamorphosis", "Franz Kafka", 1915);
console.log(book1);
book1.getType();
book1.getSummary();

// Subclasses (Herencia)
class Magazine extends Book {

    constructor(title, author, year, month){
        super(title, author, year); //para llamar al constructor de una superclase
        this.month = month;
    }

    getType(){
        console.log("I'm a magazine");
    }
};

//Instaciamos una revista (creamos el objeto a partir de un molde, eso es instanciar)
const mag1 = new Magazine("Super Pop", "Algún loco", 2015);

mag1.getType();
mag1.getSummary();

//Otro ejemplo de polimorfismo

class Animal {
    constructor(type, name, sound){
        this.type = type;
        this.name = name;
        this.sound = sound;
    }
    makeSound(){
        console.log(`This ${this.type} name ${this.name} goes ${this.sound}`);
    }
    static compareAnimals(animal1, animal2){ //este método no necesita que le instanciemos la clase Animal para trabajar, por eso no lleva this
        return animal1.type === animal2.type;  //es algo que sin la palabra static podríamos ponerlo fuera de la clase, élsolamente
    }
}

//---creamos clase perro y gato que hereden de Animal
class Feline extends Animal {//creamos Feline que es antes de Cat
    constructor(type, name){
        super(type, name, "miau");
    }
    scrathFurniture(prams){

    }
}



class Cat extends Feline{
    constructor(name){
        super("cat", name);

    }
}

class Dog extends Animal{
    constructor(name){
        super("dog", name, "woof");

    }
}

const conBotas = new Cat ("Con Botas");
const dylan = new Dog("Dylan");
const danko = new Dog("Danko");

console.log(conBotas);

conBotas.makeSound();
dylan.makeSound();

console.log(Animal.compareAnimals(dylan, danko)); //aquí probamos el método estático