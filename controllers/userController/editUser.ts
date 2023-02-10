import { RequestHandler } from "express";
import User from "../../models/User";

const editUser: RequestHandler = async (req, res) => {
  const id = res.locals.user.id;

  const UserAttributes = req.body;
  if (req.file) {
    UserAttributes.image_file = req.file.filename;
  }

  const response = await User.update(UserAttributes, {
    where: { id: id },
  });
  if (response[0] == 1) {
    return res.status(200).json({ res: "Modificacion exitosa" });
  } else
    return res
      .status(400)
      .json({ message: { error: "No se puedo modificar" } });
};

export default editUser;
