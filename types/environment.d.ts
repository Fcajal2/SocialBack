import { Dialect } from "sequelize";

export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DB_USERNAME: string;
      DB_PASSWORD: string;
      DB_DATABASE: string;
      DB_HOST: string;
      DB_DIALECT: Dialect;
      DB_PORT: number;
    }
  }
}
