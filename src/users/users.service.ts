import { Injectable } from '@nestjs/common';
import { UserDto } from './user.dto';
import { randomUUID } from 'node:crypto';
import { hashSync as bcryptHashSync } from 'bcrypt';

@Injectable()
export class UsersService {
    private readonly users: UserDto[] = []

    createUser(newUser: UserDto) {
        newUser.id = randomUUID();
        newUser.password = bcryptHashSync(newUser.password, 10);
        this.users.push(newUser);
    }

    findByUsername(username: string): UserDto | null {
        return this.users.find(user => user.username === username);
    }
}
