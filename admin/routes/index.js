var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' , layout: 'frame-home'});
});

router.get('/forgot-password', function(req, res, next) {
  res.render('forgot-password', { title: 'Forgot password' , layout: 'frame-home'});
});

router.get('/register', function(req, res, next) {
  res.render('register', { title: 'Register' , layout: 'frame-home'});
});

module.exports = router;
