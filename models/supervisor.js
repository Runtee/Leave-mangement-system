const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt')
var uniqueValidator = require('mongoose-unique-validator');

const SupervSchema = new Schema({
    username: {
    type: String,
    required: [true,'Please provide username'],
    unique: [true,'Username already exists']
    },
    password: {
    type: String,
    required: [true,'Please provide password']
    }
    });
    SupervSchema.pre('save', function(next){
    const user = this
    bcrypt.hash(user.password, 10, (error, hash) => {
    user.password = hash
    next()
    })

})

SupervSchema.plugin(uniqueValidator);

const Supervisor = mongoose.model('Supervisor',SupervSchema);
module.exports = Supervisor