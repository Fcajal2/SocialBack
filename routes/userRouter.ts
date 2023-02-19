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
import uploadS3 from "../middlewares/uploadS3";

const userRouter = Router();

userRouter.post("/register", createUser);
userRouter.delete("/", checkLogin, deleteUser);
userRouter.put("/", checkLogin, uploadS3.single("image_file"), editUser);
userRouter.post("/:user_id/follow", checkLogin, followUser);
userRouter.get("/:user_id/followers", getFollowers);
userRouter.get("/:user_id/followings", getFollowings);
userRouter.get("/:user_id", getUserInfo);
userRouter.get("/:user_id/posts", getUserPosts);
userRouter.post("/login", loginUser);

export default userRouter;
