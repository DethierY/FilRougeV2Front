import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemoinDetailComponent } from './temoin-detail.component';

describe('TemoinDetailComponent', () => {
  let component: TemoinDetailComponent;
  let fixture: ComponentFixture<TemoinDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemoinDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemoinDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
