const path = require('path')
const User = require('../models/StaffInfo.js')

module.exports = (req, res) => {
    var department = (req.body.department).toUpperCase()
    let image = req.files.image;
    image.mv(path.resolve(__dirname, '..', 'public/img', image.name), async (error) => {
        await User.create({
            ...req.body,
            image: '/img/' + image.name,
            userid: req.session.userId,
            department:department
        }, (error, user) => {
            console.log(error)
            if (error) {
                const validationErrors = Object.keys(error.errors).map(key =>
                    error.errors[key].message)
                req.flash('validationErrors', validationErrors)
                req.flash('data', req.body)
                return res.redirect('/register')
            }
        })
        res.redirect('/fresh/successful')
    })



}


