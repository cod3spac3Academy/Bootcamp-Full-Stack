Algoritmo Ejercicio_59
//	Se dispone de un array de 5 páginas, 4 filas y 10 columnas, que se refieren al centro, al curso y al
//	número de alumnos de un colegio respectivamente. Imprimir la nota media por curso y la nota
//	media máxima y su centro de pertenencia.NUM=TAMANO
	Definir num_centros, num_cursos, num_alumnos, centro, curso, alumno Como entero;//tamaño de paginas, filas y columnas
	Definir notas,nota_media, nota_media_máxima, suma como real;//notas es la matriz
	num_centros=5;
	num_cursos=4;
	num_alumnos=10;
	
	Dimension notas[num_centros, num_cursos,num_alumnos];//matriz [5,4,10];
	
	//METEMOS LOS VALORES DE LAS NOTAS E IMPRIMIMOS TODO:

	Para centro=0 hasta num_centros-1 Hacer
		Escribir " Centro ", centro, ":";
		Para curso=0 hasta num_cursos-1 Hacer
			Escribir " Curso ", curso, ": " sin saltar;
			suma=0;		//si pusieramos esto fuera del 1er PARA nos sumaría notas acumuladas,
						// y al ponerlo aquí me empiesza siempre a contar en el curso en el que estoy.
				Para alumno=0 hasta num_alumnos-1 Hacer
					notas[centro, curso, alumno] = Aleatorio(0,10);
					Escribir notas[centro, curso, alumno] "  " sin saltar;
					suma=suma+notas[centro, curso, alumno] ;
				FinPara
				nota_media=suma/num_alumnos;
				Escribir "Media del curso ",nota_media ;
				Si (centro==0 Y curso==0) o nota_media >nota_media_máxima Entonces
					nota_media_máxima=nota_media;
				FinSi
				Escribir "";
		FinPara
			Escribir "";
	FinPara

	Escribir "La nota media más alta es ", nota_media_máxima;  //esto ya lo ponemos fuera porque solo necesito un dato
													//se refiere a la condición del SI.
	
FinAlgoritmo
