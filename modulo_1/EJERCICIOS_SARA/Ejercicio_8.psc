Algoritmo Ejercicio_8
	// dado el sueldo de un trabajador 
	// incrementar ek 15 MOD  si el sueldo es inferior a 1000?
	// imprimir nuevo sueldo
	Definir Sueldo_trabajador Como Real
	Leer Sueldo_trabajador
	Si Sueldo_trabajador<1000 Entonces
		Escribir "Nuevo sueldo,  ", Sueldo_trabajador+Sueldo_trabajador*0.15
	SiNo
		Escribir ' no hacer incremento'
	FinSi
FinAlgoritmo
