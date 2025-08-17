import { TestBed } from '@angular/core/testing';

import { ApplyingService } from './applying.service';

describe('ApplyingService', () => {
  let service: ApplyingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApplyingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
