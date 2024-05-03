import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config'; // O Config Service é como você deve acessar o .env usando o Nest, a utilização dele está mais abaixo
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [
    JwtModule.registerAsync({ // O "registerAsync" é um método estático que permite registrar o módulo de forma assíncrona.
      global: true,
      useFactory: async (configService: ConfigService) => ({ // O "useFactory" é uma função que retorna os parâmetros de config para o módulo JWT
        secret: configService.get<string>('JWT_SECRET'),
        signOptions: {expiresIn: +configService.get<number>('JWT_EXPIRATION_TIME')}
      }),
      inject: [ConfigService] // O "inject" especifica as dependências que devem ser injetadas na função "useFactory". No caso, o "ConfigService" é injetado, o que permite que função "useFactory" a utilize para obter as configurações necessárias
    }),
    UsersModule
  ],
  providers: [AuthService],
  controllers: [AuthController]
})
export class AuthModule {}
