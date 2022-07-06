console.log("probando");
//Mouseover: al pasar el ratón encima del botón, éste cambia de color:
let pruebaRaton = document.getElementById("event1");

pruebaRaton.addEventListener("mouseover", function(event){
    event.target.style.color = "red";
}, false);

pruebaRaton.addEventListener("mouseout", function(e){
    e.target.style.color = "black";
}, false);

//Onclick: 
let pruebaRaton2 = document.getElementById("event2");

pruebaRaton2.addEventListener("click", function(event){
    event.target.style.backgroundColor = "blue";
},false);




