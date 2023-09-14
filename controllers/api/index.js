const router = require('express').Router();
const userRoutes = require('./userRoutes');
const fridgeRoutes = require('./fridgeRoutes');
const itemRoutes = require('./itemRoutes');
const mapRoutes = require('./mapRoutes');

router.use('/users', userRoutes);
router.use('/fridges', fridgeRoutes);
router.use('/items', itemRoutes);
router.use('/map', mapRoutes);

module.exports = router;
