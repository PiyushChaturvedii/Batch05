var express = require('express');
var router = express.Router();
var db = require('../db');

router.get('/', function(req, res, next) {
  const query = 'select * from product';

  db.query(query,function(err,rows,fields){
    if(err)throw err;
    
    // res.json(rows[0]);
    res.render('products', { title: 'Products', products: rows });
  })
  
});



module.exports = router;
