//* AÑADIR ELEMENTOS


//* Operador spread - Sin mutar
const colores = ["rojo", "verde", "azul"];
const colores2 = ["turquesa", ... colores];
console.log(colores); // [ 'rojo', 'verde', 'azul' ]
console.log(colores2); // [ 'turquesa', 'rojo', 'verde', 'azul' ]

console.log("-".repeat(20));


//* Usando el metodo push - Mutando
//* El emtodo push retorna el numero de longitud del nuevo array
const coloresLista2 = ["rojo", "verde", "azul"]; 
const addColorpush = coloresLista2.push("turquesa");
console.log(coloresLista2); // [ 'rojo', 'verde', 'azul', 'turquesa' ]
console.log(addColorpush); // 4