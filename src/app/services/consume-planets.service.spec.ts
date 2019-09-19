import { TestBed } from '@angular/core/testing';

import { ConsumePlanetsService } from './consume-planets.service';

describe('ConsumePlanetsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConsumePlanetsService = TestBed.get(ConsumePlanetsService);
    expect(service).toBeTruthy();
  });
});
