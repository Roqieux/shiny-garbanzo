const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');

const app = express();
app.use(bodyParser.json());

// Establish MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'your_username',
  password: 'your_password',
  database: 'your_database_name'
});

connection.connect(err => {
  if (err) {
    console.error('Error connecting to the database:', err);
    process.exit(1); // Exit the process 
  }
  console.log('Connected to the MySQL database.');
});

// Integrate apiRoute and pass 
const homeRoutes = require('./homeRoutes.js');
app.use('/', homeRoutes);

const apiRoutes = require('./apiRoute.js')(connection);
app.use('/api', apiRoutes);


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
