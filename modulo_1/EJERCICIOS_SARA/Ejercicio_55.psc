Algoritmo Ejercicio_55
//Generar una matriz de 4 filas y 5 columnas con números aleatorios entre 1 y 100. 
//Imprimirla en forma de matriz o tabla, con sus filas y columnas.
	
	Definir num_filas, num_columnas,filas, columnas, matriz, tamano Como Entero;//matriz es mi array
	num_filas=4;
	num_columnas=5;
	tamano=100;
	Dimension matriz[num_filas, num_columnas];//esto sería un excell de 4 filas y 5 columnas (simpre orden: filas-columnas),
	
	Definir contador Como Entero;
	Contador= 1;
	
	Para filas=0 hasta num_filas-1 Hacer
		para columnas=0 hasta num_columnas-1 Hacer
			matriz[filas, columnas]= Aleatorio (1,100);
			Escribir matriz[filas, columnas], "      " sin saltar;
		FinPara
		Escribir "";
	FinPara
	
	
FinAlgoritmo
