import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WithInputComponent } from './with-input.component';

describe('WithInputComponent', () => {
  let component: WithInputComponent;
  let fixture: ComponentFixture<WithInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WithInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WithInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
