/** @format */

const { Router } = require('express');
const login = require('./controllers/loginController');

const router = Router();

router.get('/login', login.auth);

router.get('/example', login.example);

module.exports = router;
