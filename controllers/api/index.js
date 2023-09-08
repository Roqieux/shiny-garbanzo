const express = require('express');
const router = express.Router();

const apiRoutes = require('./apiRoute');

router.use('/api', apiRoutes);  // Prefix all routes with '/api'

module.exports = router;
