Algoritmo Ejercicio_1
	//Primero definimos las variables
	Definir A Como Entero;
	Definir B Como Entero;
	Definir aux Como Entero;
	
	
	//Leemos las que necesitamos
	Leer A;
	Leer B;
	//Guardamos A para no perder su valor
	aux = A;
	//Sobreescribimos A con el valor de B
	A = B;
	//Ahora sí, recuperamos el valor de A
	//para asignarselo a B
	B = aux;
	
	//Escribimos los resultados intercambiados
	//con un espacio en medio
	
	Escribir A, " ", B;  // las dobles " es para dejar un espacio 
	
	
FinAlgoritmo
