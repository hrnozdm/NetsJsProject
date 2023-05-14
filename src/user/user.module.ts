/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './user.model';
import { UserPhoto } from './user-photo.model';
import { UserMessage } from './user-message.model';


@Module({
    imports:[SequelizeModule.forFeature([User,UserPhoto,UserMessage])],
    providers:[UserService],
    controllers:[UserController],
    exports: [SequelizeModule]
})
export class UserModule {}
