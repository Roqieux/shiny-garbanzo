const { UserFridge } = require('../models');

const userFridgeSeeds = [
    {
        user_id: 1 ,
        fridge_id:1
    },
    {
        user_id:  1,
        fridge_id:2
    },
    {
        user_id: 1 ,
        fridge_id:3
    },
    {
        user_id: 1 ,
        fridge_id:5
    },
    {
        user_id: 2 ,
        fridge_id:1
    },
    {
        user_id: 2 ,
        fridge_id:2
    },
    {
        user_id:  2,
        fridge_id:3
    },
    {
        user_id:3,
        fridge_id:1
    },
    {
        user_id: 4 ,
        fridge_id:3
    },
    {
        user_id: 5 ,
        fridge_id:6
    },
]
const seedCategories = () => UserFridge.bulkCreate(userFridgeSeeds);

module.exports = seedCategories;