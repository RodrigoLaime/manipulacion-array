/* metodo join une los elementos mediante una separacion o espacio bacio */
const elements = ["Fire", "Air", "Water"];

let rtaFinal = '';
const separator = '--';
for (let index = 0; index < elements.length; index++) {
  const element = elements[index];
  rtaFinal = rtaFinal + element + separator;
}
console.log('for', rtaFinal);

const rta2 = elements.join('--')
console.log('join', rta2);

/* metodo split separa un string en substring */
const title = 'Curso de manipulacion de arrays con el profe Nicolas Molina';
const urlFinal = title.split(' ').join('-').toLowerCase();
//los separamos con split, lo unimos con un jouin y lo pasamos a minuscula con toLowerCase.
console.log(urlFinal);

/* split */
const cadena = "JavaScript es maravilloso, con JavaScript puedo crear el futuro de la web."

const rt1 = cadena.split(" ")
/* [ 'JavaScript', 'es', 'maravilloso,', 'con', 'JavaScript', 'puedo', 'crear', 'el', 'futuro', 'de', 'la', 'web.' ]
*/
const rt2 = cadena.split(", ")
/* [ 
    'JavaScript es maravilloso', 
    'con JavaScript puedo crear el futuro de la web.' 
]*/
const rt3 = cadena.split("JavaScript")
/* [
    '', 
    ' es maravilloso, con ', 
    ' puedo crear el futuro de la web.' 
]*/
const rt4 = cadena.split(" ", 3) // [ 'JavaScript', 'es', 'maravilloso,' ]

console.log('rt1', rt1, 'rt2', rt2, 'rt3', rt3, 'rt4', rt4);