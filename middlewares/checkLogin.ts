import { RequestHandler } from "express";
import jwt from "jsonwebtoken";
import User from "../models/User";

type Payload = {
  email: string;
  id: string;
};

const checkLogin: RequestHandler = async (req, res, next) => {
  try {
    if (!req.headers.authorization) {
      throw new Error("Not Logged in");
    }

    const token = req.headers.authorization;
    const payload = jwt.verify(
      token.split("Bearer ")[1],
      "secd21din12oi1"
    ) as Payload;
    const user = await User.findByPk(payload.id, {
      attributes: { exclude: ["password"] },
    });

    if (!user) throw new Error("User does not exist");

    res.locals.user = user;
    next();
  } catch (err) {
    const error = err as { message?: string };
    res.status(400).json({ message: error?.message });
  }
};

export default checkLogin;
