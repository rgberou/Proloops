var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Proloops' });
});
router.get('/login', function(req, res, next) {
  res.render('template', { title: 'Sign up now' });
});
router.get('/login/newsfeed', function(req, res, next) {
  res.render('dashboard');
});

module.exports = router;
