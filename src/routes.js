const express = require('express');
const router = express.Router();

const usuariosController = require('./controllers/usuariosController');

router.get('/usuarios' , usuariosController.buscarTodos);
router.get('/usuarios/:id' , usuariosController.buscarUm);
router.post('/usuario' , usuariosController.inserir);
router.put('/usuario/:id' , usuariosController.alterar);
router.delete('/usuario/:id' , usuariosController.excluir);

module.exports = router;