import { Injectable } from '@nestjs/common';
import { UserDto } from './dto/user.dto

@Injectable()
export class UsersService {
  create(createUserDto: UserDto) {
    const id = Date.now().toString();
    const newUser = { id, ...createUserDto };
    this.users.push(newUser);
    return newUser;
  }
}
