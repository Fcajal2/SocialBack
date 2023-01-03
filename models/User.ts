import { Optional, UUIDV4 } from "sequelize";
import {
  Column,
  HasMany,
  Model,
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
  @Column({
    primaryKey: true,
    defaultValue: UUIDV4,
  })
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
