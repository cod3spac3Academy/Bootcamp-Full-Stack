Algoritmo Ejercicio_9
	
	//construir diagrama que dado 5 calificaciones de un alumno, imprima el promedio
	//y la palabra "aprobado"si es alumno tiene promedio mayor o igual a 5
	//y la palabra no aprobado en caso contratio
	
	Definir nota1, nota2, nota3, nota4, nota5  Como real;
	DEfinir notaFinal Como real;
	
	Leer nota1, nota2, nota3, nota4, nota5
	notaFinal = (nota1+nota2+nota3+nota4+nota5)/5;
	Escribir "nota promedio es ", notaFinal;
	
	Si notaFinal >= 5 Entonces
		Escribir "Has aprobado";
	SiNo
		Escribir "Has suspendido";
	Fin Si
	
	
	
	
	
FinAlgoritmo
