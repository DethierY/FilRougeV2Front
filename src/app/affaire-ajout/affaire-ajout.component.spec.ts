import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AffaireAjoutComponent } from './affaire-ajout.component';

describe('AffaireAjoutComponent', () => {
  let component: AffaireAjoutComponent;
  let fixture: ComponentFixture<AffaireAjoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AffaireAjoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AffaireAjoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
