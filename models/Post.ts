import { Optional, UUIDV4 } from "sequelize";
import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  // HasMany,
  Model,
  Table,
} from "sequelize-typescript";
import Like from "./Like";
import User from "./User";

interface PostAttributes {
  id: string;
  user_id: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}

interface PostCreationAttributes extends Optional<PostAttributes, "id"> {}

@Table({
  timestamps: true,
  deletedAt: false,
})
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

  @Column
  createdAt: Date;

  @Column
  updatedAt: Date;

  @BelongsTo(() => User)
  author: User;
  @HasMany(() => Like)
  likers: Like[];
}

export default Post;
