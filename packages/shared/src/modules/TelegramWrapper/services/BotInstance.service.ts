import { Inject, Injectable, Logger } from "@nestjs/common";
import { Bot } from 'grammy';
import { OnBotCommand } from "../types/actions/OnBotCommand";
import { MODULE_CONFIG_PROVIDER } from "../types/constants";
import { IModuleOptions } from "../types/interfaces";

@Injectable()
export class BotInstanceService {
  private instance: Bot;
  private commands: OnBotCommand[] = [];

  private logger = new Logger(BotInstanceService.name);

  constructor(
    @Inject(MODULE_CONFIG_PROVIDER)
    private readonly options: IModuleOptions,
  ) {
    this.instance = new Bot(this.options.token);

    this.instance.api.setChatMenuButton({
      menu_button: {
        type: 'web_app',
        text: 'Hello there!',
        web_app: {
          url: 'https://google.com/'
        }
      }
    });

    // Creating bot listeners
    this.instance.on('message', async (ctx) => {
      if (ctx.update?.message?.text) {
        // Finding command with this pattern
        const command = ctx.update?.message?.text.replace('/', '');
        const instances = this.commands.filter((x) => x.pattern.test(command));

        // Checking if instance of this command even exists
        if (instances.length <= 0) return;

        // Running this command in
        // a sandbox to catch all errors
        instances.forEach((instance) => {
          instance.onBotCommand(ctx)
          .catch(async (error: any) => {
            // Handle error
            this.logger.error('Command sandbox error');
            console.error(error);
          });
        });
      };
    });
  };

  // 
  public start() {
    this.instance?.start();
  };

  public addCommand(command: OnBotCommand) {
    this.commands.push(command);
  };
};