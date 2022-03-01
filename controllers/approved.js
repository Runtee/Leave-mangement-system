const leave = require('../models/leave.js')
const SuperInfo = require('../models/superInfo.js')

module.exports = async(req, res) => {
    let userid = req.session.userId
    let Info = await SuperInfo.find({userid:userid}).clone().catch()
    let department = await Info[0].department
    // let staffInfo = await SuperInfo.find({userid:userid}).populate('userid');
    const track = await leave.find({status:'Approved', department:department}).populate('staffid')
    res.render('approved', { track,staffInfo:Info

        }
    );
}