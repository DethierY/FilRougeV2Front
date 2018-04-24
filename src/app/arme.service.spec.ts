import { TestBed, inject } from '@angular/core/testing';

import { ArmeService } from './arme.service';

describe('ArmeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ArmeService]
    });
  });

  it('should be created', inject([ArmeService], (service: ArmeService) => {
    expect(service).toBeTruthy();
  }));
});
