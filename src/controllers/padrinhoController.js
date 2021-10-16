const PadrinhoModel = require('../models/padrinhoModel');

module.exports = {
    
    async listarTodos(req, res){
        try {
            const padrinhos = await PadrinhoModel.findAll()
            return res.json(padrinhos);
        } catch (err) {
            return console.error("Erro na listagem: ", err);
        }
    },

    async obterPorId(req, res){
        try {
            const padrinho = await PadrinhoModel.findAll({where: {id: req.params.id}});
            return res.json(padrinho);
        } catch (err) {
            return console.error(`Configuração ${title} não foi atualizada`);
        }
    },

    async criar(req, res){
        try {
            const padrinho = await PadrinhoModel.create(req.body);
            return res.json(padrinho);
        } catch (err) {
            return console.error('Erro na criação', err);
        }
    },

    async atualizar(req, res){

        const Sequelize = require('sequelize');
        const operacao = Sequelize.Op
        const id = req.params.id;

        try {
            await PadrinhoModel.update(req.body, {where: {id: {[operacao.eq]: id }}});
            return res.json({msg: `Padrinho ${title} atualizado com sucesso!`});
        } catch (err) {
            return console.error(`Padrinho ${title} não foi atualizado`);   
        }
    },

    async remover(req, res){
        try {
            await PadrinhoModel.destroy({where: {id: req.params.id }});
            return res.json({msg: `Exclusão de item de ID ${req.params.id} feita com sucesso!`});
        } catch (err) {
            return console.error("Erro na exclusão: ", err);
        }
    }
}