/*
controlador de usuarios

*/
const {Usuario} = require('../models/usuarios');
const getUsuarios = (req , res)=> {
    const usuario = Usuario.find();
    res.json({
        success:true,
        response:[]
    })
}



module.exports = {
    getUsuarios,
}