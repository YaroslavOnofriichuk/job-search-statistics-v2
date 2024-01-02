import { Injectable, Logger } from '@nestjs/common';
import { Interval } from '@nestjs/schedule';

@Injectable()
export class TasksService {
  private readonly logger = new Logger(TasksService.name);

  @Interval(1000 * 60 * 5)
  handleInterval() {
    this.logger.debug('I am alive');
  }
}