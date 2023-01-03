import { RequestHandler } from "express";
import Post from "../../models/Post";

const editPost: RequestHandler = async (req, res) => {
  try {
    const post_id = req.params.id;
    const postAttributes = req.body;
    const response = await Post.update(postAttributes, {
      where: { id: post_id },
    });
    return res.status(200).json(response);
  } catch (err) {
    return res.status(400).json(err);
  }
};

export default editPost;
