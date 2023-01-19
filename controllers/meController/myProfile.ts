import { RequestHandler } from "express";
import Post from "../../models/Post";
import User from "../../models/User";

const myProfile: RequestHandler = async (req, res) => {
    try {
        const User_id = req.params.id;
        const user = await User.findByPk(User_id);
        const posts = await Post.findAll({ where: { user_id: User_id } });
        const response = [user, posts]; 
        return res.status(200).json(response);
      } catch (err) {
        return res.status(400).json(err);
      }
};

export default myProfile;
