import { RequestHandler } from "express";
import Post from "../../models/Post";

const deletePost: RequestHandler = async (req, res) => {
  try {
    const post_id = req.params.post_id;
    await Post.destroy({ where: { id: post_id, user_id: res.locals.user.id } });
    return res.status(200).json({ res: "Borrado exitosamente" });
  } catch (err) {
    return res.status(400).json(err).json({ res: "No se pudo borrar" });
  }
};

export default deletePost;
