Algoritmo Ejercicio_52
	Definir array, tamano, i, N, contador como entero;
	tamano=6;
	Dimension array[tamano];
	
	//para darle los 10 valores al array:
	
	Para i=0 hasta tamano-1 con paso 1 hacer
		array[i]=Aleatorio(1,15);
		Escribir array[i];
	FinPara	
	
	Escribir "Escribe el numero a comprobar";
	Leer N;
	contador=0;
	//para comprobar si N esta dentro de los valores de ese array:
	Para i=0 Hasta tamano-1 Con Paso 1 Hacer
		Si N==array[i] Entonces
			Escribir "Ese número está dentro de mi array";
			contador= contador+1;
		SiNo
			Si N<>array[i] Entonces
				Escribir "NO LO ESTÁ";
			FinSi
		FinSi
	Fin Para
	
	Escribir "El numero ", N, " ha aparecido ", contador, " veces.";
	
FinAlgoritmo
