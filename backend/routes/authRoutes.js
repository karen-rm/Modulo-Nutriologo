const express = require('express');
const router = express.Router();
const { registerUser } = require('../controllers/authControllers');

// Ruta para el registro de usuarios
router.post('/register', registerUser);

module.exports = router;