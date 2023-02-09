import { RequestHandler } from "express";
import Follow from "../../models/Follow";
import User from "../../models/User";

const getFollowers: RequestHandler = async (req, res) => {
  try {
    const info = await User.findByPk(req.params.id);
    if (!info) {
      return res.status(400).json({ res: "Usuario no existente" });
    }
    info.password = "";
    const followers = await Follow.findAll({ where: { followed_id: info.id } });

    return res.status(200).json(followers);
  } catch (err) {
    return res.status(400).json(err);
  }
};

export default getFollowers;
