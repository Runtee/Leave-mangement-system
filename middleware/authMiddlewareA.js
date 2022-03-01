const supervisor = require('../models/supervisor')
module.exports = (req, res, next) => {
supervisor.findById(req.session.userId, (error, user ) =>{
if(error || !user )
return res.redirect('/')
next()
})
}