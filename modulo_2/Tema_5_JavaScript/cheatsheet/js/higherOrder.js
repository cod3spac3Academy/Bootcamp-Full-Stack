//Higher Order Functions:

//Map:-------------------------------------------
//Map:--------------------------------------------
let arr1 = [1,2,3];
let arr2 = [];

for (let num of arr1){
    arr2.push(num*2);
};
console.log(arr1, arr2);

arr1 = [1,2,3];

//1)-Esta funcion es como la de flecha pero para que la entendamos mejor:
/*arr2 = arr1.map[function (num){
    return num * 2;
}];*/

//2)-Otra forma con función nombrada:
/*arr2 = arr1.map(myFunction);

function myFunction(num){
    return num * 2;
};*/

//3)-Esta es la función más corta pero es igual a la de arriba:
arr2 = arr1.map(num => num * 2);
console.log(arr2);

//A partir de un array con años de nacimiento, calcular edades
const birthYears = [1980, 1990, 1975, 1970];
console.log(birthYears);
let arraYears =[];
//Lo hago con una función normal:
for(let num of birthYears){
    arraYears.push(2022-num);
};
console.log(birthYears, arraYears);
//Lo hago con function de order superior:
arraYears = birthYears.map(year => 2022 - year);//year o num es igual cual use
console.log(arraYears);

//Filter:-----------------------------------------
//Filter:--------------------------------------------
let prices = [150, 50, 49, 51, 15, 237];
let expensivePrices = [];
//función normal:
for(let price of prices){
    if(price >= 50){
        expensivePrices.push(price);//.push lo que hace es reemplazarme el array por lo que le pido aquí
    };
};
console.log(expensivePrices);
//ahora con Higher Order F:
expensivePrices2 = prices.filter(price => price >= 50);
console.log(expensivePrices2);

//---otro ejemplo:
const cars = [
    {
        brand: "BMW",
        year:2010,
        plateNumber:"HGJ1282",
        address:{
            street:"lo que sea",
            city:"wonderland"
        }
    },
    {
        brand: "Mercedes",
        year:1990,
        plateNumber:"BXC1234",
        address:{
            street:"lo que sea 23565",
            city:"nuncaJamas"
        }
    },
    {
        brand: "Volvo",
        year:2021,
        plateNumber:"LKJ1293",
        address:{
            street:"lo que sea 54451",
            city:"wonderland"
        }
    },
];
console.log(cars.filter(car => car.plateNumber.includes("L")));
console.log(cars.filter(car => car.year));
console.log(cars.filter(car => car.address.city === "wonderland"));
console.log(cars.filter(car => car.address.city === "wonderland" && car.year > 2020));
//Ahora quiero un array de strings solo con las marcas de los coches:
//Vemos el .sort aplicado a mi objetos de coches:
cars.sort((car1, car2) => car1 - car2);
console.log(cars);

console.log(cars.map(car =>car.brand));
console.log(cars.filter(car => car.brand));//ver que no devuelve lo mismo que .map

//Sort:-------------------------------------------
//Sort:-------------------------------------------
const arr4 =[10, 7, 13 ,20];

arr4.sort(function(num1, num2){
    if(num1 > num2){
        return 1;
    }else if (num1 < num2){
        return -1;
    }else {
        return 0;
    }
});   

arr4.sort((num1, num2) => num1 - num2);
console.log(arr4);

console.clear();

//Reduce:-------------------------------------------
//Reduce:-------------------------------------------
const arr3 =  [10, 7, 13, 20];
let suma = 0;
//función normal:
for (let num of arr3){
    suma = suma + num;
};
console.log(suma);

//funcion higher:
suma = arr3.reduce((suma, currentNumber) => suma + currentNumber, 0);//fijarnos mucho que el 0 va dentro del paréntesis del reduce.
//El poner o no poner el 0 no me cambia pero mejor lo pongo así me acostumbro.
console.log(suma);





