Algoritmo Ejercicio_35
//	Crear un array de números donde le indicaremos el tamaño por teclado. Rellenará cada elemento
//	con números aleatorios entre 0 y 9. Posteriormente, mostrará por pantalla el valor de cada posición
//	junto con su índice y finalmente, la suma de todos los valores.
	
	DEfinir mi_array, tamano, indice, suma Como Entero;
	
	Escribir "Dime el tamaño del array ";
	leer tamano;
	Dimension mi_array[tamano];//esto es el tamano de mi array p.ej.mi_array[10]
	
	//rellenar nuestro array elemento a elemento de tamano introducido por el 
	//ususario, con numeros aleatorios
	Para indice =0 Hasta tamano-1 Con Paso 1 Hacer
		mi_array[indice]=Aleatorio(0,9);//Mi_array[indice] quiere decir que cual de ellos mu muestra, p.ej.mi_array[8]
	Fin Para
	
	suma =0;//para mostrarme el numero dentro del array y su suma
	Para indice=0 Hasta tamano-1 Con Paso 1 Hacer
		Escribir "En índice ", indice, " está guardado el número ",mi_array[indice];
		suma = suma+ mi_array[indice];
	Fin Para
	Escribir "La suma de los arrays es ", suma;
FinAlgoritmo
