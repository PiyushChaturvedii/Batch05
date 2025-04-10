import express from "express";

import {
  createUser,
  deleteuser,
  getUser,
  getUsers,
  updateUser,
} from "../controllers/users";

const router = express.Router();

router.get("/", getUsers);

router.post("/", createUser);

router.get("/:id", getUser);

router.delete("/:id", deleteuser);

router.patch("/:id", updateUser);

export default router;
