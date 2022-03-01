const leave = require('../models/leave.js')

module.exports = async (req, res) => {
    var body = req.body
    if (typeof (body.status) == 'string') {
        var id = body.id
        var status = body.status
        leave.findByIdAndUpdate(id, { status: status }, (er, up) => {
            if(er){
                throw er
            }
        })
        req.flash('success', 'Successfuly updated')
        return res.redirect('/admin/pending')
    }
    else if (typeof (body.status) == 'object') {
        id.forEach((id1, index) => {
            const status1 = m[index];
            leave.findByIdAndUpdate(id1, { status: status1 }, (er, up) => {
                if(er){
                    throw er
                }            })
        })
        req.flash('success', 'Successfuly updated')
        return res.redirect('/admin/pending')

    }
}
