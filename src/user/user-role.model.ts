/* eslint-disable prettier/prettier */
import { Model, Table, ForeignKey } from 'sequelize-typescript';
import { User } from './user.model';
import { Role } from './role.model';

@Table({ tableName: 'user_roles' })
export class UserRole extends Model<UserRole> {
  @ForeignKey(() => User)
  userId: number;

  @ForeignKey(() => Role)
  roleId: number;
}