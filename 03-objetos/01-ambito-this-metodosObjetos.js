//!            THIS Y MÉTODOS DE OBJETOS

//! Como sabes, es MUY común querer acceder al interior de un objeto desde un método. Para ello tenemos this.
(() => {
  const person = {
    name: "Juan",
    sayHello() {
      console.log(`Hi I'm ${this.name}`);
    },
  };
  person.sayHello(); // Hi I'm Juan
})();

//! Sin embargo, no olvides que el valor de this se evalúa durante la ejecución (runtime), es decir, es dinámico.
(() => {
  const user = {
    name: "Juan",
    greet() {
      console.log(this.name);
    },
  };
  user.greet.call({ name: "Guizmo" }); // Guizmo
})();

//! Por último, acuérdate de que las funciones flecha no tienen this propio, lo heredan del ámbito exterior.
//! Esto hace que no sean buenas candidatas para métodos de objetos.
(() => {
  const user = {
    name: 'Juan',
    greet: () => console.log(this.name),
  };
  
  user.greet() // undefined
})();