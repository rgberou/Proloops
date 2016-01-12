/**
 * Created by Rg on 11/26/2015.
 */
var express = require('express');
var router = express.Router();

var User=require('../models/user');
var Status=require('../models/status');


router.post('/', function(req, res, next) {
    var newStatus=Status(req.body);
    newStatus.email= req.session.email;
    newStatus.firstname=req.session.firstname;
    newStatus.lastname=req.session.lastname;
    newStatus.save(function(err){
        if(err){
            throw err;
        }
    })
    res.json(newStatus);
});
router.post('/addcomment', function(req, res, next) {
    var newStatus=Status(req.body);
    newStatus.email= req.session.email;
    newStatus.firstname=req.session.firstname;
    newStatus.lastname=req.session.lastname;
    newStatus.save(function(err){
        if(err){
            throw err;
        }
    })
    res.json(newStatus);
});
router.get('/getstatus',function(req, res, next) {
    Status.find({},function(err,result){
        res.json(result);
    });
});

module.exports = router;
