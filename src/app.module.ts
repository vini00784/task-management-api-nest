import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskModule } from './task/task.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ // O "forRoot" é usado para configurar o módulo de configuração
      isGlobal: true // O "isGlobal" indica que as configurações definidas pelo "ConfigModule" devem ser globais, o que significa que elas podem ser acessadas de qualquer lugar no aplicativo. Isso é útil para configurações que são compartilhadas por vários módulos ou serviços em um aplicativo NestJS
    }),
    TaskModule, UsersModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
