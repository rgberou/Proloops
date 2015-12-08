/**
 * Created by Rg on 11/26/2015.
 */
var express = require('express');
var router = express.Router();

var User=require('../models/user');

/* Get user profile of user */
router.get('/', function(req, res, next) {
    if(req.session.email==null && req.session.password==null){
        res.redirect('/login');
    }else{
        res.render('newsfeed',{lastname:req.session.lastname,firstname:req.session.firstname});
    }
});


module.exports = router;
