import { TestBed, inject } from '@angular/core/testing';

import { AffaireService } from './affaire.service';

describe('AffaireService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AffaireService]
    });
  });

  it('should be created', inject([AffaireService], (service: AffaireService) => {
    expect(service).toBeTruthy();
  }));
});
