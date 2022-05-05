Algoritmo Ejercicio_10bis_copia
	//MISMO EJERCICIO QUE ANTES PERO USANDO EN _SEGÚN_
	// Construir un diagrama de flujo que dado la categoría y sueldo de un trabajador calcule el aumento
	// de sueldo correspondiente teniendo en cuenta la siguiente tabla. Imprimir la categoría del
	// trabajador y su nuevo sueldo.
	Definir Categoría Como Real;
	Definir sueldo Como Real;
	
	
	Escribir "Introduce tu categoría"; //NO SÉ como hacer para que si introduzco una categoría no válida, no siga ejecutando el algoritmo 
	Leer Categoría;
	

	Escribir "Introduce tu sueldo";
	Leer sueldo; 
	
	Escribir "Categoría ", categoría, " Tu nuevo sueldo es:  " sin saltar; //Usar Sin Saltar. De esta forma no tengo que escribirlo todo en cada línea del código
	//abajo en Según
	
	Mientras categoría > 4 O categoría < 1 Hacer
		Escribir "  error categoría, indicar de nuevo "; //si termino aquí, se me hace un bucle infinito
		Leer categoría; //añado esta línea para evitar un bucle infinito
	Fin Mientras
	
	Segun categoría  Hacer
		
		1:
			Escribir  sueldo*1.15;
		2:
			Escribir  sueldo*1.10;
		3:
			Escribir sueldo*1.06;
		4:
			Escribir sueldo*1.03;
			
			
		De Otro Modo:
			Escribir "Categoría no válida";
			
			
	Fin Segun
	
FinAlgoritmo
