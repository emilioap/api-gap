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
		nome: Sequelize.STRING,
		email: Sequelize.STRING,
		ddd: Sequelize.INTEGER,
		celular: Sequelize.INTEGER,
	},
	{ sequelize, modelName: "padrinho", schema }
);

sequelize.sync();

module.exports = Padrinho;
