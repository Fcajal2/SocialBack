import { Router } from "express";
import createPost from "../controllers/postController/createPost";

//import deletePost
//import editPost
//import getPost

const postRouter = Router();

postRouter.post("/create", createPost);
//userRouter.put("/:id", editPost)
//userRouter.delete("/:id", deletePost)
//userRouter.get("/:id", getUser)

export default postRouter;
