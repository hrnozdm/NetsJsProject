/* eslint-disable prettier/prettier */
import { BelongsTo, Column, ForeignKey, Table,Model } from "sequelize-typescript";
import { User } from "./user.model";




@Table({paranoid:true})
export class UserMessage extends Model{

  @ForeignKey(()=>User)
   userId:number;

  @Column
  content:string;   

 
 
  @BelongsTo(()=>User)
  user:User[];
}

