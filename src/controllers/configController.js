const ConfigModel = require('../models/configModel');

module.exports = {

    async listarTodos(req, res){
        try {
            const animais = await ConfigModel.findAll()
            return res.json(animais);
        } catch (err) {
            return console.error("Erro na listagem: ", err);
        }
    },

    async obterPorId(req, res){
        try {
            const animal = await ConfigModel.findAll({where: {id: req.params.id}});
            return res.json(animal);
        } catch (err) {
            return console.err("Erro na busca: ", err);
        }
    },

    async criar(req, res){
        try {
            const animal = await ConfigModel.create(req.body);
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
            await ConfigModel.update(req.body, {where: {id: {[operacao.eq]: id }}});
            return res.json({msg: `Configuração ${title} atualizada com sucesso!`});
        } catch (err) {
            return console.error(`Configuração ${title} não foi atualizada`);            
        }
    },

    async remover(req, res){
        try {
            await ConfigModel.destroy({where: {id: req.params.id }});
            return res.json({msg: `Exclusão de item de ID ${req.params.id} feita com sucesso!`});
        } catch (err) {
            return console.error("Erro na exclusão: ", err);
        }
    }
}