import {
  Body,
  Controller,
  Delete,
  Get,
  Header,
  Inject,
  Logger,
  Param,
  Post,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { ApiBody } from '@nestjs/swagger';
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
  @ApiBody({ type: User })
  @Header('Content-Type', 'application/json')
  create(@Body() user: Partial<User>): Observable<User> {
    this.logger.log('Users#create.call');

    return this.client.send('create', user);
  }

  @Delete(':id')
  @Header('Content-Type', 'application/json')
  delete(@Param('id') userId: string): Observable<boolean> {
    this.logger.log('Users#delete.call');

    return this.client.send('delete', userId);
  }
}
