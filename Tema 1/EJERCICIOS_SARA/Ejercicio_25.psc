Algoritmo sin_titulo
	//Algoritmo que lea un número entero (lado) y a partir de él cree un cuadrado de asteriscos con ese
	//	tamaño. Los asteriscos sólo se verán en el borde del cuadrado, no en el interior.
	//Ejemplo, para lado = 4 escribiría:
	//		****
	//		* *
	//		* *
	//		****
	//		Recuerda la estructura repetitiva Para (for).
	
	DEfinir columnas, filas, tamano_lado Como Entero;
	
	
	Escribir " Introduce el tamaño del cuadrado ";
	Leer tamano_lado;
	
	Para filas = 1 Hasta tamano_lado con paso 1  Hacer
		//encargado de dibujar columnas, de izq a dcha
		
		Para columnas = 1 Hasta tamano_lado con paso 1 Hacer//aquí y arriba podríamos borrar (con paso 1)
			//encargado de dibujar columnas
			si filas==1 o filas== tamano_lado o columnas ==1 o columnas==tamano_lado entonces 
				Escribir  "* " sin saltar;//aquí ponemos * y espacio y para que la columna no se que queda en mitad del cuadrado abajo le tengo que dar dos espacios
			SiNo
				Escribir "  " sin saltar;//le doy dos espcacios para que sean los mismos que arriba porque el * y el espacio son en total dos espacios
			FinSi
			
		Fin Para
		Escribir "   ";//si no pongo esto me sale todo seguido y la estructura no se entiende, pruébalo.
	Fin Para


	
	
FinAlgoritmo
