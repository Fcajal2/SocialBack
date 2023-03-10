import { RequestHandler } from "express";
import Like from "../../models/Like";
import Post from "../../models/Post";

const likePost: RequestHandler = async (req, res) => {
  try {
    const user_id = res.locals.user.id;
    const post = await Post.findByPk(req.params.post_id);

    if (post) {
      let relation = await Like.findOne({
        where: { user_id: user_id, post_id: post.id },
      });

      if (relation === null) {
        await Like.create({ user_id: user_id, post_id: post.id });
        return res.status(201).json({ message: "Liked" });
      } else {
        await Like.destroy({
          where: { user_id: user_id, post_id: post.id },
        });
        return res.status(201).json({ message: "Unliked" });
      }
    } else {
      return res.status(404).json({ message: "Post does not exist" });
    }
  } catch (err) {
    return res.status(400).json(err).json({ res: "Error al dar like" });
  }
};

export default likePost;
