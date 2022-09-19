##
.forEach //sirve para recorrer un array

##
introducion al baquen 
consumo de apis
web compones
##
-cuando cambiamos el array original realizamos una mutacion
-cuando generamos un nuevo estado (clonar o agregar cambios), generamos una estructura de datos inmutable
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
spread operator // clona los atributos del objeto sin la referencia en memoria
##
filter()//devuelve unicamente los elementos que cumplen con una condicion
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
##
-find() //devuelve el primer obejeto que cumpla con la condicion
si no enecuentra un objeto con la condicion debuelve undefioned
-findIndex()//debulve el index del primer objeto que cumpla la codicion
si no encuentra el elemento nos debuelve un -1

##
includes = determina si un array o string incluye un determinado elemento. devuelve true o false segun si existe o no.
No recive un arrowFuntion simplemento la condicion 
##
join() = une los elementos del array, mediante una separación, y retorna un string. Si un elemento es undefined o null, se convierte en una cadena vacía.
##
split() = de strings, es lo contrario que el método join, consiste en separar un string en substrings, indicando un valor a separar. Este método retornará un array de los elementos separados.Conbierte de una cadena a un array.

##
concat() //metodo para fucionar array en un solo array. es inmutable 

##
spreadOperator // tener en cuenta que recivas un array para poder hacer un mergue del elemento, si se puede fucionar un string a un array de numeros

##
-flat() // los arrays que esten dentro de arrays flat une los elementos en un solo array.
flat aplan los array que esten dentro de otro array
-flatMap() //aplana los array que esten dentro de otro array y los ba transformando a medida que lo ba aplanando.

## 
Object.values //nos dice los atributos que tiene un objetos y convierte a un array

##
splice()//quita un elemento del array 

##
-unshift() agrega uno o varios elementos al inicio del array original. El método recibe como argumento los valores a agregar. Retorna el número de elementos del array mutado.

-pop() extrae el elemento del final del array original. El método no recibe ningún argumento. Retorna el elemento extraído, si no se guarda en una variable, el Garbage Collection{target="_blank"} lo elimin

-shift() extrae el elemento del inicio del array original. El método no recibe ningún argumento. Retorna el elemento extraído, si no se guarda en una variable, el Garbage Collection{target="_blank"} lo elimina.

-splice extrae uno o varios elementos del array original a partir del índice y los reemplaza con otro elemento especificado como argumento. Retorna un array con los elementos extraídos, si no se guarda en una variable, el Garbage Collection{target="_blank"} lo elimina.




##
sort() //orden los array y es un metodo mutable


<!-- 
1.
¿El método forEach es el recomendado para filtrar elementos de un array?
Falso


2.mal----------
¿Por qué el siguiente código cambia el estado original del array?

const array = [{age: 1}, {age:2}]; 
const rta = array.map(item => {   
  item.name = 'My name';
  return item; 
})
Porque al trabajar con objetos se está modificando la referencia en memoria.


3.
¿Filter es un método que cambia el estado original de un array?
Falso


4.
¿Cuál es el resultado del siguiente código?

const array = ['a', 'bb', 'ccc']; 
const rta = array.map(item => item.length);
[ 1, 2, 3 ]


5.
Si quiero obtener la suma de todos los valores de este array [1,1,1,1,1], ¿cuál es el código que lo va a resolver?

const array = [1,1,1,1,1]; 
const rta = array.reduce((total, item) => total + item, 0)


6.
¿Reduce es un método que NO cambia el estado original de un array?
verdadero


7.
¿Cuál de estos métodos me retorna un true si alguno de los elementos del array tiene este emoji 🐸?

const array = ['🐸','🐱','🐹']; 
const rta = array.some(item => item === '🐸')


8.
¿Cuál de estos métodos me retorna la posición del array en donde está el emoji 🐸?
const array = ['🐸','🐱','🐹']; 
const rta = array.findIndex(item => item === '🐸'); 


9.
¿Cuál es el resultado del siguiente código?

const array = [['🐸','🐱'],'🐹', ['🐯']]; 
const rta = array.flat();
[ '🐸', '🐱', '🐹', '🐯' ]


10.
¿Sort es un método que cambia el estado original de un array?
Verdadero


11.
¿Cuál es una forma de copiar los elementos de un array sin tener problemas de mutabilidad?
const listA = [1,2,2,4]; 
const newList = [...listA];


12.
¿Cuál de los siguientes códigos ordena este array [11,1,13,99,8] de menor a mayor?

const array = [11,1,13,99,8]; 
array.sort((a,b) => a < b);
 -->