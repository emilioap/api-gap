const Sequelize = require("sequelize");
const sequelize = require("../database.js");

const schema = "public";

class Config extends Sequelize.Model {}

Config.init(
	{
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		chave: Sequelize.STRING(50),
		valor: Sequelize.TEXT
	},
	{ sequelize, modelName: "config", schema }
);

sequelize.sync();

module.exports = Config;