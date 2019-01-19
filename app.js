require('dotenv').config();
const cors = require('cors');

const express = require('express');

const routes = require('./routes.js');

const app = express();

app.use(cors());
app.use(express.json());

app.set('port', process.env.PORT || 8080);

app.use('/api', routes);

app.use((req, res) => {
  res.sendStatus(400);
});

module.exports = app;
