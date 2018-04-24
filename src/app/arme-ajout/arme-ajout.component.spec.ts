import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArmeAjoutComponent } from './arme-ajout.component';

describe('ArmeAjoutComponent', () => {
  let component: ArmeAjoutComponent;
  let fixture: ComponentFixture<ArmeAjoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArmeAjoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArmeAjoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
