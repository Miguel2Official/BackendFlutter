const express = require ('express');
const mongoose = require('mongoose');
const env = require('dotenv').config();
const cors = require ('cors');
const rutascompras = require("./rutas/compras");
const rutasventas = require ("./rutas/ventas");

const bodyParser = require('body-parser');

// inicio express y la respuesta la guardo en la constante app
const app=  express();

const puerto= process.env.PORT || 8080 ;

//middleware
app.use(cors());
app.use(express.json());
app.use('/api', rutascompras);
app.use('/api', rutasventas);

app.use(bodyParser.json());

//mis rutas
app.get('/', (peticion,respuesta) =>{
    respuesta.send('nueva api funcionando ok');
});

// conexion a mongoDB
mongoose.connect(
    process.env.MONGODB_CENEXION
)


// usamos el aobjeto creado llamado app
app.listen(puerto, () => console.log('servidor escuchando por el puerto: ', puerto));

