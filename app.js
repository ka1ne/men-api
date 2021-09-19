require('dotenv').config()

const express = require('express');
const app = express();
const users = require('./routes/users');
const db = require('./db');
const path = __dirname + '/views/';
const port = 3000;

app.use(express.json());
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path));
app.use('/users', users);

app.use(express.json());

app.get('/', function(req, res){
  res.send('home');
});

app.listen(port, function () {
  console.log('Example app listening on port 3000!')
})