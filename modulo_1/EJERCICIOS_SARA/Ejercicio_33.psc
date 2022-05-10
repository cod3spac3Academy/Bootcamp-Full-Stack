Algoritmo Ejercicio_33
//	Crear un array de tamaño 10 y que guardará números enteros introducidos por teclado.
//	Tras introducirlos todos, imprimirá cada índice junto con el valor al que corresponda.
	Definir mi_array, tamano, indice, N Como Entero;
	tamano=5;//esto es como tener 10 variables
	Dimension mi_array[tamano];
	
	//esto lo he sacado yo:
	Para indice=0 Hasta tamano-1 Con Paso 1 Hacer
		Repetir
			Escribir " poner un numero de array ";
			Leer mi_array[indice];
			Escribir "el array es ", mi_array[indice];
		hasta que tamano =5;
	
	Fin Para
	Escribir "";
	
	//En clase han hecho:
	Escribir "****en clase han hecho esto otro: ***";
	
	Para indice=0 Hasta tamano-1 Con Paso 1 Hacer
		leer mi_array[indice];
	Fin Para
	Para indice=0 Hasta tamano-1 Con Paso 1 Hacer
		Escribir " Mi array [ ", indice," ] "," : ", mi_array[indice], ;
	Fin Para
	
	
FinAlgoritmo
