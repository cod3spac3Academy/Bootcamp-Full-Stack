Algoritmo Ejercicio_24bis
	
	// ahora lo hago con Mientras que es como lo han hecho en clase:
	
	Definir practica, problemas, teorica  Como Entero;
	Definir nota_media, nota_final, suma  como real;
	Definir nombre, pedro Como Caracter;
	
	practica = 0;
	problemas = 0;
	teorica = 0;
	
	Escribir " nombre de alumno ";
	Leer nombre;
		
		Mientras nombre <> "" hacer
			escribir " escriba las 3 notas ";
			LEer practica, problemas, teorica;
			
			
			si (practica>0 y practoa <=10) y (problemas >0 y problemas <=10) y (teorica >0 y teorica >=10) Entonces
				nota_final= practica*0.1+problemas*0.5+teorica*0.4;
						Escribir " La nota final del curso es:  ", nota_final;
			FinSi
		FinMientras
		
		
	
FinAlgoritmo

