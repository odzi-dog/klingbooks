import { Module } from '@nestjs/common';
import { TestCommand } from './TestCommand';

@Module({
  providers: [TestCommand]
})
export class TestCommandModule {};