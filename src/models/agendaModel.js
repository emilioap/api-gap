const Sequelize = require("sequelize");
const sequelize = require("../database.js");

const schema = "public";

class Agenda extends Sequelize.Model {}

Agenda.init(
	{
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		idPadrinho: {
			type: Sequelize.INTEGER,
			allowNull: true
		},
		dataHora: Sequelize.DATE,
		descricao: Sequelize.TEXT
	},
	{ sequelize, modelName: "agenda", schema }
);

sequelize.sync();

module.exports = Agenda;