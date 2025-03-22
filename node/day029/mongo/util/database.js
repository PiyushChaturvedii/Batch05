const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

const password = "@1234.aeeron";
const encodedPassword = encodeURIComponent(password);

const connectionString = `mongodb+srv://username:${encodedPassword}@cluster0.5mndi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const url =
  "mongodb+srv://admin:aeeron1234@cluster0.5mndi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const mongoConnect = (callback) => {
  MongoClient.connect(url)
    .then((result) => {
      console.log("Database Connected...");
      callback(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = mongoConnect;
