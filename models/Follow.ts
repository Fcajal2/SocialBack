import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
} from "sequelize-typescript";
import User from "./User";

interface FollowAttributes {
  follower_id: string;
  followed_id: string;
}

@Table({
  timestamps: true,
  createdAt: "followedAt",
  deletedAt: false,
  updatedAt: false,
})
class Follow extends Model<FollowAttributes> implements FollowAttributes {
  @PrimaryKey
  @Column
  followedAt: Date;

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
