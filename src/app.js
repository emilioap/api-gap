const express = require('express');
const app = express();

//Rotas
const index = require('./routes/index');
const padrinhoRoute = require('./routes/padrinhoRoute');
const animalRoute = require('./routes/animalRoute');
const configRoute = require('./routes/configRoute');

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/', index);
app.use('/padrinho', padrinhoRoute);
app.use('/animal', animalRoute);
app.use('/configRoute', configRoute);

module.exports = app;