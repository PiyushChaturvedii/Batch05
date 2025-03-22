const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');

const errorController = require("./controllers/error");
const mongoConnect = require("./util/database").mongoConnect;

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

const adminRoutes = require("./routes/admin");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use((req, res, next) => {
  next()
});

app.use("/admin", adminRoutes);
// app.use(shopRoutes);

app.use(errorController.get404);

// mongoConnect(() => {
//   app.listen(3000);
// });

mongoose.connect("mongodb+srv://admin:aeeron1234@cluster0.5mndi.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster0")
.then(result=>{
  app.listen(3000)
console.log('Server connected');

})
.catch(err=>console.log(err)
)