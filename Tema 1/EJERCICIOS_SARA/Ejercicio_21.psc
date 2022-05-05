Algoritmo Ejercicio_21
	
	//algoritmo que lea números enteros hasta teclear 0,  y nos muestre
	//el m?aximo, mínimo y la media de todos ellos.
	//Piensa como inicializar las variables
	
	Definir N,  contador, suma , max, min Como entero;
	DEfinir media como real;
	
	Leer N; //desde aquí hasta min (3líneas) si usaáramos un Repetir tendría que estar dentro de Repetir
	max = N;//aquí pongo N porque quiero que el prime valor que me coja el algoritmo sea el que meta el usuario
	min = N; //igual que arriba
	
	contador = 0;
	suma = 0;
	
	Mientras N <> 0 Hacer
		//cálculo del máximo
		Si N > max Entonces
			Escribir " el nuevo num maximo es ", N; //porque N es mi nuevo valor máximo, si no, seguiría siendo "max" mi numero máximo
			max= N; //aquí estoy sobreescribiendo el anterior valor del máximo y lo reemplaza por el nuevo valor del máximo que sería N
	
		Fin Si
		//cálculo del mínimo
		Si N < min Entonces
			Escribir " el nuevo num mínimo es ", N; //porque N es mi nuevo valor mínimo, si no, seguiría siendo "min" mi numero mínimo
			min= N; //aquí estoy sobreescribiendo el anterior valor del máximo y lo reemplaza por el nuevo valor del máximo que sería N
			
		Fin Si
		
		//cálculo de media 
		contador = contador +1;
		suma = suma +N;
		
		Escribir " Introduc número ";
		Leer N;
		
	Fin Mientras

	media = suma / contador;
	Si contador =0 Entonces
		Escribir " Los números son: ", contador, " ";
	siNo	
		Escribir " La media es: ", media; 
		
	FinSi

FinAlgoritmo
