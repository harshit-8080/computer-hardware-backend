import { Test, TestingModule } from '@nestjs/testing';
import { PowersupplyService } from './powersupply.service';

describe('PowersupplyService', () => {
  let service: PowersupplyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PowersupplyService],
    }).compile();

    service = module.get<PowersupplyService>(PowersupplyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
