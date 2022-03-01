const Admin = require('../models/admin.js')
module.exports = async (req, res) => {
    let admin = await Admin.findOne({ username: 'admin' }).clone().catch()
    if (!admin) {
        Admin.create({ username: 'admin', password: 'admin' })
    }
    res.render('Login', {
        errors: req.flash('validationErrors')
    }
    );

}