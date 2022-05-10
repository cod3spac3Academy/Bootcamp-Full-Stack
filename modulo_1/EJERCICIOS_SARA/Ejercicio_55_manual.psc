Algoritmo Ejercicio_55_manual
	//Generar una matriz de 4 filas y 5 columnas con números aleatorios entre 1 y 100. 
	//Imprimirla en forma de matriz o tabla, con sus filas y columnas.
	
	Definir num_filas, num_columnas,filas, columnas, matriz, tamano Como Entero;//matriz es mi array
	num_filas=4;
	num_columnas=5;
	tamano=100;
	Dimension matriz[num_filas, num_columnas];//esto sería un excell de 4 filas y 5 columnas (simpre orden: filas-columnas),
	
	matriz[0,0]= Aleatorio (1,100);
	matriz[0,1]= Aleatorio (1,100);
	matriz[0,2]= Aleatorio (1,100);
	matriz[0,3]= Aleatorio (1,100);
	matriz[0,4]= Aleatorio (1,100);
	
	matriz[1,0]= Aleatorio (1,100);
	matriz[1,1]= Aleatorio (1,100);
	matriz[1,2]= Aleatorio (1,100);
	matriz[1,3]= Aleatorio (1,100);
	matriz[1,4]= Aleatorio (1,100);
	
	matriz[2,0]= Aleatorio (1,100);
	matriz[2,1]= Aleatorio (1,100);
	matriz[2,2]= Aleatorio (1,100);
	matriz[2,3]= Aleatorio (1,100);
	matriz[2,4]= Aleatorio (1,100);
	
	matriz[3,0]= Aleatorio (1,100);
	matriz[3,1]= Aleatorio (1,100);
	matriz[3,2]= Aleatorio (1,100);
	matriz[3,3]= Aleatorio (1,100);
	matriz[3,4]= Aleatorio (1,100);
	
//	matriz[4,0]= Aleatorio (1,100);
//	matriz[4,1]= Aleatorio (1,100);
//	matriz[4,2]= Aleatorio (1,100);
//	matriz[4,3]= Aleatorio (1,100);
//	matriz[4,4]= Aleatorio (1,100);
	
	Escribir matriz[num_filas, num_columnas];
FinAlgoritmo
