import { TestBed, inject } from '@angular/core/testing';

import { TemoinService } from './temoin.service';

describe('TemoinService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TemoinService]
    });
  });

  it('should be created', inject([TemoinService], (service: TemoinService) => {
    expect(service).toBeTruthy();
  }));
});
