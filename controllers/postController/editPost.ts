import { RequestHandler } from "express";
import Post from "../../models/Post";

const editPost: RequestHandler = async (req, res) => {
  try {
    const post_id = req.params.post_id;
    const postAttributes = req.body;

    if (req.file) {
      //@ts-ignore
      postAttributes.image_file = req.file.key;
    }

    const response = await Post.update(postAttributes, {
      where: { id: post_id, user_id: res.locals.user.id },
    });
    if (response[0] == 1) {
      return res.status(200).json({ res: "Modificacion exitosa" });
    } else
      return res
        .status(400)
        .json({ message: { error: "No se puedo modificar" } });
  } catch (err) {
    return res.status(400).json(err).json({ res: "No se pudo editar" });
  }
};

export default editPost;
