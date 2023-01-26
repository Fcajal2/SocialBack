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
  likes: number;
  reposts: number;
  //commenting: string;
}

interface PostCreationAttributes extends Optional<PostAttributes, "id"> {}

@Table({
  timestamps: false,
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
  @Column({
    type: DataType.DATE,
  })
  date_posted: Date;
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
  @Column({
    defaultValue: 0,
  })
  reposts: number;
  //@ForeignKey(() => Post)
  //@Column({
  //  type: DataType.UUID,
  //  defaultValue: " ",
  //})
  //commenting: string;

  @BelongsTo(() => User)
  author: User;
  @HasMany(() => Like)
  likers: Like[];
  
  
  
  // @BelongsTo(() => Post)
  // replying: Post;
  // @HasMany(() => Post)
  // comments: Post;
}

export default Post;
