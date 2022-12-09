const { Message, handleMessage } = require('../service/message.service')

const app = require('express').Router();
app.get('/mesg',Message);
app.post('/handleMessage/:id',handleMessage);
module.exports = app