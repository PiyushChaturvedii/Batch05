const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
  res.render('admin/edit-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    editing: false
  });
};

// exports.postAddProduct = (req, res, next) => {
//   const title = req.body.title;
//   const imageUrl = req.body.imageUrl;
//   const price = req.body.price;
//   const description = req.body.description;
//   const product = new Product(null, title, imageUrl, description, price);
//   product.save()
//   .then(()=>{
//     res.redirect('/');
    
//   })
//   .catch(err=>console.log(err));
// };
exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  Product.create({
    title:title,
    price:price,
    imageUrl:imageUrl,
    description:description
  }).then(result=>{
    // console.log(result);
    console.log("Created Product");
    res.redirect('/admin/products');
    
  }).catch(err=>{console.log(err);
  })
};

exports.getEditProduct = (req, res, next) => {
  const editMode = req.query.edit;
  if (!editMode) {
    return res.redirect('/');
  }
  const prodId = req.params.productId;
  Product.findAll({where:{id:prodId}})
  .then(
    product=>{
      if(!product){
        return res.redirect('/');
      }
      res.render('admin/edit-product',{
        pageTitle: 'Edit Product',
        path: '/admin/edit-product',
        editMode:editMode,
        product:product[0]
      })
    }
  ).catch(err=>console.log(err))
};

exports.postEditProduct = (req, res, next) => {
  const prodId = req.body.productId;
  const updatedTitle = req.body.title;
  const updatedPrice = req.body.price;
  const updatedImageUrl = req.body.imageUrl;
  const updatedDesc = req.body.description;
  Product.findAll({where:{id:prodId}})
  .then(product =>{
    product.title = updatedTitle;
    product.price = updatedPrice;
    product.description = updatedDesc;
    product.imageUrl = updatedImageUrl;
    return product.save();
  }).then(result=>{
    console.log('Updated Product');
    res.redirect('/admin/products');
    
  })
  .catch(err=>console.log(err))
  res.redirect('/admin/products');
};

exports.getProducts = (req, res, next) => {
 Product.findAll().then(
  products=>{
    res.render('admin/products', {
        prods: products,
        pageTitle: 'Admin Products',
        path: '/admin/products'
    })
  }
 ).catch(err=>console.log(err))
};

exports.postDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findAll({where:{id:prodId}})
  .then(
    product=>{
      return product[0].destroy();
    }
  ).then(result=>{
    console.log('Destroyed product');
    res.redirect('/admin/products')
    
  }).catch(err=>console.log(err));
};
