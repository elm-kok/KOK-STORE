const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
let User = require('../models/user.model');
router.get('/register', (req, res) => {
    res.render('register');
});