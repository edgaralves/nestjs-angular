import {
  Body,
  Controller,
  Get,
  Header,
  Inject,
  Logger,
  Post,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { User } from '../../commons/interfaces/users.interface';

@Controller('users')
export class UsersController {
  private logger: Logger = new Logger(UsersController.name);

  constructor(@Inject('USERS_SERVICE') private client: ClientProxy) {}

  @Get()
  @Header('Content-Type', 'application/json')
  all(): Observable<User[]> {
    this.logger.log('Users#all.call');

    return this.client.send('all', {});
  }

  @Post()
  @Header('Content-Type', 'application/json')
  add(@Body() user: Partial<User>): Observable<User> {
    this.logger.log('Users#add.call');

    return this.client.send('add', user);
  }
}