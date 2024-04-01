const mongoose = require('mongoose');

const esquema_de_venta = mongoose.Schema ({
    Nombre_cliente: {
        type: String,
        required: true
    },
    
    Cedula:{
        type: String,
        required: true
    },
    Direccion:{
        type: String,
        required: true
    },
    Contacto:{
        type:String,
        required: true
    },
    Productos:{
        type: String,
        required: true
    },

    Total: {
        type: Number,
        required: true
    }
    
});

module.exports = mongoose.model('ventas', esquema_de_venta);