var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home', layout: 'frame-home'});
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Login' , layout: 'login'});
});

router.get('/register', function(req, res, next) {
  res.render('register', { title: 'Sign up' , layout: 'register'});
});

router.get('/producer', function(req, res, next) {
  res.render('producer', { title: 'Producer' , layout: 'frame-home'});
});

router.get('/classify', function(req, res, next) {
  res.render('classify', { title: 'Classify' , layout: 'frame-home'});
});

router.get('/forgot-password', function(req, res, next) {
  res.render('forgot-password', { title: 'Forgot password' , layout: 'forgot-password'});
});

module.exports = router;
