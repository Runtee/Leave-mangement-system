const StaffInfo = require('../models/StaffInfo.js')
const leave = require('../models/leave.js')
const Users = require('../models/user.js')


module.exports = async (req,res)=>{
    // console.log(req.body)
    var id = req.body.id
    let user = await StaffInfo.findOne({id:id}).clone().catch((error)=>{console.log(error);})
    let userid = user.userid
    // console.log(userid);
    leave.deleteMany({userid:userid}, (err,del)=>{
        console.log(err,del);
    })
    Users.findByIdAndDelete(userid, (err,del)=>{
        console.log(err,del);
    })
    StaffInfo.findByIdAndDelete(id, (err,del)=>{
        console.log(err,del);
    })
    res.redirect('/admin/delete-staff')
}
