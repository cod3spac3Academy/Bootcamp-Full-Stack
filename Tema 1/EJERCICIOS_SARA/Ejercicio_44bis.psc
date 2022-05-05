Algoritmo Ejercicio_44bis
	
	//HACER AHORA PERO CON UN REPETIR Y UN SEGÚN(lo hago sola)
	
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
	
	
	
	
	Repetir	
		Escribir "Por favor introduzca dos números ";
		Leer num1, num2;
		
		Escribir "Por favor, introduzca el número de la operación a realizar :";
		Escribir "1: sumar";
		Escribir "2: restar";
		Escribir "3: multiplicar";
		Escribir "4: dividir";
		Escribir "5: salir del programa";
		Leer operacion;
		
	
		Segun operacion Hacer
			1:
				Escribir " La suma es: ", num1+num2;
			2:
				Escribir " La resta es: ",num1-num2;
			3:
				Escribir " La multiplicación es: ", num1*num2;
			4:
				Escribir " La división es: ", num1/num2;
			5: 
				Escribir " salir del programa "; 

			De Otro Modo:
				Escribir " Ha seleccionado opción incorrecta ." ;
				
					
		Fin Segun
		
		
	Hasta Que operacion=5;
	
	
	
FinAlgoritmo
