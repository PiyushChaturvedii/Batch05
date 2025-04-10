import express from "express";
import { v4 as uuidv4 } from "uuid";
uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'

const router = express.Router();

const users = [];

//all routes in here are starting with /users

router.get("/", (req, res) => {
  console.log(users);
  res.send(users);
});

router.post("/", (req, res) => {
  console.log("Post Route Reached.");
  //   console.log(req.body);
  const user = req.body;
  const userWithId = { ...user, id: uuidv4() };
  users.push(userWithId);

  res.send(`User with the name ${user.firstname} added to the database!`);
});

export default router;
