const express = require('express');
const router = express.Router();


const items = [];


function findItemById(id) {
    return items.find(item => item.id === id);
}

// User Management
router.post('/register', (req, res) => {
    
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
    const newItem = {
        id: Date.now(),  
        ...req.body
    };
    items.push(newItem);
    res.json(newItem);
});

router.put('/item/:itemId', (req, res) => {
    const item = findItemById(req.params.itemId);
    if (!item) return res.status(404).send("Item not found");

    Object.assign(item, req.body); 
    res.json(item);
});

router.delete('/item/:itemId', (req, res) => {
    const index = items.findIndex(item => item.id === req.params.itemId);
    if (index === -1) return res.status(404).send("Item not found");

    items.splice(index, 1);  
    res.send("Item deleted successfully!");
});

router.get('/items', (req, res) => {
    res.json(items);  
});

router.get('/item/:itemId', (req, res) => {
    const item = findItemById(req.params.itemId);
    if (!item) return res.status(404).send("Item not found");

    res.json(item);
});

// Alerts
router.get('/alerts/expiring', (req, res) => {
    const expiringSoon = items.filter(item => item.daysToExpire <= 7);
    res.json(expiringSoon);
});

router.get('/alerts/lowstock', (req, res) => {
    const lowStock = items.filter(item => item.quantity < 5);
    res.json(lowStock);
});

module.exports = router;
