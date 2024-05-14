import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonComebackComponent } from './button-comeback.component';

describe('ButtonComebackComponent', () => {
  let component: ButtonComebackComponent;
  let fixture: ComponentFixture<ButtonComebackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonComebackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonComebackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
