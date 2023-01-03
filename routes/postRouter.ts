import { Router } from "express";
import createPost from "../controllers/postController/createPost";
import deletePost from "../controllers/postController/deletePost";
import editPost from "../controllers/postController/editPost";
import getAllPosts from "../controllers/postController/getAllPosts";

//import deletePost
//import editPost
//import getPost

const postRouter = Router();

postRouter.post("/create", createPost);
postRouter.put("/:id", editPost)
postRouter.delete("/:id", deletePost)
//postRouter.get("/:id", getPost)
postRouter.get("/", getAllPosts)


export default postRouter;
