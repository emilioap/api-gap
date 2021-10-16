const Sequelize = require("sequelize");
const sequelize = require("../database.js");

const schema = "public";

class Campanha extends Sequelize.Model {}

Campanha.init(
	{
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		idAnimal: {
			type: Sequelize.INTEGER,
			allowNull: true
		},
		foto: {
			type: Sequelize.STRING,
			allowNull: true
		},
		titulo: Sequelize.STRING(150),
		descricao: Sequelize.TEXT
	},
	{ sequelize, modelName: "campanha", schema }
);

sequelize.sync();

module.exports = Campanha;