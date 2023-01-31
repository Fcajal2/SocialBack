import { Router } from "express";
import meRouter from "./meRouter";
import postRouter from "./postRouter";
import userRouter from "./userRouter";

const appRouter = Router();

appRouter.use("/user", userRouter);
appRouter.use("/post", postRouter);
appRouter.use("/myProfile", meRouter);

export default appRouter;
