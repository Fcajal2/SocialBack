import { Router } from "express";
import createUser from "../controllers/userController/createUser";
import deleteUser from "../controllers/userController/deleteUser";
import editUser from "../controllers/userController/editUser";
import followUser from "../controllers/userController/followUser";
import loginUser from "../controllers/userController/loginUser";
import uploadFile from "../middlewares/uploadFile";
import checkLogin from "../middlewares/checkLogin";
import getUserInfo from "../controllers/userController/getUserInfo";
import getFollowers from "../controllers/userController/getFollowers";
import getFollowings from "../controllers/userController/getFollowings";
import getUserPosts from "../controllers/userController/getUserPosts";

const userRouter = Router();

userRouter.post("/register", createUser);
userRouter.delete("/", checkLogin, deleteUser);
userRouter.put("/", checkLogin, uploadFile.single("image_file"), editUser);
userRouter.post("/:id/follow", checkLogin, followUser);
userRouter.get("/:id/followers", getFollowers);
userRouter.get("/:id/followings", getFollowings);
userRouter.get("/:id", getUserInfo);
userRouter.get("/:user_id/posts", getUserPosts);
userRouter.post("/login", loginUser);

export default userRouter;
