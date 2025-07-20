import {
  Controller,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { AppService } from './app.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Role, UserModel } from './entities/user.entity';
import { Repository } from 'typeorm';
import { ProfileModel } from './entities/profile_entity';

@Controller()
export class AppController {
  constructor(
    @InjectRepository(UserModel)
    private readonly userRepository: Repository<UserModel>,
    @InjectRepository(ProfileModel)
    private readonly profileRepository: Repository<ProfileModel>,
  ) {}

  @Post('users')
  postUser() {
    return this.userRepository.save({
      role: Role.ADMIN,
    });
  }

  @Get('users')
  async getUsers() {
    return this.userRepository.find({
      relations: {
        profile: true,
      },
    });
  }

  @Patch('users/:id')
  async patchUser(@Param('id') id: string) {
    const user = await this.userRepository.findOne({ where: { id } });
    if (!user) {
      throw new NotFoundException('User not found');
    }

    // user.title = 'updated title';
    return this.userRepository.save(user);
  }

  @Post('user/profile')
  async createUserAndProfile() {
    const user = await this.userRepository.save({
      email: 'songsee0528@gmail.com',
    });

    const profile = await this.profileRepository.save({
      profileImg: 'https://example.com/profile.jpg',
      user: user,
    });

    return user;
  }
}
