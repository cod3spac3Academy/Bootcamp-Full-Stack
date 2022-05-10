Algoritmo Ejercicio_17
	//contador = primerosN_num_natural
	//N es el límite de nuestro algoritmo
	Definir contador, N, suma Como Entero;
	Escribir " Por favor introduzca el número N de número naturales hasta el que desea sumar ";
	Leer N;
	contador = 0;
	suma = 0;
		
	Mientras contador < N Hacer
		Escribir  contador;
		
		suma = contador + suma; //si pongo esta defnición desdepues de la de abajo de contador 
								//me da mal, aquí lo que me acumula el valor es SUMA
		contador = contador +1;
		
		
	Fin Mientras
	
	Escribir " La suma es ", suma;

	
FinAlgoritmo
