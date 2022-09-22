const letters = ["a", "b", "c"];

for (let index = 0; index < letters.length; index++) {
  const element = letters[index];
  console.log('for', element);
}
letters.forEach(item => console.log('forEach', item));
/* ------- */
const products = [
  { title: 'burger', price: '121' },
  { title: 'pizza', price: '21' },
];
/* const app = document.getElementById('app');
products.forEach(product => {
  app.innerHTML += `<li>${product.title} - ${product.price}</li>`;
}); */
/* wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww */

const tasks = [
  {
    task: 'Tarea 1',
    descp: 'Descripcion de la tarea 1',
    done: false,
  },
  {
    task: 'Tarea 2',
    descp: 'Descripcion de la tarea 2',
    done: true,
  },
  {
    task: 'Tarea 3',
    descp: 'Descripcion de la tarea 3',
    done: false,
  },
  {
    task: 'Tarea 4',
    descp: 'Descripcion de la tarea 4',
    done: true,
  },
];

const app = document.getElementById('app');

tasks.forEach(task => {
  app.innerHTML += `
        <li>
        Nombre: ${task.task} ||  Descripción: ${task.descp} - 
        <input type="checkbox" ${task.done ? 'checked' : ''
    }/>
        </li >
  <p>Clases</p>`
});
/* aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa */


function solucion(array) {
  return newArray = array.map(item => item * 2)
}
console.log(solucion([1, 2, 3, 4, 5, 6, 7, 8]));


/* retos del curso----------------------------------- */
/* multiplicar todos los elementos por dos */
function solution(array) {
  return array.map(item => (item * 2));
};
console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9]));


/* Transformar de un array de objetos a un array de strings */
const obj = [
  {
    nombre: "fer",
    apellido: "nogadev"
  },
  {
    nombre: "jhon",
    apellido: "molina"
  }
];
function solution2(array) {
  return array.map(item => item.nombre);
};
console.log(solution2(obj));
