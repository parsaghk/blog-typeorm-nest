import configuration from '@config/app/configuration';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { AppConfigService } from '@config/app/config.service';
import { AppEnv } from '@shared/shared.type';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const Joi = require('joi');

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      expandVariables: true,
      validationSchema: Joi.object({
        APP_NAME: Joi.string().default('MyApp'),
        APP_ENV: Joi.string()
          .valid(...Object.values(AppEnv))
          .default(AppEnv.DEVELOPMENT),
        APP_URL: Joi.string().required(),
        APP_PORT: Joi.number().default(9000),
      }),
    }),
  ],
  providers: [ConfigService, AppConfigService],
  exports: [ConfigService, AppConfigService],
})
export class AppConfigModule {}
