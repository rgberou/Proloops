/**
 * Created by Rg on 11/26/2015.
 */
var express = require('express');
var router = express.Router();

var User=require('../models/user');
var Status=require('../models/status');

/* Get user profile of user */
router.get('/', function(req, res, next) {
    Status.find({},function(err,result){
        if(req.session.email==null && req.session.password==null){
            res.redirect('/login');
        }else{
            console.log(result);
            res.render('newsfeed',{lastname:req.session.lastname,firstname:req.session.firstname});
        }
    })
});
router.post('/redirect', function(req, res, next) {

    res.redirect('/newsfeed');
});
router.get('/getfeed', function(req, res, next) {

});




module.exports = router;
