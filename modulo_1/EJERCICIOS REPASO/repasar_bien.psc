Algoritmo repasar_de_nuevo
	//quiero ir metiendo sueldos de empleados y que me devuelva su sueldo incrementado
	//y que me pida todo el rato sueldo y categoria hasta que yo finalice la ejecución poniendo 0.
	
	Definir categoria, sueldo Como Entero;
	
	Repetir
		Escribir "poner sueldo de trabajador";
		Leer sueldo;
		escribir "poner categoría de trabajador";
		Leer categoria;
		Segun categoria Hacer
			1:
				Escribir "el nuevo sueldo es: ",sueldo * 1.15;
			2:
				Escribir "el nuevo sueldo es: ",sueldo * 1.1;
			3:
				Escribir "el nuevo sueldo es: ",sueldo * 1.06;
			4:
				Escribir "el nuevo sueldo es: ",sueldo * 1.03;
			De Otro Modo:
				Escribir " error en categoría, vuelva a introducirla";
				Repetir 
					Leer categoria;
					si categoria <1 o categoria >5 Entonces
						Escribir " error en categoría, vuelva a introducirla";
					FinSi
				Hasta Que categoria >=1 Y categoria < 5;
				
				
				Segun categoria Hacer
					1:
						Escribir "el nuevo sueldo es: ",sueldo * 1.15;
					2:
						Escribir "el nuevo sueldo es: ",sueldo * 1.1;
					3:
						Escribir "el nuevo sueldo es: ",sueldo * 1.06;
					4:
						Escribir "el nuevo sueldo es: ",sueldo * 1.03;
					De Otro Modo:
						Escribir " error en categoría, vuelva a introducirla";
				FinSegun
		FinSegun
	hasta que categoria =0;
	

	
	
	
	
FinAlgoritmo
