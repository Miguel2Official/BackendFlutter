const mongoose = require('mongoose');

const esquema_de_compra = mongoose.Schema ({
    Proveedores: {
        type: String,
        required: true
    },
    
    Lacteos:{
        type: String,
        required: true
    },
    Esencias:{
        type: String,
        required: true
    },
    Frutas:{
        type: String,
        required: true
    },
    Iva:{
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('compra', esquema_de_compra);