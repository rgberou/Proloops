var express = require('express');
var router = express.Router();

var User=require('../models/user');
var newUser;
/* Post registration of user */
/*router.post('/', function(req, res, next) {
    var conf=req.body.confpassword;
    var password=req.body.password;
    if(conf==password){
        newUser=new User();
        newUser.lastname=req.body.lastname;
        newUser.firstname=req.body.firstname;
        newUser.password=req.body.password;
        newUser.email=req.body.email;
        newUser.username="";
        newUser.type="member";
        newUser.save(function(err){
            if(err){
                throw err;
            }
        });
        res.redirect("/login");
    }else{
        res.redirect('/');
    }
}); */

router.post('/', function(req, res, next) {
    var conf=req.body.confpassword;
    var password=req.body.password;
    if(conf==password){
        newUser=new User();
        newUser.lastname=req.body.lastname;
        newUser.firstname=req.body.firstname;
        newUser.password=req.body.password;
        newUser.email=req.body.email;
        newUser.username="";
        newUser.type="member";
        res.redirect("/signup/verify");
    }else{
        res.redirect('/');
    }
});

router.get('/verify', function(req, res, next) {
    User.findOne({email:newUser.email},function(err,result){
        if(result==null){
            newUser.save(function(err){
                if(err){
                    throw err;
                }
            });
            res.redirect("/login");
        }else{
            res.render('login',{message:'',choice:2,warning:"Email is already in used"});
        }
    });
});





module.exports = router;
