//! AÑADIR ELEMENTOS

//!                Añadir elementos al inicio

//* Operador spread
//* Sin mutar
const colores = ["rojo", "verde", "azul"];
const colores2 = ["turquesa", ...colores];
console.log(colores); // [ 'rojo', 'verde', 'azul' ]
console.log(colores2); // [ 'turquesa', 'rojo', 'verde', 'azul' ]

console.log("-".repeat(20));

//!                Añadir elementos al final


//* Usando el metodo push
//* Mutando
//* El emtodo push retorna el numero de longitud del nuevo array
const coloresLista2 = ["rojo", "verde", "azul"]; 
const addColorpush = coloresLista2.push("turquesa");
console.log(coloresLista2); // [ 'tobby', 'azulejo', 'manchas' ]
console.log(addColorpush); // 4

console.log("-".repeat(20));

//* Añadir elemento usando la longitud
//* Mutando
const autos = [ "BMW", "Volvo", "Audi" ];
console.log(autos); // [ 'BMW', 'Volvo', 'Audi' ]
autos[autos.length] = "Cadillac";
console.log(autos); // [ 'BMW', 'Volvo', 'Audi', 'Cadillac' ]



console.log("-".repeat(20));

//* Operador spread
//* Sin mutar
const perros = ["tobby", "azulejo", "manchas"];
const perros2 = [...perros, "turquesa"];
console.log(perros); // [ 'rojo', 'verde', 'azul' ]
console.log(perros2); // [ 'tobby', 'azulejo', 'manchas', 'turquesa' ]

console.log("-".repeat(20));

//!                Añadir elementos en cualquier indice

//* splice
//* Mutando
const paises = ["colombia", "españa", "venezuela"];
const nuevoPais = paises.splice(2, 0, "alemania")
console.log(paises); // [ 'colombia', 'españa', 'alemania', 'venezuela' ]
console.log(nuevoPais); // []

console.log("-".repeat(20));

//* slice
//* Sin mutar
const frutas = ['Manzana', 'Banana', 'Naranja'];
const nuevaFruta = "Uva"
const frutas2 = [...frutas.slice(0, 2), nuevaFruta, ...frutas.slice(2)]
console.log(frutas); // [ 'Manzana', 'Banana', 'Naranja' ]
console.log(frutas2); // [ 'Manzana', 'Banana', 'Uva', 'Naranja' ]

console.log("-".repeat(20));



