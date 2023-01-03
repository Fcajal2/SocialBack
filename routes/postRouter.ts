import { Router } from "express";
import createPost from "../controllers/postController/createPost";
import deletePost from "../controllers/postController/deletePost";
import editPost from "../controllers/postController/editPost";
import getAllPosts from "../controllers/postController/getAllPosts";
import getPost from "../controllers/postController/getPost";
import getUserPosts from "../controllers/postController/getUserPosts";

const postRouter = Router();

postRouter.post("/create", createPost);
postRouter.put("/:id", editPost);
postRouter.delete("/:id", deletePost);
postRouter.get("/", getAllPosts);
postRouter.get("/:id", getPost);
postRouter.get("/:user_id", getUserPosts);

export default postRouter;
