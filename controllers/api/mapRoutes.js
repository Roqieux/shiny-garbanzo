const express = require('express');
const router = express.Router();
const { Fridge } = require('../../models');

// Get fridge info for map markers
router.get('/', async (req, res) => {
  try {
    const fridgeData = await Fridge.findAll();
    console.log(fridgeData)
    const fridges = fridgeData.map(fridge => {
      return fridge.get({ plain: true });
    });
    console.log(fridges);
    res.json(fridgeData);
    // res.render('all', fridges);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router