//Inicializamos las dependencias que creamos 

const express = require('express');

const mongoose = require('mongoose');

const cors = require('cors');

const app = express();

const port = 3000;

//Conexión a DB Mongo DB:
const mongoDB = 'mongodb://localhost:27017/tienda';

//Conectar a MongoDB
mongoose.connect(mongoDB);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error de conexión a MonogoDB'));

db.once('open', () =>{
    console.log('Conectado a MongoDB');
})

//Express Js

app.use(express.json());


//Habilitar CORS
app.use(cors());

//Definir un esquema y un modelo

const Schema = mongoose.Schema;

const productoSchema = new Schema({
    nombre: String,
    descripcion: String,
    precio: Number,
}, {collection: 'productos'});

const Producto = mongoose.model('Producto', productoSchema);

//Crear la API, ruta para obtener todos los productos

app.get('/productos', async(req, res)=>{
    try{
        const productos = await Producto.find();
        res.json(producto);

    }catch(err){
        res.status(404).send(err);

    }
})

app.listen(port,()=>{
    console.log(`La aplicación está escuchando en http:localhost:${port}`);
    
})