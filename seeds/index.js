const seedFridges = require('./FridgeSeeds');
const seedItems = require('./ItemSeeds');
const seedUsers = require('./UserSeeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  
  await seedUsers();
  console.log('\n----- USERS SEEDED -----\n');
  
  await seedFridges();
  console.log('\n----- FRIDGES SEEDED -----\n');

  await seedItems();
  console.log('\n----- ITEMS SEEDED -----\n');

  // await seedUserFridges();
  // console.log('\n----- USER-FRIDGE CONNECTION SEEDED -----\n');

  process.exit(0);
};

seedAll();