import {
  AllowNull,
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
} from "sequelize-typescript";
import Post from "./Post";
import User from "./User";

interface RepostAttributes {
  reposter_id: string;
  post_id: string;
}

@Table({
  timestamps: true,
  createdAt: "repostedAt",
  deletedAt: false,
  updatedAt: false,
})
class Repost extends Model<RepostAttributes> implements RepostAttributes {
  @PrimaryKey
  @Column
  repostedAt: Date;

  @ForeignKey(() => User)
  @AllowNull
  @Column({
    type: DataType.UUID,
  })
  reposter_id: string;

  @ForeignKey(() => Post)
  @Column({
    type: DataType.UUID,
  })
  post_id: string;

  @BelongsTo(() => User)
  author: User;
  @BelongsTo(() => Post)
  post: Post;
}

export default Repost;
