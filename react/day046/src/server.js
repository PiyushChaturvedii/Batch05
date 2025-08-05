// server.js
const jsonServer = require("json-server");
const auth = require("json-server-auth");
const cors = require("cors");

const app = jsonServer.create();
const router = jsonServer.router("data/routes.json");

// Apply default middlewares (logger, static, cors, no-cache)
app.use(jsonServer.defaults());
app.use(cors());

// Bind the auth middleware before the router
app.use(auth);
app.use(router);

app.listen(4000, () => {
  console.log("JSON Server is running with Auth at http://localhost:4000");
});