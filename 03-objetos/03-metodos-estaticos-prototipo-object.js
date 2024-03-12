//!             Métodos estáticos del prototipo Object

//! Object.getOwnPropertyNames
//! Object.getOwnPropertyDescriptors

//* Vamos a crear un objeto con los siguientes atributos:
(() => {
  const juan = {
    name: "Juanito",
    age: 18,
    approvedCourses: ["Curso 1"],
    addCourse(newCourse) {
      console.log("This", this);
      console.log("This.approvedCourses", this.approvedCourses);
      this.approvedCourses.push(newCourse);
    },
  };

  console.log(Object.keys(juan));
  // [ 'name', 'age', 'approvedCourses', 'addCourse' ]

  console.log(Object.getOwnPropertyNames(juan));
  // [ 'name', 'age', 'approvedCourses', 'addCourse' ]

  console.log(Object.entries(juan));
  //[
  //  [ 'name', 'Juanito' ],
  //  [ 'age', 18 ],
  //  [ 'approvedCourses', [ 'Curso 1' ] ],
  //  [ 'addCourse', [Function: addCourse] ]
  //]

  console.log(Object.getOwnPropertyDescriptors(juan));
  // {
  //   name: {
  //     value: 'Juanito',
  //     writable: true,
  //     enumerable: true,
  //     configurable: true
  //   },
  //   age: { value: 18, writable: true, enumerable: true, configurable: true },
  //   approvedCourses: {
  //     value: [ 'Curso 1' ],
  //     writable: true,
  //     enumerable: true,
  //     configurable: true
  //   },
  //   addCourse: {
  //     value: [Function: addCourse],
  //     writable: true,
  //     enumerable: true,
  //     configurable: true
  //   }
  // }

  Object.defineProperty(juan, "pruebaNASA", {
    value: "extraterrestres",
    writable: true, // indica si el nuevo atributo puede ser modificado de valor.
    enumerable: true, // indica si el nuevo atributo podrá ser mostrado mediante funciones que listen las propiedades de un objeto. Hay excepciones en las que igual puede ser visualizado un atributo que tenga definido como false la propiedad enumerable.
    configurable: true, // indica si el nuevo atributo puede ser eliminado.
  });

  console.log(juan);
  // {
  //   name: 'Juanito',
  //   age: 18,
  //   approvedCourses: [ 'Curso 1' ],
  //   addCourse: [Function: addCourse],
  //   pruebaNASA: 'extraterrestres'
  // }

  //! Qué es Object.seal y Object.freeze
  //* El método seal “sella” un determinado objeto. Es decir:
  //* Impide que nuevas propiedades sean agregadas.
  //* Define como configurable: false todos los atributos del objeto, con lo que impide que sean borradas.
  //* Los atributos sí pueden ser modificados, ya que la propiedad writable permanece asignado como true.

  Object.seal(juan); // "Sellamos" el objeto

  //* El método freeze “congela” un objeto. Es decir:
  //* Impide que se le agreguen nuevas propiedades.
  //* Impide que sean eliminadas propiedades ya existentes.
  //* Evita que sus propiedades writable, enumerable y configurable sean modificadas.
  
  Object.freeze(juan); // "Congelamos" el objeto


})();
