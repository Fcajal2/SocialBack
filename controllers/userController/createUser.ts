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

    if (userAttributes.password !== userAttributes.repeatPassword) {
      throw new Error("Passwords do not match");
    } else {
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
      } else throw new Error("There's already an account with this email");
    }
  } catch (err: any) {
    res.statusMessage = err.message;
    res.status(400).json(err);
  }
};

export default createUser;
