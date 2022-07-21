console.log("hi");
//1
const container = document.querySelector(".punto1");
const parrafo1 = document.querySelector("#par1");
const parrafo2 = document.querySelector("#par2");

parrafo1.textContent = "Hola probando párrafo 1";
parrafo2.textContent = ("Hola probando párrafo 2 y ver si todo funciona");//no me afectan los paréntesis

//2
buttonChangebackgroundColor = document.querySelector("#btnPunto2");

buttonChangebackgroundColor.addEventListener ("click", (e) =>{
    document.body.style.backgroundColor = "red"  ;
});

//3
const ponerImagen = document.querySelector("li");
const imagenLista =  document.querySelector("img");

const changeImage = (e) => imagenLista.src = e.target.textContent;
ponerImagen.addEventListener ("click", changeImage);

/*ponerImagen.addEventListener ("click", function (e) {
    imagenLista.src = e.target.textContent;
});*/

//4
const insertarTexto = document.getElementById("btnPunto4");
const parrafo3 = document.getElementById("parrafoPunto4");
const inputPunto4 = document.querySelector("input");

insertarTexto.addEventListener("click", (e) => parrafo3.textContent = inputPunto4.value);

//4.2 no sé hacerlo
console.clear();
//5
//textValidate
const textoToValidar = document.querySelector("#textToValidate");
const buttonValidate = document.getElementById("buttonValidate");
const parrafoPunto5 = document.getElementById("parrafoPunto5");

// function escribirEnParrafoDebajo(){
//     textoToValidar.textContent = parrafoPunto5.value;
// };


buttonValidate.addEventListener ("click", function (e) {
    if(textoToValidar.value.length > 15){
        textoToValidar.textContent = parrafoPunto5.textContent;        
        e.target.style.color = "green";
    }else {
        alert ("Escribe más");
        e.target.style.color = "red";
        
    }
});


//6
const inputPar = document.querySelector("#inputPar");
const buttonValidar = document.querySelector("#btnPar");

//transformar inputPar de texto a número antes de ver si es par
 
buttonValidar.addEventListener("Click", (e) =>{
    let verSiPar = parseInt(inputPar);
    if (verSiPar.textContent.value % 2 !== 0){
        verSiPar.style.color = "5px solid red";
    }else {
        verSiPar.style.color = "4px solid blue";
    }    
})

// verSiPar.nextElementSibling.addEventListener("Click", (e) =>{
//     if (verSiPar.textContent.value % 2 !== 0){
//         verSiPar.border.style = "2px solid red";
//     }else {
//         verSiPar.style.border = "4px solid blue";
//     }
// });

//7
const mainList = document.querySelector("#lista7");

for (let i = 0; i < 10; i++) {
    const newLi = document.createElement("li");
    newLi.textContent = `Elemento ${i}` ;
    mainList.appendChild(newLi); 
};

//8
const enlaceMozilla = document.querySelector("a");
const btnNuevaPagina = document.querySelector("#btn8");
btnNuevaPagina.addEventListener("Click", () => enlaceMozilla.target = "_blank");

//en clase:
// const link = document.querySelector("a");
// const newPage = document.querySelector("#newPage");
// newPage.addEventListener("click", () => link.target="_blank");

//9











