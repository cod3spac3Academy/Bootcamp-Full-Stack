//1. Array de libros en memoria:
//creo un constructor de Books, vacío, lo relleno en el siguiente apartado:
function Book(id, title, author, sales, price){
    this.id = id;
    this.title = title;
    this.author = author;
    this.sales = sales;
    this.price = price;
    
};
//creo un array con 10 libros (con el constructor de arriba) para añadir a la tabla:
let books = [
    new Book(6, "La sombra de una Palmera", "M.García", 750231, 12),
    new Book(7, "Frankenstein", "Mary Shelly", 5623148, 16),
    new Book(8, "El guardián de las flores", "Rober Cagiao", 56482, 12),
    new Book(9, "Más cansadas que infelices", "Laura Sagnier", 9562398, 18),
    new Book(10, "la sal de la vida", "Anna Gavalda", 9856435, 9),
    new Book(11, "La sombra de una Palmera", "M.García", 750231, 12),
    new Book(12, "Frankenstein", "Mary Shelly", 5623148, 16),
    new Book(13, "El guardián de las flores", "Rober Cagiao", 56482, 12),
    new Book(14, "Más cansadas que infelices", "Laura Sagnier", 9562398, 18),
];

//vamos a rellenar la tabla con estos datos, quiero añadirlos a los que ya hay en la tabla:
//creo las constantes para los select:
const booksTbody = document.getElementById("booksTbody");
const inputTitle = document.getElementById("inputTitle");
const inputAuthor = document.getElementById("inputAuthor");
const inputSales = document.getElementById("inputSales");
const inputPrice = document.getElementById("inputPrice");



//reemplazo la lista guardado en HTML con los datos de mi array de libros:
//FUNCIÓN PARA ACTUALIZAR LA LISTA:
//Punto 3:
function updateTable () {
    booksTbody.innerHTML = ""; //con esto vacío la lista que trae por defecto el HTML

    books.forEach(book => {  //con esto relleno mi tabla con el array
        booksTbody.innerHTML += `
        <tr>
            <td>${book.id}</td>
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.sales}</td>
            <td>${book.price}</td>     
            <td>
                <button class="btn btn-danger" id="${book.id}">Remove</button>
            </td>
        </tr>`;

    });
};

updateTable(); //llamamos a la función, pero no en consola, si no en la página

//Punto 5. Si pulsamos remove, se borra esa línea de la tabla: Haciéndolo así, solo tengo que crear un evento que se aplica a todos los botones.
booksTbody.onclick = e => {
    if(e.target.tagName === "BUTTON"){ //TIENE QUE ESTAR "BUTTON" EN MAYÚSCULA
        books = books.filter(book => book.id != e.target.id); //significa que me duvuelve todos los libros menos aquel que tiene el id que quiero eleminar.Es lo mejor para elimiar elementos demanera sencilla.
        updateTable();
    }
};

//Punto 6. Añadir los elementos a través del formulario
 const addBookInput = document.getElementById("buttonSave");

 addBookInput.addEventListener("click", e => {
     e.preventDefault(); //para que no haga lo que hace algo por defecto. En este caso, para que no me recargue la página entera de nuevo, si no que solo me añada lo que quiera meter, porque he podido borrar una línea y querer añadir una nueva sin que me recargue todo y me vuelva a aparecer la que he borrado.
     //console.log(inputTitle.value, inputAuthor.value, inputSales.value, inputPrice.value);//comprobamos en consola que esto no da error y borramos porque no me hace falta para la función.
     //books = books.push () //quiero decirle que me meta en la lista lo que meta en formulario
     const newID = books[books.length -1].id + 1;

     books.push (new Book (  //aquí creamos la forma de añadir la línea nueva con un push.
         newID, //esta variable esta creada fuera de la función push para que siga el orden del último libro
         inputTitle.value,
         inputAuthor.value,
         inputSales.value,
         inputPrice.value,)
        );
        updateTable();
 });
 





