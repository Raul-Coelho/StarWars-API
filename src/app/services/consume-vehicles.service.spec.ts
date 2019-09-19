import { TestBed } from '@angular/core/testing';

import { ConsumeVehiclesService } from './consume-vehicles.service';

describe('ConsumeVehiclesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConsumeVehiclesService = TestBed.get(ConsumeVehiclesService);
    expect(service).toBeTruthy();
  });
});
