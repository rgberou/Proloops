var express = require('express');
var router = express.Router();
var  User=require('../models/user');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Proloops' });
});
router.get('/login',function(req, res, next) {
  res.render('template', { title: 'Sign up now' });
  

});
router.post('/login', function(req, res, next) {
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

router.get('/newsfeed', function(req, res, next) {
  res.render('dashboard');
});

module.exports = router;
