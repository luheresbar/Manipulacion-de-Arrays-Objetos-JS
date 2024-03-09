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
