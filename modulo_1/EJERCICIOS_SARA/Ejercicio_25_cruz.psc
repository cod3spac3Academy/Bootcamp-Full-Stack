Algoritmo Ejercicio_25_cruz
	DEfinir columnas, filas, tamano_lado Como Entero;
	
	
	Escribir " Introduce el tama�o del cuadrado ";
	Leer tamano_lado;
	
	Para filas = 1 Hasta tamano_lado con paso 1  Hacer
		//encargado de dibujar columnas, de izq a dcha
		
		Para columnas = 0 Hasta tamano_lado con paso 1 Hacer//aqu� y arriba podr�amos borrar (con paso 1)
			//encargado de dibujar columnas
			Si (filas==columnas) o (tamano_lado-filas+1==columnas) Entonces 
				Escribir  "* " sin saltar;//aqu� ponemos * y espacio y para que la columna no se que queda en mitad del cuadrado abajo le tengo que dar dos espacios
			SiNo
				Escribir "  " sin saltar;//le doy dos espcacios para que sean los mismos que arriba porque el * y el espacio son en total dos espacios
			FinSi
		Fin Para
		Escribir "   ";//si no pongo esto me sale todo seguido y la estructura no se entiende, pru�balo.
	Fin Para
FinAlgoritmo
