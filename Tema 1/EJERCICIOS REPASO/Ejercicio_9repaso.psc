Algoritmo Ejercicio_9repaso
	
	Definir nota1, nota2, nota3, nota4, nota5 , total_calificaciones Como Entero;
	definir promedio como real;
	
	total_calificaciones=5;
	
	Escribir " por favor introduzca las notas";
	Leer nota1, nota2, nota3, nota4, nota5;
	
	promedio=(nota1+nota2+nota3+nota4+nota5)/total_calificaciones;
	
	si promedio > 5 Entonces
		Escribir " la nota media es: ", promedio, " estás aprobado.";
	SiNo
		Escribir "estás suspenso, tu nota media es: ", promedio;
	FinSi
	
	
	
	
	
FinAlgoritmo
