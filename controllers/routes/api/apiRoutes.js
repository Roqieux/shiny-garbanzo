const express = require('express');
const router = express.Router();
const { User } = require('../models/User');
const bcrypt = require('bcrypt');

module.exports = (connection) => {
    // User Management

    // Create a new user
    router.post('/', async (req, res) => {
               
        try {
            const newUser = req.body;
            // hash the password from 'req.body' and save to newUser
            newUser.password = await bcrypt.hash(req.body.password, 10);

            const userData = await User.create(newUser);
      
          req.session.save(() => {
            req.session.loggedIn = true;
      
            res.status(200).json(userData);
          });
        } catch (err) {
          console.log(err);
          res.status(500).json(err);
        }
      });
      
      // Login
      router.post('/login', async (req, res) => {
        try {
          const dbUserData = await User.findOne({
            where: {
              email: req.body.email,
            },
          });
      
          if (!dbUserData) {
            res
              .status(400)
              .json({ message: 'Incorrect username or password. Please try again!' });
            return;
          }
      
          const validPassword = await dbUserData.checkPassword(req.body.password);
      
          if (!validPassword) {
            res
              .status(400)
              .json({ message: 'Incorrect username or password. Please try again!' });
            return;
          }
      
          req.session.save(() => {
            req.session.loggedIn = true;
      
            res
              .status(200)
              .json({ user: dbUserData, message: 'You are now logged in!' });
          });
        } catch (err) {
          console.log(err);
          res.status(500).json(err);
        }
      });
      
      // Logout
      router.post('/logout', (req, res) => {
        if (req.session.loggedIn) {
          req.session.destroy(() => {
            res.status(204).end();
          });
        } else {
          res.status(404).end();
        }
      });
      
      module.exports = router;







    // Inventory Management
    router.post('/item', (req, res) => {
        const newItem = req.body;
        connection.query('INSERT INTO items SET ?', newItem, (err, results) => {
            if (err) return res.status(500).json({ error: 'Database error' });
            res.json({ id: results.insertId, ...newItem });
        });
    });

    router.put('/item/:itemId', (req, res) => {
        connection.query('UPDATE items SET ? WHERE id = ?', [req.body, req.params.itemId], (err, results) => {
            if (err) return res.status(500).json({ error: 'Database error' });
            if (results.affectedRows === 0) return res.status(404).send("Item not found");
            res.json({ id: req.params.itemId, ...req.body });
        });
    });

    router.delete('/item/:itemId', (req, res) => {
        connection.query('DELETE FROM items WHERE id = ?', [req.params.itemId], (err, results) => {
            if (err) return res.status(500).json({ error: 'Database error' });
            if (results.affectedRows === 0) return res.status(404).send("Item not found");
            res.send("Item deleted successfully!");
        });
    });

    router.get('/items', (req, res) => {
        connection.query('SELECT * FROM items', (err, results) => {
            if (err) return res.status(500).json({ error: 'Database error' });
            res.json(results);
        });
    });

    router.get('/item/:itemId', (req, res) => {
        connection.query('SELECT * FROM items WHERE id = ?', [req.params.itemId], (err, results) => {
            if (err) return res.status(500).json({ error: 'Database error' });
            if (results.length === 0) return res.status(404).send("Item not found");
            res.json(results[0]);
        });
    });

    // Alerts
    router.get('/alerts/expiring', (req, res) => {
        connection.query('SELECT * FROM items WHERE daysToExpire <= 7', (err, results) => {
            if (err) return res.status(500).json({ error: 'Database error' });
            res.json(results);
        });
    });

    router.get('/alerts/lowstock', (req, res) => {
        connection.query('SELECT * FROM items WHERE quantity < 5', (err, results) => {
            if (err) return res.status(500).json({ error: 'Database error' });
            res.json(results);
        });
    });

    return router;
};
