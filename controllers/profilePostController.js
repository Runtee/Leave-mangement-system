const StaffInfo = require('../models/StaffInfo')

module.exports = async (req, res) => {
    var newk = {'userid': req.session.userId } ;
    var updateStaffInfo = await StaffInfo.findOne({userid:req.session.userId})
    var newp= req.body
    updateStaffInfo.updateMany(newp,(er,up)=>{
        console.log(er,up);
    })
    return res.redirect('/dashboard/profile')

}