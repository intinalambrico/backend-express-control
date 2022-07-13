/*
Rutas /api/usuarios
*/

const{Router} = require('express');
const{ getUsuarios } = require('../app/controllers/usuarioController');

const router = Router();

router.get('/' , getUsuarios);

module.exports = router;