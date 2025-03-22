// const getDB = require('../util/database').getDB;

const mongoose = require("mongoose");

// class Product{
//   constructor(title, price, description, imageUrl){
//     this.title = title;
//     this.price = price;
//     this.description = description;
//     this.imageUrl = imageUrl;
//   }

//   save(){
//     const db = getDB();
//     return db.collection('products')
//     .insertOne(this)
//     .then(
//       result=>{
//         console.log(result);
//       }
//     )
//     .catch(err=>{
//       console.log(err);
//     })
//   }
// }

// module.exports = Product

const { Schema } = mongoose;

const productSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Product", productSchema);
