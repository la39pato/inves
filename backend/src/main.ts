import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SERVER_PORT } from './config/constants';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const port = configService.get(SERVER_PORT);
  app.enableCors({
    origin: 'http://localhost:4200', // Angular local
    methods: 'GET,POST,PUT,DELETE',
    credentials: true,
  });
  await app.listen(port);
}
bootstrap();