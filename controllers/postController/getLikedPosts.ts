import { RequestHandler } from "express";
import User from "../../models/User";
import Post from "../../models/Post";
import Like from "../../models/Like";

const getLikedPosts: RequestHandler = async (req, res) => {
  try {
    const user_id = req.params.user_id;

    //Posts reposted by the user, includes basic info of author
    const likes = await Like.findAll({
      order: [["likedAt", "DESC"]],
      where: { user_id: user_id },
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

    return res.status(200).json(likes);
  } catch (err) {
    return res.status(400).json(err);
  }
};

export default getLikedPosts;
