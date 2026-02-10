import { HttpCode, Header, Controller, Get, Query, Req, Post, Body, Param, Res,HttpStatus  } from '@nestjs/common';
import type { Response, Request } from 'express';
import { User } from 'src/interfaces/interfaces';
import { UserService } from './user.service';

@Controller('')
export class UserController {  
  constructor(private readonly userService: UserService) {}

  @Get('/users')
  findAllUsers() {
    return this.userService.findAll()
  }
  @Get('/signUp')
  signUp(@Body('email') email : string, @Body('password') password : string): Promise<Boolean> {
    console.log("name", email, password)
    return this.userService.signUp(email, password)
  }

  @Post('/createUser')
  createUser(@Query('email') email : string, @Query('password') password : string): Promise<Boolean> {
    console.log("name", email)
    return this.userService.createUser(email, password)
  }
  
}
