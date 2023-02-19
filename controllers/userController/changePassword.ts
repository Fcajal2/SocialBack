import { RequestHandler } from "express";
import User from "../../models/User";
import bcrypt from "bcrypt";

type Body = {
  oldPassword: string;
  newPassword: string;
  repeatPassword: string;
};

const saltRounds = 10;

const changePassword: RequestHandler = async (req, res) => {
  try {
    const body: Body = req.body;
    const user = await User.findByPk(res.locals.user.id);
    let response;

    if (user) {
      if (bcrypt.compareSync(user.password, body.oldPassword)) {
        if (body.newPassword === body.repeatPassword) {
          bcrypt.hash(body.newPassword, saltRounds).then(async function (hash) {
            response = await User.update(
              { password: hash },
              { where: { id: user.id } }
            );
            if (response[0] == 1) {
              return res
                .status(200)
                .json({ res: "Password succesfuly changed" });
            } else return res.status(400).json({ message: { error: "Change unsuccesful" } });
          });
        } else {
          return res.status(200).json({ message: "Passwords do not match" });
        }
      } else {
        return res.status(200).json({ message: "Incorrect Password" });
      }
    } else {
      return res.status(200).json({ message: "User does not exist" });
    }
  } catch (err) {
    return res
      .status(400)
      .json(err)
      .json({ res: "No se pudo cambiar contraseña" });
  }
};

export default changePassword;
