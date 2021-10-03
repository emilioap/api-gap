const Sequelize = require("sequelize");

//database, user, password
const sequelize = new Sequelize(
	"d1anmf1lb3oes5",
	"kacnjwnmfsogjw",
	"bdff9c0206356f044c9652511b34ef4ae39b23692982027f545e0c38bb4395e5",
	{
		host: "ec2-44-199-26-122.compute-1.amazonaws.com",
		dialect: "postgres",
    protocol: "postgres",
		dialectOptions: {
			ssl: {
        require: true,
        rejectUnauthorized: false
    }
		},
	}
);

module.exports = sequelize;
