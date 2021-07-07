var express = require('express');
var router = express.Router();
/* express validator (check request)*/ 
const { body, validationResult } = require('express-validator');

/* GET all products. */
router.get('/', function(req, res, next) {
    res.render('blog');
});

router.get('/add', function(req, res, next) {
    res.render('addBlog');
});

router.post(
    '/add',
    body("articleName","กรุณาระบุชื่อบทความ").not().isEmpty(),
    body("articleDesc","กรุณาระบุรายละเอียดบทความ").not().isEmpty(),
    body("writerName","กรุณาระบุชื่อผู้เขียน").not().isEmpty(),
    function(req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log(errors);
    }
    else{
        // insert to db
    }
});

module.exports = router;