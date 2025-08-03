import { TestBed } from '@angular/core/testing';

import { LogTaskService } from './log-task.service';

describe('LogTaskService', () => {
  let service: LogTaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogTaskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
