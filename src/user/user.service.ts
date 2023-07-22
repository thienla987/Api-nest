/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {

  constructor(@InjectRepository(User) private readonly userRepository:Repository<User>){

  }
  create(createUserDto: CreateUserDto) : Promise<User> {
    const user : User = new User();
    user.id = createUserDto.id;
    user.title = createUserDto.title;
    user.body = createUserDto.body;
    return this.userRepository.save(user);

  }

  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  findOne(id: number) {
    return this.userRepository.findOne({ where: { id } });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    const user : User = new User();
    user.body = updateUserDto.body;
    user.title = updateUserDto.title;
    user.id = id;

    return this.userRepository.save(user);

  }

  remove(id: number) {
    return this.userRepository.delete(id);
  }
}
