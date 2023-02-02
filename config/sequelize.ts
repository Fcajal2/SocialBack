import { Sequelize, SequelizeOptions } from "sequelize-typescript";
import config from "../config/config";
import User from "../models/User";
import Post from "../models/Post";
import Like from "../models/Like";
import Follow from "../models/Follow";

const local = config.local;

const sequelize = new Sequelize(
  local.database ?? "",
  local.username ?? "",
  local.password ?? "",
  {
    host: config.local.host,
    dialect: config.local.dialect ?? "mysql",
    port: config.local.port,
    models: [Post, User, Like, Follow],
  } as SequelizeOptions
);

export default sequelize;
