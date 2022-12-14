const mont = ['a', 'o', 'e', 'i', 'u'];

mont.sort();
console.log(mont);

const number = [1, 34, 52, 12, 42, 7, 96];
number.sort((a, b) => a - b);
console.log(number);

/* sort en objetos */
const orders = [
  {
    customerName: "Nicolas",
    total: 600,
    delivered: true,
  },
  {
    customerName: "Zulema",
    total: 120,
    delivered: false,
  },
  {
    customerName: "Santiago",
    total: 1840,
    delivered: true,
  },
  {
    customerName: "Valentina",
    total: 240,
    delivered: true,
  },
];

orders.sort((a, b) => b.total - a.total);
console.log(orders);