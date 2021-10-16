const Sequelize = require("sequelize");
const sequelize = require("../database.js");

const schema = "public";

class Lancamento extends Sequelize.Model {}

Lancamento.init(
	{
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		data: Sequelize.DATE,
		descricao: Sequelize.STRING(200),
		valor: Sequelize.DECIMAL,
		tipoLancamento: Sequelize.INTEGER,
		contaBancaria: Sequelize.INTEGER,
		nomeDoador: {
			type: Sequelize.STRING,
			allowNull: true
		}
	},
	{ sequelize, modelName: "lancamento", schema }
);

sequelize.sync();

module.exports = Lancamento;