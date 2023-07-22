/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';

import { UserModule } from './user/user.module';
import {TypeOrmModule} from '@nestjs/typeorm';
import { User } from './user/entities/user.entity';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '123456',
      database: 'my_local_database',
      entities: [User],
      synchronize: true,
    }),
    UserModule,
  ],
 
})
export class AppModule {}
