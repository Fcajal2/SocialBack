import getFollowedPosts from "../controllers/postController/getFollowedPosts";
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
postRouter.delete("/:post_id", checkLogin, deletePost);
postRouter.put("/:post_id", checkLogin, editPost);
postRouter.get("/all", getAllPosts);
postRouter.get("/follows", checkLogin, getFollowedPosts);
postRouter.get("/:post_id", getPost);
postRouter.post("/:post_id/like", checkLogin, likePost);
postRouter.post("/:post_id/repost", checkLogin, repostPost);

export default postRouter;
