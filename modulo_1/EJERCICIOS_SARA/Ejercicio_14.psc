Algoritmo Ejercicio_14
	//surtidor mide en galones pero la gasolina se fija en litros
	
	Definir galones, precio_gasolina, galones_a_litros Como Real;
	
	Escribir " Introducir los galones que ha repostado el cliente "; sin saltar
	Leer galones;
	
	galones_a_litros = galones * 3.78541;
	precio_gasolina = galones_a_litros*1.333; //1 galones = 3.78541 litros
	
	Escribir " El importe a cobrar es ", precio_gasolina, " euros.";
	
	
FinAlgoritmo
