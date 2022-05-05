Algoritmo factura_autónomo
	
	//hacer algoritmo para que metiendo la BI de una factura me salga cantidad a facturar
	
	Definir base_imponible, IVA, IRPF Como Real;
	
	Leer base_imponible;
	
	IVA = base_imponible*0.21;
	IRPF = base_imponible*0.15;
	
	
	
	
	Escribir "El resultado a facturar es,  ",base_imponible + IVA - IRPF, " euros";
	
	//BI: 1500
	//IVA: 315
	//IRPF: 225
	//suma total: 1590 euros
	
	
FinAlgoritmo
