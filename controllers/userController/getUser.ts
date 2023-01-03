import { RequestHandler } from "express";
import User from "../../models/User";

const getUser: RequestHandler = async (req, res) => {
  try {
    const User_id = req.params.id;
    const user = await User.findByPk(User_id);
    return res.status(200).json(user);
  } catch (err) {
    return res.status(400).json(err);
  }
};

export default getUser;
