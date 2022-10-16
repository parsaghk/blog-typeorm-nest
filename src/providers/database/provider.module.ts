import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseConfigModule } from '@config/database/config.module';
import { DatabaseConfigService } from '@config/database/config.service';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [DatabaseConfigModule],
      inject: [DatabaseConfigService],
      useFactory: async (databaseConfigService: DatabaseConfigService) => ({
        type: 'postgres',
        host: databaseConfigService.host,
        port: databaseConfigService.port,
        username: databaseConfigService.username,
        password: databaseConfigService.password,
        database: databaseConfigService.name,
        synchronize: true,
        autoLoadEntities: true,
        entities: [`${process.cwd()}/dist/src/models/**/entities/*.entity.js`],
      }),
    }),
  ],
})
export class DatabaseProviderModule {}
