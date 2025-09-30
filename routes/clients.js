const express = require('express');
const Client = require('../models/client');

const router = express.Router();

// Crear cliente
router.post('/', async (req, res) => {
  try {
    const client = await Client.create(req.body);
    res.status(201).json(client);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Obtener todos los clientes
router.get('/', async (req, res) => {
  try {
    const client = await Client.findAll();
    res.json(client);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Obtener clientes por id
router.get('/:id', async (req, res) => {
  try {
    const client = await Client.findByPk(req.params.id);
    if (!client) return res.status(404).json({ error: 'Client has not been found' });
    
    res.json(client);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Actualizar cliente
router.put('/:id', async (req, res) => {
  try {
    const client = await Client.findByPk(req.params.id);
    if (!client) return res.status(404).json({ error: 'Client has not been found' });

    await client.update(req.body);
    res.json(client);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Eliminar cliente
router.delete('/:id', async (req, res) => {
  try {
    const client = await Client.findByPk(req.params.id);
    if (!client) return res.status(404).json({ error: 'Client has not been found' });

    await client.destroy();
    res.json({ mensaje: 'Client successfully deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;