var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Express',
    msg:"这是xxx信息",
    arr:['a','b','c']
  });
});

module.exports = router;
