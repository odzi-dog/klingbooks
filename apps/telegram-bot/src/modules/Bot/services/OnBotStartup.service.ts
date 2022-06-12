import { Injectable } from '@nestjs/common';
import { OnBotStartup } from '@bot';
import { Bot } from 'grammy';

@Injectable()
export class BotStartup extends OnBotStartup {
  public class = BotStartup;

  public onBotStartup(bot: Bot) {
    console.log('bot startup');
    bot.api.setChatMenuButton({
      menu_button: {
        text: "Hello",
        type: "web_app",
        web_app: {
          url: "https://268d-87-244-175-17.eu.ngrok.io/",
        }
      }
    });
  };
};