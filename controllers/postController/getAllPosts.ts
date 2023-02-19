import { RequestHandler } from "express";
import User from "../../models/User";
import Post from "../../models/Post";

const getAllPosts: RequestHandler = async (req, res) => {
  try {
    //All Posts on the DB sorted by date and basic author info
    const posts = await Post.findAll({
      order: [["createdAt", "DESC"]],
      include: [
        {
          model: User,
          attributes: {
            exclude: ["id", "password", "email", "createdAt", "updatedAt"],
          },
        },
      ],
    });
    return res.status(200).json(posts);
  } catch (err) {
    return res
      .status(400)
      .json(err)
      .json({ res: "No se obtuvieron los posts" });
  }
};

export default getAllPosts;
