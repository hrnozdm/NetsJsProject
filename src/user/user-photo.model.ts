/* eslint-disable prettier/prettier */
import { BelongsTo, Column, ForeignKey, Table,Model } from "sequelize-typescript";
import { User } from "./user.model";




@Table({paranoid:true})
export class UserPhoto extends Model{
  @ForeignKey(()=>User)
  userId:number;


  @Column
  photoName:string;

  
  @BelongsTo(()=>User)
  user:User[];
}