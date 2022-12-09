const { Home } = require('../service/home.service');

const app = require('express').Router();
app.get('/',Home);
module.exports = app