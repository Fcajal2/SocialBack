import { RequestHandler } from "express";
import User from "../../models/User";

const editUser: RequestHandler = async (req, res) => {
  const User_id = req.params.id;
  const UserAttributes = req.body;
  const response = await User.update(UserAttributes, {
    where: { id: User_id },
  });
  if (response[0] == 1) {
    return res.status(200).json({ res: "Modificacion exitosa" });
  } else
    return res
      .status(400)
      .json({ message: { error: "No se puedo modificar" } });
};

export default editUser;
