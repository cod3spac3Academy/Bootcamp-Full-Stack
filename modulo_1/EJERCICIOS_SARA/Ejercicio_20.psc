Algoritmo Ejercicio_20
	//Teniendo en cuenta que la clave es "eureka", 
	//escribir un algoritmo que nos pida una clave. 
	//Solotenemos 3 intentos para acertar, si fallamos los 3 intentos 
	//nos mostrará un mensaje indicándonos
	//que hemos agotado esos 3 intentos. 
	//Si acertamos la clave, saldremos directamente del programa.
	
	
	Definir clave Como Caracter;
	Definir contador ,MÁX_INTENTOS    Como Entero;
		
	contador = 0;
	MÁX_INTENTOS = 3;//las constantes se ponen siempre en MAYÚSCULA
	//como es CONSTANTE, no hay que definirla arriba porque allí se ponen sólo VARIABLES
	
Repetir
	Escribir " Introducir clave "; //aquí puedo añadir que me ponga "Máx_intentos - contador" para que me diga los intentos que me quedan.
	Leer clave;
	

	Si Clave = "eureka" Entonces
		Escribir " Contraseña correcta ";
			
	Fin Si
	
	contador = contador +1;

	Si contador== MÁX_INTENTOS Entonces
		Escribir " Ha agotado todos los intentos ";
	FinSi

	
	
Hasta Que contador ==MÁX_INTENTOS O clave = "eureka"; //al O con que la primera opcion sea verdadera ya no ejecuta la segunda 
//por lo que es mejor en este caso que si llega a 3 intentos, se ejecute el algoritmo.

FinAlgoritmo
