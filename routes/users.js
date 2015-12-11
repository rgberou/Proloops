var express = require('express');
var router = express.Router();



var getemail;
var getpass;
var data;
var lname;
var newUser;

var  User=require('../models/user');

/* GET users listing. */
router.get('/',function(req, res, next) {
    /*getpass=req.body.pass;
    getemail=req.body.idmail;
    res.redirect('/users/verify')*/

    User.find({},function(err,result){
        res.json(result);
    });
});
router.post('/getinfo',function(req,res,next){
    var newUser=User(req.body);
   console.log("server"+newUser);
    res.json(newUser);
});


router.get('/verify', function(req, res, next) {
    newUser=req.body;
    console.log(newUser);
    User.findOne({email:newUser.email,password:newUser.password},function(err,result){
        if(result==null){
            res.render('login', { message: "Email and password did not match",choice:'1',lastname:'',firstname:'',email:'',warning:''});
        }else{
            req.session.email=getemail;
            req.session.lastname=result.lastname;
            req.session.firstname=result.firstname;
            req.session.password=getpass;
            res.redirect('/newsfeed')
        }
    });
});
router.get('/logout', function(req, res, next) {
    req.session.lastname=null;
    req.session.firstname=null;
    req.session.email=null;
    req.session.password=null;
    res.redirect('/login');
});





//Route for user registration





module.exports = router;
