const router = require('express').Router();
const userRoutes = require('./userRoutes');
const fridgeRoutes = require('./fridgeRoutes');
const itemRoutes = require('./itemRoutes');

router.use('/users', userRoutes);
router.use('/fridges', fridgeRoutes);
router.use('/items', itemRoutes);

module.exports = router;
