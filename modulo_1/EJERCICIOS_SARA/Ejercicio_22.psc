Algoritmo Ejercicio_22
	//Algoritmo que visualice la cuenta de los números
	//que son múltiplos de 2 o 3, que hay entre 1 y 100.
	
	Definir N, contador_mult_2, contador_mult_3 Como entero;
	
	
	N = 0;
	contador_mult_2 = 0;
	contador_mult_3 = 0;
	
	
	Repetir
		N = N +1;
		Si N mod 2== 0 Entonces;
			Escribir " un multiplo de 2 es ", N;
			contador_mult_2=contador_mult_2+1;//aquí asigno valor a la variable de justo arriba
		FinSi
		
		Si N mod 3== 0 Entonces;
			Escribir " un multiplo de 3 es ", N;
			contador_mult_3=contador_mult_3+1;//aquí asigno valor a la variable de justo arriba
												//es para qque me ponga todos en lista
		FinSi
	Hasta que N=100;
	
	Escribir " Total multiplos de 2 :", contador_mult_2;
	Escribir " Total multiplos de 3 :", contador_mult_3;
	
FinAlgoritmo
