import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuspectAjoutComponent } from './suspect-ajout.component';

describe('SuspectAjoutComponent', () => {
  let component: SuspectAjoutComponent;
  let fixture: ComponentFixture<SuspectAjoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuspectAjoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuspectAjoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
