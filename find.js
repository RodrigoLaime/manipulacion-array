const numbers = [1, 30, 49, 29, 10, 13];

let rta = undefined;

for (let index = 0; index < numbers.length; index++) {
  const element = numbers[index];
  if (element === 30) {
    rta = element;
    break; //si ya encintro la condicion para que seguir iterando
  }
}
console.log('for', rta);

const rta2 = numbers.find(item => item === 30)
console.log('rta2', rta2);

/* Ejemplo de find con objetos */
const products = [
  {
    name: "Pizza",
    price: 12,
    id: '🍕'
  },
  {
    name: "Burger",
    price: 23,
    id: '🍔'
  },
  {
    name: "Hot dog",
    price: 34,
    id: '🌭'
  },
  {
    name: "Hot cakes",
    price: 355,
    id: '🥞'
  },
];

const rta3 = products.find(item => item.id === '🍔');
console.log('el objeto que cumple la condicion es', rta3);

const rta4 = products.findIndex(item => item.id === '🍔');
console.log('se encuentra en la posicion', rta4);