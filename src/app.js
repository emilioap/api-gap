const express = require('express');
const app = express();
const cors = require('cors');

//Rotas
const adocaoRoute = require('./routes/adocaoRoute');
const animalRoute = require('./routes/animalRoute');
const agendaRoute = require('./routes/agendaRoute');
const campanhaRoute = require('./routes/campanhaRoute');
const configRoute = require('./routes/configRoute');
const contaBancariaRoute = require('./routes/contaBancariaRoute');
const indexRoute = require('./routes/indexRoute');
const lancamentoRoute = require('./routes/lancamentoRoute');
const padrinhoRoute = require('./routes/padrinhoRoute');
const tipoLancamentoRoute = require('./routes/tipoLancamentoRoute');
const loginRoute = require('./routes/loginRoute');

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.use('/adocao', adocaoRoute);
app.use('/animal', animalRoute);
app.use('/agenda', agendaRoute);
app.use('/campanha', campanhaRoute);
app.use('/config', configRoute);
app.use('/contaBancaria', contaBancariaRoute);
app.use('/', indexRoute);
app.use('/lancamento', lancamentoRoute);
app.use('/padrinho', padrinhoRoute);
app.use('/tipoLancamento', tipoLancamentoRoute);
app.use('/login', loginRoute);

module.exports = app;