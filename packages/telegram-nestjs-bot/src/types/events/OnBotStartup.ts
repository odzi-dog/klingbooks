import { Injectable, OnApplicationBootstrap } from "@nestjs/common";
import { ModuleRef } from "@nestjs/core";
import { BotInstanceService } from "../../services/BotInstance.service";
import { Bot } from 'grammy';


@Injectable()
export class OnBotStartup implements OnApplicationBootstrap {
  constructor(
    private readonly ModuleRef: ModuleRef,
  ) {}
  
  // Adding this command to BotInstance's commands array
  onApplicationBootstrap() {
    // +todo errors
    const BotInstance = this.ModuleRef.get(BotInstanceService, { strict: false });
    if (!BotInstance) return;
  
    console.log('on bot startup');
    this.onBotStartup(BotInstance.instance);
  };

  public class: any;

  public onBotStartup(bot: Bot);
  public async onBotStartup(bot: Bot) {};
};