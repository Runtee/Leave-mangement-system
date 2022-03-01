const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const LeaveInfoSchema = new Schema({
    userid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
        },
    reason: {
        type: String,
        required: [true, 'Please state the reason'],
    },
    leave_from: {
        type: Date,
        required: [true, 'Please provide ']
    },
    leave_to: {
        type: Date,
        required: [true, 'Please provide ']
    },
    department:{
        type:String
    },
    status: {
        type: String,
        required: true,
        default: 'Pending'
        
    },
    staffid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'StaffInfo',
        required: true
        }

});




const LeaveInfo = mongoose.model('LeaveInfo', LeaveInfoSchema);
module.exports = LeaveInfo




