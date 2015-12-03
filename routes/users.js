var express = require('express');
var router = express.Router();

var getemail;
var getpass;


var  User=require('../models/user');

/* GET users listing. */
router.post('/',function(req, res, next) {
    getpass=req.body.pass;
    getemail=req.body.idmail;
    res.redirect('/users/verify')
});

router.get('/verify', function(req, res, next) {
    User.findOne({email:getemail,password:getpass},function(err,result){
        if(result==null){
            res.render('template', { message: 'User not found' });
        }else{
            res.redirect('/newsfeed')
        }
    });
});

//Route for user registration





module.exports = router;
