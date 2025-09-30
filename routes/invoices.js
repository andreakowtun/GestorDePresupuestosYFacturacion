const express = require('express');
const Invoice = require('../models/invoice');

const router = express.Router();

// Crear factura
router.post('/', async (req, res) => {
  try {
    const invoice = await Invoice.create(req.body);
    res.status(201).json(invoice);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Obtener todos las facturas
router.get('/', async (req, res) => {
  try {
    const invoice = await Invoice.findAll();
    res.json(invoice);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Obtener facturas por id
router.get('/:id', async (req, res) => {
  try {
    const invoice = await Invoice.findByPk(req.params.id);
    if (!invoice) return res.status(404).json({ error: 'Invoice has not been found' });
    
    res.json(invoice);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


// Actualizar factura
router.put('/:id', async (req, res) => {
  try {
    const invoice = await Invoice.findByPk(req.params.id);
    if (!invoice) return res.status(404).json({ error: 'Invoice has not been found' });

    await invoice.update(req.body);
    res.json(invoice);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Eliminar factura
router.delete('/:id', async (req, res) => {
  try {
    const invoice = await Invoice.findByPk(req.params.id);
    if (!invoice) return res.status(404).json({ error: 'Invoice has not been found' });

    await invoice.destroy();
    res.json({ mensaje: 'Invoice successfully deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;