Funcion resultado = es_primo ( num )
	Definir i como entero;
	Definir resultado como logico;
	
	resultado = Verdadero;
	Para i=2 hasta num-1 con paso 1 hacer//esta línea es la clave de todo
		Si num mod i ==0 Entonces//si se da esta condición ya no sería primo, con lo cual el REsultado es falso.
			resultado= Falso;
		FinSi
	FinPara
Fin Funcion


Algoritmo Ejercicio_54
//	Diseñar un algoritmo que lea el número N e imprima y cuente todos los números primos menores
//	que N
	Definir i, N, contador_primos como entero;

	
	Repetir //el repetir no lo pide el ejercicio pero lo hago para que me borre pantalla y me pida de nuevo N para empezar
		//se podría dejar igual que está sin el REPETIR.
		Escribir "ponga N, para saber si es primo";
		Leer N;
		
		Escribir es_primo(N);
		
		//ahora vamos a hacer el bucle para ver si los números hasta N, hay primos:
		
		
		
		contador_primos=0; //así la inicializo para que dentro del bucle me trabaje.
		PAra i=2 hasta N con paso 1 Hacer
			SI es_primo(i) Entonces
				Escribir i, " es primo ";
				contador_primos= contador_primos+1; //esto es lo que hago al final para que también me diga cuánto primos hay hasta N.
				
			FinSi
			
		FinPara
		Escribir " Hay ", contador_primos, " hasta ", N; //esto si lo pongo dentro del SI o el PARA me lo repite después de devolverme cada primo.
		Esperar 6 Segundos;
		Limpiar Pantalla;
	Hasta Que N = 0;
FinAlgoritmo
