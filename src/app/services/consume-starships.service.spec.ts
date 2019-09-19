import { TestBed } from '@angular/core/testing';

import { ConsumeStarshipsService } from './consume-starships.service';

describe('ConsumeStarshipsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConsumeStarshipsService = TestBed.get(ConsumeStarshipsService);
    expect(service).toBeTruthy();
  });
});
