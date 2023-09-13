const express = require('express');
const router = express.Router();

module.exports = (connection) => {
    // User Management
    router.post('/', async (req, res) => {
       try {
        const newUserData = req.body;
        
        newUserData.password = await bcrypt.hash(req.body.password, 10);

        const userData = await User.create(newUserData);
        res.status(200).json(userData);


       }
        res.send("User registered!");
    });

    router.post('/login', (req, res) => {
        
        res.send("User logged in!");
    });

    router.get('/profile', (req, res) => {
        
        res.json({ username: "JohnDoe", email: "john@example.com" });
    });

    router.post('/logout', (req, res) => {
        
        res.send("User logged out!");
    });

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
