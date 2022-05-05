Algoritmo Ejercicio_39
	
	Definir array_1, array_2, indice, tamano Como Entero;
	DEfinir son_iguales Como Logico;
	tamano=5;
	Dimension array_1[tamano], array_2[tamano];
	
	array_1[0]=1;
	array_1[1]=2;
	array_1[2]=3;
	array_1[3]=4;
	array_1[4]=5;
	
	array_2[0]=1;
	array_2[1]=2;//si por ejemplo aquí pongo que vale 5, me duelve que son diferentes
	array_2[2]=3;
	array_2[3]=4;
	array_2[4]=5;
	
	//Apuesto a que son iguales:
	//Serán iguales hasta que se 
	//demuestre lo contrario.
	son_iguales = Verdadero;
	
	Para indice=0 hasta tamano-1 con paso 1 Hacer
		//Compruebo elemento a elemento, con que haya
		//uno diferente, sobreescribo mi variable.
		si array_1[indice] <> array_2[indice] Entonces
			//Si verdadero,   si son diferentes
			son_iguales = Falso;
		FinSi
	FinPara
	
	si son_iguales Entonces//aquí no necesito poner; son_iguales==Verdadero porque el SI ya usa variables lógicas, sería como substituir por Verdadero
		Escribir "Los arrays son iguales ";
	SiNo
		Escribir "Los arrays son diferentes ";
	FinSi
	
	
FinAlgoritmo
