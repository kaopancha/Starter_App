var express = require('express');
var router = express.Router();

/* GET all products. */
router.get('/', function(req, res, next) {
    res.render('products');
});
router.get('/add', function(req, res, next) {
    res.send('Add product');
});
router.get('/edit', function(req, res, next) {
    res.send('Edit product');
});

module.exports = router;