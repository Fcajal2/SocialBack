import { RequestHandler } from "express";
import User from "../../models/User";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

type Login = {
  email: string;
  password: string;
};

const loginUser: RequestHandler = async (req, res) => {
  try {
    const check = req.body as Login;
    if (!check.email || !check.password)
      throw new Error("A valid email and password must be provided");
    const user = await User.findOne({
      where: { email: check.email },
    });
    if (user != null) {
      const isSame = bcrypt.compareSync(check.password, user.password);
      if (isSame) {
        const payload = {
          email: user.email,
          id: user.id,
        };
        const token = jwt.sign(payload, "secd21din12oi1");
        return res.status(200).json({
          payload: {
            token,
          },
        });
      } else {
        throw new Error("Incorrect email or password");
      }
    } else {
      throw new Error("Incorrect email or password");
    }
  } catch (error: any) {
    res.statusMessage = error.message;
    res.status(400).json({ message: error.message });
  }
};

export default loginUser;
