import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AffaireDetailComponent } from './affaire-detail.component';

describe('AffaireDetailComponent', () => {
  let component: AffaireDetailComponent;
  let fixture: ComponentFixture<AffaireDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AffaireDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AffaireDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
