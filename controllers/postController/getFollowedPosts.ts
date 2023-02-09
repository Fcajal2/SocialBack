import { RequestHandler } from "express";
import User from "../../models/User";
import Post from "../../models/Post";
import Follow from "../../models/Follow";
import Repost from "../../models/Repost";

const getFollowedPosts: RequestHandler = async (req, res) => {
  try {
    const user_id = res.locals.user.id;
    //const user_id = req.params.user_id;

    //Posts made by the author
    const posts = await Post.findAll({
      order: [["createdAt", "DESC"]],
      where: { user_id: user_id },
    });

    //Posts reposted by the user, includes basic info of author
    const reposts = await Repost.findAll({
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
          order: [["createdAt", "DESC"]],
          attributes: {
            exclude: ["user_id", "updatedAt"],
          },
        },
      ],
      attributes: { exclude: ["repostedAt", "user_id", "post_id"] },
    });

    //Posts made by other users that the current wild
    /* const follows = await Follow.findAll({
      where: { follower_id: user_id },
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
        /* {
          model: Repost,
          include: [
            {
              model: User,
              attributes: {
                exclude: ["password", "email", "createdAt", "updatedAt"],
              },
            },
            {
              model: Post,
              order: [["createdAt", "DESC"]],
              attributes: {
                exclude: ["user_id", "updatedAt"],
              },
            },
          ],
        },
      ],
    });*/
    const response = { posts, /* follows */ reposts };
    return res.status(200).json(response);
  } catch (err) {
    return res.status(400).json(err);
  }
};

export default getFollowedPosts;
