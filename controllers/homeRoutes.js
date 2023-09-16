
const router = require('express').Router();
const { Item, Fridge, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    // Show the homepage
    const fridgeData = await Fridge.findAll();

    const fridges = fridgeData.map((project) => project.get({ plain: true }));
    console.log(fridges)
    res.render('homepage', {
      fridges,
      user_id: req.session.user_id,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// get a fridge's food 
router.get('/fridgefood/:id', async (req, res) => {
  try {
    const fridgeData = await Fridge.findByPk(req.params.id, {
      include: [{ model: Item }]
    });

    const data = fridgeData.get({ plain: true });

    res.render('fridgefood', {
      data,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// get a users fridges
router.get('/userfridges', async (req, res) => {
  try {
    //show a list of users fridges
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Fridge }]
    });

    const data = userData.get({ plain: true });

    console.log(data)
    res.render('userfridges', {
      data,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
    console.error(err)
  }
});

// get a users food 
router.get('/useritems', async (req, res) => {
  try {
    //show a list of users fridges
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Item }]
    });

    const data = userData.get({ plain: true });

    res.render('useritems', {
      data,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
