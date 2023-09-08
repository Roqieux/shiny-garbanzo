const express = require('express');
const app = express();

const apiController = require('./controller/api');  // directs to 'api/index.js'


app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
