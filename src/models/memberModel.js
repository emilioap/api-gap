const Sequelize = require("sequelize");
const sequelize = require("../database.js");

const schema = "public";

class User extends Sequelize.Model {}

User.init(
	{
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true
		},
		nome: Sequelize.STRING,
		email: Sequelize.STRING,
		ddd: Sequelize.INTEGER,
		celular: Sequelize.INTEGER,
	},
	{ sequelize, modelName: "member", schema }
);

sequelize.sync();

module.exports = User;
