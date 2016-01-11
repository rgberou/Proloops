/**
 * Created by Rg on 11/26/2015.
 */
var express = require('express');
var router = express.Router();

var User=require('../models/user');
var Status=require('../models/status');


/* Get user profile of user */
router.post('/', function(req, res, next) {
    var newStatus=Status(req.body);
    console.log("server"+newStatus);
    newStatus.email= req.session.email;
    newStatus.save(function(err){
        if(err){
            throw err;
        }
    })
    console.log("Success"+newStatus);
    res.json(newStatus);
});
router.get('/getstatus',function(req, res, next) {
    Status.find({},function(err,result){
        res.json(result);
    });
});

module.exports = router;
