Funcion  print_array ( array, tamano )
	Definir i como entero;
	Para i=0 hasta tamano-1 con paso 1 Hacer
		Escribir array[i], "  " sin saltar;
	FinPara
	Escribir "";
	
Fin Funcion

Algoritmo ejempos_funciones_2
	Definir i, array,array2, tamano Como Entero;
	tamano=10;
	Dimension array[tamano],array2[3];
	
	//primero le pongo valor:
	Para i=0 hasta tamano-1 con paso 1 Hacer
		array[i]= Aleatorio (1,1000);
	FinPara
	
	array2[0]=3;
	array2[1]=2;
	array2[2]=1;
	
	//ahora le digo que me lo imprima:
	print_array(array, tamano);
	print_array(array2, 3);
		
	
FinAlgoritmo
