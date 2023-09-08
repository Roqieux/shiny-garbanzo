// import models
const Item = require('./Items');
const Fridge = require('./Fridge');
const User = require('./User');
const UserFridge = require('./User-Fridge');

// Products belongsTo Category
Item.belongsTo(Fridge,{
  foreignKey: 'fridge_id',
  allownull: false
})
// Categories have many Products
Fridge.hasMany(Item,{
  foreignKey: "fridge_id"
})

Fridge.belongsTo(User, {
    foreignKey: 'OwnerId',
    allownull: false
})
// Products belongToMany Tags (through ProductTag)
Fridge.belongsToMany(User, {
  through: UserFridge, // Specify the join table model
  foreignKey: "fridge_id", // This should be the foreign key in ProductTag referencing Product
});

// Tags belongToMany Products (through ProductTag)
User.belongsToMany(Fridge, {
  through: UserFridge, // Specify the join table model
  foreignKey: "user_id", // This should be the foreign key in ProductTag referencing Tag
});
module.exports = {
  Item,
 Fridge,
  User,
  UserFridge,
};