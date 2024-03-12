//! COMPARAR LISTAS

//* Metodo erronea
const list1 = [1, 2, 3]
const list2 = [1, 2, 3]
console.log(list1 === list2); // false

//* Solucion
//* Usando every
const compararArrays = (list1, list2) => {
  if (list1.lenght !== list2.lenght) return false;
  const res = list1.every((valor, i) => valor === list2[i]);
  return res;
}
console.log(compararArrays(list1, list2)); // true


