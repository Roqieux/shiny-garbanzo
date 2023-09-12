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
        allowNull: false
      },
      FridgeId: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
            model: 'fridge',
            key: 'id',
          }
      },
      UserId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'user',
          key: 'id',
        }
      },
      Expiration_date: {
        type: DataTypes.STRING,
        allowNull: false
      },
      is_frozen:{
        type: DataTypes.BOOLEAN,
        allowNull: false
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