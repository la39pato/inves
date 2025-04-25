import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DB_DATABASE, DB_HOST, DB_PASSWORD, DB_PORT, DB_USERNAME } from './config/constants';
import { UsuarioModule } from './usuario/usuario.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env'],
    }),
    TypeOrmModule.forRootAsync({
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get<string>(DB_HOST),
        port: configService.get<number>(DB_PORT),
        username: configService.get<string>(DB_USERNAME),
        password: configService.get<string>(DB_PASSWORD),
        database: configService.get<string>(DB_DATABASE),
        entities: [],
        synchronize: true,
      }),
    }),
    UsuarioModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
