import { TestBed, inject } from '@angular/core/testing';

import { VictimeService } from './victime.service';

describe('VictimeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VictimeService]
    });
  });

  it('should be created', inject([VictimeService], (service: VictimeService) => {
    expect(service).toBeTruthy();
  }));
});
