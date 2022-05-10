Algoritmo Ejercicio_15bis //mismo ejercicio pero usando el REPETIR
	Definir A como entero;
	
	Repetir
		Escribir " Por favor introduzca el número ";
		Leer A;
	Hasta Que A <> 0 Y A > 0; //esto lo pongo yo para que el número sea positivo y mayor que 0
	
	//se podría hacer lo mismo pero terminando en "mientras que" A <= 0;
	
	Si A mod 2 == 0 Entonces;
		Escribir "El número es par"; 
	SiNo
		Escribir "El número es impar";
	FinSi
	
	
FinAlgoritmo
