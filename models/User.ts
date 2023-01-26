import { Optional, UUID, UUIDV4 } from "sequelize";
import { Column, HasMany, Model, Table, Unique } from "sequelize-typescript";
import Follow from "./Follow";
import Like from "./Like";
import Post from "./Post";

interface UserAttributes {
  id: string;
  username: string;
  email: string;
  password: string;
  image_file: string;
  followers: number;
  following: number;
}

interface UserCreationAttributes
  extends Optional<
    UserAttributes,
    "id" | "image_file" | "followers" | "following"
  > {}

@Table({
  timestamps: false,
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
  @Unique
  @Column
  email: string;
  @Column
  password: string;
  @Column
  image_file: string;
  @Column({
    defaultValue: 0,
  })
  followers: number;
  @Column({
    defaultValue: 0,
  })
  following: number;

  @HasMany(() => Post)
  writtenPosts: Post[];
  @HasMany(() => Like)
  liked: Like[];
  @HasMany(() => Follow)
  follower: Follow[];
  @HasMany(() => Follow)
  followeds: Follow[];
}

export default User;
