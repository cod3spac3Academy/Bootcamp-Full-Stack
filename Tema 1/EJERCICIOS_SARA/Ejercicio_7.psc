Algoritmo Ejercicio_7
	
	//algoritmo para saber el cambio que se debe entregar a un cliente por una compra con un precio fijo
	
	DEfinir precio_de_artículo_vendido , dinero_entregado Como Real;
	
	precio_de_artículo_vendido = 12000;
	
	Leer dinero_entregado;
	
	Si dinero_entregado > precio_de_artículo_vendido Entonces
		Escribir dinero_entregado - precio_de_artículo_vendido;
	SiNo
		Escribir "dinero insuficiente";
	Fin Si
	
	
	
	
	
FinAlgoritmo
