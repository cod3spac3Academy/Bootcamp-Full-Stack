Algoritmo Ejercicio_38
//	Dado un array de números de 5 posiciones con los siguiente valores [1, 2, 3, 4, 5], guardar los
//	valores de este array en otro array distinto pero con los valores invertidos, es decir, que el segundo
//	array deberá tener los valores [5,4,3,2,1].
	Definir array_1, array_2, tamano, indice Como Entero;//indice es como contador pero con los arrays
	tamano=5;
	dimension array_1[tamano], array_2[tamano];
	
//	array_[0]= 1; Forma manual, que es igual que hacer:array_1[indice]=indice+1 (lo que hay dentro del PAra)
//	array_[1]= 2; 
//	array_[2]= 3; 
//	array_[3]= 4; 
//	array_[4]= 5; 
	
	//este bucle es para generar e imprimir el array_1:de valor 1 hasta 5
	Para indice=0 hasta tamano-1 con paso 1 Hacer
		array_1[indice]= indice+1;
		Escribir array_1[indice], " " sin saltar;
	FinPara
	Escribir "";
	//este bucle es para inicializar el segundo array 
	Para indice=0 hasta tamano-1 con paso 1 Hacer
		array_2[indice]= array_1[tamano-1-indice];//lo que hay en corchetes es la clave del ejercicio para que vaya decreciendo
		Escribir array_2[indice], " " sin saltar;
	FinPara
	
	//array_2[indice]= array_1[tamano-1-indice];
	//aquí le digo que para el array2 que vaya decreciendo le digo que empiece por el tamano-1, e.d., 5, y les restamos indice
	//porque al ser una variable que en array1 va creciendo aquí lo que hace es ir menguando el tamano total que es
	//donde empieza array2.
	
	
	
	Escribir "";
FinAlgoritmo
