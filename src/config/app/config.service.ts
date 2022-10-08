import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AppEnv } from '@shared/shared.type';

/**
 * Service dealing with app config based operations.
 *
 * @class
 */
@Injectable()
export class AppConfigService {
  constructor(private configService: ConfigService) {}

  get name(): string {
    return this.configService.get<string>('app.name') as string;
  }

  get env(): AppEnv {
    return this.configService.get<AppEnv>('app.env') as AppEnv;
  }

  get url(): string {
    return this.configService.get<string>('app.url') as string;
  }

  get port(): number {
    return Number(this.configService.get<number>('app.port')) as number;
  }
}
