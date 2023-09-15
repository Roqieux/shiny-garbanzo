const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Item extends Model {}

Item.init(
    {
      // define columns
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      item_name: {
        type: DataTypes.STRING,

      },
      fridge_id: {
        type: DataTypes.INTEGER,

        references: {
            model: 'fridge',
            key: 'id',
          }
      },
      user_id: {
        type: DataTypes.INTEGER,

        references: {
          model: 'user',
          key: 'id',
        }
      },
      expiration_date: {
        type: DataTypes.STRING,

      },
      is_frozen:{
        type: DataTypes.BOOLEAN,
      }
    },
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'Item',
    }
  
  );
  module.exports = Item