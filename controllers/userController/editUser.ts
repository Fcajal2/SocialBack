import { RequestHandler } from "express";
import User from "../../models/User";

const editUser: RequestHandler = async (req, res) => {
  try {
    const id = res.locals.user.id;
    const UserAttributes = req.body;
    if (req.file) {
      //@ts-ignore
      UserAttributes.image_file = req.file.key;
    }

    console.log(req.file);
    console.log(UserAttributes);
    const response = await User.update(UserAttributes, {
      where: { id: id },
    });
    console.log(response);
    if (response[0] == 1) {
      return res.status(200).json({ res: "Modificacion exitosa" });
    } else
      return res
        .status(400)
        .json({ message: { error: "No se puedo modificar" } });
  } catch (err) {
    return res.status(400).json(err);
  }
};

export default editUser;
