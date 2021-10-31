const AdocaoModel = require('../models/adocaoModel');

module.exports = {

    async listarTodos(req, res){
        try {
            const animais = await AdocaoModel.findAll()
            return res.json(animais);
        } catch (err) {
            return console.error("Erro na listagem: ", err);
        }
    },

    async obterPorId(req, res){
        try {
            const animal = await AdocaoModel.findAll({where: {id: req.params.id}});
            return res.json(animal);
        } catch (err) {
            return console.error("Erro na busca: ", err);
        }
    },

    async criar(req, res){
        try {
            const animal = await AdocaoModel.create(req.body);
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
            await AdocaoModel.update(req.body, {where: {id: {[operacao.eq]: id }}});
            return res.json({msg: `Animal ${title} atualizado com sucesso!`});
        } catch (err) {
            return console.error(`Animal ${title} não foi atualizado`);           
        }
    },

    async remover(req, res){
        try {
            await AdocaoModel.destroy({where: {id: req.params.id }});
            return res.json({msg: `Exclusão de item de ID ${req.params.id} feita com sucesso!`});
        } catch (err) {
            return console.error("Erro na exclusão: ", err);
        }
    }
}