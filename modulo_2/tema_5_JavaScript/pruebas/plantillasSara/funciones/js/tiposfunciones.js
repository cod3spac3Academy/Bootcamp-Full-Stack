console.log("probando otra vez");
document.write("holaaa");

//FUNCIÓN DECLARADA/NOMBRADA:
function saludar (){
    console.log("Hola probando output");
};
console.log(saludar());


//FUNCIÓN ANÓNIMA:
const saludar2 = function (){
    console.log("Hola me llamo Sara");
};
console.log(saludar2());

//FUNCIONES FLECHA: (estas funciones no pueden usar el "this")
const saludar3 = () => {console.log("Hola me llamo Lidia");};
console.log(saludar3());
