import { TestBed } from '@angular/core/testing';

import { ConsumeCharactersService } from './consume-characters.service';

describe('ConsumeCharactersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConsumeCharactersService = TestBed.get(ConsumeCharactersService);
    expect(service).toBeTruthy();
  });
});
