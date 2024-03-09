//!               Recorrer cada una de la propiedades de nuestro objeto

//! for in

(() => {
  const persona = {
    nombre: "Juan",
    edad: 30,
    ciudad: "Madrid",
  };

  for (let propiedad in persona) {
    console.log(`${propiedad}: ${persona[propiedad]}`);
    // nombre: Juan
    // edad: 30
    // ciudad: Madrid
  }
})();

(() => {
  const persona = {
    name: 'Juan',
    sayHello: function () {
      console.log(`Hi, I'm ${this.name}`);
    },
    "skill 1": "JavaScript",
  };
  const number = 1;
  const skill = persona["skill " + number];
  console.log(skill); // JavaScript
  
  persona['say' + 'Hello'](); // Hi, I'm Juan
})();

