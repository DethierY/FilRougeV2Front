import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VictimeAjoutComponent } from './victime-ajout.component';

describe('VictimeAjoutComponent', () => {
  let component: VictimeAjoutComponent;
  let fixture: ComponentFixture<VictimeAjoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VictimeAjoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VictimeAjoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
