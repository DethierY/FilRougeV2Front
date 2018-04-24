import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VictimesComponent } from './victimes.component';

describe('VictimesComponent', () => {
  let component: VictimesComponent;
  let fixture: ComponentFixture<VictimesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VictimesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VictimesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
