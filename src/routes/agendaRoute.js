const express = require('express');
const router = express.Router();
const controller = require('../controllers/agendaController');

const { withJWTAuthMiddleware } = require("express-kun");
const protectedRouter = withJWTAuthMiddleware(router, process.env.SECRET);

router.get('/', controller.listarTodos);
router.get('/:id', controller.obterPorId);
protectedRouter.post('/', controller.criar);
protectedRouter.put('/:id', controller.atualizar);
protectedRouter.delete('/:id', controller.remover);

module.exports = router;