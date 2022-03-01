module.exports = (req, res) => {
    res.render('Create', {
        errors: req.flash('validationErrors')}
    );
}