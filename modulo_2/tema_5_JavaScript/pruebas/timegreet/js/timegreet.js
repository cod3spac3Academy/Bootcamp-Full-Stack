console.log("Hola");
document.write("Hola mundo");

//Obtengo la fecha actual
let now = new Date();
//Dividimos la fecha en horas minutos y segundos
hour_of_day = now.getHours();
minute_of_hour = now.getMinute();
seconds_of_minute = now.getSeconds();
//Mostramos la hora
console.log(`Es la ${hour_of_day}: ${minute_of_day} : ${seconds_of_day}`); //en consola
document.write(`Es la ${hour_of_day}: ${minute_of_day} : ${seconds_of_day}`); //en la página web