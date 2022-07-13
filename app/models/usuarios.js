const {Schema , model} = require('mysql');

const UsuarioSchema= Schema({
    id_usuario:{
        type:Number,
        
    },
    nombre:{
        type:String,
        required:true
    },
    nick:{
        type:String,
        required:true
    },
    pass:{
        type:String,
        required:true
    }
});

module.exports = model ('usuarios' , UsuarioSchema);