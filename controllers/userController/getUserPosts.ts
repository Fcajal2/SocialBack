import { RequestHandler } from "express";
import Repost from "../../models/Repost";
import Post from "../../models/Post";
import User from "../../models/User";

const getUserPosts: RequestHandler = async (req, res) => {
  try {
    const user_id = req.params.user_id;

    //Posts made by the user and reposted by them, with info about each author
    const posts = await User.findByPk(user_id, {
      include: [
        {
          model: Post,
          order: [["createdAt", "DESC"]],
          include: [
            {
              model: User,
              attributes: {
                exclude: ["email", "password", "createdAt"],
              },
            },
          ],
          attributes: { exclude: ["user_id"] },
        },
        {
          model: Repost,
          order: [["repostedAt", "DESC"]],
          attributes: { exclude: ["reposter_id", "post_id"] },
          include: [
            {
              model: Post,
              include: [
                {
                  model: User,
                  attributes: {
                    exclude: ["email", "password", "createdAt"],
                  },
                },
              ],
              attributes: { exclude: ["user_id"] },
            },
          ],
        },
      ],
      attributes: {
        exclude: ["email", "password", "createdAt", "username", "image_file"],
      },
    });

    return res.status(200).json(posts);
  } catch (err) {
    return res.status(400).json(err);
  }
};

export default getUserPosts;
