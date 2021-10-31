const AgendaModel = require('../models/agendaModel');

module.exports = {

    async listarTodos(req, res){
        try {
            const animais = await AgendaModel.findAll()
            return res.json(animais);
        } catch (err) {
            return console.error("Erro na listagem: ", err);
        }
    },

    async obterPorId(req, res){
        try {
            const animal = await AgendaModel.findAll({where: {id: req.params.id}});
            return res.json(animal);
        } catch (err) {
            return console.error("Erro na busca: ", err);
        }
    },

    async criar(req, res){
        try {
            const animal = await AgendaModel.create(req.body);
            return res.json(animal);
        } catch (err) {
            return console.error('Erro na criação', err);
        }
    },

    async atualizar(req, res){
        const Sequelize = require('sequelize');
        const operacao = Sequelize.Op
        const id = req.params.id;
        
        try {
            await AgendaModel.update(req.body, {where: {id: {[operacao.eq]: id }}});
            return res.json({msg: `Item ${title} atualizado com sucesso!`});
        } catch (err) {
            return console.error(`Item ${title} não foi atualizado`);           
        }
    },

    async remover(req, res){
        try {
            await AgendaModel.destroy({where: {id: req.params.id }});
            return res.json({msg: `Exclusão de item de ID ${req.params.id} feita com sucesso!`});
        } catch (err) {
            return console.error("Erro na exclusão: ", err);
        }
    }
}