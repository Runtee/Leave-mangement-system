const StaffInfo = require('../models/StaffInfo.js')

module.exports = async(req, res) => {
   
    const staffInfo = await StaffInfo.find({});

    res.render('deleteStaff', {
        staffInfo,
        errors:req.flash('notAllowed'),
        success: req.flash('allowed')
        
    }
    );
}