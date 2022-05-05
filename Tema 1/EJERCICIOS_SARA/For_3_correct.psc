Algoritmo ejemplo
	DEfinir columnas, filas, tamano_lado Como Entero;
	
	
	Escribir " Introduce el tamaño del cuadrado ";
	Leer tamano_lado;
	
	Para filas = 1 Hasta tamano_lado con paso 1  Hacer
		//encargado de dibujar columnas, de izq a dcha
		
		Para columnas = 1 Hasta tamano_lado con paso 1 Hacer//aquí y arriba podríamos borrar (con paso 1)
			//encargado de dibujar columnas
			Escribir " * " sin saltar;
		Fin Para
		Escribir "";
	Fin Para
FinAlgoritmo
