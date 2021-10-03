const Member = require('../models/memberModel');

module.exports = {
    async listarTodos(req, res){
        try {
            const members = await Member.findAll()
            return res.json(members);
        } catch (err) {
            return console.error("Erro na listagem: ", err);
        }
    },
    async obterPorId(req, res){
        try {
            const member = await Member.findAll({where: {id: req.params.id}});
            return res.json(member);
        } catch (err) {
            return console.err("Erro na busca: ", err);
        }
    },
    async criar(req, res){
        const {title, poster, overview} = req.body;
        try {
            const member = await Member.create({title, poster, overview});
            return res.json(member);
        } catch (error) {
            return console.error('Erro na criação', err);
        }
    },
    async atualizar(req, res){
        const Sequelize = require('sequelize');
        const Op = Sequelize.Op
        const { title, poster, overview } = req.body;
        const id = req.params.id;
        try {
            await Member.update({title, poster, overview}, {where: {id: {[Op.eq]: id }}});
            return res.json({msg: `Filme ${title} atualizado com sucesso!`});
        } catch (error) {
            return res.json({msg: `Filme ${title} não foi atualizado`}, err);            
        }
    },
    async remover(req, res){
        try {
            await Member.destroy({where: {id: req.params.id }});
            return res.json({msg: `Exclusão de item de ID ${req.params.id} feita com sucesso!`});
        } catch (err) {
            return console.err("Erro na exclusão: ", err);
        }
    },
}