import { RequestHandler } from "express";
import Post from "../../models/Post";
import User from "../../models/User";

const myProfile: RequestHandler = async (req, res) => {
  try {
    const id = res.locals.user.id;
    const posts = await Post.findAll({ where: { user_id: id } });
    const response = posts; // add reposts
    return res.status(200).json(response);
  } catch (err) {
    return res.status(400).json(err);
  }
};

export default myProfile;
