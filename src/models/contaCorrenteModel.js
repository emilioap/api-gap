const Sequelize = require("sequelize");
const sequelize = require("../database.js");

const schema = "public";

class ContaBancaria extends Sequelize.Model {}

ContaBancaria.init(
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
		nomeTitular: Sequelize.STRING(200),
		cpfTitular: Sequelize.INTEGER(11),
		tipoConta: Sequelize.STRING,
		agencia: Sequelize.INTEGER(6),
		numeroConta: Sequelize.INTEGER(12)
	},
	{ sequelize, modelName: "contaBancaria", schema }
);

sequelize.sync();

module.exports = ContaBancaria;