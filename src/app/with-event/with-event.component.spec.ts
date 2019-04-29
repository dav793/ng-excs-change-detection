import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WithEventComponent } from './with-event.component';

describe('WithEventComponent', () => {
  let component: WithEventComponent;
  let fixture: ComponentFixture<WithEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WithEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WithEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
