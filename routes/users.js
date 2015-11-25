var express = require('express');
var router = express.Router();

var  User=require('../models/user');

/* GET users listing. */
router.get('/', function(req, res, next) {

    console.log(use.email);
    console.log(use.password);
});

module.exports = router;
