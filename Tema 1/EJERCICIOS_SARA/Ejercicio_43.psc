Algoritmo Ejercicio_43
//	Partir del ejercicio 28 pero esta vez realizar un reloj digital completo que nunca pare. Tendrá la
//estructura horas:minutos:segundos . Ejemplo de salida: 23:15:39
	
	Definir horas, mins,segs  como entero;
	Definir horas_cero, mins_cero, segs_cero Como caracter;
	horas=23;
	mins=59;
	segs=59;
	horas_cero= "0";
	mins_cero= "0";
	segs_cero= "0";
	
	//bucle infinito es esto:
	Mientras Verdadero Hacer
		
	
		si segs>59 Entonces
			mins=mins+1;
			segs=0;
		FinSi
	
		si mins>59 Entonces
			horas = horas+1;
			mins=0;
		FinSi
	
		si horas >23 Entonces
			horas=0;
		FinSi
		
		//ahora hacemos que los segundos que tengan 1 dígito, se les ponga 1 cero delante. 
		si segs<10 Entonces
			segs_cero= "0";
		sino 
			segs_cero="";//esto no lo había visto antes, no utilizo escribir, solo le doy valor porque si no me hace falta no quiero que lo escriba
		FinSi
		si mins<10 Entonces
			 mins_cero="0";
		SiNo
			mins_cero= "";
		FinSi
		
		si horas<10 Entonces
			horas_cero="0";
		SiNo
			horas_cero="";
		FinSi
		
		//imprimo el reloj en pantalla
		Limpiar Pantalla;
		Escribir horas_cero, horas, ":", mins_cero, mins, ":", segs_cero, segs, ":";
		Esperar 1 Segundos;
		
		segs=segs+1;//esto para que vaya aumentando en segundos
		
	FinMientras
	
	
	
	
	

	
	
	
	
FinAlgoritmo
