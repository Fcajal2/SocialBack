import { Router } from "express";
import createPost from "../controllers/postController/createPost";
import deletePost from "../controllers/postController/deletePost";
import editPost from "../controllers/postController/editPost";
import getAllPosts from "../controllers/postController/getAllPosts";
import getPost from "../controllers/postController/getPost";
import likePost from "../controllers/postController/likePost";
import repostPost from "../controllers/postController/repostPost";
import checkLogin from "../middlewares/checkLogin";

const postRouter = Router();

postRouter.post("/create", checkLogin, createPost);
postRouter.delete("/:id", checkLogin, deletePost);
postRouter.put("/:id", checkLogin, editPost);
postRouter.get("/", getAllPosts);
postRouter.get("/:id", getPost);
postRouter.post("/:id/like", checkLogin, likePost);
postRouter.post("/:id/repost", checkLogin, repostPost);

export default postRouter;
