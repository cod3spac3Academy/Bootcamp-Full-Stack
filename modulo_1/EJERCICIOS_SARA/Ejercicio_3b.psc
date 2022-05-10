Algoritmo Ejercicio_3b
	// Algoritmo que lea tres números diferentes entre sí y nos diga cuál de ellos es mayor 
	Definir num1,num2,num3 Como Entero
	Leer num1,num2,num3
	Si num1>num2 Y num1>num3 Entonces
		Escribir ' Num1 es el mayor'
	SiNo
		Si num2>num1 Y num2>num3 Entonces
			Escribir ' num2 es el mayor'
		SiNo
			Si num3>num1 Y num3>num2 Entonces
				Escribir 'Num3 es el mayor'
			FinSi
		FinSi
	FinSi
FinAlgoritmo
