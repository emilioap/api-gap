const express = require('express');
const router = express.Router();
const controller = require('../controllers/padrinhoController');

const { withJWTAuthMiddleware } = require("express-kun");
const protectedRouter = withJWTAuthMiddleware(router, "06c219e5bc8378f3a8a3f83b4b7e4649");

router.get('/', controller.listarTodos);
router.get('/:id', controller.obterPorId);
protectedRouter.post('/', controller.criar);
protectedRouter.put('/:id', controller.atualizar);
protectedRouter.delete('/:id', controller.remover);

module.exports = router;