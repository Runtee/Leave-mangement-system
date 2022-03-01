const path = require('path')
const SuperInfo = require('../models/superInfo.js')

module.exports = (req, res) => {

    let image = req.files.image;
    image.mv(path.resolve(__dirname, '..', 'public/img', image.name), async (error) => {
        await SuperInfo.create({
            ...req.body,
            image: '/img/' + image.name,
            userid: req.session.userId
        }, (error, user) => {
            console.log(error)
            if (error) {
                const validationErrors = Object.keys(error.errors).map(key =>
                    error.errors[key].message)
                req.flash('validationErrors', validationErrors)
                req.flash('data', req.body)
                return res.redirect('/register-supervisor')
            }
        })
        res.redirect('/fresh/successful')
    })



}


