//NPM Modules 
const express = require("express");
const app = express();
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const passport = require("passport");
const bodyParser = require('body-parser');
const path =require('path');
const session = require('express-session');
const flash = require('connect-flash');
const routes = require("./routes/index");
const User = require('./models/user');
const config = require('./config/database');

//Express Middleware
app.use(express.static(`${__dirname}/public`));
app.set('views', path.join(__dirname, 'views'));

//View Engine Setup
app.set("view engine", "ejs");
app.use(flash());

//Express Session Middleware
app.use(session({
    secret:'my keyboard cat',
    resave:true,
    saveUninitialized:true
}));


app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(function(req,res,next){
    res.locals.error = req.flash('error') || null;
    res.locals.success = req.flash('success') || null;
    res.locals.req = req;
    next();
})



//Check Connection to the Database
mongoose.connect(config.database,(err)=>{
    if(err){
        console.log('cannot connect to db')
    }else{
        console.log('connection to database was succcesful')
    }
})


//Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.use(routes);

app.listen(2222, () => {
  console.log(`Server is up and running on port 2222`);
}); 