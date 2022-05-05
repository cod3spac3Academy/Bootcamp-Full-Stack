Algoritmo Ejercicio_10
	// Construir un diagrama de flujo que dado la categoría y sueldo de un trabajador calcule el aumento
	// de sueldo correspondiente teniendo en cuenta la siguiente tabla. Imprimir la categoría del
	// trabajador y su nuevo sueldo.
	Definir Categoría Como Real;
	Definir sueldo Como Real;
	Definir c1,c2,c3,c4 Como Real;
	
	c1=1.15;
	c2=1.10;
	c3=1.06;
	c4=1.03;
	
	
	
	Escribir "Introduce tu categoría";
	Leer Categoría;
	
	
	Escribir "Introduce tu sueldo";
	Leer sueldo; 
	
	Si Categoría==1 Entonces
		Escribir sueldo*c1;
		
	SiNo
		Si Categoría==2 Entonces
			Escribir "Tu sueldo será ", sueldo*c2;
						
		SiNo
			Si Categoría==3 Entonces
				Escribir "Tu sueldo será ",sueldo*c3;
			SiNo
				Si Categoría==4 Entonces
					Escribir "Tu sueldo será ",sueldo*c4;
				SiNo
					Escribir "Categoría errónea";
				Fin Si
			Fin Si
		Fin Si
	Fin Si
	
	
	// aquí poría haber hecho los SI que no estuvieran anidados, ed, independientes, pero el programa tiene que ir probando todos, 
	//q el rendimiento es mejor que esté anidado porque el programa comprueba uno y si 
	//es ese, ya no se molesta en lo demás 
	//Sueldo + (sueldo*0.10);//esto se llama harcodeado viene de HARD CODE, que el código es fijo, es mejor que esté arriba especificado

	
FinAlgoritmo
