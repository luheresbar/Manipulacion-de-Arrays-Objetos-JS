//! ENCONTRAR ELEMENTOS EN ARRAYS Y OBJETOS

//! indexOf
//* Retorne el indece del elemento.
//* Si no encuentra nada retorna un -1.
const deportes = ["Fútbol", "Baloncesto", "Tenis", "Voleibol", "Golf"];
const indice = deportes.indexOf("Tenis");
console.log(indice); // 2

//! includes
//* verificar si un elemento está dentro del array.
//* Retorna un booleano.
const pets = ["cat", "dog", "bat"];
const rta1 = pets.includes("dog"); //
console.log("includes: ", rta1); // includes:  true

//! findIndex
const generosMusicales = [
  { id: 1, nombre: "Rock" },
  { id: 2, nombre: "Pop" },
  { id: 3, nombre: "Electrónica" },
];
const index = generosMusicales.findIndex(genero => genero.nombre === "Pop")
console.log(index); // 1


//! find
//* Retorna el primer elemeto que coincida con la condicion.
//* Si no encuentra ningun elemento retorna undefine.
const pop = generosMusicales.find(genero => genero.nombre === "Pop")
console.log(pop); // { id: 2, nombre: 'Pop' }



const numbers = [1, 30, 49, 29, 10, 13];

let rta = undefined;
for (let index = 0; index < numbers.length; index++) {
  const element = numbers[index];
  if (element === 302323) {
    rta = element;
    break;
  }
}
console.log("for", rta);
const rta2 = numbers.find((item) => item === 302323);
console.log("find", rta2);

const products = [
  {
    name: "Pizza",
    price: 12,
    id: "🍕",
  },
  {
    name: "Burger",
    price: 23,
    id: "🍔",
  },
  {
    name: "Hot dog",
    price: 34,
    id: "🌭",
  },
  {
    name: "Hot cakes",
    price: 355,
    id: "🥞",
  },
];

const rta3 = products.find((item) => item.id === "🍔");
console.log("find", rta3);
const rta4 = products.findIndex((item) => item.id === "🍔");
console.log("findIndex", rta4);
