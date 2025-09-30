const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/user');

const router = express.Router();

// Crear usuario
router.post("/", async(req,res)=>{
    try{
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const user = await User.create({
            ...req.body,
            password: hashedPassword
        });
        res.status(201).json(user);
    }catch(error){
        res.status(400).json({error: error.message});
    }
});


// Obtener todos los usuarios
router.get('/', async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Actualizar usuario
router.put('/:id', async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) return res.status(404).json({ error: 'User has not been found' });

    await user.update(req.body);
    const updatedUser = await user.reload();
    res.json(updatedUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Ruta de login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    //busco por mail
    const user = await User.findOne({ where: { email } });
    if (!user) return res.status(404).json({ error: 'User has not been found' });

    // comparo contraseñas
    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(401).json({ error: 'Incorrect password' });

    // Login exitoso
    res.json({ mensaje: 'Successful login', usuario: user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


// Eliminar usuario
router.delete('/:id', async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) return res.status(404).json({ error: 'User has not been found' });

    await user.destroy();
    res.json({ mensaje: 'user deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


module.exports = router;