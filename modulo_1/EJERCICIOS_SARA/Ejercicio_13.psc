Algoritmo Ejercicio_13
	Definir base, altura Como Real;
	
	Escribir  " Introducir la base " sin saltar; //no lleva comas el SIN SALTAR
	Repetir
		Leer base;
		si base <= 0 Entonces;
			Escribir " Datos incorrectos, vuelva a introducir la base ";
		FinSi
	Hasta Que  base > 0
	
	Escribir " Introducir la altura" sin saltar;
	Repetir
		Leer altura;
		si altura <= 0 Entonces;
			Escribir " Datos incorrectos, vuelva a introducir la altura ";
		FinSi
	Hasta Que  altura > 0
	//tener en cuenta que la base o altura sea diferente a 0 no lo dice el ejercicio
	//pero en realidad en la vida real hay que tenerlo en cuenta
		
	superficie = base*altura; 
	perímetro = 2*(base+altura); 
	
	Escribir " La superficie es ", superficie, " y el perímetro es ", perímetro, ".";
	
	
FinAlgoritmo
