const Sequelize = require("sequelize");
const sequelize = require("../database.js");

const schema = "public";

class Animal extends Sequelize.Model {}

Animal.init(
	{
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		nome: Sequelize.STRING,
		foto: Sequelize.STRING,
		idade: Sequelize.INTEGER,
		tipo: Sequelize.STRING,
		temperamento: Sequelize.STRING,
		historia: Sequelize.TEXT,
		vacinas: Sequelize.TEXT,
		castrado: Sequelize.BOOLEAN,
		vacinado: Sequelize.BOOLEAN,
		adotado: Sequelize.BOOLEAN
	},
	{ sequelize, modelName: "animal", schema }
);

sequelize.sync();

module.exports = Animal;