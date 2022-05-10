Algoritmo Ejercicio_30
	
	Definir N, filas, columnas, limite, contador Como Entero;
	
	
	limite=1;
	Leer limite;
	
	//APARTADO A)
	Para filas=1 hasta limite con paso 1 Hacer//aquí le decimos que para la fila 1 hasta 4 que yo le ponga por ejemplo, me ejecute todo lo del PARA que tengo debajo
		para columnas =1 hasta limite con paso 1 Hacer //este  PARA es el que se encaga del dibujo horizontal
			Si columnas <= filas Entonces //aquí es donde le digo que sea un triángulo, que vaya haciendo siempre menos columnas                                                                                                                 
				Escribir columnas sin saltar;//ésta es la clave, le digo que me escriba el número de columna
			FinSi
		FinPara
		Escribir "";
	FinPara
	
	Escribir "";
	
	//APARTADO B)
	Para filas=1 hasta limite con paso 1 Hacer
		para columnas = 1 hasta limite con paso 1 Hacer
			Si columnas <= filas Entonces
				
				Escribir filas sin saltar;//la clave es esto porque si pongo como arriba me sigue el orden 1234 y aquí  cada fila es un numero
			FinSi
		FinPara
		Escribir "";
	FinPara
	
	Escribir "";
	
	//APARTADO c)
	//1
	//2 3
	//4 5 6
	//7 8 9 10
	contador=1;
	Para filas=1 hasta limite con paso 1 Hacer
		para columnas =1 hasta limite con paso 1 Hacer
			Si columnas <= filas Entonces
				
				Escribir contador, " " ,sin saltar;//aquí le pongo un espacio
				contador = contador +1;//es la claveen PARA hay que poner esta igualdad aquí y no antes de ESCRIBIR
			FinSi
		FinPara
		Escribir "";
	FinPara
	
	
	
FinAlgoritmo
