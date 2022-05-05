Algoritmo Ejercicio_48
//	Almacenar una lista de nombres en un array y luego ordenarlos alfabéticamente. Para la entrada de
//		datos se utiliza una estructura Mientras, sin saber a priori la cantidad de datos que se ingresarán.
//		Pista: Los datos alfanuméricos (
	//			strings ) también se pueden comparar con los operadores < y>.
	
	Definir tamano, i,j, contador Como entero;
	Definir nombre, lista_nombres, aux Como Caracter;
	tamano=100;
	Dimension lista_nombres[tamano];
	
	contador= 0;
	
	Repetir
		
		Escribir " Escribe un nombre, déjalo vacío para finalizar la ejecución ";
		Leer nombre;
		Si nombre <> "" Entonces
			lista_nombres[contador]= nombre;
			contador= contador+1;
			
		Fin Si
	Hasta Que nombre == "";
	
	Para i=0 Hasta contador-2 Con Paso 1 Hacer
		PAra j=0 hasta contador-2 con paso 1 hacer
			Si lista_nombres[j] > lista_nombres[j+1] entonces;
				aux = lista_nombres[j];
				lista_nombres[j]= lista_nombres[j+1];
				lista_nombres[j+1]= aux;
			Finsi
		FinPara	
	Fin Para
	//Imprimo para ver los cambios:
	Para i=0 Hasta contador-1 Con Paso 1 Hacer
		Escribir lista_nombres[i];
	FinPara

	

	
	
FinAlgoritmo
