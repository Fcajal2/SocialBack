import { RequestHandler } from "express";
import Follow from "../../models/Follow";
import User from "../../models/User";

const followUser: RequestHandler = async (req, res) => {
  try {
    const user = res.locals.user;
    const follow = await User.findByPk(req.params.id);

    if (follow) {
      let relation = await Follow.findOne({
        where: { follower_id: user.id, followed_id: follow.id },
      });

      if (relation === null) {
        user.following++;
        follow.followers++;
        await Follow.create({ follower_id: user, followed_id: follow.id });
        return res.status(201).json({ message: "Followed" });
      } else {
        user.following--;
        follow.followers--;
        await Follow.destroy({
          where: { followed_id: user.id, follower_id: follow.id },
        });
        return res.status(201).json({ message: "Unfollowed" });
      }
    } else {
      return res.status(404).json({ message: "User does not exist" });
    }
  } catch (err) {
    return res.status(400).json(err);
  }
};

export default followUser;
