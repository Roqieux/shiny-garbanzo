const router = require('express').Router();
const userRoutes = require('./userRoutes');
const projectRoutes = require('./projectRoutes');
const mapRoutes = require('./mapRoutes');

router.use('/users', userRoutes);
router.use('/projects', projectRoutes);
router.use('/map', mapRoutes);

module.exports = router;
