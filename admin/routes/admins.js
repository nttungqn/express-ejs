var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('admins/index', {title: 'Admin', layout:'frame-admin'});
});

router.get('/edit-info', function(req, res, next) {
  res.render('admins/edit-info', {title: 'Sửa đổi thông tin người dùng', layout:'frame-admin'});
});

router.get('/order', function(req, res, next) {
  res.render('admins/order', {title: 'Quản lý đặt hàng', layout:'frame-admin'});
});

router.get('/product-shop', function(req, res, next) {
  res.render('admins/product-shop', {title: 'Quản lý sản phẩm trên gian hàng', layout:'frame-admin'});
});

router.get('/sales', function(req, res, next) {
  res.render('admins/sales', {title: 'Quản lý doanh số bán hàng', layout:'frame-admin'});
});

router.get('/shop', function(req, res, next) {
  res.render('admins/shop', {title: 'Quản lý gian hàng', layout:'frame-admin'});
});

router.get('/top-selling', function(req, res, next) {
  res.render('admins/top-selling', {title: 'Thống kê sản phẩm bán chạy', layout:'frame-admin'});
});

// dsd

module.exports = router;
