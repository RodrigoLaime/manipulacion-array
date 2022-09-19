/* every. true o false si todos cumolen con la condicion */
const numbers = [1,30,49,29,10,13];

let rta = true;
for (let index = 0; index < numbers.length; index++){
    const element = numbers[index];
    if (element >= 40){ //todos los elemento tiene que ser menor a 40
        rta = false
    }
} 
console.log('for', rta);

const rta2 = numbers.every(item => item <= 40);
console.log("rta2", rta2);

/* todos los jugadores tienen que ser menor a 15 años */
const team = [
    {
      name: "Nicolas",
      age: 12,
    },
    {
      name: "Andrea",
      age: 8,
    },
    {
      name: "Zulema",
      age: 2,
    },
    {
      name: "Santiago",
      age: 15,
    },
  ];

  const menor = team.every(item => item.age <= 15);
  console.log(menor);