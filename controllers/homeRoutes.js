
const router = require('express').Router();
const { Item, Fridge, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    // Show the homepage
    const fridgeData = await Fridge.findAll({
    });

    const fridges = fridgeData.map((display) => display.get({ plain: true }));

    res.render('homepage', {
      fridges,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// get a users fridges
router.get('/userfridges/:id', withAuth, async (req, res) => {
  try {
    //show a list of users fridges
    const userData = await User.findByPk(req.params.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Fridge}]
    });
    
    const fridges = userData.map((display) => display.get({ plain: true}));

    res.render('userfridges', {
      fridges,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// get a users food 
router.get('/useritems/:id', withAuth, async (req, res) => {
  try {
    //show a list of users fridges
    const userData = await User.findByPk(req.params.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Item}]
    });
    
    const fridges = userData.map((display) => display.get({ plain: true}));

    res.render('useritems', {
      fridges,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Project }],
    });

    const user = userData.get({ plain: true });

    res.render('profile', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/login');
    return;
  }

  res.render('login');
});

module.exports = router;
