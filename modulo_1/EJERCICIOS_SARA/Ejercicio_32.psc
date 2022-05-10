Algoritmo Ejercicio_32
	Definir bocadillo, refresco, cerveza, pan, suma Como Real;
	Definir precio_bocadillo, precio_cerveza, precio_pan, precio_refresco como real;
	precio_bocadillo = 1.5;
	precio_refresco= 1.05;
	precio_cerveza=0.75;
	precio_pan=2;
	escribir "cantidad de bocadillos consumidos ";
	leer bocadillo;
	escribir "cantidad de refrescos consumidos ";
	leer refresco;
	escribir "cantidad de cervezas consumidas ";
	leer cerveza;
	escribir "cantidad de pan consumido ";
	leer pan;
	
	suma = (bocadillo*precio_bocadillo)+(refresco*precio_refresco)+(cerveza*precio_cerveza)+(pan*precio_pan);
	Escribir "El resultado a pagar es ", suma, " euros ";
	
	
	
FinAlgoritmo
