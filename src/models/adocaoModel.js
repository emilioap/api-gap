const Sequelize = require("sequelize");
const sequelize = require("../database.js");

const schema = "public";

class Adocao extends Sequelize.Model {}

Adocao.init(
	{
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		idAnimal: Sequelize.INTEGER,
		nomeAdotante: Sequelize.STRING(200),
		dataAdocao: Sequelize.DATE,
		observacoes: Sequelize.TEXT
	},
	{ sequelize, modelName: "adocao", schema }
);

sequelize.sync();

module.exports = Adocao;