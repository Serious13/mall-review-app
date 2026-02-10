import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { UserEntity } from './user/user.entity';

console.log("process.env.MONGO_CONN_URL", process.env.HOST)
@Module({
  imports: [
      ConfigModule.forRoot({ isGlobal: true,  envFilePath: ".env" }),
      TypeOrmModule.forRoot({
        type: 'mongodb',
        url: process.env.HOST,
        database: 'mall',
        entities: [UserEntity],
        synchronize: true
      }), 
      UserModule
  ],
  controllers :[],
  providers: [],
  exports: []
})
export class AppModule {}
