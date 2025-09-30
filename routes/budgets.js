const express = require('express');
const Budget = require('../models/budget');

const router = express.Router();

// Crear presupuesto
router.post('/', async (req, res) => {
  try {
    const budget = await Budget.create(req.body);
    res.status(201).json(budget);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Obtener todos los presupuestos
router.get('/', async (req, res) => {
  try {
    const budget = await Budget.findAll();
    res.json(budget);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Obtener presupuestos por id
router.get('/:id', async (req, res) => {
  try {
    const budget = await Budget.findByPk(req.params.id);
    if (!budget) return res.status(404).json({ error: 'Budget has not been found' });
    
    res.json(budget);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Actualizar presupuesto
router.put('/:id', async (req, res) => {
  try {
    const budget = await Budget.findByPk(req.params.id);
    if (!budget) return res.status(404).json({ error: 'Budget has not been found' });

    await budget.update(req.body);
    res.json(budget);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Eliminar presupuesto
router.delete('/:id', async (req, res) => {
  try {
    const budget = await Budget.findByPk(req.params.id);
    if (!budget) return res.status(404).json({ error: 'Budget has not been found' });

    await budget.destroy();
    res.json({ mensaje: 'Budget successfully deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;