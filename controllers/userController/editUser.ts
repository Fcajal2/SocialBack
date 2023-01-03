import { RequestHandler } from "express";
import User from "../../models/User";

const editUser: RequestHandler = async (req, res) => {
  try {
    const User_id = req.params.id;
    const UserAttributes = req.body;
    const response = await User.update(UserAttributes, {
      where: { id: User_id },
    });
    return res.status(200).json(response);
  } catch (err) {
    return res.status(400).json(err);
  }
};

export default editUser;
