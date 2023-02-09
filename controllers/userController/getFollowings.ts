import { RequestHandler } from "express";
import Follow from "../../models/Follow";
import User from "../../models/User";

const getFollowings: RequestHandler = async (req, res) => {
  try {
    const info = await User.findByPk(req.params.id);
    if (!info) {
      return res.status(400).json({ res: "Usuario no existente" });
    }
    info.password = "";
    const following = await Follow.findAll({ where: { follower_id: info.id } });

    return res.status(200).json(following);
  } catch (err) {
    return res.status(400).json(err);
  }
};

export default getFollowings;
