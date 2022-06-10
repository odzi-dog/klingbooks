import { Injectable } from '@nestjs/common';
import { OnBotCommand } from '@shared/modules/TelegramWrapper/types/actions/OnBotCommand';
import { Context } from 'grammy';

@Injectable()
export class TestCommand extends OnBotCommand {
  public class = TestCommand;

  async onBotCommand(ctx: Context) {
    ctx.reply('Hello there!');
  };
};