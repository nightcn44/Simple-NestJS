import { UserDto } from './dto/user.dto';
import { UsersService } from './users.service';
import { Body, Controller, Post } from '@nestjs/common';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post('register')
  register(@Body() createUserDto: UserDto) {
    return this.usersService.create(createUserDto);
  }
}
