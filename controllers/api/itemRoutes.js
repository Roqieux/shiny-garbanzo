const router = require('express').Router();
<<<<<<< HEAD
const { Project } = require('../../models');
const withAuth = require('../../utils/auth');

//create a fridge post 
//read a fridge  get 
//update a fride put 
//delete a fride delete

router.post('/', withAuth, async (req, res) => {
  try {
    const newProject = await Project.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newProject);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const projectData = await Project.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!projectData) {
      res.status(404).json({ message: 'No project found with this id!' });
      return;
    }

    res.status(200).json(projectData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
=======
const { Items } = require('../../models');

// Create a new item
router.post('/', async (req, res) => {
    try {
        const newItem = await Item.create(req.body);
        res.status(200).json(newItem);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Delete an item by id
router.delete('/:id', async (req, res) => {
    try {
        const itemData = await Item.destroy({
            where: {
                id: req.params.id,
            },
        });
        if (!itemData) {
            res.status(404).json({ message: 'No item with this id!' });
            return;
        }
        res.status(200).json(itemData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
>>>>>>> 9cd2890bcef4be48007408a3b5fe6a592976124c
