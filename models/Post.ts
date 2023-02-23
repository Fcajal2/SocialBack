import { Optional, UUIDV4 } from "sequelize";
import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from "sequelize-typescript";
import Like from "./Like";
import Repost from "./Repost";
import User from "./User";

interface PostAttributes {
  id: string;
  user_id: string;
  content: string;
  image_file: string;
  createdAt: Date;
}

interface PostCreationAttributes extends Optional<PostAttributes, "id"> {}

@Table({
  timestamps: true,
  deletedAt: false,
  updatedAt: false,
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

  @Column({
    allowNull: true,
  })
  image_file: string;

  @Column
  createdAt: Date;

  @BelongsTo(() => User)
  author: User;
  @HasMany(() => Like)
  likers: Like[];
  @HasMany(()=> Repost)
  reposts: Repost[];
}

export default Post;
