import { Test, TestingModule } from '@nestjs/testing';
import { StatusesHistoryResolver } from './statuses-history.resolver';
import { StatusesHistoryService } from './statuses-history.service';

describe('StatusesHistoryResolver', () => {
  let resolver: StatusesHistoryResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StatusesHistoryResolver, StatusesHistoryService],
    }).compile();

    resolver = module.get<StatusesHistoryResolver>(StatusesHistoryResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
