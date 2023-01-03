import { Optional, UUIDV4 } from "sequelize";
import {
  BelongsTo,
  Column,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import User from "./User";

interface PostAttributes {
  id: number;
  user_id: number;
  content: string;
  likes: number;
}

interface PostCreationAttributes extends Optional<PostAttributes, "id"> {}

@Table
class Post
  extends Model<PostAttributes, PostCreationAttributes>
  implements PostAttributes
{
  @Column({
    primaryKey: true,
    defaultValue: UUIDV4,
  })
  id: number;
  @ForeignKey(() => User)
  @Column
  user_id: number;
  @Column
  content: string;
  @Column({
    defaultValue: 0,
  })
  likes: number;

  @BelongsTo(() => User)
  author: User;
}

export default Post;
