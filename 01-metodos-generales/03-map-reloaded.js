//* MAP
//* Sin mutacion
//* Hacer transformaciones de los datos.
//* Retorma un array del mismo tanaño al original.
const orders = [
  {
    customerName: "Nicolas",
    total: 60,
    delivered: true,
  },
  {
    customerName: "Zulema",
    total: 120,
    delivered: false,
  },
  {
    customerName: "Santiago",
    total: 180,
    delivered: true,
  },
  {
    customerName: "Valentina",
    total: 240,
    delivered: true,
  },
];
console.log("original", orders);
const rta = orders.map((item) => item.total);
console.log("rta", rta); // rta [ 60, 120, 180, 240 ]

// const rta2 = orders.map((item) => {
//   item.tax = 0.19;
//   return item;
// });
// console.log("rta2", rta2);
// console.log("original", orders);

//* Para evitar se tome la referencua en memoria del objeto original.
//* Se crea una nueva referencia en memoria
const rta3 = orders.map((item) => {
  return {
    ...item,
    tax: 0.19,
  };
});
console.log("original", orders);
console.log("rta3", rta3);
//rta3 [
//  { customerName: 'Nicolas', total: 60, delivered: true, tax: 0.19 },
//  { customerName: 'Zulema', total: 120, delivered: false, tax: 0.19 },
//  { customerName: 'Santiago', total: 180, delivered: true, tax: 0.19 },
//  { customerName: 'Valentina', total: 240, delivered: true, tax: 0.19 }
//]

//* Otro Ejm.

const ordersTier = orders.map(orden => {
  return {
    name: orden.customerName,
    tier: orden.total > 150 ? 'high' : 'mid'
  }
})

console.log(ordersTier);
//[
//  { name: 'Nicolas', tier: 'mid' },
//  { name: 'Zulema', tier: 'mid' },
//  { name: 'Santiago', tier: 'high' },
//  { name: 'Valentina', tier: 'high' }
//]
