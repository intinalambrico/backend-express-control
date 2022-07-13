require('dotenv').config();

const express = require('express');
const cors  = require('cors');

const {connection} = require('./config/database');



const  app = express();

//configurar cors
app.use(cors());

connection.connect();



app.get('/' , (req , res)=> {
    res.json({
        success:true,
        response:'Hola'
    })
})


app.listen(3001 , () => {
    console.log('servidor corriendo en ' + 3001);
});