module.exports = async(req, res)=>{
    res.render('password adim2',{

        success:req.flash('success'),
    validationErrors:req.flash('validationErrors')
    })
}