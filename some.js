const numbers = [1,2,3,4];

let rta = false;
for (let index = 0; index < numbers.length; index++){
    const element = numbers[index];
    if (element % 2 === 0){
        rta = true;
        break;
    }
}
console.log(rta);
/* con el metodo some */
const rta2 = numbers.some(item => item % 2 === 0)
console.log(rta2);

/* metodo some en objetos ver si almenos uno entrego el delivery */
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
  const rta3 = order.some(item => item.delivered);
  console.log("rta3", rta3);

  /* ver si al menos uno cumplio con la cita */
  const dates = [
    {
      startDate: new Date(2021, 1, 1, 10),
      endDate: new Date(2021, 1, 1, 11),
      title: "Cita de trabajo",
    },
    {
      startDate: new Date(2021, 1, 1, 15),
      endDate: new Date(2021, 1, 1, 15, 30),
      title: "Cita con mi jefe",
    },
    {
      startDate: new Date(2021, 1, 1, 20),
      endDate: new Date(2021, 1, 1, 21),
      title: "Cena",
    },
  ];

  const newAppoinment = {
    startDate: new Date(2021, 1, 1, 19),
    endDate: new Date(2021, 1, 1, 20, 30),
  };

  const areIntervalsOverlapping = require('date-fns/areIntervalsOverlapping');

  const isOverlap = (newDate) => {
    return dates.some(date => {
        return areIntervalsOverlapping(
            {start: date.startDate, end: date.endDate},
            {dtsrt: newDate.startDate, end: newDate.endDate},
        )
    })
  }
  console.log(isOverlap(newAppoinment));