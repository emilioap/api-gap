const express = require('express');
const app = express();

//Rotas
const index = require('./routes/index');
const memberRoute = require('./routes/memberRoute');

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/', index);
app.use('/member', memberRoute);

module.exports = app;