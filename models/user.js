const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema ({
    name: {type: String, required: true},
    gender: {type: String, required: true},
    dob: {type: Date, required: true},
});

module.exports = mongoose.model('User', User)