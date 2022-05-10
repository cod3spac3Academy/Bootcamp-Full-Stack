Algoritmo Ejercicio_16
	
	Definir contador Como Entero;
	
	contador = 0;
	
	Mientras contador < 9 Hacer //esta orden le dice que hasta que contador no llegue a 9
								//me devuelva las potencias de cada uno, sin que yo 
								//tenga que introducir número, no me lo pide
		Escribir " Contador de ", contador, ":  ", contador + contador;
		contador = contador +1;//si no le pongo esto se queda en un bucle infinito devolviendo 0
		
	Fin Mientras
	
	//En Javascript es muy común en lugar de poner: contador = contador+1
	//poner: contador += 1 y en muchos otros lenguajes, que ya aprenderemos.
	
	
FinAlgoritmo
