//OBJET CONSTRUCTOR (usinf functions):----------------
/*ejemplos: Array, Number, String, Date , en mayúscula la primera*/

//Esto es pre ES5, luego cuando veamos las Clases lo haremos un poco distinto:
function Car (brand, color, weight, topSpeed){
    this.brand = brand;
    this.color = color;
    this.weight = weight;
    this.topSpeed = topSpeed;
    this.getDescription = function (){
        return `This ${this.color} ${this.brand} weights ${this.weight}`+
        `kilos and can reach up to ${this.topSpeed} km/h.`
    }
}

const car1 = new Car("Mercedes", "red", 2000,200);//la clave aquí está en la palabra "new" que es la que invoca a mi constructor de objetos
const car2= new Car("Volvo", "white", 2500,180);
const car3 = new Car("Volkswagen", "blue", 1500,175);


console.log(car1, car2,car3);
console.log(car2.weight);
console.log(car3.getDescription());