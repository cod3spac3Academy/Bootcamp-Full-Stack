Algoritmo Ejercicio_11
	//me falta en las diapositivas
	
	Definir precio_compra Como Real;
	DEfinir descuento, d1, d2, d3, d4 como real;
		
	Escribir " El precio de la compra es ";
	Leer precio_compra;
	
	d1= precio_compra - (precio_compra*0.05);
	d2= precio_compra - (precio_compra*0.10);
	d3= precio_compra - (precio_compra*0.20);
	d4= precio_compra - (precio_compra*0.25);
	
		
	Si precio_compra < 500 Entonces
		Escribir " no hay descuento ";
	SiNo
		Si precio_compra >= 500 Y precio_compra <=1000 Entonces
			Escribir " Tienes un 5% de descuento ", "el nuevo precio es ", d1;
		SiNo
			Si precio_compra > 1000 Y precio_compra <=7000 Entonces
				Escribir " Tienes un 10% de descuento ", "el nuevo precio es ", d2;
			SiNo
				Si precio_compra > 7000 Y precio_compra <=15000 Entonces
					Escribir " Tienes un 20% de descuento ", "el nuevo precio es ", d3;
				SiNo
					Si precio_compra > 15000 Entonces
						Escribir " Tienes un 25% de descuento ", "el nuevo precio es ", d4;
					SiNo
						Escribir " error ";
					Fin Si
				Fin Si
			Fin Si
		Fin Si
	Fin Si
	
	
	
	
FinAlgoritmo
