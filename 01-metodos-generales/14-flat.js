//* FALT
//* Manipula arrays qye tiene otro arrays dentro.
//* Retorna un array de una sola dimension.

const matriz = [
    [1,2,3],
    [4,5,6, [1,2, [1,2]]],
    [7,8,9]
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

//* Una solucion empleando recursividad (sin utilizar falt).
const matriz1 = [
    [1,2,3],
    [4,5,6, [1,2, [1,2]]],
    [7,8,9]
];

function flattenArray(arr) {
    let result = [];

    arr.forEach(element => {
        if (Array.isArray(element)) {
            result = result.concat(flattenArray(element));
        } else {
            result.push(element);
        }
    });

    return result;
}


const flattenedArray = flattenArray(matriz1);
console.log(flattenedArray);

const array = [['🐸','🐱'],'🐹', ['🐯']]; 
const rta3 = array.flat();
console.log(rta3);
