const express = require('express');
const app = express();

const allRoutes = require('./routes');  

app.use(allRoutes);

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
