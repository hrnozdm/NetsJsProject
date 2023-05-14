/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './user/user.model';
import { UserPhoto } from './user/user-photo.model';
import { UserMessage } from './user/user-message.model';
import { RoleController } from './role/role.controller';
import { RoleService } from './role/role.service';
import { RoleModule } from './role/role.module';



@Module({
  imports: [UserModule, SequelizeModule.forRoot({
    dialect: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'harun3232',
    database: 'nestuser',
    models: [User,UserPhoto,UserMessage],
    autoLoadModels: true,
    synchronize: true,
    sync:{
      alter:true,
    }
  }),
  UserModule,
  UserPhoto,
  UserMessage,
  RoleModule
],
  controllers: [AppController, RoleController],
  providers: [AppService, RoleService],
})
export class AppModule {}
