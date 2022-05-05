Funcion resultado = promedio(datos, cant_datos)
	Definir resultado Como Real;
	Definir suma, i como entero;
	suma=0;
	Para i=0 Hasta cant_datos-1 Con Paso 1 Hacer
		suma=suma+ datos[i];
	Fin Para
	
	resultado= suma/cant_datos;
Fin Funcion

Algoritmo Ejercicio_53
	Definir datos, cant_datos, i Como Entero;
	Escribir "pon cantidad de datos que vas a introducir ";
	Leer cant_datos;
	dimension datos[cant_datos];
//	Escribir "pon el numero por el que empieza el array";
//	Leer array[i];
	
//	Para i=0 hasta cant_datos-1 con paso 1 Hacer
//		datos[i]= i+1;
//		Escribir datos[i];
//	FinPara
	//para ponerle valor a los array:
	//En este caso NO lo hacemos como siempre porque le vamos a introducir datos concretos
	//evitando hacerlo así:
	//datos[0]=1
	//datos[1]=3
	//etc etc, que es como lo estaba haciendo yo arriba.
	Para i=0 hasta cant_datos-1 Hacer
		Escribir "Ingreses el dato", i, ":";
		Leer datos[i];
	FinPara

	Escribir "EL promedio es: "; 
	Escribir promedio(datos, cant_datos); 
	
FinAlgoritmo