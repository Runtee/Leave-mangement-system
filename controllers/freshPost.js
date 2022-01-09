const path = require('path')
const User = require('../models/user.js')
module.exports = async(req, res) => {
   await User.create(req.body, (error, user) => {

        if (error) {
            if (Object.keys(error.errors) == 'username') {
                const validationErrors = 'Username already exists'
                req.flash('validationErrors', validationErrors)
                req.flash('data', req.body)
                return res.redirect('/new');
            }
            else {
                const validationErrors = Object.keys(error.errors).map(key => error.errors[key].message)
                req.flash('validationErrors', validationErrors)
                req.flash('data', req.body)
                return res.redirect('/new');
            }



        }
        else {
            req.session.userId = user._id
            res.redirect('/');
        }
    }
    )
}



