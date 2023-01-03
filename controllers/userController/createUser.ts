import { RequestHandler } from "express";
import User from "../../models/User";
import UserCreationAttributes from "../../models/User";

const createUser: RequestHandler = async (req, res) => {
  try {
    const userAttributes = req.body as UserCreationAttributes;
    const user = await User.create(userAttributes);
    return res.status(201).json(user);
  } catch (err) {
    return res.status(400).json(err);
  }
};

export default createUser;
