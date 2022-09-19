



/* Calcular y agrega una propiedad de un array Metodo MAP*/
function rta3(array) {
  return array.map(item => ({
    ...item,
    taxes: Math.trunc(item.price * .19)
  }))
};


/* Retornar solo palabras de 4 letras y mas Metodo FILTER */
function rta4(array) {
  return array.filter(item => item.length <= 4)
};
console.log(rta4(["qwert", "wert", "er", "asdfasdf"]));

/* Calcular la suma total de los elementos Metodo REDUCE */
function rta5(numbers) {
  return numbers.reduce((a, b) => a + b);
};
console.log(rta5([2, 8, 5, 5]));

/* Reotornar si almenos alguno cumple con la condicion Metodo SOME */
function rta6(numer) {
  return numer.some(item => item % 2 === 0)
};
console.log(rta6([2, 3, 7]));
/* Retornar si todos los elementos cumplen con la condicion Metod EVERY */
function rta7(numero) {
  return numero.every(item => item % 2 === 0)
};
console.log(rta7([2, 4, 8]));

/* Construye una url con base a un string  metodo JOIN y Metodo SPLIT*/
function rta8(title) {
  return title.split(' ').join('--').toLowerCase();
}
console.log(rta8("ESTE ES UN PROYECTO QUE ESTOY REALIZANDO XD"));

/* Calcula el total de las palabras de un texto meto FLAT y FLATMAP */

function rta9(lines) {
  return lines.flatMap(item => item.split(' ')).length
};
console.log(rta9(['ESTE ES UN PROYECTO QUE ESTOY REALIZANDO XD']));

function rta10(lines) {
  return lines.map((item) => item.split(' ')).flat().length
};
console.log(rta10(['ESTE ES UN PROYECTO QUE ESTOY REALIZANDO XD']));
//metodo mas cencillo de calcular la longitud
function texto(parrafo) {
  return parrafo.length;
}
console.log(texto(['hola', 'mundo', 'muerte', 'a', 'macri']));


/* Edita un elemento sin modificar el array original */
function solution(array, index, newValue) {
  return array.map((item, i) => {
    if (i === index) {
      return newValue;
    }
    return item;
  });
};
console.log(solution([1, 2, 3], 0, "change"));
console.log(solution(["A", "B", "C"], 1, 1));

