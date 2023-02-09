import { RequestHandler } from "express";
import Follow from "../../models/Follow";
import User from "../../models/User";

const getUserInfo: RequestHandler = async (req, res) => {
  try {
    const info = await User.findByPk(req.params.id);
    if (!info) {
      return res.status(400).json({ res: "Usuario no existente" });
    }
    info.password = "";
    const followers = await Follow.count({ where: { followed_id: info.id } });
    const following = await Follow.count({ where: { follower_id: info.id } });

    const response = [info, followers, following];
    return res.status(200).json(response);
  } catch (err) {
    return res.status(400).json(err);
  }
};

export default getUserInfo;
