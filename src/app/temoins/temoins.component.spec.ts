import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemoinsComponent } from './temoins.component';

describe('TemoinsComponent', () => {
  let component: TemoinsComponent;
  let fixture: ComponentFixture<TemoinsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemoinsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemoinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
