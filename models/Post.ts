import { Optional, UUIDV4 } from "sequelize";
import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import User from "./User";

interface PostAttributes {
  id: string;
  user_id: string;
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
    type: DataType.UUID,
    primaryKey: true,
    defaultValue: UUIDV4,
  })
  id: string;
  @ForeignKey(() => User)
  @Column({
    type: DataType.UUID,
  })
  user_id: string;
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
