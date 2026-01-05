const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("nodesequelize2", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

try {
  sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (err) {
  console.log("Unable to connect to the database: ", err);
}

module.exports = sequelize;
