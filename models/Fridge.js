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

      },
      owner_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'user',
            key: 'id'
          }
      },
      coords: {
        type: DataTypes.STRING,

      },
      is_public: {
        type: DataTypes.BOOLEAN,

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