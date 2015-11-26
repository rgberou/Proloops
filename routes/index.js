var express = require('express');
var router = express.Router();
var User=require('../models/user');

var ET_email;
var ET_pass;
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Proloops' });
});

router.get('/login',function(req, res, next) {
    res.render('template', { title: 'Sign up now' });

});

router.get('/validate', function(req, res, next) {

});
router.get('/loginuser',function(req, res, next) {
    ET_email=req.body.em;
    ET_pass=req.body.pass;

    User.find({"email":ET_email,"password":ET_pass},function(err,data){
        if(err){
            console.log("error");
            res.redirect('/login');
        }else{
            res.redirect('/newsfeed');
        }
    });

});

router.post('/signup', function(req, res, next) {
    var conf=req.body.confpassword;
    var password=req.body.password;
    if(conf==password){
        var newUser=new User();
        newUser.lastname=req.body.lastname;
        newUser.firstname=req.body.firstname;
        newUser.password=req.body.password;
        newUser.email=req.body.email;
        newUser.save(function(err){
            if(err){
                throw err;
            }
        });
        res.redirect("/login");
    }else{
        res.redirect('/');
    }
});


router.get('/:lastname/:firstname', function(req, res, next) {
    res.render('dashboard');
});
router.get('/profile', function(req, res, next) {
    res.render('profile');
});

router.get('/newsfeed', function(req, res, next) {
    res.render('dashboard');
});

module.exports = router;
