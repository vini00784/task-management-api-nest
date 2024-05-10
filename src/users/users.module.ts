import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService], // Quando outro módulo importar o módulo de usuário, ele vai ter acesso ao UsersService
})
export class UsersModule {}
