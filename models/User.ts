import { Optional, UUID, UUIDV4 } from "sequelize";
import { Column, HasMany, Model, Table } from "sequelize-typescript";
import Post from "./Post";

interface UserAttributes {
  id: string;
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
    type: UUID,
    primaryKey: true,
    defaultValue: UUIDV4,
  })
  id: string;
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
