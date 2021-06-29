import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, MongoRepository } from 'typeorm';
import { User } from '../entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: MongoRepository<User>,
  ) {}

  all(): Promise<User[]> {
    return this.usersRepository.find();
  }

  add(user: Partial<User>): Promise<User> {
    return this.usersRepository.save(new User(user));
  }

  remove(userId: string): Promise<DeleteResult> {
    return this.usersRepository.delete(userId);
  }
}
