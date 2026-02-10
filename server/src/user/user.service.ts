import { Injectable } from '@nestjs/common';
import { AnyARecord } from 'dns';
import { User } from '../interfaces/interfaces';
import { stringify } from 'querystring';
import axios from 'axios';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './user.entity.js';
import { MongoRepository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(  @InjectRepository(UserEntity)
                private userRepository: MongoRepository<UserEntity> ) {}
  

  /*async onModuleInit() {
    try {
      console.log("onModuleInit STARTED")
      await this.productRepository.createCollectionIndex({
        name: 'text',
        shortDescription: 'text',
        longDescription: 'text'
      });
    }
    catch(e) {
      console.log("e", e)
      return e
    }    
  }*/

  async findAll(): Promise<User[]> {
    try {
      console.log("Found following products:", this.userRepository)
      return this.userRepository.find()
    }
    catch(e) {
      console.log("e", e)
      return e
    }    
  }

  async signUp(email : string, password : string): Promise<Boolean> {
    let user : User = {
      "email" : email,
      "password" : password
    }    

    return true
  }
  async createUser(email : string, password : string): Promise<Boolean> {
    let user : User = {
      "email" : email,
      "password" : password
    }
    return true
  }
}
  
