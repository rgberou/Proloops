/**
 * Created by Rg on 11/26/2015.
 */
var express = require('express');
var router = express.Router();

var User=require('../models/user');

/* Get user profile of user */
router.get('/', function(req, res, next) {
    res.render('dashboard');
});

module.exports = router;
