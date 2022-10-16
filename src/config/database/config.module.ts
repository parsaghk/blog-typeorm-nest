import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import Configuration from '@config/database/configuration';
import { DatabaseConfigService } from '@config/database/config.service';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const Joi = require('joi');

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [Configuration],
      expandVariables: true,
      validationSchema: Joi.object({
        DB_HOST: Joi.string().required(),
        DB_PORT: Joi.number().required(),
        DB_USERNAME: Joi.string().required(),
        DB_PASSWORD: Joi.string().required(),
        DB_NAME: Joi.string().required(),
      }),
    }),
  ],
  providers: [ConfigService, DatabaseConfigService],
  exports: [ConfigService, DatabaseConfigService],
})
export class DatabaseConfigModule {}
