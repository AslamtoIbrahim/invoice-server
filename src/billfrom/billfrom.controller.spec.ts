import { Test, TestingModule } from '@nestjs/testing';
import { BillfromController } from './billfrom.controller';
import { BillfromService } from './billfrom.service';

describe('BillfromController', () => {
  let controller: BillfromController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BillfromController],
      providers: [BillfromService],
    }).compile();

    controller = module.get<BillfromController>(BillfromController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
