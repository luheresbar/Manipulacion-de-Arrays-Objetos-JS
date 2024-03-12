//! COPIA DE ELEMENTOS SUPERFICIAL Vs PROFUNDA


//! COPIA SUPERFICIAL

//! Si los elementos a copiar son valores primitivos, se copiaran por valor

const deportes = ['Fútbol', 'Baloncesto', 'Tenis', 'Voleibol'];

//* ...spread
const deportesCopiaSpread = [...deportes];
console.log(deportesCopiaSpread); // [ 'Fútbol', 'Baloncesto', 'Tenis', 'Voleibol' ]

//* Array.from
const deportesCopiaArrayFrom = Array.from(deportes);
console.log(deportesCopiaArrayFrom); // [ 'Fútbol', 'Baloncesto', 'Tenis', 'Voleibol' ]
//* Una variacion de Array.from
const myName = "Hola soy Luis";
const listIterable = Array.from(myName);
console.log(listIterable); // ['H', 'o', 'l', 'a', ' ', 's', 'o', 'y', ' ', 'L', 'u', 'i','s' ]


//* slice
const deportesCopiaSlice = deportes.slice(); 
console.log(deportesCopiaSlice); // [ 'Fútbol', 'Baloncesto', 'Tenis', 'Voleibol' ]


//! Si los elementos a copiar son valores compuestos, se pasaran por referencia

const generosMusicales = [
  { id: 1, nombre: "Rock" },
  { id: 2, nombre: "Pop" },
  { id: 3, nombre: "Electrónica" },
];

const copiaGenerosMusicales = Array.from(generosMusicales);
console.log(copiaGenerosMusicales);




//! COPIA PROFUNDA

//* Aunque se hace una copia profunda no incluye la copia de metodos dentro de los objetos.

const copiaprofGenerosMusicales = JSON.parse(JSON.stringify(generosMusicales));
console.log(copiaprofGenerosMusicales);

//! Copia profunda incluyendo los metodos dentro de objetos:

//* Abstracción con deep copy en JavaScript
//* Incluye la copia de metodos

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
 }
};

const juan = deepCopy(studentBase);
Object.seal(juan);
console.log(juan);

// juan.name = "Juanito";