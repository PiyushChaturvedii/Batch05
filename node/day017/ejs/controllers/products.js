exports.getAddProduct = (req,res,next)=>{
    
    res.render('add-product',{
        pageTitle: 'Add Product',
        path:'/admin/add-product',
        activeAddProduct:true,
        formsCSS:true,
        productCSS: true
    })
}

exports.postAddProduct=(req,res,next)=>{
    products.push({title: req.body.title})
    res.redirect('/');    
}

exports.getProducts=(req,res,next)=>{
    const products = adminData.products;
    res.render('shop',{
        prods: products, 
        pageTitle: 'Shop', 
        path: '/',
        hasProducts:products.length>0,
        activeShop: true,
        productCSS: true
    });
}