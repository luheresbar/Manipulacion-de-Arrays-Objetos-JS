//!            Object keys, values y entries

//! El método keys de Object retorna un Array con las propiedades (keys) enumerables de un objeto.
//* Object.keys
(() => {
  const persona = {
    nombre: "Juan",
    profesion: "Dev",
    ciudad: "Valencia",
  };
  const keys = Object.keys(persona);
  console.log(keys); // [ 'nombre', 'profesion', 'ciudad' ]
  keys.forEach((key) => console.log(key));
  // nombre
  // profesion
  // ciudad
})();

//! El método values de Object retorna un Array con los valores (values) de las propiedades enumerables de un objeto.
//* Object.values
(() => {
  const persona = {
    nombre: "Juan",
    profesion: "Dev",
  };
  for (const value of Object.values(persona)) {
    console.log(value);
    // Juan
    // Dev
  }
})();

//* Object.values & reduce

const persons = {
  laura: 22,
  raul: 76,
  martha: 53,
  jorge: 18,
  valeria: 15,
};

const total = Object.values(persons).reduce(
  (total, current) => total + current
);
console.log(total); // 184

//! El método entries de Object retorna un Array con los pares de propiedad y valor (key-value) de las propiedades enumerables de un objeto.
//* Object.entries
(() => {
  const persona = {
    nombre: "Juan",
    profesion: "Dev",
  };

  for (const value of Object.entries(persona)) {
    console.log(value);
    // [ 'nombre', 'Juan' ]
    // [ 'profesion', 'Dev' ]
  }

  Object.entries(persona).forEach((person) => console.log(person));
  // [ 'nombre', 'Juan' ]
  // [ 'profesion', 'Dev' ]
})();

(() => {
  const persona = {
    nombre: "Juan",
    profesion: "Dev",
  };

  for (const [key, value] of Object.entries(persona)) {
    console.log(key, value);
    // nombre Juan
    // profesion Dev
  }
})();

//* Object.entries & sort & filter

(() => {
  const persons = {
    laura: 22,
    raul: 76,
    martha: 53,
    jorge: 18,
    valeria: 15,
  };
  const sortPersons = Object.entries(persons).sort((a, b) => a[1] - b[1]);
  console.log(sortPersons);
  // [
  //   [ 'valeria', 15 ],
  //   [ 'jorge', 18 ],
  //   [ 'laura', 22 ],
  //   [ 'martha', 53 ],
  //   [ 'raul', 76 ]
  // ]
  const personFilter = Object.entries(persons)
    .sort((a, b) => a[1] - b[1])
    .filter((person) => person[1] < 18);
  console.log(personFilter); // [ [ 'valeria', 15 ] ]
})();

//!                  fromEntries

//* Transformar de estructura de datos Map a objeto:

const entries = new Map([["name", "oscar"], ["age", 34]]);
console.log(entries); // Map(2) { 'name' => 'oscar', 'age' => 34 }
const entriesObject = Object.fromEntries(entries);
console.log(entriesObject); // { name: 'oscar', age: 34 }


