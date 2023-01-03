import { RequestHandler } from "express";
import Post from "../../models/Post";

const getUserPosts: RequestHandler = async (req, res) => {
  try {
    const user = req.params.user_id;
    const posts = await Post.findAll({ where: { user_id: user } });
    return res.status(200).json(posts);
  } catch (err) {
    return res.status(400).json(err);
  }
};

export default getUserPosts;
