import { RequestHandler } from "express";
import Post from "../../models/Post";
import User from "../../models/User";
import bcrypt from "bcrypt";

const deleteUser: RequestHandler = async (req, res) => {
  try {
    const user_logged = res.locals.user as User;
    const password = req.body.password;

    if (bcrypt.compareSync(user_logged.password, password)) {
      await User.destroy({ where: { id: user_logged.id } });
      return res.status(200).json({ res: "Borrado exitosamente" });
    }

    return res.status(200).json({ res: "Passwords do not match" });

    //await Post.destroy({ where: { user_id: user_logged.id } });
  } catch (err) {
    return res.status(400).json(err);
  }
};

export default deleteUser;
