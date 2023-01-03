import { RequestHandler } from "express";
import Post from "../../models/Post";

const getAllPosts: RequestHandler = async (req, res) => {
  try {
    const posts = await Post.findAll();
    return res.status(200).json(posts);
  } catch (err) {
    return res.status(400).json(err);
  }
};

export default getAllPosts;
