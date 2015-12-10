var express = require('express');
var router = express.Router();

var User=require('../models/user');


router.post('/', function(req, res, next) {
    var newUser=User(req.body);
    console.log("server"+newUser);
    newUser.type="member";
    newUser.save(function(err){
        if(err){
            throw err;
        }
    })
    console.log("Success"+newUser);
    res.json(newUser);
});






module.exports = router;
