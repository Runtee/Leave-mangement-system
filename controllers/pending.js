// const StaffInfo = require('../models/StaffInfo.js')
const SuperInfo = require('../models/superInfo.js')

const leave = require('../models/leave.js')
module.exports = async (req, res) => {
    let userid = req.session.userId
    let Info = await SuperInfo.find({ userid: userid }).clone().catch()
    let department = await Info[0].department
    //  const staffInfo = await StaffInfo.find({ userid: req.session.userId })
    const track = await leave.find({ status: 'Pending',department:department}).populate('staffid')
    res.render('pending', {
        track,staffInfo:Info,
        success: req.flash('success'),

    }
    );
}