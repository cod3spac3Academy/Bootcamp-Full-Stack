Algoritmo Ejercicio_36
//	Crear dos
//	arrays de números enteros de longitud 10 rellenos con números aleatorios del 1 al 20.
//	Imprimir índice y el resultado de la multiplicación de ambos elementos de los arrays del índice de
//	cada iteración. Cuidado con los elementos del array sin inicializar.
	Definir mi_array1, mi_array2,tamano, indice, num_aleatorio, multiplicación Como Entero;
	
	Leer tamano;
	
	Dimension mi_array1[tamano];
	Dimension mi_array2[tamano];
	
	Para indice=0 Hasta tamano-1 Con Paso 1 Hacer//este Para es necesario para decirle lo que tiene que hacer con la variable
		mi_array1[indice]= Aleatorio(0,20);
		mi_array2[indice]= Aleatorio(0,20);
		
	Fin Para

//	Para indice=0 Hasta tamano-1 Con Paso 1 Hacer
//		Escribir "Mi array1 número ", indice, " es ", mi_array1[indice];
//	Fin Para
//	Escribir "";
//	Para indice=0 Hasta tamano-1	 Con Paso 1 Hacer
//		Escribir "Mi array2 número ", indice, " es ", mi_array2[indice];
//	Fin Para
	//COMO SOLO ME PIDE QUE IMPRIMA LOS INDICES Y LA MULTIPLICACIÓN, MIS ANTEIRORES PARA LOS DEJO EN COMENTARIOS,
	//EL EJERCICIO ES:
	
	Escribir "";
	Para indice=0 hasta tamano-1 Hacer
		multiplicación=mi_array1[indice]*mi_array2[indice];
		Escribir "La multiplicación del array1 ", indice, " y el array2 ", indice, " es ", multiplicación;
	FinPara
	
	
	
	
	
FinAlgoritmo
