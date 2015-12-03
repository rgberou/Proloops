var express = require('express');
var router = express.Router();

var User=require('../models/user');


/* GET landing page and home page */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Proloops' });
});

router.get('/login',function(req, res, next) {
    res.render('template', { message:''});

});




router.get('/newsfeed', function(req, res, next) {
    res.render('dashboard');
});

module.exports = router;
