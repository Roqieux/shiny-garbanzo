const { Fridge } = require('../models');

const fridgeData = [
  {
   id:1,
   fridge_name: "700 N 3rd St",
   owner_id: 1,
   coords: "700 N 3rd St",
   is_public: true
  },
  {
    id:2,
    fridge_name: "2113 E York St",
    owner_id: 1,
    coords: "2113 E York St",
    is_public: true
   },
   {
    id:3,
    fridge_name: "1400 N Broad St",
    owner_id: 1,
    coords: "1400 N Broad St",
    is_public: true
   },
   {
    id:4,
    fridge_name: "1255 E Palmer St",
    owner_id: 1,
    coords: "1255 E Palmer St",
    is_public: true
   },
   {
    id:5,
    fridge_name: "2401 E Letterly St",
    owner_id: 1,
    coords: "2401 E Letterly St",
    is_public: true
   },
   {
    id:6,
    fridge_name: "3231 N 2nd St",
    owner_id: 1,
    coords: "3231 N 2nd St",
    is_public: true
   },
   {
    id:7,
    fridge_name: "1717 W Hunting Park Ave",
    owner_id: 1,
    coords: "1717 W Hunting Park Ave",
    is_public: true
   },
   {
    id:8,
    fridge_name: "5524 Haverford Ave",
    owner_id: 1,
    coords: "5524 Haverford Ave",
    is_public: true
   },
   {
    id:9,
    fridge_name: "4600 Woodland Ave",
    owner_id: 1,
    coords: "4600 Woodland Ave",
    is_public: true
   },
   {
    id:10,
    fridge_name: "3033 W Glenwood Ave",
    owner_id: 1,
    coords: "3033 W Glenwood Ave",
    is_public: true
   },
   {
    id:11,
    fridge_name: "234 Winona St",
    owner_id: 1,
    coords: "234 Winona St",
    is_public: true
   },
   {
    id:12,
    fridge_name: "2015 Fairmount Ave",
    owner_id: 1,
    coords: "2015 Fairmount Ave",
    is_public: true
   },
   {
    id:13,
    fridge_name: "2204 Washington Ave",
    owner_id: 1,
    coords: "2204 Washington Ave",
    is_public: true
   },
];

const seedFridges = () => Fridge.bulkCreate(fridgeData);

module.exports = seedFridges;
