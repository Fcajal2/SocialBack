import { Router } from "express";
import deleteUser from "../controllers/meController/deleteUser";
import editUser from "../controllers/meController/editUser";
import myProfile from "../controllers/meController/myProfile";
import checkLogin from "../middlewares/checkLogin";

const meRouter = Router();

meRouter.get("/", checkLogin, myProfile);
meRouter.put("/", checkLogin, editUser);
meRouter.delete("/", checkLogin, deleteUser);

export default meRouter;
