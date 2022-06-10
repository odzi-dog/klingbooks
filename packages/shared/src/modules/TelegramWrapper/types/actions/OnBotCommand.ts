import { Injectable, OnApplicationBootstrap } from "@nestjs/common";
import { ModuleRef } from "@nestjs/core";
import { BotInstanceService } from "../../services/BotInstance.service";
import { Context } from 'grammy';


@Injectable()
export class OnBotCommand implements OnApplicationBootstrap {
  constructor(
    private readonly ModuleRef: ModuleRef,
  ) {}
  
  // Adding this command to BotInstance's commands array
  onApplicationBootstrap() {
    // +todo errors
    const BotInstance = this.ModuleRef.get(BotInstanceService, { strict: false });
    if (!BotInstance) return;
  
    BotInstance.addCommand(this.ModuleRef.get(this.class));
  };

  public pattern: RegExp = /.+/;
  public class: any;

  public onBotCommand(ctx: Context);
  public async onBotCommand(ctx: Context) {};
};