import { RequestHandler } from "express";
import Post from "../../models/Post";
import User from "../../models/User";

const deleteUser: RequestHandler = async (req, res) => {
  try {
    const user_logged = res.locals.user as User
    await Post.destroy({ where: { user_id: user_logged.id } });
    
    await User.destroy({ where: { id: user_logged.id } });
    console.log(`deleted User with id: ${user_logged.id}`);
    return res.status(200).json({ res: "Borrado exitosamente" });
  } catch (err) {
    return res.status(400).json(err);
  }
};

export default deleteUser;
