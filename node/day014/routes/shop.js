const path = require('path');
const express = require('express');
const rootDir = require('../util/path');
const adminData = require('./admin');
const router = express.Router();


// router.use('/',(req,res,next)=>{
//     console.log('shop.js',adminData.products);
    
//     res.sendFile(path.join(rootDir,'views','shop.html'));
// })

router.get('/',(req,res,next)=>{
    const products = adminData.products;
    res.render('shop',{prods: products, docTitle: 'Shop'});
})

module.exports = router;
