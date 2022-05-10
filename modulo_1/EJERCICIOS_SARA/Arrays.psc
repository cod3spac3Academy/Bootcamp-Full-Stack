Algoritmo Arrays	
	Definir mi_array, tamano, indice Como Entero;
	tamano=5;//esto es como tener 5 variables
	Dimension mi_array[tamano];//darle el tamaño a mi array y uso otra variable para que no esté hardcodeado
	
	
	mi_array[0]=50;
	mi_array[1]=35;
	mi_array[2]=19;
	mi_array[3]=78;
	mi_array[4]=9;
	
	//Escribir mi_array[0], " ", mi_array[1], " ", mi_array[2], " ", mi_array[3], " ", mi_array[4], " "; 
	
	//aquí abajo imprime el array completo 
	Para indice =0 Hasta tamano-1 Con Paso 1 Hacer
		Escribir mi_array[indice], " " sin saltar;
	Fin Para
	Escribir " ";
	
	//inicializa array con todos los elementos con valor 5:
	Para indice =0 Hasta tamano-1 Con Paso 1 Hacer
		mi_array[indice]=indice+1;
		Escribir mi_array[indice], " " sin saltar;
	Fin Para
	Escribir " ";
FinAlgoritmo
