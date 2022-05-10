Funcion resultado <- sumar ( num1, num2 )
	Definir resultado Como Entero;
	resultado=num1+num2;
Fin Funcion

Funcion resultado <- restar(num1, num2)
	Definir resultado Como Entero;
	resultado= num1-num2;
FinFuncion


Algoritmo ejemplos_funciones_1
	Definir resultado_Suma, resultado_resta Como Entero;
	Escribir "la suma es ", sumar(150,20);
	Escribir "la resta es ", restar(150,20);
	
	resultado_Suma = sumar(15,16);
	resultado_resta= restar(resultado_Suma,1);

	Escribir resultado_Suma;
	
	Escribir resultado_resta;
	
FinAlgoritmo
