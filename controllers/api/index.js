const express = require('express');
const router = express.Router();

const apiRoutes = require('./apiRoute');

router.use('/api', apiRoutes); 

module.exports = router;
