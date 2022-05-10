Algoritmo Ejercicio_18
	//Se pide presentar algoritmo que nos calcule la suma de
	//los N primeros números pares a partir de N. Es decir,
	//si iinsertamos 5, nos haga la suma de 6+8+10+12+14.
	
	Definir  contador, N, num_inicial, suma Como Entero;
	
	Escribir " Escribir la cantidad de num pares a procesar " sin saltar;
	Leer N;
	
	num_inicial = N;
	contador = 0;
	suma = 0;
	
	//si el numero inicial es impar, lo convierto en el sig.par
	Si num_inicial mod 2 <> 0 Entonces
		num_inicial = num_inicial +1;
	FinSi
	
	Escribir " La suma de " sin saltar;
	 
	Mientras contador < N Hacer //aquí es donde pongo la condicion de saltar hasta N veces
		Escribir num_inicial, " " sin saltar; //Aquí me saldrá; 6 8 10 etc con espacios
											//si lo quiero 6+8+10+etc pongo "+" en lugar de " " solam.
		suma = num_inicial + suma;
		
		//para asegurarnos que el primero fuera Par 
		//ahora sólo tengo que saltar de 2 en 2 N veces
		num_inicial = num_inicial +2; 
		
		contador = contador +1;
	FinMientras
	
	Escribir " es: ", suma;
	
	
	
FinAlgoritmo
