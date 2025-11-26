import { Test, TestingModule } from '@nestjs/testing';
import { BillfromService } from './billfrom.service';

describe('BillfromService', () => {
  let service: BillfromService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BillfromService],
    }).compile();

    service = module.get<BillfromService>(BillfromService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
