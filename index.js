require('dotenv').config();

const express = require('express');
const cors  = require('cors');

const {connection} = require('./config/database');



const  app = express();

//configurar cors
app.use(cors());

connection.connect();

//Rutas

app.use('/api/usuarios' , require('./routes/usuarios'));
 


app.listen(3001 , () => {
    console.log('servidor corriendo en ' + 3001);
});