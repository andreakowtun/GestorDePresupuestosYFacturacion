const express = require('express');
const Payment = require('../models/payment');

const router = express.Router();

// Crear pago
router.post('/', async (req, res) => {
  try {
    const payment = await Payment.create(req.body);
    res.status(201).json(payment);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Obtener todos los pagos
router.get('/', async (req, res) => {
  try {
    const payment = await Payment.findAll();
    res.json(payment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;