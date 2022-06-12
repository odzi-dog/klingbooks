import { Module } from "@nestjs/common";
import { TelegramWrapperModule } from "@bot"

import * as Modules from '../';

@Module({
  imports: [
    TelegramWrapperModule.register({
      token: "5395989861:AAFNtama04oOxwwEn_9CdSw00KRAayqMYz4",
    }),

    ...Object.values(Modules)
  ]
})
export class ApplicationModule {};