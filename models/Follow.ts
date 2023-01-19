import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import User from "./User";

interface FollowAttributes {
  user_id: string;
  follow_id: string;
}

@Table({
  timestamps: false,
})
class Follow extends Model<FollowAttributes> implements FollowAttributes {
  @ForeignKey(() => User)
  @Column({
    type: DataType.UUID,
  })
  user_id: string;

  @ForeignKey(() => User)
  @Column({
    type: DataType.UUID,
  })
  follow_id: string;

  @BelongsTo(() => User)
  author: User;
}

export default Follow;
