Algoritmo Ejercicio_33bis

	
	Definir mi_array, tamano, indice, N Como Entero;
	tamano=5;//esto es como tener 5 variables
	Dimension mi_array[tamano];
	
	//para que me muestre los elementos en orden tal cual los pongo
	Para indice=0 Hasta tamano-1 Con Paso 1 Hacer//en esta parte me pide que le meta los 5 números del tirón
		leer mi_array[indice];
	Fin Para
	Para indice=0  Hasta tamano-1 Con Paso 1 Hacer//en esta parte me imprimirá los valores de los arrays
		Escribir " Mi array [ ", indice," ] "," : es ", mi_array[indice], ;
	Fin Para
	
	//para que me muestre los elementos desde el ultimo hasta el primero
	Para indice=0 Hasta tamano-1 Con Paso 1 Hacer//en esta parte me pide que le meta los 5 números del tirón
		leer mi_array[indice];
	Fin Para
	Para indice=tamano -1 Hasta 0 Con Paso -1 Hacer//en esta parte me imprimirá los valores de los arrays
		Escribir " Mi array [ ", indice," ] "," : es ", mi_array[indice], ;
	Fin Para
	
	//para que el ultimo numero que le meto al array es el primero que me muestra:
	Para indice=0 Hasta tamano-1 Con Paso 1 Hacer//en esta parte me pide que le meta los 5 números del tirón
		leer mi_array[tamano-1-indice];
	Fin Para
	Para indice=0  Hasta tamano-1 Con Paso 1 Hacer//en esta parte me imprimirá los valores de los arrays
		Escribir " Mi array [ ", indice," ] "," : es ", mi_array[indice], ;
	Fin Para
	
FinAlgoritmo
