//!     ELIMINAR PROPIEDADES

const persona = {
  nombre: "Juan",
  edad: 30,
  ciudad: "Madrid",
};

 delete persona.ciudad;
 console.log(persona); // { nombre: 'Juan', edad: 30 }
 
