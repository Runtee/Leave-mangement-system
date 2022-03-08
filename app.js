require('dotenv').config()
const cool = require('cool-ascii-faces');
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
console.log(process.env.PASSWORD);
// mongodb+srv://runtee:<password>@cluster0.wvqt2.mongodb.net/test
mongoose.connect('mongodb+srv://runtee:'+process.env.PASSWORD+'@cluster0.wvqt2.mongodb.net/Leave',
 { useNewUrlParser: true, useUnifiedTopology: true },(err,db)=>{
  if (db){
  
    console.log('database connected successfully')

  }
  if (err){
      console.log(err);
  }
});

app.set('view engine', 'ejs')
app.use("/public", express.static(path.join(__dirname, 'public')))
app.listen(process.env.PORT || 3000, () => {
    console.log('App listening on port 3000')
})
app.use(expressSession({
    secret:'danceingcat',
    saveUninitialized: true,
    resave: true
}));
app.use(flash())




const loginController = require('./controllers/loginController')
const loginUser = require('./controllers/loginUser')
const freshController = require('./controllers/freshController')
const freshPost = require('./controllers/freshPost')
const newUserController = require('./controllers/newUserController')
const newUserStoreController = require('./controllers/newUserStoreController')
const successUser = require('./controllers/successUser')

const welcomeController = require('./controllers/welcomeController');
const profileController = require('./controllers/profileController')
const apply = require('./controllers/apply')
const track = require('./controllers/track')
const applypost = require('./controllers/applyPost')
const profilePostController = require('./controllers/profilePostController')
const authMiddleware = require('./middleware/authMiddleware')
const passwordController = require('./controllers/passwordController');
const passwordC = require('./controllers/password');


const newSuperController = require('./controllers/newSuperController')
const newSuperStoreController = require('./controllers/newSuperStoreController')
const authMiddlewareA = require('./middleware/authMiddlewareA')
const supervisor = require('./controllers/super')
const pending = require('./controllers/pending')
const pendingPost = require('./controllers/pendingPost')
const approved = require('./controllers/approved')
const profileControllerS = require('./controllers/profileController supervisor')
const passwordControllerSuper = require('./controllers/passwordControllerSuper');
const passwordSuper = require('./controllers/passwordSuper');

const admin = require('./controllers/admin')
const deleteStaff = require('./controllers/deleteStaff')
const deleteStaffPost = require('./controllers/deleteStaffPost')
const deleteSupervisor = require('./controllers/deleteSupervisor')
const deleteSupervisorPost = require('./controllers/deleteSupervisorPost')
const passwordControllerAdim = require('./controllers/passwordControllerAdim2');
const passwordCAdim = require('./controllers/passwordAdim2');
const authMiddlewareAdmin = require('./middleware/authMiddlewareAdmin')


const logoutController = require('./controllers/logout')


app.get('/', loginController)
app.post('/login/auth',loginUser)


app.get('/new',freshController)
app.post('/new/post',freshPost)
app.get('/register',authMiddleware,newUserController)
app.post('/users/register',authMiddleware,newUserStoreController)
app.get('/fresh/successful',authMiddleware,successUser)
app.get('/dashboard',authMiddleware, welcomeController)
app.get('/dashboard/profile',authMiddleware,profileController)
app.post('/profilePost',authMiddleware,profilePostController)
app.get('/dashboard/track',authMiddleware, track)
app.get('/dashboard/apply',authMiddleware, apply)
app.post('/dashboard/apply-post',authMiddleware,applypost)
app.get('/dashboard/change-password',authMiddleware, passwordController)
app.post('/dashboard/change-password/store',authMiddleware, passwordC)


app.get('/register-supervisor',authMiddlewareA,newSuperController)
app.post('/supervisors/register',authMiddlewareA,newSuperStoreController)
app.get('/supervisor/profile',authMiddlewareA,profileControllerS)
app.get('/supervisor',authMiddlewareA,supervisor)
app.get('/supervisor/pending',authMiddlewareA,pending)
app.post('/status-update',authMiddlewareA,pendingPost)
app.get('/supervisor/approved',authMiddlewareA,approved)
app.get('/supervisor/change-password', authMiddlewareA, passwordControllerAdim)
app.post('/supervisor/change-password/store', authMiddlewareA,passwordCAdim)


app.get('/admin',authMiddlewareAdmin,admin)
app.get('/admin/staff',authMiddlewareAdmin,deleteStaff)
app.post('/delete/staff',authMiddlewareAdmin,deleteStaffPost)
app.get('/admin/supervisor',authMiddlewareAdmin,deleteSupervisor)
app.post('/delete/supervisor',authMiddlewareAdmin,deleteSupervisorPost)
app.get('/admin/change-password',authMiddlewareAdmin, passwordControllerAdim)
app.post('/admin/change-password/store',authMiddlewareAdmin,passwordCAdim)

app.get('/cool', (req, res) => res.send(cool()))
app.get('/logout',logoutController)