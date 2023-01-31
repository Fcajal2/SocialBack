import { Sequelize, SequelizeOptions } from "sequelize-typescript";
import config from "../config/config.json";
import User from "./User";
import Post from "./Post";
import Like from "./Like";
import Follow from "./Follow";

const sequelize = new Sequelize(
  config.local.database,
  config.local.username,
  config.local.password,
  {
    host: config.local.host,
    dialect: config.local.dialect ?? "mysql",
    port: config.local.port,
    models: [Post, User, Like, Follow],
  } as SequelizeOptions
);

export default sequelize;
