Algoritmo Ejercicio_41
//Dado un array de N números enteros que se generen aleatoriamente, hacer un algoritmo que:
//		a)
//		Obtenga cuántos números son mayores que 0.
//		b)
//		Calcule el promedio de los números positivos.
//		c)
//		Obtenga el promedio de todos los números.
	Definir mi_array, indice, tamano, contador_positivos,contador_total, suma_positivos, suma_total Como Entero;
	definir promedio_positivos, promedio_de_todos_los_numeros  como real;
	
	Escribir "Escriba el tamaño del array ";
	Leer tamano;
	Dimension mi_array[tamano];
	
	//A)
	contador_positivos=0;
	contador_total=0;
	suma_positivos=0;//apartado B
	suma_total=0;//apartado C
	
	Para indice=0 hasta tamano-1 con paso 1 Hacer
		mi_array[indice]= Aleatorio(-15,15);
		suma_total= suma_total + mi_array[indice];//para apartado C.
		Escribir " El nº aleatorio que te doy es ", mi_array[indice], ",", " " sin saltar;
		Si mi_array[indice]>0 Entonces
			contador_positivos=contador_positivos+1; //aquí la clave del ejercicio
			suma_positivos = suma_positivos + mi_array[indice];//apartado B
			Escribir " número > 0 ";
		sino 
						
			Escribir " número negativo";
		FinSi
		contador_total=contador_total+1;
		promedio_de_todos_los_numeros=suma_total/contador_total;
	FinPara

	Escribir " a)  Los números > 0 que llevamos son : ", contador_positivos;//lo pongo aquí porque si lo pongo dentro del PARA me lo diría de cada num>0 que me salga
	
	Escribir "  LA SUMA TOTAL DE TODOS LOS NÚMEROS ES :", suma_total;

	promedio_positivos= suma_positivos/contador_positivos;//apartado B
	Escribir " b)  El promedio de los números positivos es : ", promedio_positivos;
	
	Escribir " c)  El promedio total de todos los números es : ", promedio_de_todos_los_numeros; 

FinAlgoritmo
