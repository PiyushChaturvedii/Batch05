// const http = require('http');
// const express = require('express');
// const app = express();
// app.use((req,res,next)=>{
//     console.log("Express the middleware 1"); 
//     next();   //Allows the request to continue to the next middleware in line
// })
// app.use((req,res,next)=>{
//     console.log("Express the middleware 2");   
//     res.send('<h1>Hello from Express.js!</h1>') 
// })
// const server = http.createServer(app);
// server.listen(3000);
// console.log('Server is listening on port: 3000');



const bodyParser = require('body-parser');
const express = require('express');

const app = express();

app.use(bodyParser.urlencoded({extended:false}));

// app.use((req,res,next)=>{
//     console.log("Express the middleware 1"); 
//     next();   //Allows the request to continue to the next middleware in line
// })

app.use('/',(req,res,next)=>{
    console.log("Always runs");   
    next();
})

app.use('/add-product',(req,res,next)=>{
    console.log("Add Product Page");   
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button> </form>') 
})

app.post('/product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
    
})

app.use('/',(req,res,next)=>{
    console.log("Home Page");   
    res.send('<h1>Hello from Express.js!</h1>') 
})
app.listen(3000);

console.log('Server is listening on port: 3000');
