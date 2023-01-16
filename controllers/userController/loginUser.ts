import { RequestHandler } from "express";
import User from "../../models/User";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

type Login = {
  email: string;
  password: string;
};

const loginUser: RequestHandler = async (req, res) => {
  const check = req.body as Login;
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
      return res.status(400).json({ message: "Incorrect email or password" });
    }
  } else {
    return res.status(400).json({ message: "Incorrect email or password" });
  }
};

export default loginUser;
