import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppConfigService } from '@config/app/config.service';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const appConfig = app.get(AppConfigService);
  Logger.log(`Server is running on ${appConfig.url}`, 'Information');
  await app.listen(appConfig.port);
}

bootstrap();
