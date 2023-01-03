import { Router } from "express"
import createUser from "../controllers/userController/createUser"
import deleteUser from "../controllers/userController/deleteUser";
import editUser from "../controllers/userController/editUser";
import getUser from "../controllers/userController/getUser";


const userRouter = Router();

userRouter.post("/register", createUser)
userRouter.put("/:id", editUser)
userRouter.delete("/:id", deleteUser)
userRouter.get("/:id", getUser)

export default userRouter;