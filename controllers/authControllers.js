const User = require("../models/user");
const passport = require('passport');
const promisify = require("es6-promisify");

exports.home = (req, res) => {
  res.render('home')
};
exports.registerForm = (req, res) => {
  res.render("register");
};

exports.registerUser = async (req, res,next) => {
  try {
    const user = new User({
        firstName: req.body.user.firstName,
        lastName: req.body.user.lastName,
        email:req.body.user.email,
        dateOfBirth:req.body.user.dateOfBirth,
        sex:req.body.user.sex,
        state:req.body.user.state,
        occupation:req.body.user.occupation,
        address:req.body.user.address
    });
    const register = promisify(User.register, User);
     await register(user, req.body.password);
     res.redirect('/login')
  } catch (error) {
      
  }
};
exports.loginForm = (req,res)=>{
    res.render('login');
}
exports.login = passport.authenticate('local',{
    failureRedirect:'/login',
    failureFlash:'Email/Password mismatch',
    successRedirect:'/',
    successFlash:'You are now logged in'
})

exports.isLoggedIn = (req,res,next)=>{
    if(req.isAuthenticated()){
        
        return next();
    }else{
        req.flash('error','You must be logged in first');
        res.redirect('/login')
    }
}

exports.logout=(req,res)=>{
    req.logout();
    res.redirect('/')
}
