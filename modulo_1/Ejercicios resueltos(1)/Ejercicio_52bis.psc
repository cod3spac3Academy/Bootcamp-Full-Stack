Algoritmo Ejercicio_52bis
	Definir array, tamano, i, N, contador como entero;
	tamano=10;
	Dimension array[tamano];
	contador=0;
	//para darle los 10 valores al array:
	Para i=0 hasta tamano-1 con paso 1 Hacer
		array[i]= Aleatorio(1,15);
		Escribir array[i], " "  sin saltar;
	FinPara
	
	Escribir "Escribe un número para buscarlo en el array";
	Leer N;
	
	i=0;
	Mientras i<tamano Y array[i]<>N Hacer
		i=i+1;
	Fin Mientras
	
	Si i<tamano Entonces
		Escribir "La primera coincidencia de ", N, " es ", i;
	SiNo
		Escribir " no hay coincidencias";
		
		
	FinSi
	
FinAlgoritmo
