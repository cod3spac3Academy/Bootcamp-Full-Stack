Algoritmo Ejercicio_34
	//	a)Generar un número aleatorio (del 1 al 10) que el usuario debe adivinar.
	//	b)Aumentar el límite superior a 100 y añadir una ayuda al usuario: escribir si 
	//el número es mayor o menor que la lectura.
	Definir num_aleatorio, intento Como Entero;
	
//	num_aleatorio= Aleatorio (1,10);//con esto no imprimo el numero en pantalla, el usuario debe ir poniendo numero hasta que sea el que la maquina ha tenido como aleatorio
	//A)
//	Repetir
//		escribir "Introduce un numero del 1 al 10 ";
//		leer intento;
//	
//	Mientras que intento <> num_aleatorio
	
	//B)
	num_aleatorio= Aleatorio (1,10);
	
	Repetir
		escribir "Introduce un numero del 1 al 10 ";
		leer intento;
		Si intento > num_aleatorio Entonces
			Escribir "Número fuera de rango, repite otra vez";
		sino	
			si intento <> num_aleatorio Entonces
				escribir "Número erróneo, prueba de nuevo ";
				
			FinSi
		FinSi
	Mientras Que intento <> num_aleatorio
	Escribir "¡¡¡¡¡¡¡¡Número acertado !!!!!!!!!!!";
	
	
FinAlgoritmo
