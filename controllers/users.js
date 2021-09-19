const User = require('../models/user');

exports.create = function (req, res, next) {
    var newUser = new User(req.body);
    newUser.save(function (err) {
        if (err) {
            res.status(400).send('Unable to save user to database' + ' ERROR: ' + err);
        } else {
            User.create(req.body).then(function (user) {
                res.send(user);
            }).catch(next);
        }
    })
};

exports.index = function (req, res, next) {
    User.find({}).then(function (users) {
        res.send(users);
    }).catch(next);
};

exports.delete = function (req, res, next) {
    User.deleteOne(req.body._id, function (err) {
        if (err) {
            res.status(400).send('Unable to delete user from database' + ' ERROR: ' + err);
        } else {
            res.json({ message: 'Successful deletion' });
        }
    })
};

exports.update = function (req, res, next) {
    User.findById(req.body._id, function (err, user) {
        if (err) {
            res.status(400).send('Unable to find user in database' + ' ERROR: ' + err);
        } else {
            user.name = req.body.name;
            user.gender = req.body.gender;

            user.save(function (err) {
                if (err) {
                    res.status(400).send('Unable to update user in database' + ' ERROR: ' + err);
                } else {
                    res.json({ message: 'Succesfully updated user' });
                }
            })
        }
    })
};