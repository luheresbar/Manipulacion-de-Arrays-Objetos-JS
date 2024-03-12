//! forEach

const letters = ["a", "b", "c"];

for (let index = 0; index < letters.length; index++) {
  const element = letters[index];
  console.log("for", element);
}

letters.forEach((item) => console.log("forEach", item));
// forEach a
// forEach b
// forEach c

letters.forEach((item, index) => console.log("forEach", item, index));
// forEach a 0
// forEach b 1
// forEach c 2

//! for of
//* Es la version mejorada de for y forEach

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const numbers2 = [];
for (const number of numbers) {
  if (number > 5) {
    numbers2.push(number);
  }
}
console.log(numbers2); // [ 6, 7, 8, 9 ]

//! Para poder iterar objetos (objeto que no son iterables por defecto) se pueden usar métodos estáticos

const developer = {
  name: "Luis",
  city: "tunja",
  skills: ["javaScript", "Java", "Angular"],
};
for (const property of Object.entries(developer)) {
  //* Se convierte el objeto en un array:
  console.log(property); // ["neme", "Luis"][("city", "tunja")][("skills", ["javaScript", "Java", "Angular"])];
}
for (const [key, value] of Object.entries(developer)) {
  //* Se convierte el objeto en un array:
  console.log(key, value);
  // name Luis
  // city tunja
  // skills [ 'javaScript', 'Java', 'Angular' ]
}

//! iteración personalizada o iteración con un iterador personalizado.

developer[Symbol.iterator] = function () {
  let i = 0;
  return {
    next: () => ({
      value: this.skills[i++],
      done: i > this.skills.length,
    }),
  };
};

for (const skill of developer) {
  console.log(skill);
  // javaScript
  // Java
  // Angular
}
