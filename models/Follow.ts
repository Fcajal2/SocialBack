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
  follower_id: string;
  followed_id: string;
}

@Table({
  timestamps: false,
})
class Follow extends Model<FollowAttributes> implements FollowAttributes {
  @ForeignKey(() => User)
  @Column({
    type: DataType.UUID,
  })
  follower_id: string;

  @ForeignKey(() => User)
  @Column({
    type: DataType.UUID,
  })
  followed_id: string;

  @BelongsTo(() => User)
  follower: User;
  @BelongsTo(() => User)
  followed: User;
}

export default Follow;
