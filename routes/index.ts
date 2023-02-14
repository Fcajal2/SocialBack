import { Router } from "express";
import checkLogin from "../middlewares/checkLogin";
import postRouter from "./postRouter";
import userRouter from "./userRouter";

const appRouter = Router();

appRouter.use("/user", userRouter);
appRouter.use("/post", postRouter);
appRouter.post("/validatejwt", checkLogin);

export default appRouter;
