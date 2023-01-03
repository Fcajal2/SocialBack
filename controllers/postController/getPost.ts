import { RequestHandler } from "express";
import Post from "../../models/Post";

const getPost: RequestHandler = async (req, res) => {
  try {
    const post_id = req.params.id 
    const post = await Post.findByPk(post_id);
    return res.status(200).json(post);
  } catch (err) {
    return res.status(400).json(err);
  }
};

export default getPost;
