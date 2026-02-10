import { HttpCode, Header, Controller, Get, Query, Req, Post, Body, Param, Res,HttpStatus  } from '@nestjs/common';
import { AppService } from './app.service';
import { User } from './interfaces/interfaces';
import type { Response, Request } from 'express';
import axios from 'axios';

@Controller('')
export class AppController {  
  constructor(private readonly appService: AppService) {}
  
  @Get('/')
  @Header('Content-type', 'application/json')
  async findAll(@Req() req : Request): Promise<any> {
    try {
      console.log("request")
      //return this.appService.getFreshVegetables()
    }
    catch(e) {
      return e
    }
  }
}