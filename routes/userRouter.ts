import { Router } from "express";
import createUser from "../controllers/userController/createUser";
import getUser from "../controllers/userController/getUser";
import loginUser from "../controllers/userController/loginUser";

const userRouter = Router();

userRouter.post("/register", createUser);
userRouter.post("/login", loginUser);
userRouter.get("/:id", getUser);

export default userRouter;