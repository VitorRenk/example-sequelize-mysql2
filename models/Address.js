const { DataTypes } = require("sequelize");

const db = require("../db/conn");

const User = require("./User");

const Address = db.define("Address", {
  street: {
    type: DataTypes.STRING,
    require: true,
  },
  number: {
    type: DataTypes.STRING,
    require: true,
  },
  city: {
    type: DataTypes.STRING,
    require: true,
  },
});

User.hasMany(Address); // Um usuário pode ter vários endereços
Address.belongsTo(User); // Um endereço pertence a um usuário

module.exports = Address;
