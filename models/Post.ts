import { Optional } from "sequelize";
import {
  BelongsTo,
  Column,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
} from "sequelize-typescript";
import User from "./User";

interface PostAttributes {
  id: number;
  user_id: number;
  date_posted: Date;
  content: string;
  //likes: number; <-- dejar para despues, averiguar como
}

interface PostCreationAttributes
  extends Optional<PostAttributes, "id" | "date_posted"> {}

@Table
class Post
  extends Model<PostAttributes, PostCreationAttributes>
  implements PostAttributes
{
  @PrimaryKey
  @Column
  id: number;
  @ForeignKey(() => User)
  @Column
  user_id: number;
  @Column
  date_posted: Date;
  @Column
  content: string;

  @BelongsTo(() => User)
  author: User;
}

export default Post;
