const SuperInfo = require('../models/superInfo.js')

module.exports = async(req, res) => {
   
    const staffInfo = await SuperInfo.find({});

    res.render('deleteSupervisor', {
        staffInfo,
        errors:req.flash('notAllowed'),
        success: req.flash('allowed')
        
    }
    );
}