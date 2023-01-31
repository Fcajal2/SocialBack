import { Router } from "express";
import createUser from "../controllers/userController/createUser";
import followUser from "../controllers/userController/followUser";
import getUser from "../controllers/userController/getUser";
import loginUser from "../controllers/userController/loginUser";
import checkLogin from "../middlewares/checkLogin";

const userRouter = Router();

userRouter.post("/register", createUser);
userRouter.post("/login", loginUser);
userRouter.get("/:id", getUser);
userRouter.post("/:id/follow", checkLogin, followUser);

export default userRouter;
