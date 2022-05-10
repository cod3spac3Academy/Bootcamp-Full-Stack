Algoritmo Ejercicio_21bis
	
	//algoritmo que lea números enteros hasta teclear 0,  y nos muestre
	//el m?aximo, mínimo y la media de todos ellos.
	//Piensa como inicializar las variables
	
	Definir N, max, min, suma, contador Como Entero;
	Definir media Como Real;
	
	suma = 0;
	contador = 0;
	max = 0;
	min = 0;
	
	//TENGO PROBLEMAS CON EL REPETIR
	
	Repetir
		Escribir " Dame un número ";
		Leer N; 
		
		Si N > max Entonces
			Escribir " el nuevo máximo es ahora ", N;
			max = N;
		SiNo
			escribir " el nuevo mínimo es ahora ", N;
			min = N;	
			
		FinSi
		
		
	Mientras Que N <> 0;
	
	//contador = contador +1;
	//suma = suma +N;
	//media = suma/contador;
	//Escribir " la media es: ", media;
	
FinAlgoritmo
