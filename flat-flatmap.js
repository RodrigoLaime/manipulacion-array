const matriz = [
  [1, 2, 3],
  [4, 5, [6]],
  [7, 8, 9]
];

const newArray = [];
for (let i = 0; i < matriz.length; i++) {
  const array = matriz[i];
  for (let j = 0; j < array.length; j++) {
    const element = matriz[i][j];
    newArray.push(element);
  }
}

const rta = matriz.flat(3);
console.log('for', newArray);
console.log('flat', rta);

/* reto flat */
const matrizz = [
  [1, 2, 3],
  [4, 5, 6, [1, 2, [1, 2]]],
  [7, 8, 9]
];

function profundidad(list) {
  let newList = [];
  if (typeof list != "object") return [list];
  list.forEach(element => {
    newList = newList.concat(profundidad(element));
  });
  return newList;
};

const newArrayy = profundidad(matrizz);

console.log('reto', newArrayy);


/* flatMap */
const users = [
  { userId: 1, username: "Tom", attributes: ["Nice", "Cute"] },
  { userId: 2, username: "Mike", attributes: ["Lovely"] },
  { userId: 3, username: "Nico", attributes: ["Nice", "Cool"] },
];
/* con map */
const rta2 = users.map(item => item.attributes).flat(); //obtener los atributos que tengan un array y aplanarlos
console.log(rta2);
/* con metodo flatMap */
const rta3 = users.flatMap(item => item.attributes);
console.log(rta3);


/* reto flatMap */
const calendars = {
  primaryCalendar: [
    {
      startDate: new Date(2021, 1, 1, 15),
      endDate: new Date(2021, 1, 1, 15, 30),
      title: "Cita 1",
    },
    {
      startDate: new Date(2021, 1, 1, 17),
      endDate: new Date(2021, 1, 1, 18),
      title: "Cita 2",
    },
  ],
  secondaryCalendar: [
    {
      startDate: new Date(2021, 1, 1, 12),
      endDate: new Date(2021, 1, 1, 12, 30),
      title: "Cita 2",
    },
    {
      startDate: new Date(2021, 1, 1, 9),
      endDate: new Date(2021, 1, 1, 10),
      title: "Cita 4",
    },
  ],
};

const rta4 = Object.values(calendars).flat();
console.log(rta4);

const rta5 = Object.values(calendars).flatMap(item => {
  return item.map(date => date.startDate);//transformamos el array
});
console.log(rta5);


/* calcular el total de palabras de un texto */
function solution(lines) {
  return lines.flatMap((item) => item.split(' ')).length;
  //crear un nuevo array, aplanar el string, separarlo por espacio las palabras y retornar la cantidad de su longitud(cantidad de palabras)
}
console.log(solution([
  "Beautiful is better than ugly",
  "Explicit is better than implicit",
  "Simple is better than complex",
  "Complex is better than complicated",
]));