import { RequestHandler } from "express";
import Post from "../../models/Post";
import PostCreationAttributes from "../../models/Post";

const createPost: RequestHandler = async (req, res) => {
  try {
    let postAttributes = req.body as PostCreationAttributes;
    postAttributes.user_id = res.locals.user.id;
    const post = await Post.create(postAttributes);
    return res.status(201).json(post);
  } catch (err) {
    return res.status(400).json(err);
  }
};

export default createPost;
