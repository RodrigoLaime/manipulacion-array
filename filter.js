/* obtener un elemento que cumpla con la condicion */
const words = ['spray', 'limit', 'ekite', 'exuberant'];
const newArray = [];

for (let index = 0; index < words.length; index++){
    const item = words[index];
    if(item.length >= 6){
        newArray.push(item);//guardar en variable
    }
}
console.log('elemento con mayor cantidad de letras', newArray);
console.log('original', words);
/* obtener un elemento que cumpla con la condicion con filter */
const rta = words.filter(item => item.length >=6); //item hace referencia a cada uno de los elementos
console.log('elemento con mayor cantidad de letras', rta);
console.log('original', words);

/* obtener unicamente los que entregaron el deliveri(delivered) */
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

  const rta2 = order.filter(item => item.delivered && item.total >= 90);

  console.log(rta2);//devuelve unicamente los que cumplen con la condicion

  /* hacer un buscador */
  const search = (query) => {
    return order.filter(item => {
        return item.customerName.includes(query);
    })
  }
  console.log(search('Nic'));