const { Item } = require('../models');

const itemSeed = [
    {
        id: 1,
        item_name: "Tomato",
        FridgeId: 1,
        Expiration_date: "11/12/2023",
        is_frozen: false
    },
    {
        id: 2,
        item_name: "Tomato",
        FridgeId: 1,
        Expiration_date: "11/03/2023",
        is_frozen: true
    },
    {
        id: 3,
        item_name: "Spinich",
        FridgeId: 1,
        Expiration_date: "10/12/2023",
        is_frozen: false
    },
    {
        id: 4,
        item_name: "Apples",
        FridgeId: 1,
        Expiration_date: "11/20/2023",
        is_frozen: false
    },
    {
        id: 5,
        item_name: "Beef",
        FridgeId: 2,
        Expiration_date: "9/20/2023",
        is_frozen: false
    },
    {
        id: 6,
        item_name: "Bacon",
        FridgeId: 2,
        Expiration_date: "9/29/2023",
        is_frozen: true
    },
    {
        id: 7,
        item_name: "Tomato",
        FridgeId: 2,
        Expiration_date: "11/12/2023",
        is_frozen: false
    },
]

const seedCategories = () => Item.bulkCreate(itemSeed);

module.exports = seedCategories;