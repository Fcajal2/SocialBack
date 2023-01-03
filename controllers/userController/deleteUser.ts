import { RequestHandler } from "express";
import User from "../../models/User";

const deleteUser: RequestHandler = async (req, res) => {
  try {
    const User_id = req.params.id;
    await User.destroy({ where: { id: User_id } });
    console.log(`deleted User with id: ${User_id}`);
    return res.status(200);
  } catch (err) {
    return res.status(400).json(err);
  }
};

export default deleteUser;
