const express = require('express');
const app = express();
const users = require('./routes/users');
const db = require('./db');

require('dotenv').config()

app.use(express.json());
app.use('/users', users);

app.use(express.json());

app.get('/', function(req, res){
  res.send('home');
});

const port = 3000;

app.listen(port, function () {
  console.log('Example app listening on port 3000!')
})