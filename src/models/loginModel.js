const Sequelize = require("sequelize");
const sequelize = require("../database.js");

const schema = "public";

class Login extends Sequelize.Model {}

Login.init(
	{
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		usuario: Sequelize.STRING(50),
    senha: Sequelize.STRING(100),
	},
	{ sequelize, modelName: "login", schema }
);

sequelize.sync();

module.exports = Login;