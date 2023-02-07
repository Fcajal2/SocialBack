import { RequestHandler } from "express";
import Post from "../../models/Post";

const editPost: RequestHandler = async (req, res) => {
  
  const post_id = req.params.id;
  const PostAttributes = req.body;

  const response = await Post.update(PostAttributes, {
    where: { id: post_id, user_id: res.locals.user.id },
  });
  if (response[0] == 1) {
    return res.status(200).json({ res: "Modificacion exitosa" });
  } else
    return res
      .status(400)
      .json({ message: { error: "No se puedo modificar" } });
};

export default editPost;
