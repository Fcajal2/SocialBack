import { RequestHandler } from "express";
import Post from "../../models/Post";
import PostCreationAttributes from "../../models/Post";

const createPost: RequestHandler = async (req, res) => {
  try {
    let postAttributes = req.body as PostCreationAttributes;
    console.log(req.body);

    if (req.file) {
      //@ts-ignore
      postAttributes.image_file = req.file.key;
    }
    postAttributes.user_id = res.locals.user.id;
    await Post.create(postAttributes);
    return res.status(201).json({ res: "Post creado exitosamente" });
  } catch (err) {
    console.log(err);

    return res.status(400).json(err);
  }
};

export default createPost;
