const { User } = require('../models');

const userSeed = [
    {
        id: 1,
        first_name: "Elizabeth",
        last_name: "Quinn",
        username: "Brou",
        email: "Smething1@something.com",
        password: "BlahBlah"
    },
    {
        id: 2,
        first_name: "Jude",
        last_name: "Hartmann",
        username: "Dbear",
        email: "Smething2@something.com",
        password: "BlahBlah"
    },
    {
        id: 3,
        first_name: "Victor",
        last_name: "Marczyk",
        username: "Vic",
        email: "Smething3@something.com",
        password: "BlahBlah"
    },
    {
        id: 4,
        first_name: "Julien",
        last_name: "Larroque",
        username: "Croissant",
        email: "Smething4@something.com",
        password: "BlahBlah"
    },
    {
        id: 5,
        first_name: "Greg",
        last_name: "Skudlarek",
        username: "Greg",
        email: "Smething5@something.com",
        password: "BlahBlah"
    },
]

const seedUsers = () => User.bulkCreate(userSeed);

module.exports = seedUsers;