const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const config = require('./config/database');

app.use(express.static(path.join(__dirname, 'public')));
mongoose.connect(config.database);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.get('/', (req, res) => {
    res.render('index', {
        title: 'My store'
    });
});

app.listen(3000, () => {
    console.log('port 3000');
});