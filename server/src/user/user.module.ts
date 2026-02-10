import { Module } from '@nestjs/common';
import { AppController } from '../app.controller';
import {  } from '../app.service';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserSchema } from './user.schema';

@Module({
  imports: [TypeOrmModule.forFeature([UserSchema])],
  providers: [UserService],
  controllers: [UserController],
  exports: []
})
export class UserModule {}
