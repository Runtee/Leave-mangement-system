const StaffInfo = require('../models/StaffInfo.js')
module.exports = async(req, res)=>{
  const staffInfo = await StaffInfo.find({ userid: req.session.userId }).populate('userid');
    res.render('password',{
        staffInfo,
        success:req.flash('success'),
    validationErrors:req.flash('validationErrors')
    })
}