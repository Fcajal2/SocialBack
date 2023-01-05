import express from "express";
import sequelize from "./models";
import cors from "cors";
import appRouter from "./routes";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", appRouter);

app.listen(3000, async () => {
  await sequelize.authenticate();
  console.log("DB connected and app listen");
});
