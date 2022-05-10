Algoritmo Ejercicio_47
//	Dados un array de 5 elementos con números aleatorios del 1 al 100. Imprimir el estado inicial del
	//	array, ordenarlo de forma ascendente y volver a imprimir el nuevo estado.
	
	Definir array, tamano, i,j, aux Como Entero;
	tamano=5;
	Dimension array[tamano];
	
	//Para imprimir el ESTADO INICIAL DEL ARRAY:
	Escribir "Estado inicial del array ";
	Para i=0 Hasta tamano-1 Con Paso 1 Hacer
		array[i]= Aleatorio(1,100);
		Escribir array[i];
	Fin Para
	Escribir "";
	
	//Para ordenar el array:
	Para i=0 Hasta tamano-2 Con Paso 1 Hacer
		PAra j=0 hasta tamano-2 con paso 1 hacer//si no ponemos el -2 da error todo el rato
			Si array[j] < array[j+1] entonces;//depende si pongo < o > me ordenará de mayor a menor o al reves
				aux = array[j];
				array[j]= array[j+1];
				array[j+1]= aux;
			Finsi
		FinPara	
	Fin Para
	Escribir "";
	
	//Para imprimir el ESTADO FINAL DEL ARRAY:
	Escribir "Estado final del array ";
	PAra i=0 hasta tamano -1 hacer //aquí ya se pone tamano-1 porque si no, el último número no me aparece
		Escribir array[i];
	FinPara

	
	
FinAlgoritmo
