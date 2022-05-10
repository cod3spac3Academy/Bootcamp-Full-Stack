Algoritmo Ejercicio_43bis
	//reloj: horas:minutos:segundos, 00:00:00
	
	Definir horas,mins, segs Como Entero;
	Definir horas_cero, mins_cero, segs_cero Como Caracter;
	
	Limpiar Pantalla;
	
	Mientras Verdadero Hacer
		Para horas=0 Hasta 23 Con Paso 1 Hacer
			Para mins=0 Hasta 59 Con Paso 1 Hacer
				Para segs=0 hasta 59 con paso 1 Hacer
					
					si segs>9 Entonces
						segs_cero="";
					sino 
						segs_cero="0";
					FinSi
					si mins>9 Entonces
						mins_cero="";
					sino 
						mins_cero="0";
					FinSi
					si horas>9 Entonces
						horas_cero="";
					sino 
						horas_cero="0";
					FinSi
					Escribir horas_cero, horas, ":", mins_cero, mins,":", segs_cero, segs;
					Esperar 100 Milisegundos;//esto para que vaya más rápido el reloj
					Limpiar Pantalla;
					
				Fin Para
			Fin Para
		Fin Para
		
	Fin Mientras
	
	
	
	
FinAlgoritmo
