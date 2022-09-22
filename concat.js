const elements = [1, 1, 2, 2];
const othersElements = [3, 3, 4, 4];

const newArray = [...elements];//se copia con spread operator para que no aga referencia en memoria y se midifique el primer array.
for (let index = 0; index < othersElements.length; index++) {
  const element = othersElements[index];
  newArray.push(element);
}

console.log('for', newArray);

const newArray2 = elements.concat(othersElements);
console.log('concat', newArray2);

const newArray3 = [...elements, ...othersElements];//une array con spreadOperator.
console.log('spreadOperator', newArray3);

const newArray4 = [...elements, 'numeros'];
console.log('newArray4', newArray4);

const newArray5 = [...elements, ...'numeros'];
console.log('newArray5', newArray5);

elements.push(...othersElements);
console.log('elements rta6', elements);

elements.push(othersElements);
console.log('elements rta7', elements);