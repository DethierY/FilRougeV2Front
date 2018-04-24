import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemoinAjoutComponent } from './temoin-ajout.component';

describe('TemoinAjoutComponent', () => {
  let component: TemoinAjoutComponent;
  let fixture: ComponentFixture<TemoinAjoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemoinAjoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemoinAjoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
