import { v4 as uuidv4 } from "uuid";

let users = [];

export const createUser = (req, res) => {
  console.log("Post Route Reached.");
  //   console.log(req.body);
  const user = req.body;
  const userWithId = { ...user, id: uuidv4() };
  users.push(userWithId);

  res.send(`User with the name ${user.firstname} added to the database!`);
};

export const getUsers = (req, res) => {
  console.log(users);
  res.send(users);
};

export const getUser = (req, res) => {
  let { id } = req.params;

  let foundUser = users.find((user) => user.id === id);

  res.send(foundUser);
};

export const deleteuser = (req, res) => {
  let { id } = req.params;
  console.log(id);

  users = users.filter((user) => user.id !== id);

  res.send(`User with the id: ${id} deleted from the database.`);
};

export const updateUser = (req, res) => {
  const { id } = req.params;
  const { firstname, lastname, age } = req.body;
  const user = users.find((user) => user.id == id);

  if (firstname) {
    user.firstname = firstname;
  }
  if (lastname) {
    user.lastname = lastname;
  }
  if (age) {
    user.age = age;
  }

  res.send(`User with the id ${id} has been updated`);
};
