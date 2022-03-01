const leave = require('../models/leave.js')
const StaffInfo = require('../models/StaffInfo')

module.exports = async (req, res) => {
    let form = req.body
    let reason = form['reason']
    let leave_from = form['leave_from']
    let leave_to = form['leave_to']
    let userid = req.session.userId
    var staffInfo = await StaffInfo.findOne({ userid: userid }, (error, user) => {

    }).clone().catch(function (err) { console.log(err) })
    var department = staffInfo.department
    var staffid = staffInfo.id
    if (leave_to < leave_from) {
        req.flash('notAllowed', "Leave end date can't be less than leave begininng date")
        req.flash('body', req.body)
        return res.redirect('/dashboard/apply')
    }
    let yearCheck = await leave.findOne({userid:userid}).clone().catch(function (err) { console.log(err) })
    var today = new Date
    var a = new Date(leave_from)
    var leave_from_year = a.getFullYear()
   
    leave.find({ department: department }, (error, allLeaves) => {
        if (allLeaves) {
            if(yearCheck){
                if(yearCheck.leave_to.getFullYear()== today.getFullYear() &&today.getFullYear()== leave_from_year){
                    req.flash('notAllowed', "Can't grant Leave, You have gone for Leave this year. ")
                    return res.redirect('/dashboard/apply')                
                }
            }

            var number_of_leaves = 0

            for (i = 0; i < allLeaves.length; i++) {
                if (new Date(leave_from) < allLeaves[i].leave_to) {
                    number_of_leaves += 1                };
            }
            if (number_of_leaves > 2) {
                req.flash('notAllowed', "Can't grant leave currently. There are alreadly three people on Leave")
                return res.redirect('/dashboard/apply')

            }

            leave.create({ ...req.body, staffid: staffid, userid: userid, department:department }, (err, cr) => {
                if (!err) {
                }
                else {
                    throw err
                }
            })
            req.flash('allowed', 'Leave successfully submitted. Waiting for approval.')
            return res.redirect('/dashboard/apply')
        }
        else if (allLeaves == null) {
            leave.create({ ...req.body, staffid: staffid, userid: userid }, (err, cr) => {
                if (!err) {
                }
                else {
                    throw err
                }
            })
            req.flash('allowed', 'Leave successfully submitted. Waiting for approval.')
            return res.redirect('/dashboard/apply')
        }
        else {
            throw err;
        }
    })



}