//!              Fusionar y clonar objetos

//! Con Object.assign podemos fusionar varios objetos.

(() => {
  const product = {
    id: 785679,
    name: "PlayStation 5",
    color: "white",
  };
  const price = {
    sale: 499,
    full: 599,
  };
  const merged = Object.assign({}, product, price);
  console.log(merged);
  // {
  //   id: 785679,
  //   name: 'PlayStation 5',
  //   color: 'white',
  //   sale: 499,
  //   full: 599
  // }
})();

//! También podemos usar el operador spread.
(() => {
  const product = {
    id: 785679,
    name: "PlayStation 5",
    color: "white",
  };
  const price = {
    sale: 499,
    full: 599,
  };
  const merged = { ...product, ...price };
  console.log(merged);
  // {
  //   id: 785679,
  //   name: 'PlayStation 5',
  //   color: 'white',
  //   sale: 499,
  //   full: 599
  // }
})();

//! La fusión se realiza de forma profunda en el primel nivel, los siguientes son referencias (shallow copy).
(() => {
  const product = {
    name: "PlayStation 5",
    data: {
      color: "white",
    },
  };
  const price = { sale: 499 };

  const merged = { ...product, ...price };
  merged.data.color = "red";
  console.log(product.data.color); // red ⚠️
})();

//! Para una verdadera copia profunda (deep copy) podemos usar librerías externas o el objeto JSON.
//! No se incluye la copia de metodos dentro de objetos.
(() => {
  const product = {
    name: "PlayStation 5",
    data: {
      color: "white",
    },
  };

  const price = { sale: 499 };

  const merged = { ...product, ...price };
  const deepCloned = JSON.parse(JSON.stringify(merged));
  console.log(deepCloned); // { name: 'PlayStation 5', data: { color: 'white' }, sale: 499 }
})();



//! Abstracción con deep copy en JavaScript
//* Incluye la copia de metodos

(() => {
  function isObject(subject) {
    return typeof subject == "object";
  }

  function isArray(subject) {
    return Array.isArray(subject);
  }

  function deepCopy(subject) {
    let copySubject;

    const subjectIsObject = isObject(subject);
    const subjectIsArray = isArray(subject);

    if (subjectIsArray) {
      copySubject = [];
    } else if (subjectIsObject) {
      copySubject = {};
    } else {
      return subject;
    }

    for (key in subject) {
      const keyIsObject = isObject(subject[key]);

      if (keyIsObject) {
        copySubject[key] = deepCopy(subject[key]);
      } else {
        if (subjectIsArray) {
          copySubject.push(subject[key]);
        } else {
          copySubject[key] = subject[key];
        }
      }
    }

    return copySubject;
  }

  const studentBase = {
    name: undefined,
    email: undefined,
    age: undefined,
    approvedCourses: undefined,
    learningPaths: undefined,
    socialMedia: {
      twitter: undefined,
      instagram: undefined,
      facebook: undefined,
    },
    hello() {
      console.log("Hello, World!");
    },
  };

  const juan = deepCopy(studentBase);
  Object.seal(juan);
  console.log(juan);

  // juan.name = "Juanito";
})();
