import { RequestHandler } from "express";
import Repost from "../../models/Repost";
import Post from "../../models/Post";

const getUserPosts: RequestHandler = async (req, res) => {
  try {
    let posts;
    let reposts;

    if (req.params.user_id) {
      const user = req.params.user_id;
      posts = await Post.findAll({ where: { user_id: user } });
      reposts = await Repost.findAll({ where: { user_id: user } });
    } else {
      const id = res.locals.user.id;
      posts = await Post.findAll({ where: { user_id: id } });
      reposts = await Repost.findAll({ where: { user_id: id } });
    }

    const response = [posts, reposts];
    return res.status(200).json(response);
  } catch (err) {
    return res.status(400).json(err);
  }
};

export default getUserPosts;
