import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvanceCalculatorComponent } from './advance-calculator.component';

describe('AdvanceCalculatorComponent', () => {
  let component: AdvanceCalculatorComponent;
  let fixture: ComponentFixture<AdvanceCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvanceCalculatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvanceCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
