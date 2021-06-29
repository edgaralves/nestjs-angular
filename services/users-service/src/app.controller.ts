import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { DeleteResult } from 'typeorm';
import { User } from './entities/user.entity';
import { UserService } from './services/user.service';

@Controller()
export class AppController {
  constructor(private readonly userService: UserService) {}

  @MessagePattern('all')
  async all(): Promise<User[]> {
    return this.userService.all();
  }

  @MessagePattern('add')
  async add(user: Partial<User>): Promise<User> {
    return this.userService.add(user);
  }

  @MessagePattern('remove')
  async remove(userId: string): Promise<DeleteResult> {
    return this.userService.remove(userId);
  }
}
