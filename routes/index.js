var express = require('express');
var router = express.Router();

var User=require('../models/user');


/* GET landing page and home page */
router.get('/', function(req, res, next) {

    res.render('index', { title: 'Proloops' });
});

router.get('/login',function(req, res, next) {
    if(req.session.email==null && req.session.password==null){
        res.render('login', { message: '',choice:'1',lastname:'',firstname:'',email:'',warning:''});
    }else{
        //res.render('newsfeed',{lastname:req.session.lastname,firstname:req.session.firstname});
        res.redirect('/newsfeed');
    }
});




module.exports = router;
