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
import getLikedPosts from "../controllers/postController/getLikedPosts";
import uploadS3 from "../middlewares/uploadS3";

const postRouter = Router();

postRouter.post("/create", uploadS3.single("image_file"), checkLogin, createPost);
postRouter.delete("/:post_id", checkLogin, deletePost);
postRouter.put("/:post_id", uploadS3.single("image_file"), checkLogin, editPost);
postRouter.get("/all", getAllPosts);
postRouter.get("/follows", checkLogin, getFollowedPosts);
postRouter.get("/:user_id/likes", getLikedPosts);
postRouter.get("/:post_id", getPost);
postRouter.post("/:post_id/like", checkLogin, likePost);
postRouter.post("/:post_id/repost", checkLogin, repostPost);

export default postRouter;
