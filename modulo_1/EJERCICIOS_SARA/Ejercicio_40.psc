Algoritmo Ejericio_40
	//Generar un array de 20 elementos con números aleatorios no repetidos entre sí.
	
	Definir array, i, tamano, comprobador, num_aleatorio  Como Entero;
	Definir hay_otro_igual como logico;
	tamano=20;
	
	Dimension array[tamano];
	
	Para i=0 Hasta tamano-1 Con Paso 1 Hacer
		  //este PARA es para darle 20 valores al array;
		
	
		
		//ahora tengo que comprobar que esos valores no se repiten entre sí.
		//si no hay dos numeros iguales el check no pasa a FALSO 
		Repetir
			num_aleatorio= Aleatorio(1,20);
			Escribir num_aleatorio;
			hay_otro_igual = Falso;
			
			Para comprobador =0 hasta i-1 con paso 1 Hacer
				Si num_aleatorio== array[comprobador] Entonces
					hay_otro_igual= Verdadero;
					
				FinSi
			FinPara
						
		Hasta Que hay_otro_igual;
		
		
		array[i]= num_aleatorio;
		
	Fin Para
	
FinAlgoritmo
