var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('users',{title:'User list'});
});

router.get('/detail', function(req, res, next) {
  res.send('user details.');
});



module.exports = router;
