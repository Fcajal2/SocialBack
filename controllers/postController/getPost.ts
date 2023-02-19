import { RequestHandler } from "express";
import Like from "../../models/Like";
import Repost from "../../models/Repost";
import Post from "../../models/Post";
import User from "../../models/User";

const getPost: RequestHandler = async (req, res) => {
  try {
    const post_id = req.params.post_id;
    const post = await Post.findByPk(post_id, {
      include: [
        {
          model: User,
          attributes: {
            exclude: ["id", "password", "email", "createdAt", "updatedAt"],
          },
        },
      ],
    });
    if (!post) {
      return res.status(400).json({ res: "Post does not exist" });
    }
    const likes = await Like.count({ where: { post_id: post.id } });
    const reposts = await Repost.count({ where: { post_id: post.id } });
    const response = { post, likes, reposts };

    return res.status(200).json(response);
  } catch (err) {
    return res.status(400).json(err).json({ res: "No se obtuvo el post" });
  }
};

export default getPost;
