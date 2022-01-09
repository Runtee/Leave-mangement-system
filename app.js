const express = require('express')
const app = new express()
const path = require('path')
const ejs = require('ejs')
const flash = require('connect-flash');
const expressSession = require('express-session');

app.use(express.json())
app.use(express.urlencoded())
const mongoose = require('mongoose')
const fileUpload = require('express-fileupload')
app.use(fileUpload())
mongoose.connect('mongodb://localhost/leave', { useNewUrlParser: true, useUnifiedTopology: true });


app.set('view engine', 'ejs')
app.use("/public", express.static(path.join(__dirname, 'public')))
app.listen(3000, () => {
    console.log('App listening on port 3000')
})
app.use(expressSession({
    secret: 'keyboard cat'
}))
// app.get('/',(req,res)=>{
//     res.render('profile')
// })



const loginController = require('./controllers/loginController')
const loginUser = require('./controllers/loginUser')
const freshController = require('./controllers/freshController')
const freshPost = require('./controllers/freshPost')
const welcomeController = require('./controllers/welcomeController');


app.use(flash())

app.get('/', loginController)
app.post('/login/auth',loginUser)


app.get('/new',freshController)
app.post('/new/post',freshPost)
app.get('/dashboard', welcomeController)
