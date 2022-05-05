Algoritmo Ejercicio_28
	
	//Escribir "Hola";
	
	//Esperar 5 segundos;
	//Limpiar Pantalla;
	
	//Escribir "Adiós";
	
	Definir tiempo, contador Como Entero;
	Escribir "Introduce el tiempo del temporizador";
	Leer tiempo;
	
	Para contador = tiempo Hasta 0 Con Paso -1 Hacer
		Limpiar Pantalla;
		Escribir contador, " ", sin saltar;
		Esperar 1  segundos;
	Fin Para
	
	Escribir "¡¡Ring!!";
	
FinAlgoritmo
