##
.MAP //transformar, devuelve un array a partir de otro array
##
-La función, que recibe como argumento el método map, utiliza tres parámetros:

El valor actual del elemento iterado. Es decir, si es la primera iteración, será el primer elemento, y así sucesivamente.
El índice del elemento iterado. Es decir, si es la primera iteración, será el índice 0, y así sucesivamente.
El array que está iterando.
##
-Diferencia entre la estructura for y el método map
Si utilizamos la estructura For, necesitaremos un array adicional vacío y utilizarlo con el método push para agregar los elementos transformados. El método push es mutable.
-Con el método map, solo debemos establecer la función que indique la transformación para cada elemento.
##
Diferencia entre forEach y map
-La principal diferencia entre estos dos es que forEach solamente itera cada elemento, mientras que map itera y transforma cada elemento en un nuevo array.
##
sprice operation // clona los atributos del objeto sin la referencia en memoria
##
filter()//devuelve unicamente los elementos que cumnplen con una condicion
##
includes //dice que si un string esta incluido dentro del elemento
##
Un objeto al que puede hacer referencia el contexto this en la función. Si se lo omite, será undefined. Recuerde que this en arrow functions es el objeto global.
##
reduce() //coje un array y lo reduce a un solo valor
a reduce le tenemos que enviar 2 parametros-1=arrowfunction -2=el estado inicial del recorrido
##
paynem = la salida de uno es la entrada de informacion de otro

##
some() //si al menos 1 elemento cumple con la condicion devuelve true o false(solo imprime true o falce segun el caso)
##
every()//todos los elementos deven cumplir con la condicion