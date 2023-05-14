/* eslint-disable prettier/prettier */
import {} from "@nestjs/common";
import {BelongsToMany, Column, HasMany, Model, Table } from "sequelize-typescript";
import { UserPhoto } from "./user-photo.model";
import { UserMessage } from "./user-message.model";
import { Role } from "./role.model";
import { UserRole } from "./user-role.model";





@Table({paranoid:true})
export class User extends Model {
  
  
  @Column
  name: string;

  @Column
  age: number;

  @Column
  gender: string;
  
  @Column
  mail:string;
  
  
  @HasMany(()=>UserPhoto)
  photo:UserPhoto[];

  @HasMany(()=>UserMessage)
  message:UserMessage[];

  @BelongsToMany(() => Role, () => UserRole)
  roles: Role[];
}