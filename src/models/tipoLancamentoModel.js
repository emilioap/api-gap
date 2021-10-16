const Sequelize = require("sequelize");
const sequelize = require("../database.js");

const schema = "public";

class TipoLancamento extends Sequelize.Model {}

TipoLancamento.init(
	{
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		tipo: Sequelize.STRING(50)
	},
	{ sequelize, modelName: "tipoLancamento", schema }
);

sequelize.sync();

module.exports = TipoLancamento;