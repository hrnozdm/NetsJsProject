/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';


@Controller('user')
export class UserController {
    constructor(private userService:UserService){}

    @Post('add-user')
     create(@Body() data){
       return this.userService.create(data);
    }

    @Get('get-user')
     getAll(){
      return this.userService.getAll();
     }

     @Get('findOne-user/:id')
     findOne(@Param('id') id){
        return this.userService.findOne(id);
     }

     @Get('remove-user/:id')
     destroy(@Param('id') id){
        return this.userService.remove(id);
     }

     @Post('photo-add/:userId')
     createPhoto(@Body() data,@Param('userId') userId){
      return this.userService.createPhoto(data,userId);
         
     }

     @Post('message-add/:userId')
     createMessage(@Body() data,@Param('userId') userId){
          return this.userService.createUserMessage(data,userId);
     }
     
}
