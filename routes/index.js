var express = require('express');
var router = express.Router();

var User=require('../models/user');


/* GET landing page and home page */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Proloops' });
});

router.get('/login',function(req, res, next) {
    res.render('template', { title: 'Sign up now' });

});

router.post('/loginuser',function(req, res, next) {
    getpass=req.body.pass;
    getemail=req.body.idmail;
    res.redirect('/loggedin')
});



router.get('/newsfeed', function(req, res, next) {
    res.render('dashboard');
});

module.exports = router;
