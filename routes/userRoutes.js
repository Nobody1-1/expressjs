import express from "express";
import { getUser,getUserById,userCreate,userUpdate,userDelete } from "../controller/userController.js";

const router = express.Router();

router.get("/users",getUser);
router.get("/users/:id",getUserById);
router.post("/users",userCreate);
router.patch("/users/:id",userUpdate);
router.delete("/users/:id",userDelete);

export default router;

