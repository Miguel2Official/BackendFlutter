const express = require('express');
const esquema_de_venta = require('../esquemas/ventas');

const mis_rutas = express.Router();

//registrar una venta

mis_rutas.post('/Ventas', (peticion, respuesta) => {
   const venta= esquema_de_venta(peticion.body);
   venta.save()
   .then((datos) => respuesta.json(datos)).catch((error) => respuesta.json({message: error}));
});

//obtener todas las ventas
mis_rutas.get('/Ventas', (peticion, respuesta) => {
   esquema_de_venta.find()
   .then((datos) => respuesta.json(datos)).catch((error) => respuesta.json({message: error}));
});
//obtener una venta por id
mis_rutas.get('/Ventas/:id', (peticion, respuesta) =>{
  const { id } = peticion.params;
  esquema_de_venta
  .findById(id).then((datos) => respuesta.json(datos)).catch((error) => respuesta.json({message: error}));
});

//actualizar venta
mis_rutas.put('/Ventas/:id', (peticion, respuesta) => {
   const { id } = peticion.params;
   const { Nombre_cliente, Cedula, Direccion, Contacto, Productos, Total } = peticion.body;
 
   const datosActualizados = {
     Nombre_cliente,
     Cedula,
     Direccion,
     Cedula,
     Contacto,
     Productos,
     Total
   };
 
   console.log('Datos actualizados:', datosActualizados); 
 
   esquema_de_venta.findByIdAndUpdate(id, datosActualizados, { new: true })
     .then((VentaActualizada) => {
       console.log('Exportación actualizada:', VentaActualizada); 
       respuesta.json(VentaActualizada);
     })
     .catch((error) => {
       console.error('Error al actualizar la exportación:', error.message); // Imprimir cualquier error que ocurra
       respuesta.status(400).json({ message: error.message });
     });
 });

 // Eliminar una venta
mis_rutas.delete('/Ventas/:id', (peticion, respuesta) => {
  const { id } = peticion.params;
  esquema_de_venta.findByIdAndDelete(id)
    .then(() => respuesta.json({ message: 'Venta eliminada correctamente' }))
    .catch((error) => respuesta.status(400).json({ message: error.message }));
});

module.exports = mis_rutas;

