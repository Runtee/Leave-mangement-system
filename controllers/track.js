const StaffInfo = require('../models/StaffInfo.js')
const leave = require('../models/leave.js')
module.exports = async(req, res) => {
 const staffInfo = await StaffInfo.find({ userid: req.session.userId }).populate('userid');
 const track = await leave.find({userid:req.session.userId})
    res.render('track', { staffInfo,track
        }
    );
}