Algoritmo Ejercicio_29
	//hacer una calculadora para números factoriales
	
	Definir N, factorial, contador Como Entero;
	Leer N;
	factorial = 1;
	Para contador = 1 Hasta N Con Paso 1 Hacer
		factorial = factorial * contador;
	Fin Para
	
	Escribir " El resultador del factorial de N: ", "es ", factorial;
	
FinAlgoritmo
