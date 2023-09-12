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
      fridge_id: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
            model: 'fridge',
            key: 'id',
          }
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'user',
          key: 'id',
        }
      },
      expiration_date: {
        type: DataTypes.STRING,
        allowNull: false
      },
      is_frozen:{
        type: DataTypes.BOOLEAN,
        allowNull: false
      },
      OwnerID: {
        type: DataTypes.INTEGER,
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