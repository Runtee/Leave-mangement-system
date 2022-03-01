const bcrypt = require('bcrypt')
const User = require('../models/user')
const Admin = require('../models/admin')
const StaffInfo = require('../models/StaffInfo')
const Supervisor = require('../models/supervisor')
const SuperInfo = require('../models/superInfo')
module.exports = (req, res) => {
    const { option, username, password } = req.body;
    if (option == 'Staff') {
        User.findOne({ username: username }, (error, user) => {
            if (user) {
                bcrypt.compare(password, user.password, (error, same) => {
                    if (same) {
                        req.session.userId = user._id// if passwords match
                        // // store user session
                        StaffInfo.findOne({ userid: user._id }, (error, staff) => {
                            if (staff) {
                                res.redirect('/dashboard')
                            }
                            else {
                                res.redirect('/register')
                            }
                        })

                    }
                    else {
                        const validationErrors = ['Password is incorrect']
                        req.flash('validationErrors', validationErrors)
                        res.redirect('/')
                    }
                })
            }
            else {
                const validationErrors = ['Username is incorrect']
                req.flash('validationErrors', validationErrors)
                req.flash('data', req.body)
                res.redirect('/')
            }
        }
        )
    }

    else if (option == 'Supervisor') {
        Supervisor.findOne({ username: username }, (error, user) => {
            if (user) {
                bcrypt.compare(password, user.password, (error, same) => {
                    if (same) {
                        req.session.userId = user._id// if passwords match
                        // // store user session
                        SuperInfo.findOne({ userid: user._id }, (error, staff) => {
                            if (staff) {
                                res.redirect('/supervisor')
                            }
                            else {
                                res.redirect('/register-supervisor')
                            }
                        })

                    }
                    else {
                        const validationErrors = ['Password is incorrect']
                        req.flash('validationErrors', validationErrors)
                        res.redirect('/')
                    }
                })
            }
            else {
                const validationErrors = ['Username is incorrect']
                req.flash('validationErrors', validationErrors)
                req.flash('data', req.body)
                res.redirect('/')
            }
        }
        )
    }

    else if (option == 'Admin') {
        Admin.findOne({ username: username }, (error, user) => {
            if (user) {
                bcrypt.compare(password, user.password, (error, same) => {
                    if (same) {
                        req.session.userId = user._id// if passwords match
                        // // store user session
                        res.redirect('/admin')

                    }
                    else {
                        const validationErrors = ['Password is incorrect']
                        req.flash('validationErrors', validationErrors)
                        res.redirect('/')
                    }
                })
            }
            else {
                const validationErrors = ['Username is incorrect']
                req.flash('validationErrors', validationErrors)
                req.flash('data', req.body)
                res.redirect('/')
            }
        }
        )
    }
}

