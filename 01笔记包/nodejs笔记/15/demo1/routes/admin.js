var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
    res.render('admin');
});

router.get('/login',function(req,res,next){
    res.render("login");
});


module.exports = router;
