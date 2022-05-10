Algoritmo Ejercicio_38bis
	//OTRA FORMA DE HACERLO:
	Definir array_1, array_2, tamano, indice Como Entero;//indice es como contador pero con los arrays
	tamano=5;
	dimension array_1[tamano], array_2[tamano];
	
	Para indice =0 Hasta tamano-1 Con Paso 1 Hacer
		array_1[indice]=indice +1;
		array_2[tamano-1-indice]=array_1[indice];
		

	Fin Para
	
	Para indice=0 Hasta tamano-1 Con Paso 1 Hacer
		Escribir "El valor de array_1 [", indice, "] es: ", array_1[indice];
		
	Fin Para
	
	Escribir "";
	
	Para indice=0 hasta tamano-1 Con Paso 1 Hacer
		//Escribir "El valor de array_2 [", tamano-1-indice, "] es: ", array_2[tamano-1-indice];
		//así se ha hecho en clase pero la línea anterior también vale solo que empieza a 
		//imprimir desde el 4 pero los valores van bien
		Escribir "El valor de array_2 [", indice, "] es: ", array_2[indice];

	Fin Para
	
	
FinAlgoritmo
