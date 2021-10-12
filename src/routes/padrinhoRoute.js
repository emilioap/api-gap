const express = require('express');
const router = express.Router();
const controller = require('../controllers/padrinhoController')

router.get('/', controller.listarTodos);
router.get('/:id', controller.obterPorId);
router.post('/', controller.criar);
router.put('/:id', controller.atualizar);
router.delete('/:id', controller.remover);

module.exports = router;