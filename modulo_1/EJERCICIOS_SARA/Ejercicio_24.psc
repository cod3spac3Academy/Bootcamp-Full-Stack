Algoritmo Ejercicio_24
//Calcular las calificaciones de un grupo de alumnos. La nota final de cada alumno se calcula según
//el siguiente criterio: 
//la parte práctica vale el 10%; la parte de problemas vale el 50% y la parte
//teórica el 40%. 
//El algoritmo leerá el nombre del alumno, las tres notas, escribirá el resultado y
//volverá a pedir los datos del siguiente alumno hasta que el nombre sea una cadena vacía. Las
//notas deben estar entre 0 y 10, si no lo están, no imprimirá las notas, mostrará un mensaje de error
//y volverá a pedir otro alumno.
	
	// este es mi forma de hacerlo:
	
	Definir practica, problemas, teorica  Como Entero;
	Definir nota_media, nota_final, suma  como real;
	Definir nombre, pedro Como Caracter;
	
	practica = 0;
	problemas = 0;
	teorica = 0;
		
Repetir	
	
	Escribir " nombre de alumno ";
	Leer nombre;
	si nombre = "" Entonces
		escribir " fin de la lista ";
	siNo 
	
		Escribir " Introducir nota parte práctica " sin saltar;
		Leer practica;
		si practica>0 Entonces
			Escribir " Introducir nota parte de problemas " sin saltar;
			Leer problemas;
			si problemas > 0 entonces
				Escribir " Introducir nota parte teórica " sin saltar;
				Leer teorica;
				si teorica > 0 Entonces
					nota_media = (practica + problemas + teorica ) /3;//me daba error a mi porque esto lo ponia fuera y hay que ponerlo justo aquí
					Escribir  " la nota media " , " de " , nombre , " es ", nota_media;
					nota_final= practica*0.1+problemas*0.5+teorica*0.4;
					Escribir " La nota final del curso es:  ", nota_final;
				FinSi
			FinSi
		FinSi
	FinSi
	
Hasta que nombre = "";
	
FinAlgoritmo
