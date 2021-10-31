const express = require('express');
const router = express.Router();
const controller = require('../controllers/tipoLancamentoController');

router.get('/', controller.listarTodos);

module.exports = router;