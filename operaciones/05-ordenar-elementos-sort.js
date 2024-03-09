//* SORT
//* Mutable - Si no se quiere hace la mutacion se debe hacer una copia

//! Se ordena de acuerdo al peso de acuerdo al codigo ASCII.
const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);

//! Ordenamiento de numeros.
const numbers = [1, 30, 4, 21, 100000];
numbers.sort((a,b) => b - a);
console.log(numbers);

//! Ordenamiento de caracteres especiales.
const words = ['réservé', 'premier', 'communiqué', 'café', 'adieu', 'éclair', 'banana'];
words.sort();
words.sort((a,b) => a.localeCompare(b)); //* Para buscadores no modernos.
console.log(words);

//* 
const orders = [
    {
      customerName: "Nicolas",
      total: 600,
      delivered: true,
    },
    {
      customerName: "Zulema",
      total: 120,
      delivered: false,
    },
    {
      customerName: "Santiago",
      total: 1840,
      delivered: true,
    },
    {
      customerName: "Valentina",
      total: 240,
      delivered: true,
    },
  ];

  //! Ordenar trabajando con objetos.
  orders.sort((a, b) => b.total - a.total);
  console.log(orders);


  //!                       ORDENAMIENTO SIN MUTAR

  const orders2 = [
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
  const sortedOrders = [...orders2].sort((a, b) => b.total - a.total) 
console.log(sortedOrders);
//[
//  { customerName: 'Valentina', total: 240, delivered: true },
//  { customerName: 'Santiago', total: 180, delivered: true },
//  { customerName: 'Zulema', total: 120, delivered: false },
//  { customerName: 'Nicolas', total: 60, delivered: true }
//]