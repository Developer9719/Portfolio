var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('links', { 
    title: 'Justin Battrick' 
  });
});

module.exports = router;
