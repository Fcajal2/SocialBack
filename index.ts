import express from "express";
import sequelize from "./config/sequelize";
import cors from "cors";
import appRouter from "./routes";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", appRouter);
app.get("/", express.static(`${__dirname}/public`));

app.listen(3000, async () => {
  await sequelize.authenticate();
  await sequelize.sync();
  console.log("DB connected and app listen");
});
