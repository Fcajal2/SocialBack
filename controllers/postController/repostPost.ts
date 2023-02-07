import { RequestHandler } from "express";
import Repost from "../../models/Repost";
import Post from "../../models/Post";

const repostPost: RequestHandler = async (req, res) => {
  const user = res.locals.user;
  const post = await Post.findByPk(req.params.id);

  if (post) {
    let relation = await Repost.findOne({
      where: { user_id: user.id, post_id: post.id },
    });

    if (relation === null) {
      await Repost.create({ user_id: user.id, post_id: post.id });
      return res.status(201).json({ message: "Reposted" });
    } else {
      await Repost.destroy({
        where: { user_id: user.id, post_id: post.id },
      });
      return res.status(201).json({ message: "Unreposted" });
    }
  } else {
    return res.status(404).json({ message: "Post does not exist" });
  }
};

export default repostPost;
