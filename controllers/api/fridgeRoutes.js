const router = require('express').Router();
const { Fridge } = require('../../models');
const withAuth = require('../../utils/auth');

//create a fridge post 
//read a fridge  get 
//update a fride put 
//delete a fride delete

router.post('/', withAuth, async (req, res) => {
  try {
    const fridgeData = await Fridge.create(req.body);
    res.status(200).json(fridgeData);
  } catch (err) {
      res.status(500).json(err);
  }
});

// Get a single fridge 
router.get('/:id', async (req, res) => {
  try {
    const fridgeData = await Fridge.findByPk(req.params.id);
    if (!fridgeData) {
      res.status(404).json({ message: 'No fridge with this id!' });
      return;
    }
      res.status(200).json(fridgeData);
  } catch (err) {
      res.status(500).json(err);
  }
});

// Update a fridge 
router.put('/:id', async (req, res) => {
  try {
      const fridgeData = await Fridge.update(req.body, {
          where: {
              id: req.params.id,
          },
      });
      if (!fridgeData[0]) {
          res.status(404).json({ message: 'No fridge with this id!' });
          return;
      }
      res.status(200).json(fridgeData);
  } catch (err) {
      res.status(500).json(err);
  }
});

// Delete a fridge
router.delete('/:id', async (req, res) => {
  try {
      const fridgeData = await Fridge.destroy({
          where: {
              id: req.params.id,
          },
      });
      if (!fridgeData) {
          res.status(404).json({ message: 'No fridge with this id!' });
          return;
      }
      res.status(200).json(fridgeData);
  } catch (err) {
      res.status(500).json(err);
  }
});

module.exports = router;