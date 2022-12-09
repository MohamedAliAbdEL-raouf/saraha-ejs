const { User } = require('../service/user.service')

const app = require('express').Router();
app.get('/user/:id',User);

module.exports = app