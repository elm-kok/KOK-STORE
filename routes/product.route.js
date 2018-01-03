const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
router.get('/add', (req, res) => {
    res.render('addProduct');
});
router.get('/basket', (req, res) => {
    res.render('basket');
});
module.exports = router;