import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

/**
 * Service dealing with app config based operations.
 *
 * @class
 */
@Injectable()
export class DatabaseConfigService {
  constructor(private configService: ConfigService) {}

  get host(): string {
    return this.configService.get<string>('database.host') as string;
  }

  get port(): number {
    return this.configService.get<number>('database.port') as number;
  }

  get username(): string {
    return this.configService.get<string>('database.username') as string;
  }

  get password(): string {
    return this.configService.get<string>('database.password') as string;
  }

  get name(): string {
    return this.configService.get<string>('database.name') as string;
  }
}
