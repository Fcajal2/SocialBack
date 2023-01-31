//@ts-nocheck
import { RequestHandler } from "express";
import User from "../../models/User";
import bcrypt from "bcrypt";

type Body = {
  username: string;
  email: string;
  password: string;
  repeatPassword: string;
};

const saltRounds = 10;

const createUser: RequestHandler = async (req, res) => {
  try {
    const userAttributes = req.body as Body;

    const users = await User.findOne({
      where: { email: userAttributes.email },
    });

    if (users === null) {
      bcrypt
        .hash(userAttributes.password, saltRounds)
        .then(async function (hash) {
          await User.create({
            username: userAttributes.username,
            email: userAttributes.email,
            password: hash,
          });
          return res.status(201).json({ message: "User has been created" });
        });
    } else {
      return res
        .status(200)
        .json({ message: "There's already an account with this email" });
    }
  } catch (err) {
    return res.status(400).json(err);
  }
};

export default createUser;
