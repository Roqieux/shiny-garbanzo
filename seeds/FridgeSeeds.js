const { Fridge } = require('../models');

const fridgeData = [
  {
   id:1,
   fridge_name: "700 N 3rd St",
   OwnerId: 1,
   coords: "700 N 3rd St",
   isPublic: true
  },
  {
    id:2,
    fridge_name: "2113 E York St",
    OwnerId: 1,
    coords: "2113 E York St",
    isPublic: true
   },
   {
    id:3,
    fridge_name: "1400 N Broad St",
    OwnerId: 1,
    coords: "1400 N Broad St",
    isPublic: true
   },
   {
    id:4,
    fridge_name: "1255 E Palmer St",
    OwnerId: 1,
    coords: "1255 E Palmer St",
    isPublic: true
   },
   {
    id:5,
    fridge_name: "2401 E Letterly St",
    OwnerId: 1,
    coords: "2401 E Letterly St",
    isPublic: true
   },
   {
    id:6,
    fridge_name: "3231 N 2nd St",
    OwnerId: 1,
    coords: "3231 N 2nd St",
    isPublic: true
   },
   {
    id:7,
    fridge_name: "1717 W Hunting Park Ave",
    OwnerId: 1,
    coords: "1717 W Hunting Park Ave",
    isPublic: true
   },
   {
    id:8,
    fridge_name: "5524 Haverford Ave",
    OwnerId: 1,
    coords: "5524 Haverford Ave",
    isPublic: true
   },
   {
    id:9,
    fridge_name: "4600 Woodland Ave",
    OwnerId: 1,
    coords: "4600 Woodland Ave",
    isPublic: true
   },
   {
    id:10,
    fridge_name: "3033 W Glenwood Ave",
    OwnerId: 1,
    coords: "3033 W Glenwood Ave",
    isPublic: true
   },
   {
    id:11,
    fridge_name: "234 Winona St",
    OwnerId: 1,
    coords: "234 Winona St",
    isPublic: true
   },
   {
    id:12,
    fridge_name: "2015 Fairmount Ave",
    OwnerId: 1,
    coords: "2015 Fairmount Ave",
    isPublic: true
   },
   {
    id:13,
    fridge_name: "2204 Washington Ave",
    OwnerId: 1,
    coords: "2204 Washington Ave",
    isPublic: true
   },
];

const seedCategories = () => Fridge.bulkCreate(fridgeData);

module.exports = seedCategories;
