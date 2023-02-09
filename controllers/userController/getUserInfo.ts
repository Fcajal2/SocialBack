import { RequestHandler } from "express";
import Follow from "../../models/Follow";
import User from "../../models/User";

type Info = {
  info: User;
  followers: number;
  following: number;
};

const getUserInfo: RequestHandler = async (req, res) => {
  try {
    const info = await User.findByPk(req.params.id, {
      attributes: { exclude: ["password"] },
    });
    if (!info) {
      return res.status(400).json({ res: "Usuario no existente" });
    }
    const followers = await Follow.count({ where: { followed_id: info.id } });
    const following = await Follow.count({ where: { follower_id: info.id } });

    const response: Info = { info, followers, following };
    return res.status(200).json(response);
  } catch (err) {
    return res.status(400).json(err);
  }
};

export default getUserInfo;
