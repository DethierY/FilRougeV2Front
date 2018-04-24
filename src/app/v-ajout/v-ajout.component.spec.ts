import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VAjoutComponent } from './v-ajout.component';

describe('VAjoutComponent', () => {
  let component: VAjoutComponent;
  let fixture: ComponentFixture<VAjoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VAjoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VAjoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
