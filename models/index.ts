import { Sequelize } from "sequelize-typescript";
import config from "../config/config.json";
import User from "./User";
import Post from "./Post";

const sequelize = new Sequelize(
  config.local.database,
  config.local.username,
  config.local.password,
  {
    host: config.local.host,
    dialect: "mysql",
    port: config.local.port,
    models: [Post, User],
  }
);

export default sequelize;
