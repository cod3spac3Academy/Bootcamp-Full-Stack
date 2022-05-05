Algoritmo Ejercicio_10bis
	//MISMO EJERCICIO QUE ANTES PERO USANDO EN _SEGÚN_
	// Construir un diagrama de flujo que dado la categoría y sueldo de un trabajador calcule el aumento
	// de sueldo correspondiente teniendo en cuenta la siguiente tabla. Imprimir la categoría del
	// trabajador y su nuevo sueldo.
	Definir Categoría Como Real;
	Definir sueldo Como Real;

	
	Escribir "Introduce tu categoría";
	Leer Categoría;
	
	
	Escribir "Introduce tu sueldo";
	Leer sueldo; 
	
	Segun categoría Hacer
		
		1:
			Escribir "Tu sueldo será  ", sueldo*1.15;
		2:
			Escribir "Tu sueldo será  ", sueldo*1.10;
		3:
			Escribir "Tu sueldo será  ", sueldo*1.06;
		4:
			Escribir "Tu sueldo será  ", sueldo*1.03;
			
			
		De Otro Modo:
			Escribir "Categoría no válida";
			
			
	Fin Segun
	
	
	
	
FinAlgoritmo
