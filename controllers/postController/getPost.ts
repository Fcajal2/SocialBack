import { RequestHandler } from "express";
import Like from "../../models/Like";
import Repost from "../../models/Repost";
import Post from "../../models/Post";

const getPost: RequestHandler = async (req, res) => {
  try {
    const post_id = req.params.id;
    const post = await Post.findByPk(post_id);
    if (!post) {
      return res.status(400).json({ res: "Post no existe" });
    }
    const likes = await Like.count({ where: { post_id: post.id } });
    const reposts = await Repost.count({ where: { post_id: post.id } });
    const response = [post, likes, reposts];

    return res.status(200).json(response);
  } catch (err) {
    return res.status(400).json(err);
  }
};

export default getPost;
