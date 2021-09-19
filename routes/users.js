const express = require('express');
const router = express.Router();
const user = require('../controllers/users');

router.get('/userIndex', function(req, res, next) {
    user.home(req,res);
});

router.get('/', function(req, res, next) {
    user.index(req,res);
});

router.post('/', function(req, res) {
    user.create(req,res);
});

router.put('/:id', function(req, res) {
    user.update(req,res)
});

router.delete('/:id', function(req, res) {
    user.delete(req,res)
});

module.exports = router;