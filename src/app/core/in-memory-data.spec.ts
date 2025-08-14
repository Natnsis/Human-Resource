import { TestBed } from '@angular/core/testing';

import { InMemoryData } from './in-memory-data';

describe('InMemoryData', () => {
  let service: InMemoryData;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InMemoryData);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
