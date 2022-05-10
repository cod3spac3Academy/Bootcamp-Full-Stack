Algoritmo Ejercicio_26
	//Desarrollar un algoritmo que lea 10 números por teclado y calcule el cubo de cada 
	//uno de ellos. En cada lectura, tiene que indicar por pantalla el número que está 
	//pidiendo. Ejemplo de salida porpantalla:
		//Introduce el número1º
		//8
		//El cubo de 8 es 512.
	//Introduce el número 2º
	
	Definir N, cubo, contador como entero;
	
	
	Para contador =1 Hasta 10 Con Paso 1 Hacer
		N=0;
		Escribir " Introduce el numero ", contador;//contador es lo que me va mostrando y aquí  no tengo que poner +1 porque ya en Para va incrementando, ver linea 1
		Leer N;
		cubo = N^3;
		Escribir " El cubo de ", N , " es ", cubo;
	Fin Para
	Escribir "fin";
	
	
	
	
	
FinAlgoritmo
