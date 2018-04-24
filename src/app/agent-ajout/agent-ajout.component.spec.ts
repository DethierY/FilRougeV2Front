import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentAjoutComponent } from './agent-ajout.component';

describe('AgentAjoutComponent', () => {
  let component: AgentAjoutComponent;
  let fixture: ComponentFixture<AgentAjoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgentAjoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentAjoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
