Algoritmo Ejercicio_11bis
	//me falta en las diapositivas
	
	Definir precio_compra Como Real;
	DEfinir descuento, d1, d2, d3, d4 como real;
	
	Escribir " El precio de la compra es ";
	Leer precio_compra;
	
	d1= precio_compra * 0.95;  //también he simplñificado aquí la forma de poner el descuento
	d2= precio_compra * 0.9;
	d3= precio_compra * 0.8;
	d4= precio_compra * 0.75;
	
	
	Si precio_compra < 500 Entonces
		Escribir " no hay descuento ";
	SiNo
		Si precio_compra <=1000 Entonces
			Escribir " Tienes un 5% de descuento ", "el nuevo precio es ", d1; //es todo igual que en ejericio_11 pero las comparaciones de precios las hemos simplificado, haciendo mas sencillo el algoritmo
		SiNo
			Si precio_compra <=7000 Entonces
				Escribir " Tienes un 10% de descuento ", "el nuevo precio es ", d2;
			SiNo
				Si  precio_compra <=15000 Entonces
					Escribir " Tienes un 20% de descuento ", "el nuevo precio es ", d3;
				SiNo				
					Escribir " Tienes un 25% de descuento ", "el nuevo precio es ", d4;
					
				Fin Si
			Fin Si
		Fin Si
	Fin Si
	
		
	
	
	
FinAlgoritmo
