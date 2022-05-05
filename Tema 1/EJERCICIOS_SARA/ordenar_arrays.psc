Algoritmo ordenar_arrays
	Definir array, tamano, aux, indice, j, i Como Entero;
	tamano=5;
	Dimension array[tamano];
	
	//inicializo los arrays (les doy valor):
	array[0] = 3;
	array[1] = 9;
	array[2] = 8;
	array[3] = 1;
	array[4] = 4;
	
	//Para ver por consola los números del array (antes de ordenarlos):
	Para indice=0 hasta tamano-1 con paso 1 Hacer
		Escribir array[indice], " " sin saltar;
	FinPara
	Escribir "";
	
	//Esto para que me lo ordene en su momento:
//	Si array[0] > array[1] Entonces //si el valor de array0 es mayor que el array1 queremos que lo intercambie con array1
//		aux= array[0];//esta variable auxiliar le asignamos uno de los dos valores
//		array[0]=array[1];//ahora a array0 le asignsmod aaray1 sobreescribiendo lo que hubiera antes, y podemos porque el valor lo hemos guardado previamente en nuestro auxiliar
//		array[1] =aux;//ahora a array1 le damos el valor que previamente le habiamos asignado a array0.
//	FinSi
	//Esto es el todo para que me intercambie los valores, vamos, me ponga el mayor detrás del menor en este caso, los mueva.
	Para i=0 hasta tamano-2 hacer//esto es para que me ordene todos los número no solo el mayo, este es el bucle externo
		//Ahora lo meto en un para y cambio los numeros de tamano de array por indice que es para que vaya creciendo solo
		//Envía el numero mayor al final 
		Para j=0 hasta tamano -2 Hacer//porque si no, solo me compararía el array1 y el array2
		//Esto para que me lo ordene en su momento:
			Si array[j] > array[j+1] Entonces 
				aux= array[j];//
				array[j]=array[j+1];
				array[j+1] =aux;
			FinSi
		FinPara
	Fin para
	
	//Para ver por consola el resultado, (una vez ordenados):
	Para indice=0 hasta tamano-1 con paso 1 Hacer 
		Escribir array[indice], " " sin saltar;
	FinPara
	Escribir "";
	Escribir "";
	

FinAlgoritmo
