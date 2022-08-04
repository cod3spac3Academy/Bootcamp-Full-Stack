//6.1. Posts - Paginación del lado del cliente

//Constantes
const POST_URL ="https://jsonplaceholder.typicode.com/posts";//ESTO ES LA PETICIÓN A LA API.  Esto es lo mejor, así lo tenemos en una constante para usarlo durante toda la página
const PAGE_SIZE = 20;

//Variables
let posts = [];
let currentPage = 1;

//Selectores
const postsDiv = document.querySelector("#posts");
document.querySelectorAll(".previousPage").forEach(button => button.addEventListener("click", changePage));//como no los uso para otra cosa, no necesito guardarlos dentro de una constante
document.querySelectorAll(".nextPage").forEach(button => button.addEventListener("click", changePage));

//Utilidades
function fillDiv() {
    const newPagePosts = paginate(posts, PAGE_SIZE, currentPage); //lleno la pagina de los 20 post que quiero sacar del array
    console.log(newPagePosts);
    postsDiv.innerHTML = "";     //vacío el contenedor. Si no lo hago, cada vez que hago Seguiente me añadiría los 20 eñlementos nuevos a los anteriores y yo quiero que borre los anteriores y ponga los nuevos, ed, que pase de página
    newPagePosts.forEach(post => postsDiv.innerHTML += `<h3>${post.id} ${post.title}</h3><p>${post.body}</p>`); //para cade elemento  del array va a ser un post y ql vacío anterior le metemos post title y el post body, concatenando éstos dos.
    
}

//                 --------------------------------------------------------

function changePage (event){    
    if (event.target.className === "previousPage" && currentPage > 1){
        currentPage--;
    } else if (event.target.className ==="nextPage" && currentPage <  posts.length / PAGE_SIZE){
        currentPage++;
    }
    fillDiv();//esto me dice que cuando ocurre uno de los dos eventos anteriores, me rellena de nuevo la página, si no lo pongo no haría nada
}
//                 -------------------------------------------------------

function paginate(array, page_size, page_number) {
    // human-readable page numbers usually start with 1, so we reduce 1 in the first argument
    //https://stackoverflow.com/questions/42761068/paginate-javascript-array
    return array.slice((page_number - 1) * page_size, page_number * page_size);
}



//Ahora hacemo el fetch
fetch(POST_URL)
.then(response => response.json())
//.then(data => console.log(data))//esto lo hago para comprobar que todo lo he escrito bien y me pone el array en consola, luego lo cambio por lo de abajo:
.then (data => {
    posts = [...data];  //data es mi array de posts
    fillDiv(); 

}); 

//6.2. Login y paginación desde el servidor
//Constantes
const LOGIN_URL = "https://reqres.in/api/login";
const USERS_URL = "https://reqres.in/api/users";

//Selectores
const emailInput = document.querySelectorAll("input")[0];//el 0 dice que cojo el primero
const passwordInput = document.querySelectorAll("input")[1];//con el 1 le digo que es el segundo de las etiquetas input
document.querySelector("#loginButton").addEventListener("click", login);
const usersList = document.querySelector("#usersList");
//                 -------------------------------------------------------
function login (event){
    event.preventDefault();//para evitar que poder defecto

    const userInfo = {
        email: emailInput.value,
        password: passwordInput.value
    };
    //console.log(userInfo);//para comprobar que voy yendo bien
   const config = { //esto para lo que me devuelva el servidor
       method: "POST",
       headers: {"Content-Type" : "application/json"},
       body: JSON.stringify (userInfo) //para convertir a string
   };
   //console.log(config);//vuelvo a comprobar y comento
   fetch(LOGIN_URL, config)  //esta línea es la que envía al exterior
   //.then(response => console.log(response)) //comprobamos la respuesta que no sea 400
   .then(response => response.json())
   .then(data => console.log(data)) //compruebo y comento
   //.then(data => data.error ? alert(data.error) : fetchAllUsers())
}
//                 -------------------------------------------------------
async function fetchAllUsers () {  //apartado 2 y esto nos vale para el futuro, bastante útil
    // fetch(USERS_URL)
    // .then(response => response.json())
    // .then(data => console.log(data))

    let response = await fetch (USERS_URL);
    let data = await response.json(); //con esto hacemos petición para saber cuántas páginas hay

    let users = [];
    for (let page = 1; page <= data.total_pages; page++) { //esto es para que me haga ir a la pagina siguiente pero sin parar hasta que no le pongo lo de abajo
        response = await fetch(`${USERS_URL} ?page=${page}`);  //esto es un fetch(una petición)para cada página, pido a la url de base más el parámetro ?page=2. para concatenar
        let newData = await response.json();//creo esta variable para guardar lo que me deuvelva de datos, es la respuesta en JSON, la petición (recordar que hay dios promesas, las del fetch y la del json)
        users = users.concat(newData.data); //users = [...users, ...newData.data];
        //users = users.concat(newData.data);
    }
    usersList.innerHTML = ""; //con esto le digo que vaya vaciando la lista
    users.forEach(user => usersList.innerHTML += `<li>${user.email}</li>`); //con esto me rellena la lista
}

//Alternativa para recuperar todas las páginas de una API utilizando .then()
//con una función recursiva
let users = [];
function fetchAllUsersV2(URL) {
    fetch(URL)
    .then(response => response.json())
    .then(data => {
        users = users.concat(newData.data);

        if(newData.page > newData.total_page){
            fetchAllUsersV2(`${USERS_URL}?page=${newData.page+1}`)
        }else {
            usersList.innerHTML = "";
            users.forEach(user => usersList.innerHTML += `<li>${user.email}</li>`);
        }

    });
}
