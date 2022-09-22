const pets = ['cat', 'dog', 'bat',];

let includesInArray = false;
for (let index = 0; index < pets.length; index++) {
  const element = pets[index];
  if (element === 'dog') {
    includesInArray = true;
    break;
  }
}

const pets2 = pets.includes('dog');
console.log('for', includesInArray);
console.log('includes', pets2);

const frutas = ['Manzana', 'Mandarina', 'Banana', 'Plantano'];

const fut = frutas.includes('Manzana');
const fut2 = frutas.includes('Anana');
console.log(fut);
console.log(fut2);