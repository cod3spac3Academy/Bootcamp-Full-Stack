Algoritmo Ejercicio_50
//	Hacer un algoritmo que cuente las veces que aparece una determinada letra en una frase que
	//	introduciremos por teclado.
	Definir frase, letra Como Caracter;
	Definir indice, contador como entero;
	contador=0;
	
	Escribir "pon frase";
	Leer frase;
	Escribir " La frase tiene ", Longitud(frase), " caracteres.";
	Escribir "Pon la letra que quieres contar";
	Leer letra;
	
	Para indice=0 hasta longitud(frase)-1 con paso 1 hacer
		Si Mayusculas(Subcadena(frase, indice, indice))== Mayusculas(letra) Entonces//usamos la funcion mayuscula para que me cuentes las a mayuscula y minuscula sin que yo tengo que meter los dos caracteres por consola
			contador=contador+1;
		Fin Si
	FinPara
	
	Escribir " La letra a se repite ", contador,  " veces.";
	
	
FinAlgoritmo
