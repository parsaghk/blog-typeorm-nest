import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppConfigModule } from '@config/app/config.module';
import { DatabaseConfigModule } from '@config/database/config.module';
import { DatabaseProviderModule } from './providers/database/provider.module';

@Module({
  imports: [AppConfigModule, DatabaseConfigModule, DatabaseProviderModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
