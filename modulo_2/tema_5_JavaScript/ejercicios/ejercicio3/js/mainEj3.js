//EJERCICIO 3:
//Apartado 1, generamos el array:
let employees = [];

//vamos a hacer una función genérica para que me dé valores entre 1250 y 4000: por si quiero reutlizar en un futuro o simplemente quitar complejidad al bucle de abajo
function randomBetweenRange (start, end){
    return Math.floor(Math.random() * (end - start) + start);//puedo usar Math.ceil y es lo contrario que .floor.
}

for (let i = 0; i < 100; i++) {
    const newEmployee = {//esto es el objeto dentro del array
        cargo: `Empleado ${i}`,
        rendimiento: Number(Math.random().toFixed(2)),//para que me lo genere aleatorio y lo redondee a dos decimales. Añado Number al ppio porque toFixed nos devuelve string y no queremos eso.
        salario : randomBetweenRange (1250, 4000),//ver función arriba
    };
    employees.push(newEmployee);//esto es para que cada nuevo empleado me lo meta en el array
}

console.log("1.Generación del array",  employees);

//Apartado 1 versión 2: con un constructor
function Employee(cargo, rendimiento, salario){
    this.cargo = cargo;
    this.rendimiento = rendimiento;
    this.salario = salario;
};

employees2 = [];
for (let i = 1; i <= 100; i++){
    employees2.push(new Employee(
    `Empleado ${i}`,
    Number(Math.random().toFixed(2),
    randomBetweenRange (1250, 4000),))
    );
};

console.log("1.Generación del array versión 2", employees2);

//Apartado 2: ordenar el array por rendimiento con función anónima

// employees.sort((rendimiento) => (employee1 - employee2));//esto es lo que hice yo

employees.sort(function (emp1,emp2) {
    return emp1.rendimiento - emp2.rendimiento
});
console.log(employees);

//Apartado 3: ordenar por salario con función flecha

employees.sort((empleado1, empleado2) => empleado1.salario - empleado2.salario);
console.log("Ordenar por salario", employees);

//Apartado 4: ordenar por empleado en decreciento(dentro de Cargo):



function ordenarDecreciente (empleado1, empleado2){
    return empleado2.cargo.split(" ")[1] - empleado1.cargo.split(" ")[1];
    //return empleado2.cargo.slice(9) - empleado1.cargo.slice(9); Alternativa más corta pero rígida
    //return empleado2.cargo.replace("Empleado ", "") - empleado1.cargo.replace("Empleado ", ""); //Alternativa
};
employees.sort(ordenarDecreciente);
console.log("Apartado 4, ordenadar empleados por cargo", employees);

//Apartado 5: imprimir cargo y saladio < 2500€ usando filter.


console.log("Los empleados de más de 2500€:");

        //vamos a escribir funciones concatenadas:
employees
.filter (employee => employee.salario > 2500)
.forEach (employee => console.log(employee.cargo, employee.salario));


//Apartado 6: usando map, subir le sueldo 25% a los que cobren < 1500 e imprimir el punto 5:

employees = employees.map(employee => {
    if (employee.salario < 1500){
        //Modifico el salario
        employee.salario = employee.salario * 1.25;
        //Devuelvo el empleado completo, con el salario modificado
        return employee;
    } /*else {*/ //este else no me hace falta si corro el return de abajo un puesto a la izquierda
    return employee;
    
});
//le doy este employees = etc porque map no me reemplaza, entonces le pongo el mismo nombre para que me cree un array nuevo, aunque tenga el mismo nombre

console.log("Apartado 6:", employees);

console.clear();

//Apartado 7: caluclar el coste total para la empresa

const totalCost = employees.reduce((salarioSuma, employee) => {
    salarioSuma += employee.salario * 1.15, 0;
    return salarioSuma;
}, 0);

//esto es igual que hacer:
//const totalCost = employees.reduce((salarioSuma, employee) => salarioSuma + employee.salario * 1.15, 0);
console.log(totalCost);

//Apartado 8:
//Sacar a los empleados que tengan un rendimiento menor a 0.3:
employees = employees.filter(employees => employees.rendimiento <= 0.3);
console.log("8.1.Despedir a los que tengan un rendimiento menor a 0.3", employees);

//Calcular sueldo medio de la empresa:
let sueldoMedio = employees.reduce ((salarioSuma, employees) => salarioSuma + employees.salario, 0) / employees.length;

sueldoMedio = sueldoMedio.toFixed(2);//esto es para redondear los decimales

console.log("8.2.El sueldo medio de la empresa: ", sueldoMedio);

//Subir el sueldo de lo que tengan rto superior a 0.7.
//(éste se puede hacer como el punto)

/*employees = employees.map (employees => {
    if (employees.rendimiento > 0.7){
        employees.salario = employees.salario * 1.25;
        
    }
    return employees;
});*/

employees.forEach (employee => {
    if (employee.rendimiento > 0.7){
        employee.salario = employee.salario * 1.25;
        console.log("Subir el sueldo del empleado", employee.position);
    }
    return employees;
});

//console.log("8.3.Subir el sueldo a los que tengan redimiento superior a 0.7", employees);
