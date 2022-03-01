const SuperInfo = require('../models/superInfo.js')
module.exports = async(req, res) => {
 const staffInfo = await SuperInfo.find({ userid: req.session.userId }).populate('userid');
    res.render('profile supervisor', { staffInfo
        }
    );
}