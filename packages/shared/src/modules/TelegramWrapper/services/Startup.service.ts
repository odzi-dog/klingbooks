import { Injectable, OnApplicationBootstrap } from "@nestjs/common";
import { BotInstanceService } from "./BotInstance.service";

@Injectable()
export class StartupService implements OnApplicationBootstrap {
  constructor(
    private readonly InstanceService: BotInstanceService,
  ) {}

  onApplicationBootstrap() {
    // Creating new telegram instance
    this.InstanceService.start();
  };
};