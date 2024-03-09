//!       METODO GET

const persona = {
  _nombre: "Juan",
  _edad: 30,
  _ciudad: "Madrid",

  get nombrePrimer() {
    return this._nombre;
  },

  primerNombre: function () {
    return this._nombre;
  },

  set edad(edad) {
    this._edad = edad;
  },
};

console.log(persona.nombre); // Juan
console.log(persona.primerNombre()); // Juan
persona.edad = 27;
console.log(persona);
// {
//   _nombre: 'Juan',
//   _edad: 27,
//   _ciudad: 'Madrid',
//   nombrePrimer: [Getter],
//   primerNombre: [Function: primerNombre],
//   edad: [Setter]
// }
