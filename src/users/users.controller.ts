import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { Photo } from 'src/photo/entities/photo.entity';

@Injectable()
@Controller('users')
export class UsersController {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    private photoRepository: Repository<Photo>,
  ) {}

  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  findOne(id: number): Promise<User | null> {
    return this.userRepository.findOneBy({ id });
  }

  async removeUser(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }
}
