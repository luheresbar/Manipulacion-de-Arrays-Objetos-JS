//!            Desestructurar objetos

//! Con una sintaxis muy parecida a la de los módulos JavaScript, podemos extraer propiedades del objeto.

(() => {
  const product = {
    id: 785679,
    name: "PlayStation 5",
    color: "white",
    price: {
      sale: 499,
      full: 599,
    },
  };
  const { id, color } = product;
  console.log(id, color); // 785679 white
})();

//! Incluso podemos extraer propiedades anidadas dentro de un objeto.

(() => {
  const product = {
    id: 785679,
    name: "PlayStation 5",
    color: "white",
    price: {
      sale: 499,
      full: 599,
    },
  };
  const {
    price: { sale, full },
  } = product;
  console.log(sale, full); // 499 599
})();

//! También podemos evitar colisiones de identificadores creando alias al desestructurar.

(() => {
  const product = {
    id: 785679,
    name: "PlayStation 5",
    color: "white",
    price: {
      sale: 499,
      full: 599,
    },
  };
  const id = "Another ID";
  const { id: productId, color } = product;
  console.log(productId, color); // 785679 white
})();

//! Por último, también podemos usar el operador spread (...) para extraer "el resto" de propiedades del objeto.
(() => {
  const product = {
    id: 785679,
    name: "PlayStation 5",
    color: "white",
    price: {
      sale: 499,
      full: 599,
    },
  };
  const { color, id, price: { sale }, ...rest } = product;
  console.log(color, id, sale); // white 785679 499
  console.log(product); 
  // {
  //   id: 785679,
  //   name: 'PlayStation 5',
  //   color: 'white',
  //   price: { sale: 499, full: 599 }
  // }
  
})();
