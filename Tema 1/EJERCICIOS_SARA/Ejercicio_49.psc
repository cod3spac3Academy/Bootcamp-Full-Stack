Algoritmo Ejercicio_49
	Definir dulces, bebidas, conservas, mes, j, tamano, aux, dulces_max, bebidas_max,bebidas_min, conservas_max,mes_maximo, mes_minimo como entero;
	Definir promedio , suma Como Real;
	tamano=12;
	Dimension dulces[tamano], bebidas[tamano],conservas[tamano];
	dulces_max=0;
	
	Escribir "Dptos  Dulces  Bebidas  Conservas";
	//Que me imprima los array aleatorios:
	Para mes=0 Hasta tamano-1 Con Paso 1 Hacer
		dulces[mes]= Aleatorio(1,100);
		bebidas[mes]= Aleatorio(1,100);
		conservas[mes]= Aleatorio(1,100);
		
		Escribir "Mes ", mes+1,"-", "    ",  dulces[mes], " " sin saltar, "     ",  bebidas[mes] ,"       ",conservas[mes] ;
		Escribir "";
	Fin Para
	Escribir "";
	
	//a) qué mes fue el mayor coste de prod.dulces?

	Para mes=0 hasta tamano-1 con paso 1 Hacer
		Si mes==0 O dulces[mes]> dulces_max Entonces//para decirle que empiece en enero, el i==0 solo se ejecuta en la primera iteración
			dulces_max= dulces[mes];
			mes_maximo= mes;
			
		FinSi
	FinPara
	Escribir " a) El mes que hubo el mayor coste de dulces fue el mes: ", mes_maximo+1;//si no pongo +1 no me sale bien el ejercicio
	//porque mis meses empiezan en 1 no en 0 como los arrays. Es para el humano no para el programa.
	
	//b) Promedio anual de los costes de producción de bebidas.
	suma=0;
	Para mes=0 hasta tamano-1 Hacer
		suma = suma + bebidas[mes];
	FinPara
	Escribir " b) El promedio anual de los costes de prod. de bebidas: ", suma/tamano;
	
	//c)¿En qué mes se registró el mayor coste de producción en bebidas, y en qué mes el menor coste?
	Para mes=0 hasta tamano-1 con paso 1 Hacer
		Si mes==0 O bebidas[mes]> bebidas_max Entonces//para decirle que empiece en enero, el i==0 solo se ejecuta en la primera iteración
			bebidas_max= bebidas[mes];
			mes_maximo= mes;
		FinSi
		Si mes==0 O bebidas[mes]< bebidas_min Entonces//para decirle que empiece en enero, el i==0 solo se ejecuta en la primera iteración
			bebidas_min= bebidas[mes];
			mes_minimo= mes;
		FinSi
	FinPara
	Escribir " c) El mes de mayor coste de bebidas fue: ",mes_maximo+1, " con importe de ", bebidas_max; 
	Escribir "    y el menor mes de coste fue: ",mes_minimo+1," con importe de ",  bebidas_min, ".";
	
	//	d) ¿Cuál fue el que tuvo menor coste de producción en diciembre?

		si dulces[11] < bebidas[11] Y dulces[11]< conservas[11] Entonces
			Escribir " d) El que tuvo menor coste de producción en diciembre fue el de dulces, con importe de ", dulces[11];
		SiNo
			si bebidas[11] < conservas[11] Entonces
				Escribir " d) El que tuvo menor coste de producción en diciembre fue el de bebidas, con importe de ", bebidas[11];
			SiNo
				Escribir " d) El que tuvo menor coste de producción en diciembre fue el de conservas, con importe de ", conservas[11];

			FinSi
		FinSi
	
	
	
	
FinAlgoritmo
