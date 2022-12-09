const { Regester, handleRegester } = require('../service/regester.service')
const { validation } = require('../validation/user.valid')

const app = require('express').Router()
app.get('/regs',Regester)
app.post('/handleRegester',validation,handleRegester)
module.exports = app