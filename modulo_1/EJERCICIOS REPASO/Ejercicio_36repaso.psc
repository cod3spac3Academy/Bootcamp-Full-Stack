Algoritmo Ejercicio_36repaso
//	Crear dos
//	arrays de números enteros de longitud 10 rellenos con números aleatorios del 1 al 20.
//	Imprimir índice y el resultado de la multiplicación de ambos elementos de los arrays del índice de
	//	cada iteración.
	
	Definir array1, array2, i, tamano, multiplicacion como entero;
	tamano=10;
	Dimension array1[tamano], array2[tamano];
	
	//CREO DOS ARRAYS:
	
	Escribir "     El primer array es: ";
	PAra i=0 hasta tamano -1 con paso 1 Hacer
		array1[i]= Aleatorio(1,20);
		Escribir "EL indice (", i, ") es ", array1[i] "" sin saltar;
		Escribir "";
	FinPara
	
	Escribir  "    El segundo array es: ";
	Para i=0 hasta tamano -1 con paso 1 Hacer 
		array2[i]= Aleatorio(1,20);
		
		Escribir "EL indice (", i, ") es ",array2[i] "" sin saltar;
		Escribir "";
	Fin Para
	
	//Imprimir índice y el resultado de la multiplicación de ambos elementos de los arrays del índice de
	//	cada iteración.
	
	Para i=0 hasta tamano-1 con paso 1 hacer
		multiplicacion = array1[i]*array2[i];
		Escribir "La multiplicación del índice (", i, ") de los dos arrays, es ", multiplicacion; 
	FinPara

	
	
FinAlgoritmo
