const products = [
  { title: 'Pizza', price: 121, id: '🍕' },
  { title: 'Burger', price: 121, id: '🍔' },
  { title: 'Hot cakes', price: 121, id: '🥞' },
];

const myProducts = [];

console.log("products", products);
console.log("myProducts", myProducts);
console.log("-".repeat(10));

const productIndex = products.findIndex(item => item.id === '🍔');
if (productIndex !== -1) {
  myProducts.push(products[productIndex]);
  products.splice(2, 1); //2 la psocion en que se encuentra y 1 es la cantidad que se va a eliminar
}

console.log("products", products);
console.log("myProducts", myProducts);
console.log("-".repeat(10));

/* --Modificar un objeto dentro de un array------------------ */
const products2 = [
  { title: 'Pizza', price: 121, id: '🍕' },
  { title: 'Burger', price: 121, id: '🍔' },
  { title: 'Hot cakes', price: 121, id: '🥞' },
];

const update = {
  id: '🥞',
  changes: {
    postre: 'special',
    price: 200,
  }
}

const productIndexx = products2.findIndex(item => item.id === update.id);
products2[productIndexx] = {
  ...products2[productIndexx],//para que no aga la referencia en memori y que no sobreescriba el objeto si no que, lo que no se modifico en el objeto se quede en el objeto
  ...update.changes,
};

console.log(products2);