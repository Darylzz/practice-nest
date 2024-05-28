import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Photo } from './entities/photo.entity';
import { User } from 'src/users/entities/user.entity';

@Injectable()
@Controller('photo')
export class PhotoController {
  constructor(
    @InjectRepository(Photo) private photoRepository: Repository<Photo>,
    private userRepository: Repository<User>,
  ) {}

  getPhotoUser(id: number) {
    const userId = this.userRepository.findOneBy({ id: id });
    console.log(userId);
    // return this.photoRepository.findOneBy({userId: userId})
  }
}
