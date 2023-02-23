import { Optional, UUID, UUIDV4 } from "sequelize";
import { Column, HasMany, Model, Table, Unique } from "sequelize-typescript";
import Follow from "./Follow";
import Like from "./Like";
import Post from "./Post";
import Repost from "./Repost";

interface UserAttributes {
  id: string;
  username: string;
  email: string;
  password: string;
  image_file: string;
  createdAt: Date;
}

interface UserCreationAttributes extends Optional<UserAttributes, "id"> {}

@Table({
  timestamps: true,
  createdAt: true,
  deletedAt: false,
  updatedAt: false,
})
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

  @Column({
    defaultValue: "default.png",
  })
  image_file: string;

  @Column
  createdAt: Date;

  @HasMany(() => Post)
  writtenPosts: Post[];
  @HasMany(() => Like)
  liked: Like[];
  @HasMany(() => Repost)
  reposts: Repost[];
  @HasMany(() => Follow)
  followers: Follow[];
  @HasMany(() => Follow)
  followeds: Follow[];
}

export default User;
