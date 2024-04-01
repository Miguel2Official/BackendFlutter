const express = require('express');
const esquema_de_compra = require('../esquemas/compras');

const mis_rutas = express.Router();

//registrar nueva de compras

mis_rutas.post('/Compras', (peticion, respuesta) => {
   const compra= esquema_de_compra(peticion.body);
   compra.save()
   .then((datos) => respuesta.json(datos)).catch((error) => respuesta.json({message: error}));
});

// Obtener todas la comprar realizadas
mis_rutas.get('/Compras', (peticion, respuesta) => {
   esquema_de_compra.find()
     .then((datos) => respuesta.json(datos))
     .catch((error) => respuesta.status(400).json({ message: error.message }));
 });

 mis_rutas.get('/Compras/:id', (peticion, respuesta) =>{
  const { id } = peticion.params;
  esquema_de_compra
  .findById(id).then((datos) => respuesta.json(datos)).catch((error) => respuesta.json({message: error}));
});

 // actualizar compra
 mis_rutas.put('/Compras/:id', (peticion, respuesta) => {
   const { id } = peticion.params;
   const { Proveedores, Lacteos, Esencias, Frutas } = peticion.body;
 
   const datosActualizados = {
     Proveedores,
     Lacteos,
     Esencias,
     Frutas 
   };
 
   console.log('Datos actualizados:', datosActualizados); 
 
   esquema_de_compra.findByIdAndUpdate(id, datosActualizados, { new: true })
     .then((compraActualizada) => {
       console.log('Compra actualizada:', compraActualizada); 
       respuesta.json(compraActualizada);
     })
     .catch((error) => {
       console.error('Error al actualizar la compra:', error.message); 
       respuesta.status(400).json({ message: error.message });
     });
 });

 // Eliminar una compra
mis_rutas.delete('/Compras/:id', (peticion, respuesta) => {
  const { id } = peticion.params;
  esquema_de_compra.findByIdAndDelete(id)
    .then(() => respuesta.json({ message: 'Compra eliminada correctamente' }))
    .catch((error) => respuesta.status(400).json({ message: error.message }));
});

module.exports = mis_rutas;

