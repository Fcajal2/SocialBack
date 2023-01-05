import { RequestHandler } from "express";
import User from "../../models/User";
import UserCreationAttributes from "../../models/User";
import bcrypt from "bcrypt";

const saltRounds = 10;

const createUser: RequestHandler = async (req, res) => {
  try {
    const userAttributes = req.body as UserCreationAttributes;
    
    bcrypt.genSalt(saltRounds, async function (_err, salt) {
      bcrypt.hash(userAttributes.password, salt, async function (_err, hash) {
        userAttributes.password = hash;
        console.log(userAttributes.password);
      });
      const user = await User.create(userAttributes);
      return res.status(201).json(user)//{ message: "User has been created" });
    });
  } catch (err) {
    return res.status(400).json(err);
  }
};

export default createUser;
