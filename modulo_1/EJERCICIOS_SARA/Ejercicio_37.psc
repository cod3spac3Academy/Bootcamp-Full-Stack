Algoritmo Ejercicio_37
	Definir num_dni, array, tamano, resultado_letra, posicion_letra, indice Como Entero;
	definir letra Como Caracter;
	
	Escribir "Por favor introduzca su número de DNI ";
	Leer num_dni;
	//letra = nºdni/23.y de aquí cogemos el resto o residuo.
	tamano=23;
	Dimension letra[tamano];
	
	
		letra[0]="T";
		letra[1]="R";
		letra[2]="W";
		letra[3]='A';
		letra[4]='G';
		letra[5]='M';
		letra[6]='y';
		letra[7]='F';
		letra[8]='P';
		letra[9]='D';
		letra[10]='X';
		letra[11]='B';
		letra[12]='N';
		letra[13]='J';
		letra[14]='Z';
		letra[15]='S';
		letra[16]='Q';
		letra[17]='V';
		letra[18]='H';
		letra[19]='L';
		letra[20]='C';
		letra[21]='K';
		letra[22]='E';
		
		
		posicion_letra= num_dni mod 23;

	Escribir "Tu DNI completo es ", num_dni,"-", letra[num_dni mod tamano];//esto es lo que más me ha costado
	
	Escribir "El resultado es la letra ", letra[num_dni mod tamano], "  que es la posición ", posicion_letra, ".";
	
	//letra[num_dni mod tamano] es lo que me faltaba lo de dentro del corchete que no sabía
	//que se podía hacer así-
		
	
	
FinAlgoritmo
