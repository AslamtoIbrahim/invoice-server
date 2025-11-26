import { Module } from '@nestjs/common';
import { BillfromService } from './billfrom.service.js';
import { BillfromController } from './billfrom.controller.js';

@Module({
  controllers: [BillfromController],
  providers: [BillfromService],
})
export class BillfromModule {}
