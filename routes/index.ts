import { Router } from "express";
import postRouter from "./postRouter";
import userRouter from "./userRouter";

const appRouter = Router();

appRouter.use("/user", userRouter);
appRouter.use("/post", postRouter);

export default appRouter;
