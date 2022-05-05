Algoritmo Ejercicio_44
//	El usuario tendrá un menú numérico en pantalla para poder elegir entre las operaciones a realizar.
//	Si da una opción incorrecta (no existe), el programa avisará al usuario y volverá a mostrar el menú.
//	Hará esto hasta que el usuario elija la opción de salir del programa. Ejemplo de menú impreso por
//	pantalla:
//	"Seleccione el número de una de las siguientes
//	1: Sumar
//	2: Restar
//	3: Multiplicar
//	4: Dividir
//	5: Salir del programa."
	
	Definir num1, num2, array Como Real;
	Definir operacion Como Real;
	//Definir sumar, restar, multiplicar, dividir, salir Como Real;
	Escribir "Por favor introduzca dos números ";
	Leer num1, num2;
	
	Escribir "Por favor, introduzca el número de la operación a realizar :";
	Escribir "1: sumar";
	Escribir "2: restar";
	Escribir "3: multiplicar";
	Escribir "4: dividir";
	Escribir "5: salir del programa";
	Leer operacion;
	
	Si operacion=1 Entonces
		escribir num1+num2;
	SiNo
		Si operacion=2 Entonces
			Escribir num1-num2;
		SiNo
			Si operacion=3 Entonces
				Escribir num1*num2;
			SiNo
				Si operacion=4 Entonces
					Escribir num1/num2;
				SiNo
					si operacion=5 entonces
						Escribir "salir del programa";
					FinSi
				Fin Si
			Fin Si
		Fin Si
	Fin Si
	
	
	
	
	
//	Leer num1, num2; 
	
//	Escribir num1 + num2;
//	Escribir num1 - num2; 
//	Escribir num1 * num2;
//	Escribir num1 / num2;

	
	
FinAlgoritmo
