const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class User extends Model { }


User.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    first_name: {
      type: DataTypes.STRING,

    },
    last_name: {
      type: DataTypes.STRING,

    },
    username: {
      type: DataTypes.STRING,
      unique: true,
      allownull: false

    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false

    },
    Password: {
      type: DataTypes.STRING,
      allowNull: false

    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',
  }

);
module.exports = User