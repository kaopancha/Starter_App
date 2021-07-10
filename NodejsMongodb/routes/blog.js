var express = require('express');
var router = express.Router();
/* express validator (check request)*/ 
const { body, validationResult, check } = require('express-validator');

/* GET all products. */
router.get('/', function(req, res, next) {
    res.render('blog');
});

router.get('/add', function(req, res, next) {
    res.render('addBlog');
});

router.post(
    '/add', [
    check("articleName","กรุณาระบุชื่อบทความ").not().isEmpty(),
    check("articleDesc","กรุณาเพิ่มเนื้อหาบทความ").not().isEmpty(),
    check("writerName","กรุณาระบุชื่อผู้เขียน").not().isEmpty(),
    ], function(req, res, next) {
    const result = validationResult(req);
    var errors = result.errors;
    if (!result.isEmpty()) {
      res.render('addblog',{sendErrors:errors})
    }
    else{
        // insert to db
    }
});

module.exports = router;