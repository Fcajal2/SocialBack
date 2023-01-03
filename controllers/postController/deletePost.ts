import { RequestHandler } from "express";
import Post from "../../models/Post";

const deletePost: RequestHandler = async (req, res) => {
  try {
    const post_id = req.params.id;
    await Post.destroy({ where: { id: post_id } });
    console.log(`deleted post with id: ${post_id}`);
    return res.status(200);
  } catch (err) {
    return res.status(400).json(err);
  }
};

export default deletePost;
