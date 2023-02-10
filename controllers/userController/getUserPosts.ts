import { RequestHandler } from "express";
import Repost from "../../models/Repost";
import Post from "../../models/Post";
import User from "../../models/User";

const getUserPosts: RequestHandler = async (req, res) => {
  try {
    const user = req.params.user_id;

    //Posts made by the user
    const posts = await Post.findAll({
      order: [["createdAt", "DESC"]],
      where: { user_id: user },
      include: [
        {
          model: User,
          attributes: {
            exclude: ["password", "email", "createdAt", "updatedAt"],
          },
        },
      ],
    });

    //Posts reposted by the user, includes info of original author
    const reposts = await Repost.findAll({
      order: [["repostedAt", "DESC"]],
      where: { user_id: user },
      include: [
        {
          model: User,
          attributes: {
            exclude: ["password", "email", "createdAt", "updatedAt"],
          },
        },
        {
          model: Post,
          attributes: {
            exclude: ["user_id", "updatedAt"],
          },
        },
      ],
      attributes: { exclude: ["user_id", "post_id"] },
    });

    const response = { posts, reposts };
    return res.status(200).json(response);
  } catch (err) {
    return res.status(400).json(err);
  }
};

export default getUserPosts;
