const StaffInfo = require('../models/StaffInfo.js')

module.exports = async(req, res) => {
    var reason = ""
    const data = req.flash('data');
    if (typeof data != "undefined") {
        reason = data.reason}
    const staffInfo = await StaffInfo.find({ userid: req.session.userId }).populate('userid');

    res.render('apply', {
        staffInfo,reason,
        errors:req.flash('notAllowed'),
        allowed: req.flash('allowed')
    }
    );
}