const express = require('express');
const router = express.Router();

//LOGIN PAGE
router.get('/login', (req, res) => res.send('Login'))
module.exports = router;

//REGISTER PAGE
router.get('/register', (req, res) => res.send('Register'))
module.exports = router;