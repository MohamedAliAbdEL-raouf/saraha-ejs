const { Login, handleLogin } = require('../service/login.service')

const app = require('express').Router()
app.get('/logIn',Login)
app.post('/handleLogin',handleLogin)
module.exports = app