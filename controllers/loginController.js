module.exports = (req, res) =>{
    res.render('Login',{
        errors:req.flash('validationErrors')})
    }