//! ELIMINAR ELEMENTOS

//!                Eliminar elementos al inicio

//* shift
//* Mutando
//* Retorna el elementos eliminado
const colores = ["rojo", "verde", "azul"];
const rojo = colores.shift();
console.log(colores); // [ 'verde', 'azul' ]
console.log(rojo); // rojo

console.log("-".repeat(20));

//* slice
//* Sin mutar
const deportes = ['Fútbol', 'Baloncesto', 'Tenis', 'Voleibol'];
const deportes2 = deportes.slice(1);
console.log(deportes); // [ 'Fútbol', 'Baloncesto', 'Tenis', 'Voleibol' ]
console.log(deportes2); // [ 'Baloncesto', 'Tenis', 'Voleibol' ]


//!                Eliminar elementos al final

//* pop
//* Mutando
const generosMusicales = ['Rock', 'Pop', 'Electrónica', 'Hip Hop'];
console.log(generosMusicales); // [ 'Rock', 'Pop', 'Electrónica', 'Hip Hop' ]
const hipHop = generosMusicales.pop();
console.log(generosMusicales); // [ 'Rock', 'Pop', 'Electrónica' ]
console.log(hipHop); // Hip Hop

//* slice & ...spread
//* Sin mutar
const animales = ['Perro', 'Gato', 'Pájaro', 'Pez'];
const animales2 = [...animales.slice(0, animales.length -1)];
console.log(animales); // [ 'Perro', 'Gato', 'Pájaro', 'Pez' ]
console.log(animales2); // [ 'Perro', 'Gato', 'Pájaro' ]

//!                Eliminar elementos en cualquier indice

//* slice & ...spread
//* Sin mutar
const autos = [ "BMW", "Volvo", "Audi", "Toyota", "Renault" ];
const index = 1;
const autos2 = [...autos.slice(0, index), ...autos.slice(index + 1)];
console.log(autos);
console.log(autos2);

console.log(autos.slice(2)); // [ 'Audi', 'Toyota', 'Renault' ]
console.log(autos.slice(2, 4)); // [ 'Audi', 'Toyota' ]
console.log(autos.slice(1, 6)); // [ 'Volvo', 'Audi', 'Toyota', 'Renault' ]
console.log(autos.slice(-2)); // [ 'Toyota', 'Renault' ]
console.log(autos.slice(2, -1)); // [ 'Audi', 'Toyota' ]
console.log(autos.slice()); // [ 'BMW', 'Volvo', 'Audi', 'Toyota', 'Renault' ]

