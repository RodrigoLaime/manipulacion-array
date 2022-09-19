/* multiplicar todos los elementos por dos */
function solution(array){
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
function solution2(array){
    return array.map(item => item.nombre);
};
console.log(solution2(obj));
