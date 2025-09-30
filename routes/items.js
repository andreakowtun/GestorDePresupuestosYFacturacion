const express = require('express');
const Item = require('../models/item');

const router = express.Router();

// Crear item
router.post('/', async (req, res) => {
  try {
    const item = await Item.create(req.body);
    res.status(201).json(item);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Obtener todos los items
router.get('/', async (req, res) => {
  try {
    const item = await Item.findAll();
    res.json(item);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Obtener items por id
router.get('/:id', async (req, res) => {
  try {
    const item = await Item.findByPk(req.params.id);
    if (!item) return res.status(404).json({ error: 'Item has not been found' });
    
    res.json(item);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Actualizar item
router.put('/:id', async (req, res) => {
  try {
    const item = await Item.findByPk(req.params.id);
    if (!item) return res.status(404).json({ error: 'Item has not been found' });

    await item.update(req.body);
    res.json(item);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Eliminar item
router.delete('/:id', async (req, res) => {
  try {
    const item = await Item.findByPk(req.params.id);
    if (!item) return res.status(404).json({ error: 'Item has not been found' });

    await item.destroy();
    res.json({ mensaje: 'Item successfully deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;