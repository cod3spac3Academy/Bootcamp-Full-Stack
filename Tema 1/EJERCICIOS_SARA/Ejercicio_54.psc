Algoritmo Ejercicio_54
//	Diseñar un algoritmo que lea el número N e imprima y cuente todos los números primos menores
	//		que N
	Definir N, i, contador como entero;
	Definir es_primo Como Logico;
	Escribir "Introduce un numero entero positivo para comprobar si es primo ";
	Leer N;
	
	es_primo= Verdadero;//actúa como semáforo, ésta es la condición
	//para comprobar si el número que meto por consola es primo:
	Para i=2 hasta N-1 con paso 1 hacer//esta línea es la clave de todo
		Si N mod i ==0 Entonces
			es_primo=Falso;
		FinSi
	FinPara
	//para que me muestre por consola si lo es o no:
	Si es_primo Entonces
		Escribir "Correcto, es primo";
	SiNo
		Escribir "No es primo";
	FinSi
	//cuantos nº primos hay hasta N:
	
	Si contador>1 Y N  Entonces
		contador=0;
		contador=contador+1;
		Escribir "Hasta ese número hay un total de ", contador, " números primos.";
	FinSi
	
	
FinAlgoritmo
