Algoritmo Ejercicio_35repaso
//	Crear un array de números donde le indicaremos el tamaño por teclado. Rellenará cada elemento
//	con números aleatorios entre 0 y 9. Posteriormente, mostrará por pantalla el valor de cada posición
//	junto con su índice y finalmente, la suma de todos los valores.kjdsfnvj
	Definir array,i, tamano,  N, suma Como Entero;
	tamano=100;
	Dimension array[tamano];
	
	Leer tamano;
	
	//PRIMERO LE DOY VALORES AL ARRAY:
	Para i=0 hasta tamano -1 con paso 1 Hacer
		array[i]= Aleatorio(0,9);
	FinPara
	
	//LE DIGO QUE ME IMPRIMA EL ARRAY Y QUE ME IMPRIMA LA SUMA DE ESOS VALORES DEL ARRAY:
	suma=0;
	Para i=0 hasta tamano -1 con paso 1 Hacer
		suma=suma+array[i];
		Escribir "El array [", i, "] es ", array[i];
		Escribir "La suma de esos números es ", suma, " .";
	FinPara
	
	
	

	
FinAlgoritmo
