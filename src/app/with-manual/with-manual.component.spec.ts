import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WithManualComponent } from './with-manual.component';

describe('WithManualComponent', () => {
  let component: WithManualComponent;
  let fixture: ComponentFixture<WithManualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WithManualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WithManualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
