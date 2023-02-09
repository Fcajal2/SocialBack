import { RequestHandler } from "express";
import Repost from "../../models/Repost";
import Post from "../../models/Post";

const getUserPosts: RequestHandler = async (req, res) => {
  try {
    const user = req.params.user_id;
    const posts = await Post.findAll({ where: { user_id: user } });
    const reposts = await Repost.findAll({ where: { user_id: user } });

    const response = [posts, reposts];
    return res.status(200).json(response);
  } catch (err) {
    return res.status(400).json(err);
  }
};

export default getUserPosts;
