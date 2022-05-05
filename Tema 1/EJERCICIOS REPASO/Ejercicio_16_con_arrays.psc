Algoritmo Ejercicio_16_con_arrays
	Definir array, tamano , i Como Entero;
	Definir cuadrado Como Real;
	tamano=9;
	Dimension array[tamano];
	
	
	array[0]=1;
	array[1]=2;
	array[2]=3;
	array[3]=4;
	array[4]=5;
	array[5]=6;
	array[6]=7;
	array[7]=8;
	array[8]=9;
	
	
	//valor al array
	Para i=0 hasta tamano -1 con paso 1 Hacer
		Escribir array[i] , " - " sin saltar;
	FinPara
	Escribir "";
	//hacemos los cuadrados
	Para i=0 hasta tamano-1 con paso 1 Hacer
		Si array[i]<>0 entonces
			cuadrado=array[i]*array[i];
			Escribir "el cuadrado de ", i, " es ", cuadrado;
		FinSi
		
	FinPara
	


	


	
	
	
FinAlgoritmo
