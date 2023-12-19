import { Test, TestingModule } from '@nestjs/testing';
import { StatusesHistoryService } from './statuses-history.service';

describe('StatusesHistoryService', () => {
  let service: StatusesHistoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StatusesHistoryService],
    }).compile();

    service = module.get<StatusesHistoryService>(StatusesHistoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
