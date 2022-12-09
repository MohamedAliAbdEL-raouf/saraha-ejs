const { urlencoded } = require('express');
const express = require('express');
const app = express();
const port = 3000
const mongoose = require('mongoose');

var flash = require('connect-flash');

var session = require('express-session')
var MongoDBStore = require('connect-mongodb-session')(session);
var store = new MongoDBStore({
    uri: 'mongodb://0.0.0.0:27017/saraha-ejs',
    collection: 'mySessions'
  });
app.use(
    session({
        secret:'keyboard cat',
        resave: false,
        saveUninitialized:true,
        store,
    })
);

app.use(flash())
app.use(express.urlencoded({extended:false}))
app.use(express.static('public'))
app.use(require('./routes/home.routes'));
app.use(require('./routes/login.routes'));
app.use(require('./routes/message.routes'));
app.use(require('./routes/regester.routes'));
app.use(require('./routes/user.routes'));

mongoose.connect('mongodb://0.0.0.0:27017/saraha-ejs')

app.listen(port, () => console.log(`Example app listening on port ${port}!`))