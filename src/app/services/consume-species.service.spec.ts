import { TestBed } from '@angular/core/testing';

import { ConsumeSpeciesService } from './consume-species.service';

describe('ConsumeSpeciesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConsumeSpeciesService = TestBed.get(ConsumeSpeciesService);
    expect(service).toBeTruthy();
  });
});
