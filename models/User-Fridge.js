const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class UserFridge extends Model {}

UserFridge.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },

    user_id: {
      type: DataTypes.INTEGER,
      references: { 
        model: 'user',
        key: 'id',
      },
    },

    fridge_id: {
      type: DataTypes.INTEGER,
      references: { 
        model: 'fridge',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user_fridge',
  }
);

module.exports = UserFridge;
