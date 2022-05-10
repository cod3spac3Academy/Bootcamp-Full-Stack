Algoritmo Ejercicio_25_diagonal
	DEfinir columnas, filas, tamano_lado Como Entero;
	
	
	Escribir " Introduce el tamaño del cuadrado ";
	Leer tamano_lado;
	
	Para filas = 1 Hasta tamano_lado con paso 1  Hacer
		//encargado de dibujar columnas, de izq a dcha
		
		Para columnas = 0 Hasta tamano_lado-1 con paso 1 Hacer//aquí y arriba podríamos borrar (con paso 1)
			//encargado de dibujar columnas
			si tamano_lado - filas == columnas    entonces //es como si pusiera 5=5, nos muestra un asterisco de cada fila que coincide con una columna
				Escribir  "* " sin saltar;//aquí ponemos * y espacio y para que la columna no se que queda en mitad del cuadrado abajo le tengo que dar dos espacios
			SiNo
				Escribir "  " sin saltar;//le doy dos espcacios para que sean los mismos que arriba porque el * y el espacio son en total dos espacios
			FinSi
			
		Fin Para
		Escribir "   ";//si no pongo esto me sale todo seguido y la estructura no se entiende, pruébalo.
	Fin Para
FinAlgoritmo
