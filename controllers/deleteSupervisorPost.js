const Supervisor = require('../models/supervisor.js')
const SuperInfo = require('../models/superInfo.js')


module.exports = async (req,res)=>{
    // console.log(req.body)
    var id = req.body.id
    let user = await StaffInfo.findOne({id:id}).clone().catch((error)=>{console.log(error);})
    let userid = user.userid
    Supervisor.findByIdAndDelete(userid, (err,del)=>{
        console.log(err,del);
    })
    SuperInfo.findByIdAndDelete(id, (err,del)=>{
        console.log(err,del);
    })
    res.redirect('/admin/supervisor')
}
