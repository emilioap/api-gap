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
        const { id, nome, email, ddd, celular } = req.body;
        try {
            const member = await Member.create({ id, nome, email, ddd, celular });
            return res.json(member);
        } catch (err) {
            return console.error('Erro na criação', err);
        }
    },
    async atualizar(req, res) {
        const Sequelize = require('sequelize');
        const Op = Sequelize.Op
        const { nome, email, ddd, celular } = req.body;
        const id = req.params.id;
        try {
            await Member.update({ nome, email, ddd, celular }, {where: {id: {[Op.eq]: id }}});
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