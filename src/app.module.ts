import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppConfigModule } from '@config/app/config.module';
import { DatabaseConfigModule } from '@config/database/config.module';

@Module({
  imports: [AppConfigModule, DatabaseConfigModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
