import { Optional } from "sequelize";
import {
  Column,
  HasMany,
  Model,
  PrimaryKey,
  Table,
} from "sequelize-typescript";
import Post from "./Post";

interface UserAttributes {
  id: number;
  username: string;
  email: string;
  password: string;
  image_file: string;
}

interface UserCreationAttributes
  extends Optional<UserAttributes, "id" | "image_file"> {}

@Table
class User
  extends Model<UserAttributes, UserCreationAttributes>
  implements UserAttributes
{
  @PrimaryKey
  @Column
  id: number;
  @Column
  username: string;
  @Column
  email: string;
  @Column
  password: string;
  @Column
  image_file: string;

  @HasMany(() => Post)
  writtenPosts: Post[];
}

export default User;
