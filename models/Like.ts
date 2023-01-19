import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import Post from "./Post";
import User from "./User";

interface LikeAttributes {
  user_id: string;
  post_id: string;
}

@Table({
  timestamps: false,
})
class Like extends Model<LikeAttributes> implements LikeAttributes {
  @ForeignKey(() => User)
  @Column({
    type: DataType.UUID,
  })
  user_id: string;

  @ForeignKey(() => Post)
  @Column({
    type: DataType.UUID,
  })
  post_id: string;

  @BelongsTo(() => User)
  author: User;
}

export default Like;
