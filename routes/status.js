/**
 * Created by Rg on 11/26/2015.
 */
var express = require('express');
var router = express.Router();

var User=require('../models/user');
var Status=require('../models/status');


/* Get user profile of user */
router.post('/', function(req, res, next) {
    var newStatus;
    if(req.body.statustext==null){
        res.send("invalid");
    }else{
        newStatus=new Status();
        newStatus.email=req.session.email;
        newStatus.content=req.body.statustext;
        newStatus.save(function(err){
            if(err){
                throw err;
            }
        });
        res.redirect('/newsfeed');
    }
});


module.exports = router;
