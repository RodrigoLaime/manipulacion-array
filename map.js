const letters = ["a", "b", "c"];

const newArray = letters.map(item => item + '++');
/* const newArray = [];
for (let index = 0; index < letters.length; index++){
    const element = letters[index];
    newArray.push(element + '++');
} */
console.log('original', letters);
console.log('nuevo', newArray);

/* multiplicar por 2 el array */

/*Calcula y agrega una nueva propiedad en un Array  */
const tax = [
    {
      name: "Product 1",
      price: 1000,
      stock: 10
    },
    {
      name: "Product 2",
      price: 2000,
      stock: 20
    }
  ];
function solution(array) {
    // Tu código aquí 👈 
    return array.map(item => {
      return {
        ...item, //donde se guarda todo los elementos
        taxes: Math.trunc(0.19 * (item.price))
      };
    });
  }; 
  console.log(solution(tax));

  /* escoger los elementos que necesito de un objeto en un array */
  const order = [
    {
        customerName: 'Nicolas',
        total: 60,
        delivered: true
    },
    {
        customerName: 'Nicol',
        total: 4000,
        delivered: true
    },
    {
        customerName: 'Nina',
        total: 90,
        delivered: true
    },
    {
        customerName: 'Nico',
        total: 200,
        delivered: false
    }
  ];

  console.log('original', order);
  const rta = order.map(item => item.total);
  console.log('rta', rta);
  const ordernar = rta.sort((a,b) => a - b);//metodo para ordenar
  console.log(ordernar);

  /* const rta2 = order.map(item => { 
    item.tax = .19;
    return item;//mala practica porque item hace referenia al objeto en memoria
  });
  console.log('rta2', rta2); */
  const rta3 = order.map(item => { 
    return {//generar un nuevo objeto para no hacer referenia al objeto en memoria
        ...item, //sprice operation clona los atributos del objeto sin la referencia en memoria
        tax: .19
    };
  });
  console.log('rta3', rta3);
  console.log('original', order);