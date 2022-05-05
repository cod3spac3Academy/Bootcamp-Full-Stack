Algoritmo Ejercicio_7bis
	
	//algoritmo para saber el cambio que se debe entregar a un cliente 
	//por una compra para cualquier artículo de la tienda
	
	DEfinir precio_de_artículo_vendido , dinero_entregado Como Real;
	
	Leer precio_de_artículo_vendido;
	Leer dinero_entregado;
	
	Si dinero_entregado > precio_de_artículo_vendido Entonces
		Escribir "Devolver al cliente,   ", dinero_entregado - precio_de_artículo_vendido;
	SiNo
		Escribir "dinero insuficiente, faltan ", precio_de_artículo_vendido - dinero_entregado , " euros";
	Fin Si
	
FinAlgoritmo
