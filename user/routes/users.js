var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('users/index', {title: '', layout: 'frame-user'});
});

router.get('/cart', function(req, res, next) {
  res.render('users/cart', {title: '', layout: 'frame-user'});
});

router.get('/delivery', function(req, res, next) {
  res.render('users/delivery', {title: '', layout: 'frame-user'});
});

router.get('/history-status', function(req, res, next) {
  res.render('users/history-status', {title: '', layout: 'frame-user'});
});



module.exports = router;
