import { DynamicModule, Global, Module } from '@nestjs/common';
import { IModuleOptions } from './types/interfaces';
import { MODULE_CONFIG_PROVIDER } from './types/constants/Providers.const';

import * as Services from './services';

@Global()
@Module({})
export class TelegramWrapperModule {
  static register(options: IModuleOptions): DynamicModule {
    return {
      module: TelegramWrapperModule,
      providers: [
        {
          provide: MODULE_CONFIG_PROVIDER,
          useValue: options,
        },

        ...Object.values(Services),
      ],
      exports: [...Object.values(Services)]
    }
  };
};