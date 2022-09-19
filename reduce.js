/* sumar todos los elementos */
const totals = [1,2,3,4,5,6,7,8,9];

let sum = 0;

for (let index = 0; index < totals.length; index++){
    const element = totals[index];
    sum = sum + element;
}
console.log(sum);
//suma con metodo reduce
const rta = totals.reduce((sum, element) => sum + element, 0);
console.log('rta', rta);

/* suma de cuadrado  */
const numbers = [5,4,8,6,2];
let sumi = 0;

for (let i = 0; i < numbers.length; i++){
    const number = numbers[i];
    sumi = sumi + number**2
}

console.log(sumi);
//con metodo reduce
const reducedValue = numbers.reduce((sumi, number) => (sumi + number**2), 0);
console.log(reducedValue);

/* aberiguar cuantas veces se repite un elemento en un array */
const items = [1,3,2,3,4,3];

const rta2 = items.reduce((obj, item) => {//(obj=acumulador, item=valores o propiedades del elemento)
    if(!obj[item]){//si no existe
        obj[item] = 1; //lo inicializa en 1
    } else {
        obj[item] = obj[item] + 1;// 
    }
    return obj;
}, {});

console.log(rta2);

/* aberiguar cuantas veces se repite un elemento en un objeto */
const data = [
    {
      name: "Nicolas",
      level: "low",
    },
    {
      name: "Andrea",
      level: "medium",
    },
    {
      name: "Zulema",
      level: "hight",
    },
    {
      name: "Santiago",
      level: "low",
    },
    {
      name: "Valentina",
      level: "medium",
    },
    {
      name: "Lucia",
      level: "hight",
    },
  ];

  const rta3 = data
  .map(item => item.level)//transformamos el objeto en array
  .reduce((obj, item) => {//obtenemos las repeticiones
    if(!obj[item]){//si no existe
        obj[item] = 1; //lo inicializa en 1
    } else {
        obj[item] = obj[item] + 1;// 
    }
    return obj;
}, {});
console.log(rta3);

/* obtener las repeticiones pero en grupos */
const arreglo = [3, 10, 9, 4, 3, 1, 8, 4, 7, 7, 8, 2, 3, 2, 6, 9, 1, 6];

const reto = arreglo.reduce((objeto, elemento) => {
    if (elemento <= 5){
        objeto['1-5']++
    } else if (elemento <= 8){
        objeto['6-8']++
    } else {
        objeto['9-10']++
    }
    return objeto;
}, {'1-5': 0, '6-8': 0, '9-10': 0});
console.log(reto);