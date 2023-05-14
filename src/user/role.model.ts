/* eslint-disable prettier/prettier */
import { Model, Column, Table, BelongsToMany } from 'sequelize-typescript';
import { User } from './user.model';
import { UserRole } from './user-role.model';

@Table({ tableName: 'roles' })
export class Role extends Model<Role> {
  @Column
  name: string;

  @BelongsToMany(() => User, () => UserRole)
  users: User[];
}