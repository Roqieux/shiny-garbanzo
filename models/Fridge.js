const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Fridge extends Model {}


Fridge.init(
    {
      // define columns
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      fridge_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      OwnerId: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
            model: 'user',
            key: 'id',
          }
      },
      coords: {
        type: DataTypes.STRING,
        allowNull: false
      },
      is_public: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      }
    },
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'fridge',
    }
  
  );
  module.exports = Fridge