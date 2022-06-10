import { Module } from "@nestjs/common";
import { TelegramWrapperModule } from "@shared/modules"

import * as Modules from '../';

@Module({
  imports: [
    TelegramWrapperModule.register({
      token: "2200749638:AAFqfmiNIbsjElETCVxF_Jf4zpe4RvWwHlA",
    }),

    ...Object.values(Modules)
  ]
})
export class ApplicationModule {};