const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection.js');

class User extends Model {

  checkPassword(loginPw) {
    console.log('checkPassword: ' + this.password);
    console.log(loginPw === this.password);
    console.log(bcrypt.compareSync(loginPw, this.password));
    return bcrypt.compareSync(loginPw, this.password);
  }
}

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
      allowNull: false


    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false

    },
    password: {
      type: DataTypes.STRING,


    },
  },
  {
    hooks: {
      async beforeCreate(newUserData) {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
      },
      async beforeUpdate(updatedUserData) {
        updatedUserData.password = await bcrypt.hash(updatedUserData, 10);
        return updatedUserData;
      }
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',
  }

);
module.exports = User