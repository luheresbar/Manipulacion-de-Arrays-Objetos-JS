//!            FUSIONAR ARRAYS

//! spread
//* Copia superfisial y fusionar arrays
const cats = ['Nino', 'Guizmo', 'Milo'];
const moreCats = ['Tina', 'Moma', 'Mila'];

const allCats = [...cats, ...moreCats]
console.log(allCats); // [ 'Nino', 'Guizmo', 'Milo', 'Tina', 'Moma', 'Mila' ]

//! concat
//* También podemos usar el método estático concat de Array.
const allCats1 = cats.concat(moreCats)
const evenMoreCats 
	= [].concat(cats, moreCats, ["Milo"]);
  console.log(evenMoreCats); // ['Nino', 'Guizmo','Milo', 'Tina','Moma', 'Mila','Milo']


  