/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { User } from './user.model';  
import { InjectModel } from '@nestjs/sequelize';
import { UserPhoto } from './user-photo.model';
import { UserMessage } from './user-message.model';

@Injectable()
export class UserService {
   
    constructor(@InjectModel(User)
    private  userModel,@InjectModel(UserPhoto) private userPhotoModel,@InjectModel(UserMessage) private UserMessageModel){}

    getAll() {
       return this.userModel.findAll();
    }
    create(data){
       const newUser=new User();
       newUser.name=data.name; 
       newUser.age=data.age; 
       newUser.gender=data.gender; 
       return newUser.save();
    }

    findOne(dataid:number){
      return this.userModel.findOne({
        where: {id:dataid},
      });
    }

    async remove(id: number){
      const user = await this.findOne(id);
      await user.destroy();
      return  "Silindi";
    }

    async createPhoto(data,userId){
      data.userId = userId;
      await this.userPhotoModel.create(data);
    }

    async createUserMessage(data,userId){
          data.userId=userId;
          await this.UserMessageModel.create(data);
    }

   

}
