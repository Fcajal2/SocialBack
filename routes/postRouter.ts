import { Router } from "express";
import createPost from "../controllers/postController/createPost";
import deletePost from "../controllers/postController/deletePost";
import editPost from "../controllers/postController/editPost";
import getAllPosts from "../controllers/postController/getAllPosts";
import getPost from "../controllers/postController/getPost";
import getUserPosts from "../controllers/postController/getUserPosts";
import likePost from "../controllers/postController/likePost";
import checkLogin from "../middlewares/checkLogin";

const postRouter = Router();

postRouter.post("/create", checkLogin, createPost);
postRouter.put("/:id", checkLogin, editPost);
postRouter.delete("/:id", checkLogin, deletePost);
postRouter.get("/", getAllPosts);
postRouter.get("/:id", getPost);
postRouter.post("/:user_id", getUserPosts);
postRouter.post("/:id/like", checkLogin, likePost);

export default postRouter;
