const Sequelize = require("sequelize");
const sequelize = require("../database.js");

const schema = "public";

class Padrinho extends Sequelize.Model {}

Padrinho.init(
	{
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		nome: Sequelize.STRING(200),
		email: Sequelize.STRING(100),
		ddd: Sequelize.SMALLINT,
		celular: Sequelize.INTEGER(9),
	},
	{ sequelize, modelName: "padrinho", schema }
);

sequelize.sync();

module.exports = Padrinho;
