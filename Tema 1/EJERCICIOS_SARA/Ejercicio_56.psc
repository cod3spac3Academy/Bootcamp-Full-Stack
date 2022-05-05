Algoritmo Ejercicio_56
//	Leer y guardar en una matriz las notas de los alumnos de un colegio en función del número de
//	cursos (filas) y del número de alumnos por curso (columnas). El máximo de alumnos será 5 para
//	cada uno de 3 cursos.
	Definir notas_de_alumnos, cursos, alumnos, tamano_num_cursos, tamano_num_alumnos, tamano como entero;
	//filas = cursos
	//columnas = alumnos
	tamano_num_cursos=3;
	tamano_num_alumnos=2;
	
	Dimension notas_de_alumnos[tamano_num_cursos, tamano_num_alumnos];
	
	//EN ESTE PARA, LEEMOS LOS DATOS INTRODUCIDOS
	Para cursos=0 hasta tamano_num_cursos-1 Hacer
		Para alumnos=0 hasta tamano_num_alumnos-1 Hacer
			Escribir "Introduce la nota del alumno ", alumnos, " del curso ", cursos;
			Leer notas_de_alumnos[cursos, alumnos];
			
		FinPara
		Escribir "";
	FinPara
	
	//EN ESTE PARA, ME ESCRIBE LAS NOTAS QUE HE METIDO EN EL PAR ANTERIOR
	Para cursos=0 hasta tamano_num_cursos-1 Hacer
		
		Escribir " Curso ", cursos, " : " sin saltar; //ESTO ES SOLO PARA QUE PONGA EL TITULILLO DE "CURSO TAL"
		Para alumnos=0 hasta tamano_num_alumnos-1 Hacer
			
			Escribir  " Alumno ", alumnos," : ", notas_de_alumnos[cursos, alumnos], ",", " " sin saltar;
		FinPara
		Escribir "";
	FinPara
	
	
	
	
FinAlgoritmo
