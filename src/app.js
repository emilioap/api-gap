const express = require('express');
const app = express();

//Rotas
const index = require('./routes/index');
const padrinhoRoute = require('./routes/padrinhoRoute');
const animalRoute = require('./routes/animalRoute');

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/', index);
app.use('/padrinho', padrinhoRoute);
app.use('/animal', animalRoute);

module.exports = app;