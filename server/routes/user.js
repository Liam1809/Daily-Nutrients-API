import express from "express";
const router = express.Router();

import { getUsers, deleteUser, signin, signup } from "../controllers/user.js";

router.get("/", getUsers);
router.post("/signin", signin);
router.post("/signup", signup);
router.delete('/:id', deleteUser);

export default router;