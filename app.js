require('dotenv').config();
const express = require('express');

const routes = require('./routes.js');

const app = express();

app.use(express.json());

app.set('port', process.env.PORT || 8080);

app.use('/api', routes);

module.exports = app;
