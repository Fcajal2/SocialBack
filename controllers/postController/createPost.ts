import { RequestHandler } from "express";
import Post from "../../models/Post";
import PostCreationAttributes from "../../models/Post";
import User from "../../models/User";

const createPost: RequestHandler = async (req, res) => {
  try {
    const postAttributes = req.body as PostCreationAttributes;
    const post = await Post.create(postAttributes);
    return res.status(201).json(post);
  } catch (err) {
    return res.status(400).json(err);
  }
};

export default createPost;
