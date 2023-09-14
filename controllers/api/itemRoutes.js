const router = require('express').Router();
const { Items } = require('../../models');

// Create a new item
router.post('/', async (req, res) => {
    try {
        const newItem = await Item.create(req.body);
        res.status(200).json(newItem);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Delete an item by id
router.delete('/:id', async (req, res) => {
    try {
        const itemData = await Item.destroy({
            where: {
                id: req.params.id,
            },
        });
        if (!itemData) {
            res.status(404).json({ message: 'No item with this id!' });
            return;
        }
        res.status(200).json(itemData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
