var express = require('express');
var router = express.Router();

var User=require('../models/user');

/* Post registration of user */
router.post('/', function(req, res, next) {
    var conf=req.body.confpassword;
    var password=req.body.password;
    if(conf==password){
        var newUser=new User();
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
});



module.exports = router;
/**
 * Created by Rg on 11/26/2015.
 */
