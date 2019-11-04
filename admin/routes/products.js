var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/product', function (req, res, next) {
    res.render('products/product', { title: 'Product', layout: 'frame-product'});
});


module.exports = router;